# Languages

> Panel > Systems > Languages

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Enable multilingual | language_status | true | boolean | true or false |
| Language configuration list | language_menus |  | array | [Language list JSON data](#language-list-json-data) |
| Default language | default_language | zh-Hans | string | Language Tag |

## Composition of language tags

[View examples and flowcharts](../../extensions/multilingual.md)

## Language List JSON Data

```json
[
    {
        "rating": "Sorting",
        "langCode": "Language code",
        "langName": "Language name (read from dictionary and store)",
        "continentId": "Continent ID",
        "areaStatus": "Area enable status, true or false",
        "areaCode": "Area code (can be empty)",
        "areaName": "Area name (can be empty, read from dictionary and store)",
        "langTag": "Language tag (combination of language name and area code)",
        "writingDirection": "Language writing direction (read from dictionary and store)",
        "lengthUnit": "Length unit",
        "dateFormat": "Date format",
        "timeFormatMinute": "Minute time format naming",
        "timeFormatHour": "Hour time format naming",
        "timeFormatDay": "Day time format naming",
        "timeFormatMonth": "Month time format naming",
        "timeFormatYear": "Year time format naming",
        "packVersion": "Language pack version",
        "isEnable": "true or false"
    },
    {
        "rating": 1,
        "langCode": "zh-Hans",
        "langName": "Simplified Chinese",
        "continentId": 1,
        "areaStatus": true,
        "areaCode": "SG",
        "areaName": "Singapore",
        "langTag": "zh-Hans-SG",
        "writingDirection": "ltr",
        "lengthUnit": "km",
        "dateFormat": "yyyy-mm-dd",
        "timeFormatMinute": "{n} minutes ago",
        "timeFormatHour": "{n} hours ago",
        "timeFormatDay": "{n} days ago",
        "timeFormatMonth": "{n} months ago",
        "timeFormatYear": "{n} years ago",
        "packVersion": 1,
        "isEnable": true
    }
]
```

## Humanized Time Format

*API output content, humanize the time*

| Format | Example | Description |
| --- | --- | --- |
| n minutes ago | 5 minutes ago | Posted within 60 minutes |
| n hours ago | 5 hours ago | Posted over 60 minutes, but within 24 hours |
| n days ago | 5 days ago | Posted over 24 hours, but within 30 days |
| n months ago | 5 months ago | Posted over 30 days, but within this year |

## Help

| Multilingual supported configurations | Panel Path |
| --- | --- |
| Site name | Systems > General |
| Site introduction | Systems > General |
| Terms of service | Systems > Policy > Content |
| Privacy policy | Systems > Policy > Content |
| Cookies policy | Systems > Policy > Content |
| Logout instructions | Systems > Policy > Content |
| Verification code template | Systems > Send > Template > Config Template |
| Wallet payment extension name | Systems > Wallet > Recharge Services > Name |
| Wallet withdrawal extension name | Systems > Wallet > Withdraw Services > Name |
| Naming configuration | Operations > Rename |
| Sticker pack name | Operations > Stickers > Group Name |
| Post publishing rule tips | Operations > Publish > Post > Publish Post Rules > Rule Tip |
| Comment publishing rule tips | Operations > Publish > Comment > Publish Post Rules > Rule Tip |
| User role name | Operations > Roles > Name |
| Content group name | Operations > Groups > Name |
| Content group description | Operations > Groups > Description |
| Editor extension name | Extends > Editor > Name |
| Search type extension name | Extends > Content Type > Name |
| Management extension name | Extends > Manage > Name |
| Group extension name | Extends > Group > Name |
| User feature extension name | Extends > User Feature > Name |
| User profile extension name | Extends > User Profile > Name |
| Menu configuration | Clients > Menus |
| Column configuration | Clients > Columns |
| Language pack configuration | Clients > Language Packs |
