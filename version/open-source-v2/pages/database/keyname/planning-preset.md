# Preset key name

## Event

| Menu Title | Key Name | Description |
| --- | --- | --- |
| [Plugin Subscription Records](../../extensions/plugin/functions.md#subscribe-database-table-activity) | subscribe_items | Plugin subscribes to events in the main program `item_tag = systems` |
| [Plugin Scheduled Tasks](../../extensions/plugin/functions.md#crontab) | crontab_items | Plugin marks scheduled tasks for the main program `item_tag = systems` |

::: details View "Plugin Subscription Records" example
```json
[
    {
        "type": "Subscription type",
        "fskey": "Subscriber (Plugin)",
        "cmdWord": "Subscriber's command word",
        "subject": "Subscribed table or view type"
    },
    {
        "type": 1,
        "fskey": "AqSms",
        "cmdWord": "sendSms",
        "subject": "users"
    }
]
```
:::
::: details View "Plugin Scheduled Tasks" example
```json
[
    {
        "fskey": "Scheduled Task Plugin",
        "cmdWord": "Scheduled Task Plugin Command Word",
        "cronTableFormat": "Scheduled Task Execution Cycle (Cron Expression)"
    },
    {
        "fskey": "Fresns",
        "cmdWord": "checkDeleteAccount",
        "cronTableFormat": "* * /6 * *"
    }
]
```
:::

## User

Data Table [user_stats](../users/user-stats.md)

| Key Tag | Key Name | Description | is API |
| --- | --- | --- | --- |
| users | extcredits1_name | Extension 1 Name | 1 |
| users | extcredits1_unit | Extension 1 Unit | 1 |
| users | extcredits1_state | Extension 1 State (1. Disabled 2. Private 3. Public) | 1 |
| users | extcredits2_name | Extension 2 Name | 1 |
| users | extcredits2_unit | Extension 2 Unit | 1 |
| users | extcredits2_state | Extension 2 State (1. Disabled 2. Private 3. Public) | 1 |
| users | extcredits3_name | Extension 3 Name | 1 |
| users | extcredits3_unit | Extension 3 Unit | 1 |
| users | extcredits3_state | Extension 3 State (1. Disabled 2. Private 3. Public) | 1 |
| users | extcredits4_name | Extension 4 Name | 1 |
| users | extcredits4_unit | Extension 4 Unit | 1 |
| users | extcredits4_state | Extension 4 State (1. Disabled 2. Private 3. Public) | 1 |
| users | extcredits5_name | Extension 5 Name | 1 |
| users | extcredits5_unit | Extension 5 Unit | 1 |
| users | extcredits5_state | Extension 5 State (1. Disabled 2. Private 3. Public) | 1 |

## Operation

| Key Tag | Key Name | Description | is API |
| --- | --- | --- | --- |
| commons | bulletin_name | System bulletin name, multi-language | 1 |
| commons | bulletin_contents | System bulletin content, arrays, multiple languages | 1 |

### Example: bulletin_contents

```json
[
    {
        "date": "10/18/2022",
        "title": "[Must Read] Guide to give feedback to Fresns official questions",
        "titleColor": "#f40",
        "description": "Guide to give feedback to Fresns official questions",
        "descriptionColor": null,
        "buttonName": "Learn more",
        "buttonLink": "https://fresns.org/guide/feedback.html",
    }
]
```

### Example: advertising

```json
[
    {
        "code": "webAd",
        "content": "", // html code
    }
]
```
