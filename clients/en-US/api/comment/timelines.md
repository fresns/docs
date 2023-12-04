# Comment List by Timelines

- Endpoint Path: `/fresns-api/v1/comment/timelines`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | *optional* | `user`,`group`,`hashtag`, Null to output all |
| contentType | String | *optional* | Filter content by type |
| lastCid | String | *optional* | Use this comment as a boundary to check for new content |
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
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Request Description**

- `type` Functional Reference [Post Timelines](../post/timelines.md)

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "pagination": {
            "total": "Number / How much data in total",
            "pageSize": "Number / How much data on each page",
            "currentPage": "Number / Current page number",
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
