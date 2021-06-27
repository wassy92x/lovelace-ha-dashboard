import {ActionConfig, LovelaceCardConfig, LovelaceViewConfig} from 'custom-card-helpers';

export interface IButtonConfig {
    label?: string;
    icon: string;
    action?: ActionConfig;
}

export interface ISidebarConfig {
    stickyCards?: LovelaceCardConfig[];
    cards: LovelaceCardConfig[];
    buttons?: IButtonConfig[];
    screenMinWidth?: number;
}

export interface IDashboardConfig extends Omit<LovelaceViewConfig, 'panel'> {
    sidebar?: ISidebarConfig;
    usePanel?: boolean;
}
