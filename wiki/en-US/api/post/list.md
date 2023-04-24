# Post List

- Endpoint Path: `/api/v2/post/list`
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
| mapId | Number | *optional* | [Map Service Provider](../../database/dictionary/maps.md) |
| mapLng | String | *optional* | Map Longitude (For distance calculation) |
| mapLat | String | *optional* | Map Latitude (For distance calculation) |
| uidOrUsername | String | *optional* | Specify scope: User |
| hid | String | *optional* | Specify scope: Topic |
| gid | String | *optional* | Specify scope: Group |
| includeSubgroups | Boolean | *optional* | Used with `gid` configuration to include or exclude sublevel groups.<br>Default is `false` |
| allDigest | Boolean | *optional* | Specify scope: All digest, general and advanced digest<br>When passed, the `digestState` parameter will be ignored |
| digestState | Number | *optional* | Specify scope: Digest (leave empty to output all)<br>digest_state field `1` No `2` general digest `3` advanced digest |
| stickyState | Number | *optional* | Specify scope: Sticky (leave empty to output all)<br>sticky_state field `1` No `2` group sticky `3` global sticky |
| contentType | String | *optional* | Filter content by type |
| createDate | String | *optional* | Publish date: `today`,`yesterday`,`week`,`lastWeek`,`month`,`lastMonth`,`year`,`lastYear` |
| createDateGt | String | *optional* | Publish date greater than `Y-m-d` |
| createDateLt | String | *optional* | Publish date less than `Y-m-d` |
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
| orderType | String | *optional* | Sort by type: `createDate`,`like`,`dislike`,`follow`,`block`,`comment`<br>Default `createDate` |
| orderDirection | String | *optional* | Sort by direction, default `desc`<br>`asc`,`desc` |
| blockGroups | String | *optional* | Filter groups, `gid` multiple separated by commas |
| blockHashtags | String | *optional* | Filter hashtags, `hid` multiple separated by commas |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pluginRatingId | Number | *optional* | Sort number (plug-in specific) |
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
- Posts of blocked objects (users, groups, topics, posts) will not be output.

| `contentType` parameter (PascalCase) | Description |
| --- | --- |
| {empty} | Output all content |
| All | Output all content |
| Text | Output plain text posts |
| Image | Output posts with images |
| Video | Output posts with videos |
| Audio | Output posts with audio |
| Document | Output posts with documents |
| {AbcName} | Output posts with plugin unikey AbcName extended content |

- For content type list, refer to [/api/v2/global/{type}/content-types](../global/content-types.md)

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
