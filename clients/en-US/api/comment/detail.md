# Comment Detail

- Endpoint Path: `/api/fresns/v1/comment/{cid}/detail`
- Method: `GET`
- Request: `Rest` + `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Path Variables

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| cid | String | **required** | Comment ID |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| mapId | Number | *optional* | [Map Service Provider](../../reference/dictionary/maps.md) |
| mapLng | String | *optional* | Map Longitude (For distance calculation) |
| mapLat | String | *optional* | Map Latitude (For distance calculation) |
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

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "items": {
            "title": "String / SEO Title",
            "keywords": "String / SEO Keywords",
            "description": "String / SEO Description"
        },
        "detail": {
            // Common Data Structure -> Comment Info
        }
    }
}
```

- [Common Data Structure -> Comment Info](../../reference/data/comment.md)
