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
| mapId | Number | *optional* | [Map Service Provider](../../reference/dictionary/maps.md) |
| mapLng | String | *optional* | Map Longitude (For distance calculation) |
| mapLat | String | *optional* | Map Latitude (For distance calculation) |
| uidOrUsername | Number / String | *optional* | Specify scope: User |
| htid | String | *optional* | Specify scope: Hashtag |
| gtid | String | *optional* | Specify scope: Geotag |
| gid | String | *optional* | Specify scope: Group |
| includeSubgroups | Boolean | *optional* | Used with `gid` configuration to include or exclude sublevel groups.<br>Default is `false` |
| allDigest | Boolean | *optional* | Specify scope: All digest, general and premium digest<br>When passed, the `digestState` parameter will be ignored |
| digestState | Number | *optional* | Specify scope: Digest (Null to output all)<br>digest_state field `1` No `2` general digest `3` premium digest |
| stickyState | Number | *optional* | Specify scope: Sticky (Null to output all)<br>sticky_state field `1` No `2` group sticky `3` global sticky |
| contentType | String | *optional* | Filter content by type |
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
| lastPid | String | *optional* | Use this post as a boundary to check for new content |
| orderType | String | *optional* | Sort by type: `createdTime`,`random`,`view`,`like`,`dislike`,`follow`,`block`,`comment`<br>Default `createdTime` |
| orderDirection | String | *optional* | Sort by direction, default `desc`<br>`asc`,`desc` |
| blockGroups | String | *optional* | Filter groups, `gid` multiple separated by commas |
| blockHashtags | String | *optional* | Filter hashtags, `htid` multiple separated by commas |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| whitelistGroupKeys | String | *optional* | For the `group` parameter in the post information |
| blacklistGroupKeys | String | *optional* | For the `group` parameter in the post information |
| whitelistHashtagKeys | String | *optional* | For the `hashtags` parameter in the post information |
| blacklistHashtagKeys | String | *optional* | For the `hashtags` parameter in the post information |
| whitelistGeotagKeys | String | *optional* | For the `geotag` parameter in the post information |
| blacklistGeotagKeys | String | *optional* | For the `geotag` parameter in the post information |
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

- If in `private` mode, when expired at `users->expired_at`, you need to determine the status after expiration.
    - When the key value of the configuration table `site_private_end_after` is `1`, this interface cannot be requested;
    - When the key value is 2, further judge the posting time. If posts->created_at posting time is greater than the expiration time users->expired_at, it will not be output; if the posting time is less than the expiration time, it means the content was posted before expiration and can be output.
- The `uidOrUsername` parameter value represents obtaining posts from a specified user, and whether to output is determined by `Operations > Interaction > View user content settings`.
    - `it_posts` configuration, whether to output users who liked my posts
- If `uidOrUsername` is the logged-in user themselves, the above configuration is invalid, and data is directly output, indicating that the switch is ignored when viewing their own content.
- If it is a non-public group post and not a member of the group (not following the group), it will not be output.
- Posts of blocked objects (users, groups, hashtags, posts) will not be output.

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
