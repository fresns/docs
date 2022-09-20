# Map Services

- Endpoint Path: `/api/v2/global/maps`
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
    "data": [
        {
            "plugin": "String / 插件 Unikey",
            "name": "String / 名称",
            "icon": "String / 服务商图标 URL",
            "url": "String / 服务商访问 URL",
            "badgesType": "Number / 显示类型 1.红点 2.文字 3.数字",
            "badgesValue": "String / 显示文字或者数字",
            "pluginRating": null
        }
    ]
}
```
