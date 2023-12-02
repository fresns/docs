# Post List by Timelines

- Endpoint Path: `/fresns-api/v1/post/timelines`
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
| lastPid | String | *optional* | Use this post as a boundary to check for new content |
| mapId | Number | *optional* | [Map Service Provider](../../reference/dictionary/maps.md) |
| mapLng | String | *optional* | Map Longitude (For distance calculation) |
| mapLat | String | *optional* | Map Latitude (For distance calculation) |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| whitelistGroupKeys | String | *optional* | For the `group` parameter in the post information |
| blacklistGroupKeys | String | *optional* | For the `group` parameter in the post information |
| whitelistHashtagKeys | String | *optional* | For the `hashtags` parameter in the post information |
| blacklistHashtagKeys | String | *optional* | For the `hashtags` parameter in the post information |
| whitelistAuthorKeys | String | *optional* | For the `author` parameter in the post information |
| blacklistAuthorKeys | String | *optional* | For the `author` parameter in the post information |
| whitelistQuotedPostKeys | String | *optional* | For the `quotedPost` parameter in the post information |
| blacklistQuotedPostKeys | String | *optional* | For the `quotedPost` parameter in the post information |
| whitelistPreviewLikeUserKeys | String | *optional* | For the `previewLikeUsers` parameter in the post information |
| blacklistPreviewLikeUserKeys | String | *optional* | For the `previewLikeUsers` parameter in the post information |
| whitelistPreviewCommentKeys | String | *optional* | For the `previewComments` parameter in the post information |
| blacklistPreviewCommentKeys | String | *optional* | For the `previewComments` parameter in the post information |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Request Description**

- The `type` parameter is used to specify the list of posts to display to my followers based on the timeline, with the user own posts included in the user timeline.
- `type null`
    - I made the post myself.
    - Users I follow whose posts will be output (but not posts in private groups).
    - Posts from groups I follow that are set to digest will be output.
    - Hashtags I follow are only output if they are set to digest (but not posts in private groups).
    - Premium digests will be output regardless of whether I follow the poster (but not posts in private groups).
    - Filter out users, groups, topics and posts that I have blocked.
- `type=user`
    - I made the post myself.
    - Users I follow whose posts will be output (but not posts in private groups).
    - Filter out the posts I blocked.
- `type=group`
    - All posts in the groups I follow will be output, whether they are in digest or not.
    - Filter out users, groups, topics and posts that I have blocked.
- `type=hashtag`
    - All posts under the hashtags I follow will be output, whether digested or not (but not posts in private groups).
    - Filter out users, groups, topics and posts that I have blocked.

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
                // Common Data Structure -> Post Info
            }
        ]
    }
}
```
