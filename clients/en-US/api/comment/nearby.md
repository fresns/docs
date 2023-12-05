# Comment List by Nearby

- Endpoint Path: `/api/fresns/v1/comment/nearby`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Body Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| mapId | Number | **required** | [Map Service Provider](../../reference/dictionary/maps.md) |
| mapLng | String | **required** | Map Longitude |
| mapLat | String | **required** | Map Latitude |
| unit | String | *optional* | Range unit `km` or `mi` |
| length | Number | *optional* | Range length |
| contentType | String | *optional* | Filter content by type |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| whitelistHashtagKeys | String | *optional* | For the `hashtags` parameter in the comment information |
| blacklistHashtagKeys | String | *optional* | For the `hashtags` parameter in the comment information |
| whitelistGeotagKeys | String | *optional* | For the `geotag` parameter in the comment information |
| blacklistGeotagKeys | String | *optional* | For the `geotag` parameter in the comment information |
| whitelistAuthorKeys | String | *optional* | For the `author` parameter in the comment information |
| blacklistAuthorKeys | String | *optional* | For the `author` parameter in the comment information |
| whitelistPreviewLikeUserKeys | String | *optional* | For the `previewLikeUsers` parameter in the comment information |
| blacklistPreviewLikeUserKeys | String | *optional* | For the `previewLikeUsers` parameter in the comment information |
| whitelistPreviewCommentKeys | String | *optional* | For the `previewComments` parameter in the comment information |
| blacklistPreviewCommentKeys | String | *optional* | For the `previewComments` parameter in the comment information |
| whitelistReplyToPostKeys | String | *optional* | For the `replyToPost` parameter in the comment information |
| blacklistReplyToPostKeys | String | *optional* | For the `replyToPost` parameter in the comment information |
| whitelistReplyToCommentKeys | String | *optional* | For the `replyToComment` parameter in the comment information |
| blacklistReplyToCommentKeys | String | *optional* | For the `replyToComment` parameter in the comment information |
| pageSize | Number | *optional* | Number of items per page (default 30 items) |
| page | Number | *optional* | Page number (default 1) |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "pagination": {
            "total": "Number / How much data in total",
            "current": "Number / Current page number",
            "pageSize": "Number / How much data on each page",
            "lastPage": "Number / Last page number"
        },
        "list": [
            {
                // Common Data Structure -> Comment Info
            }
        ]
    }
}
```
