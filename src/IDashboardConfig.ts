import {ActionConfig, LovelaceCardConfig, LovelaceViewConfig} from 'custom-card-helpers';
import {StyleInfo} from 'lit-html/directives/style-map';

export interface IButtonConfig {
    label?: string;
    icon: string;
    action?: ActionConfig;
}

export interface ISidebarConfig {
    styles?: StyleInfo;
    stickyCards?: LovelaceCardConfig[];
    cards: LovelaceCardConfig[];
    buttons?: IButtonConfig[];
}

export interface IDashboardConfig extends Omit<LovelaceViewConfig, 'panel'> {
    styles?: StyleInfo;
    sidebar?: ISidebarConfig;
    usePanel?: boolean;
}
