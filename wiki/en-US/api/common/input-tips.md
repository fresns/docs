# Input Tips

- Endpoint Path: `/api/v2/common/input-tips`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | Choose one from `user`, `group`, `hashtag`, `post`, `extend` |
| key | String | **required** | Keyword |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "fsid": "String / Abbreviated id or slug",
            "name": "String / Name (or nickname)",
            "image": "String / Image URL",
            "followStatus": "Boolean / type=user specific, follow status",
        }
    ]
}
```
