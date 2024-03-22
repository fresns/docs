# Comment List

- Endpoint Path: `/api/fresns/v1/comment/list`
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
| pid | String | *optional* | Specify scope: Post |
| cid | String | *optional* | Specify scope: Comment (retrieve descendant comments of this comment) |
| users | String | *optional* | Specify scope: User, `uidOrUsername` multiple separated by commas |
| hashtags | String | *optional* | Specify scope: Hashtag, `htid` multiple separated by commas |
| geotags | String | *optional* | Specify scope: Geotag, `gtid` multiple separated by commas |
| groups | String | *optional* | Specify scope: Group, `gid` multiple separated by commas |
| includeSubgroups | Boolean | *optional* | Used with `groups` configuration, whether to include contents of subgroups<br>Default is `false` |
| allDigest | Boolean | *optional* | Specify scope: All digest, general and premium digest<br>When passed, the `digestState` parameter will be ignored |
| digestState | Number | *optional* | Specify scope: Digest (leave empty to output all)<br>digest_state field `1` No `2` general digest `3` premium digest |
| sticky | Boolean | *optional* | Whether it's sticky (leave empty to output all) |
| langTag | String | *optional* | Filter content by lang |
| contentType | String | *optional* | Filter content by type |
| createdDays | Number | *optional* | Publish days: Content created in the specified number of days |
| createdDate | String | *optional* | Publish date: `today`,`yesterday`,`week`,`lastWeek`,`month`,`lastMonth`,`year`,`lastYear` |
| createdDateGt | String | *optional* | Publish date greater than `Y-m-d` |
| createdDateLt | String | *optional* | Publish date less than `Y-m-d` |
| viewCountGt | Number | *optional* | View count greater than |
| viewCountLt | Number | *optional* | View count less than |
| likeCountGt | Number | *optional* | Likes count greater than |
| likeCountLt | Number | *optional* | Likes count less than |
| dislikeCountGt | Number | *optional* | Dislikes count greater than |
| dislikeCountLt | Number | *optional* | Dislikes count less than |
| followCountGt | Number | *optional* | Follows count greater than |
| followCountLt | Number | *optional* | Follows count less than |
| blockCountGt | Number | *optional* | Block count greater than |
| blockCountLt | Number | *optional* | Block count less than |
| commentCountGt | Number | *optional* | Total number of sub-comments greater than |
| commentCountLt | Number | *optional* | Total number of sub-comments less than |
| blockUsers | String | *optional* | Filter users, `uidOrUsername` multiple separated by commas |
| blockGroups | String | *optional* | Filter groups, `gid` multiple separated by commas |
| blockHashtags | String | *optional* | Filter hashtags, `htid` multiple separated by commas |
| blockGeotags | String | *optional* | Filter geotags, `gtid` multiple separated by commas |
| blockPosts | String | *optional* | Filter posts, `pid` multiple separated by commas |
| blockComments | String | *optional* | Filter comments, `cid` multiple separated by commas |
| sinceCid | String | *optional* | query new content after this comment |
| beforeCid | String | *optional* | query old content before this comment |
| orderType | String | *optional* | Sort by type: `createdTime`,`random`,`view`,`like`,`dislike`,`follow`,`block`,`comment`<br>Default `createdTime` |
| orderDirection | String | *optional* | Sort by direction, default `desc`<br>`asc`,`desc` |
| mapId | Number | *optional* | [Map Service Provider](../../reference/dictionary/maps.md) |
| mapLng | String | *optional* | Map Longitude (For distance calculation) |
| mapLat | String | *optional* | Map Latitude (For distance calculation) |
| filterType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data |
| filterKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterHashtagType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `hashtags` parameter in the returned result |
| filterHashtagKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterGeotagType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `geotag` parameter in the returned result |
| filterGeotagKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterAuthorType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `author` parameter in the returned result |
| filterAuthorKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterPreviewLikeUserType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `previewLikeUsers` parameter in the returned result |
| filterPreviewLikeUserKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterPreviewCommentType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `previewComments` parameter in the returned result |
| filterPreviewCommentKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterReplyToPostType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `replyToPost` parameter in the returned result |
| filterReplyToPostKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterReplyToCommentType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `replyToComment` parameter in the returned result |
| filterReplyToCommentKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Request Description**

- The `uidOrUsername` parameter value represents obtaining comments from a specified user, and whether to output is determined by `Operations > Interaction > View user content settings`.
    - `it_comments` configuration, whether to output users who liked my comments
- If `uidOrUsername` is the logged-in user themselves, the above configuration is invalid, and data is directly output, indicating that the switch is ignored when viewing their own content.

| `contentType` parameter (PascalCase) | Description |
| --- | --- |
| {empty} | Output all content |
| All | Output all content |
| Text | Output plain text comments |
| Image | Output comments with images |
| Video | Output comments with videos |
| Audio | Output comments with audio |
| Document | Output comments with documents |
| {AbcName} | Output comments with plugin fskey AbcName extended content |

- For content type list, refer to [/api/fresns/v1/global/{type}/content-types](../global/content-types.md)

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

- [Common Data Structure -> Comment Info](../../reference/data/comment.md)
