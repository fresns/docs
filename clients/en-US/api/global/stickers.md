# Stickers

- Endpoint Path: `/api/fresns/v1/global/stickers`
- Method: `GET`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "parentCode": "String / Parent Sticker Group Code",
            "name": "String / Group name",
            "code": "String / Sticker Group Code",
            "codeFormat": "String / Sticker Group Code format",
            "image": "String / Sticker Group image URL",
            "stickers": [
                {
                    "parentCode": "String / Parent Sticker Group Code",
                    "name": "String / Name",
                    "code": "String / Sticker Code",
                    "codeFormat": "String / Sticker Code format",
                    "image": "String / Sticker image URL",
                }
            ]
        }
    ]
}
```
