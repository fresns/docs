# Input Tips

- Endpoint Path: `/api/fresns/v1/common/input-tips`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | Choose one from `user`, `hashtag` |
| key | String | **required** | Keyword |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "fsid": "String / username or hid",
            "name": "String / nickname or hashtag name",
            "image": "String / user avatar or hashtag cover",
            "interaction": {
                "likeStatus": "Boolean / Like status",
                "dislikeStatus": "Boolean / Dislike status",
                "followStatus": "Boolean / Follow status",
                "blockStatus": "Boolean / Block status",
                "note": "String / My interaction note (follow or block)"
            }
        }
    ]
}
```
