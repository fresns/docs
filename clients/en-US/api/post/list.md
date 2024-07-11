# Post List

- Endpoint Path: `/api/fresns/v1/post/list`
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
| users | String | *optional* | Specify scope: User, `uidOrUsername` multiple separated by commas |
| hashtags | String | *optional* | Specify scope: Hashtag, `htid` multiple separated by commas |
| geotags | String | *optional* | Specify scope: Geotag, `gtid` multiple separated by commas |
| groups | String | *optional* | Specify scope: Group, `gid` multiple separated by commas |
| includeSubgroups | Boolean | *optional* | Used with `groups` configuration to include or exclude sublevel groups.<br>Default is `false` |
| langTag | String | *optional* | Filter content by lang |
| contentType | String | *optional* | Filter content by type |
| allDigest | Boolean | *optional* | Specify scope: All digest, general and premium digest<br>When passed, the `digestState` parameter will be ignored |
| digestState | Number | *optional* | Specify scope: Digest (Null to output all)<br>digest_state field `1` No `2` general digest `3` premium digest |
| stickyState | Number | *optional* | Specify scope: Sticky (Null to output all)<br>sticky_state field `1` No `2` group sticky `3` global sticky |
| createdDays | Number | *optional* | Publish days: Content created in the specified number of days |
| createdDate | String | *optional* | Publish date: `today`,`yesterday`,`week`,`lastWeek`,`month`,`lastMonth`,`year`,`lastYear` |
| createdDateGt | String | *optional* | Publish date greater than `Y-m-d` |
| createdDateLt | String | *optional* | Publish date less than `Y-m-d` |
| likeCountGt | Number | *optional* | Likes count greater than |
| likeCountLt | Number | *optional* | Likes count less than |
| dislikeCountGt | Number | *optional* | Dislikes count greater than |
| dislikeCountLt | Number | *optional* | Dislikes count less than |
| followCountGt | Number | *optional* | Follows count greater than |
| followCountLt | Number | *optional* | Follows count less than |
| blockCountGt | Number | *optional* | Block count greater than |
| blockCountLt | Number | *optional* | Block count less than |
| commentCountGt | Number | *optional* | Total number of comments greater than |
| commentCountLt | Number | *optional* | Total number of comments less than |
| blockUsers | String | *optional* | Filter users, `uidOrUsername` multiple separated by commas |
| blockGroups | String | *optional* | Filter groups, `gid` multiple separated by commas |
| blockHashtags | String | *optional* | Filter hashtags, `htid` multiple separated by commas |
| blockGeotags | String | *optional* | Filter geotags, `gtid` multiple separated by commas |
| blockPosts | String | *optional* | Filter posts, `pid` multiple separated by commas |
| sincePid | String | *optional* | query new content after this post |
| beforePid | String | *optional* | query old content before this post |
| orderType | String | *optional* | Sort by type: `createdTime`,`random`,`view`,`like`,`dislike`,`follow`,`block`,`comment`<br>Default `createdTime` |
| orderDirection | String | *optional* | Sort by direction, default `desc`<br>`asc`,`desc` |
| mapId | Number | *optional* | [Map Service Provider](../../reference/dictionary/maps.md) |
| mapLng | String | *optional* | Map Longitude (For distance calculation) |
| mapLat | String | *optional* | Map Latitude (For distance calculation) |
| filterType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data |
| filterKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterGroupType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `group` parameter in the returned result |
| filterGroupKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterHashtagType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `hashtags` parameter in the returned result |
| filterHashtagKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterGeotagType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `geotag` parameter in the returned result |
| filterGeotagKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterAuthorType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `author` parameter in the returned result |
| filterAuthorKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterQuotedPostType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `quotedPost` parameter in the returned result |
| filterQuotedPostKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterPreviewLikeUserType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `previewLikeUsers` parameter in the returned result |
| filterPreviewLikeUserKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterPreviewCommentType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `previewComments` parameter in the returned result |
| filterPreviewCommentKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Request Description**

- If in `private` mode, when expired at `users->expired_at`, you need to determine the status after expiration.
    - When the key value of the configuration table `site_private_end_after` is `1`, this interface cannot be requested;
    - When the key value is 2, further judge the posting time. If posts->created_at posting time is greater than the expiration time users->expired_at, it will not be output; if the posting time is less than the expiration time, it means the content was posted before expiration and can be output.
- The `uidOrUsername` parameter value represents obtaining posts from a specified user, and whether to output is determined by `Operations > Interaction > View user content settings`.
    - `it_posts` configuration, whether to output users who liked my posts
- If `uidOrUsername` is the logged-in user themselves, the above configuration is invalid, and data is directly output, indicating that the switch is ignored when viewing their own content.
- If it is a non-public group post and not a member of the group (not following the group), it will not be output.
- Posts of blocked objects (users, groups, hashtags, geotags, posts) will not be output.

| `contentType` parameter (PascalCase) | Description |
| --- | --- |
| {empty} | Output all content |
| All | Output all content |
| Text | Output plain text posts |
| Image | Output posts with images |
| Video | Output posts with videos |
| Audio | Output posts with audio |
| Document | Output posts with documents |
| {AbcName} | Output posts with plugin fskey AbcName extended content |

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
                // Common Data Structure -> Post Info
            }
        ]
    }
}
```

- [Common Data Structure -> Post Info](../../reference/data/post.md)
