# Group Detail

- Endpoint Path: `/api/v2/group/{gid}/detail`
- Method: `GET`
- Request: `Rest`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | **required** |
| uid | *optional* | **required** |
| token | *optional* | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| gid | String | **required** | 小组 GID |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "items": {
            "title": "String / SEO 标题",
            "keywords": "String / SEO 关键词",
            "description": "String / SEO 描述",
            "extensions": [
                {
                    // 小组的扩展
                    // Common Data Structure -> Extend Function Info
                }
            ]
        },
        "detail": {
            // Common Data Structure -> Group Info
        }
    }
}
```
