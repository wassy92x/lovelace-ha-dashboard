/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  LitElement,
  html,
  customElement,
  property,
  CSSResult,
  TemplateResult,
  css,
  PropertyValues,
  internalProperty,
} from 'lit-element';
import {
  HomeAssistant,
  LovelaceCardEditor, LovelaceCardConfig, getLovelace, LovelaceCard
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types

import {createCard} from 'card-tools/src/lovelace-element';

import { CARD_VERSION } from './const';
import { localize } from './localize/localize';
import { IDashboardConfig } from './IDashboardConfig';

/* eslint no-console: 0 */
console.info(
  `%c  HA-Dashboard \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'ha-dashboard',
  name: 'Home Assistant Dashboard',
  description: 'A custom dashboard with sidebar',
});

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

@customElement('ha-dashboard')
export class HADashboard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  protected _lovelace: any;
  @property() protected _cards?: LovelaceCard[];
  @property() protected _sidebarCard?: LovelaceCard;
  @property() protected _stickySidebarCard?: LovelaceCard;
  @property() protected _sidebarStyle?: string[];
  @property() protected _dashboardStyle?: string[];
  @internalProperty() protected _config!: IDashboardConfig;

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    // TODO: Create proper editor. This is just a walkaround.
    const stackCard = createCard({
      type: 'vertical-stack',
      cards: []
    });
    return stackCard.constructor.getConfigElement();
  }

  public static getStubConfig(): DeepPartial<IDashboardConfig> {
    return {
      cards: []
    };
  }

  public setConfig(config: IDashboardConfig): void {
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    this._config = config;
    this._cards = config.cards?.map((card: LovelaceCardConfig) => this._createCardElement(card)) ?? [];
    const stickySidebarCard = createCard({
      type: 'vertical-stack',
      cards: config.sidebar?.stickyCards ?? []
    });
    stickySidebarCard.hass = this.hass;
    stickySidebarCard.className = 'sticky-cards';
    this._stickySidebarCard = stickySidebarCard;

    const sidebarCard = createCard({
      type: 'vertical-stack',
      cards: config.sidebar?.cards ?? []
    });
    sidebarCard.hass = this.hass;
    sidebarCard.className = 'scroll-panel';
    this._sidebarCard = sidebarCard;

    this._dashboardStyle = Object.entries(this._config.style ?? {})
        .map(([key, val]) => `--${key.replace(/_/g, '-')}: ${val} !important;`);

    this._sidebarStyle = Object.entries(this._config.sidebar?.style ?? {})
        .map(([key, val]) => `--sidebar_${key.replace(/_/g, '-')}: ${val} !important;`);
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this._config)
      return false;

    return changedProps.has('_config') || changedProps.has('hass') || changedProps.has('_sidebarStyle') || changedProps.has('_dashboardStyle') || changedProps.has('_sidebarCard');
  }

  public connectedCallback(): void {
    super.connectedCallback();
    this._lovelace = new Proxy(getLovelace(), {
      get(target: any, p: PropertyKey): any {
        if (p === 'editMode')
          return false;
        return target[p];
      }
    });
  }

  protected updated(changedProps: PropertyValues): void {
    super.updated(changedProps);

    if (!changedProps.has('hass'))
      return;

    if (this._cards) {
      for (const element of this._cards) {
        if (this.hass)
          element.hass = this.hass;
      }
    }

    if (this._sidebarCard)
      this._sidebarCard.hass = this.hass;

    if (this._stickySidebarCard)
      this._stickySidebarCard.hass = this.hass;
  }

  private _createCardElement(cardConfig: LovelaceCardConfig): LovelaceCard {
    const element = createCard(cardConfig) as LovelaceCard;
    if (this.hass)
      element.hass = this.hass;

    element.addEventListener(
        "ll-rebuild",
        (ev) => {
          ev.stopPropagation();
          this._rebuildCard(element, cardConfig);
        },
        { once: true }
    );
    return element;
  }

  private _rebuildCard(cardElToReplace: LovelaceCard, config: LovelaceCardConfig): void {
    const newCardEl = this._createCardElement(config);
    if (cardElToReplace.parentElement)
      cardElToReplace.parentElement.replaceChild(newCardEl, cardElToReplace);

    this._cards = this._cards?.map((curCardEl: LovelaceCard) =>
        curCardEl === cardElToReplace ? newCardEl : curCardEl
    ) ?? [];
  }

  public toggleSidebar(): void {
    const sidebar = this.shadowRoot?.querySelector('.sidebar');
    if (!sidebar)
      return;

    if (sidebar.classList.contains('show'))
      sidebar.classList.remove('show');
    else
      sidebar.classList.add('show');
  }

  protected render(): TemplateResult | void {
    return html`
      <style>
        :host {
          ${this._dashboardStyle}
          ${this._sidebarStyle}
        }

        @media (max-width: ${this._config.sidebar?.style?.show_at_min_width ?? '1024px'}) {
          .sidebar {
            display: none !important;
          }

          .sidebar.show {
            display: flex !important;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1000;
            background: var(--sidebar_overlay-background, var(--sidebar_background, var(--ha-card-background, var(--card-background-color, transparent))));
            width: var(--sidebar_overlay-width, var(--sidebar_max-width, 500px));
          }
        }
      </style>
      
      <div class="dashboard">
        <ha-card class="sidebar">
          ${this._stickySidebarCard}
          ${this._sidebarCard}
          <div class="sidebar-buttons">
            <button>Test</button>
          </div>
        </ha-card>
        <div class="content-wrapper scroll-panel">
          <hui-masonry-view
            .hass=${this.hass}
            .narrow=${false}
            .lovelace=${this._lovelace}
            .cards=${this._cards}>
          </hui-masonry-view>
        </div>
      </div>
    `;
  }

  static get styles(): CSSResult {
    return css`
      :host {
        --sidebar_primary-text-color: var(--primary-text-color, black);
        --sidebar_secondary-text-color: var(--secondary-text-color, black);
        --sidebar_background: var(--ha-card-background, var(--card-background-color, white));
      }
      
      .dashboard {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100vh;
        max-height: calc(100vh - var(--header-height));
        overflow: hidden;
      }
      
      .sidebar {
        position: relative;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 20%;
        overflow: hidden;
        min-width: var(--sidebar_min-width, 300px);
        max-width: var(--sidebar_max-width, 500px);
        background: var(--sidebar_background);
        margin: 7px 0;
        min-height: calc(100% - 14px);
        display: flex;
        flex-direction: column;
        --primary-text-color: var(--sidebar_primary-text-color, black);
        --secondary-text-color: var(--sidebar_secondary-text-color, black);
      }
      
      .sidebar > hui-vertical-stack-card {
        --ha-card-background: transparent;
        --ha-card-box-shadow: none;
        flex-grow: 1;
        flex-shrink: 1;
      }
      
      .sidebar .sticky-cards {
        flex-grow: 0;
        flex-shrink: 0;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1;
      }
      
      .sidebar .sidebar-buttons {
        flex-grow: 0;
        flex-shrink: 0;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      
      .content-wrapper {
        flex-shrink: 1;
        flex-grow: 1;
        flex-basis: 80%;
        overflow: hidden;
        height: 100%;
      }

      .scroll-panel {
        overflow-x: hidden !important;
        overflow-y: auto !important;
      }
      .scroll-panel::-webkit-scrollbar-track {
        box-shadow: inset 0 0 8px 8px transparent;
        border-left: solid 5px transparent;
      }
      .scroll-panel::-webkit-scrollbar {
        width: calc(3px + 5px);
      }
      .scroll-panel::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 8px 8px var(--scrollbar-thumb-color, var(--primary-color, rgb(3, 169, 244)));
        border-left: solid 5px transparent;
      }
    `;
  }
}
