---
aside: false
---

# Extends

## Extend Archive Info

```json
{
    "code": "String / Identifier code",
    "name": "String / Name",
    "description": "String / Description",
    "value": "{valueType Json Type} / Parameter value",
    "valueType": "String / Value type",
    "isPrivate": "Boolean / Private value"
}
```

- Reference: [archives](https://docs.fresns.com/open-source/database/extends/archives.md)

| `valueType` | `value` Json Type | Value Reference | Form Type |
| --- | --- | --- | --- |
| string | String |  | input, textarea, time, date, month, datetime, number |
| email | String |  | email |
| url | String |  | url |
| color | String | `#999999` | color |
| file | Object | [File Info](file.md) | file |
| tags | Array | `["value","value"]` | tags |
| option | Object | `{"name":"","value":""}` | select, radio |
| options | Array | `[{"name":"","value":""}]` | select, checkbox |

## Extend Operation Info

```json
{
    "customizes": [
        {
            "code": "String / Identifier code",
            "style": "String / Style primary, secondary, success, danger, warning, info",
            "name": "String / Name",
            "description": "String / Description",
            "image": "String / Image URL",
            "activeImage": "String / Active Image URL",
            "displayType": "Number / Display type 1.Basic 2.Function (plugin or app)",
            "appUrl": "String / Dedicated for display type 2, app access URL"
        }
    ],
    "buttonIcons": [
        {
            // Same as above
        }
    ],
    "diversifyImages": [
        {
            // Same as above
        }
    ],
    "tips": [
        {
            // Same as above
        }
    ]
}
```

- Reference: [operations](https://docs.fresns.com/extends/operations.md#use-code)

## Extend Content Info

```json
{
    "texts": [
        {
            "eid": "String / Extension content ID",
            "image": "String / Image URL",
            "content": "String / Content",
            "isMarkdown": "Boolean / Is content MD format",
            "viewPosition": "String / Display position: top or bottom",
            "viewType": "Number / Display type number",
            "viewTypeString": "String / Display type string",
            "appUrl": "String / App Access URL"
        }
    ],
    "infos": [
        {
            "eid": "String / Extension content ID",
            "image": "String / Image URL",
            "title": "String / Title",
            "titleColor": "String / Title color",
            "descPrimary": "String / Primary sub-information",
            "descPrimaryColor": "String / Primary sub-information color",
            "descSecondary": "String / Secondary sub-information",
            "descSecondaryColor": "String / Secondary sub-information color",
            "buttonName": "String / Button name",
            "buttonColor": "String / Button name color",
            "viewPosition": "String / Display position: top or bottom",
            "viewType": "Number / Display type number",
            "viewTypeString": "String / Display type string", // 1.basic, 2.big, 3.portrait, 4.landscape
            "appUrl": "String / App Access URL"
        }
    ],
    "actions": [
        {
            "eid": "String / Extension content ID",
            "image": "String / Image URL",
            "title": "String / Title",
            "titleColor": "String / Title color",
            "viewPosition": "String / Display position: top or bottom",
            "viewType": "Number / Display type number",
            "viewTypeString": "String / Display type string",
            "endDateTime": "String / end date time",
            "status": "Boolean / false Indicates that the end time has passed",
            "actionUserCount": "Number / Action user count",
            "hasOperated": "Boolean / Whether the current user has operated",
            "items": [
                {
                    "name": "String / Name",
                    "key": "String / Key Name",
                    "value": "String / Key Value",
                    "actionUserCount": "Number / Action user count",
                    "hasOperated": "Boolean / Whether the current user has operated"
                }
            ]
        }
    ],
}
```

- Reference: [extends](https://docs.fresns.com/open-source/database/extends/extends.md)

## Extend Function Info

```json
{
    "fskey": "String / App Fskey",
    "icon": "String / Icon URL",
    "name": "String / Name",
    "appUrl": "String / App Access URL",
    "badgeType": "Number / Extension prompt type null.None 1.Red dot 2.Text 3.Number",
    "badgeValue": "String / Extension prompt value, text or number"
}
```

- Reference: [app_usages](https://docs.fresns.com/open-source/database/extends/app_usages.md)
