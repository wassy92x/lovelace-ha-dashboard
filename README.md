# HA Dashboard

A custom dashboard for Home Assistant with sidebar

[![GitHub Release][releases-shield]][releases]
[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge)](https://github.com/hacs/integration)
[![License][license-shield]](LICENSE.md)

![Image of Dashboard](https://github.com/wassy92x/lovelace-ha-dashboard/blob/master/.images/ha-dashboard.png?raw=true)

## Options

| Name              | Type    | Requirement  | Description                                 | Default             |
| ----------------- | ------- | ------------ | ------------------------------------------- | ------------------- |
| type              | string  | **Required** | `custom:ha-dashboard`                       |                     |
| cards             | object[]| **Optional** | Cards to show                               |                     |
| title             | string  | **Optional** | Title to show in tab                        |                     |
| icon              | string  | **Optional** | Icon to show in tab                         |                     |
| badges            | object[]| **Optional** | Badges to show                              |                     |
| theme             | string  | **Optional** | Theme to use for view                       |                     |
| background        | string  | **Optional** | Background of view                          |                     |
| usePanel          | boolean | **Optional** | Give complete space to one card             | false               |
| sidebar           | object  | **Optional** | Configuration of sidebar                    |                     |

### Sidebar Options

| Name              | Type    | Requirement  | Description                                 | Default             |
| ----------------- | ------- | ------------ | ------------------------------------------- | ------------------- |
| cards             | object[]| **Optional** | Cards to show                               |                     |
| stickyCards       | object[]| **Optional** | Cards to show always on top (don't scroll)  |                     |
| buttons           | object[]| **Optional** | Customize style of dashboard and cards      |                     |
| screenMinWidth    | number  | **Optional** | Minimum screen width in pixel at which the sidebar will be shown | 1024                |

#### Button Options

| Name              | Type    | Requirement  | Description                                 | Default             |
| ----------------- | ------- | ------------ | ------------------------------------------- | ------------------- |
| icon              | string  | **Required** | Icon of button                              |                     |
| label             | string  | **Optional** | Label of button                             |                     |
| action            | object  | **Optional** | Action to perform on click etc.             |                     |

## Action Options

| Name            | Type   | Requirement  | Description                                                                                                                            | Default |
| --------------- | ------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| action          | string | **Required** | Action to perform (more-info, toggle, call-service, navigate url, none)                                                                |         |
| navigation_path | string | **Optional** | Path to navigate to (e.g. /lovelace/0/) when action defined as navigate                                                                |         |
| url             | string | **Optional** | URL to open on click when action is url. The URL will open in a new tab                                                                |         |
| service         | string | **Optional** | Service to call (e.g. media_player.media_play_pause) when action defined as call-service                                               |         |
| service_data    | object | **Optional** | Service data to include (e.g. entity_id: media_player.bedroom) when action defined as call-service                                     |         |
| haptic          | string | **Optional** | Haptic feedback for the [Beta IOS App](http://home-assistant.io/ios/beta) _success, warning, failure, light, medium, heavy, selection_ |         |
| repeat          | number | **Optional** | How often to repeat the `hold_action` in milliseconds.                                                                                 |         |

# Styling
The dashboard is stylable by some css variables.

| Name                     | Description                                           | Default                   |
| ------------------------ | ----------------------------------------------------- | ------------------------- |
| --sidebar-background     | Background of sidebar                                 | background color of cards |
| --sidebar-min-width      | Minimum width of sidebar                              | 300px |
| --sidebar-max-width      | Maximum width of sidebar                              | 500px |
| --sidebar-relative-width | relative width of sidebar in relation to screen width | 20% |

# Note
The sidebar is responsive and scales between `--sidebar-min-width` and `--sidebar-max-width` (default: between 300px and 500px).
If screen is smaller than the set up minimum screen width (default 1024px) the sidebar will be hidden (for example on the most mobile phones)

# Setup
HA-Dashboard isn't a card.
It has to be used as a type for one complete page / view.
If you look at the example, the key `views` has to be on the main level of your lovelace-yaml.
Unfortunatelly it can't be setup with the help of the ui (the cards inside the dashboard can be setup with the help of the ui).
Instead you have to setup it over the yaml configuration.

![Setup as view](https://github.com/wassy92x/lovelace-ha-dashboard/blob/master/.images/setup.gif?raw=true)

# Example
```
views:
  - title: Kiosk
    path: kiosk
    background: center / cover no-repeat url("/local/img/background.png") fixed
    type: 'custom:ha-dashboard'
    badges:
      - entity: person.fabian
    sidebar:
      buttons:
        - icon: mdi:information
          action:
            action: call-service
            service: myservice.action
      stickyCards:
        - type: custom:digital-clock
      cards:
        - type: weather-forecast
          entity: weather.frankfurt_openweathermap
    cards:
      - type: entities
        entities:
         - climate.wohnzimmer
        title: Wohnzimmer
```

[license-shield]: https://img.shields.io/github/license/wassy92x/lovelace-ha-dashboard.svg?style=for-the-badge
[releases-shield]: https://img.shields.io/github/release/wassy92x/lovelace-ha-dashboard.svg?style=for-the-badge
[releases]: https://github.com/wassy92x/lovelace-ha-dashboard/releases
