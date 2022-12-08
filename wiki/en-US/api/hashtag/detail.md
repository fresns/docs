# Hashtag Detail

- Endpoint Path: `/api/v2/hashtag/{hid}/detail`
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
| hid | String | **required** | 话题 slug |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "items": {
            "title": "String / SEO 标题",
            "keywords": "String / SEO 关键词",
            "description": "String / SEO 描述"
        },
        "detail": {
            // Common Data Structure -> Hashtag Info
        }
    }
}
```
