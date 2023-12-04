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
    "value": "String / Parameter value",
}
```

- Reference: [archives](../database/extends/archives.md)

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
            "appUrl": "String / Dedicated for display type 2, app access URL",
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

- Reference: [operations](../database/extends/operations.md#use-code)

## Extend Content Info

```json
{
    "texts": [
        {
            "eid": "String / Extension content ID",
            "type": "Number / Type number",
            "typeString": "String / Type string",
            "textContent": "String / Text box specific - content",
            "textIsMarkdown": "Boolean / Text box specific - Is content MD format",
            "position": "Number / Display position 1.Top 2.Bottom",
            "appUrl": "String / App Access URL",
            "moreInfo": {
                // Custom information
            },
        }
    ],
    "infos": [
        {
            "eid": "String / Extension content ID",
            "type": "Number / Type number",
            "typeString": "String / Type string",
            "cover": "String / Cover image",
            "title": "String / Title",
            "titleColor": "String / Title color",
            "descPrimary": "String / Primary sub-information",
            "descPrimaryColor": "String / Primary sub-information color",
            "descSecondary": "String / Secondary sub-information",
            "descSecondaryColor": "String / Secondary sub-information color",
            "buttonName": "String / Button name",
            "buttonColor": "String / Button name color",
            "position": "Number / Display position 1.Top 2.Bottom",
            "appUrl": "String / App Access URL",
            "moreInfo": {
                // Custom information
            },
        }
    ],
    "actions": [
        {
            "eid": "String / Extension content ID",
            "type": "Number / Type number",
            "typeString": "String / Type string",
            "endDateTime": "String / end date time",
            "items": [
                {
                    "name": "String / Name",
                    "key": "String / Key Name",
                    "value": "String / Key Value",
                    "visible": "Boolean / Whether to display the key value",
                    "status": "Boolean / Interaction Status",
                }
            ],
            "moreInfo": {
                // Custom information
            },
        }
    ],
}
```

- Reference: [extends](../database/extends/extends.md)

## Extend Function Info

```json
{
    "fskey": "String / App Fskey",
    "icon": "String / Icon URL",
    "name": "String / Name",
    "appUrl": "String / App Access URL",
    "badgeType": "Number / Extension prompt type null.None 1.Red dot 2.Text 3.Number",
    "badgeValue": "String / Extension prompt value, text or number",
}
```

- Reference: [plugin_usages](../database/extends/plugin_usages.md)