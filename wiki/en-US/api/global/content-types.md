# Content Types

- Endpoint Path: `/api/v2/global/{type}/content-types`
- Method: `GET`
- Request: `Rest`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | **required** |
| aidToken | *optional* | **required** |
| uid | *optional* | **required** |
| uidToken | *optional* | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | `post`,`comment` |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "unikey": "String / 插件 Unikey",
            "name": "String / 名称",
            "icon": "String / 服务商图标 URL",
            "url": "String / 服务商访问 URL",
            "badgesType": "Number / 显示类型 1.红点 2.文字 3.数字",
            "badgesValue": "String / 显示文字或者数字",
            "pluginRating": {
                "postByAll": [
                    {
                        "id": "Number / 用于列表接口 pluginRatingId 参数",
                        "title":"String / 标题",
                        "description":"String / 描述"
                    }
                ],
                "postByFollow": [
                    // ditto
                ],
                "postByNearby": [
                    // ditto
                ],
                "commentByAll": [
                    // ditto
                ],
                "commentByFollow": [
                    // ditto
                ],
                "commentByNearby": [
                    // ditto
                ]
            }
        }
    ]
}
```
