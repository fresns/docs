# Stickers

- Endpoint Path: `/api/v2/global/stickers`
- Method: `GET`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | **required** |
| uid | *optional* | **required** |
| token | *optional* | **required** |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "parentCode": "String / 父级表情组 Code",
        "name": "String / 组名称",
        "code": "String / 表情组 Code",
        "codeFormat": "String / 表情组 Code 格式",
        "image": "String / 表情组图 URL",
        "stickers": [
            {
                "parentCode": "String / 父级表情组 Code",
                "name": "String / 名称",
                "code": "String / 表情 Code",
                "codeFormat": "String / 表情 Code 格式",
                "image": "String / 表情图 URL",
            }
        ]
    }
}
```
