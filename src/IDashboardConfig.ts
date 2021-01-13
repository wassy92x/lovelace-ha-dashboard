import {ActionConfig, LovelaceCardConfig} from 'custom-card-helpers';

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

export interface IDashboardStyleConfig {
    primary_text_color?: string;
    secondary_text_color?: string;
}

export interface IButtonConfig {
    label?: string;
    icon?: string;
    expanded?: boolean;
    action?: ActionConfig;
}

export interface ISidebarConfig {
    style?: ISidebarStyleConfig;
    stickyCards?: LovelaceCardConfig[];
    cards: LovelaceCardConfig[];
    buttons?: IButtonConfig[];
}

export interface IDashboardConfig {
    style: IDashboardStyleConfig;
    sidebar: ISidebarConfig;
    cards: LovelaceCardConfig[];
}