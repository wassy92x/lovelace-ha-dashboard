import {ActionConfig, LovelaceCardConfig, LovelaceViewConfig} from 'custom-card-helpers';
import {StyleInfo} from 'lit-html/directives/style-map';

export interface ISidebarStyleConfig {
    min_width?: string;
    max_width?: string;
    show_at_min_width?: string;
    background?: string;
    overlay_background?: string;
    overlay_width?: string;
    primary_text_color?: string;
    secondary_text_color?: string;
}

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
