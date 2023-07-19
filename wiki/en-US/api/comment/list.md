# Comment List

- Endpoint Path: `/api/v2/comment/list`
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
| uidOrUsername | Number / String | *optional* | Specify scope: User |
| pid | String | *optional* | Specify scope: Post |
| cid | String | *optional* | Specify scope: Comment (retrieve descendant comments of this comment) |
| hid | String | *optional* | Specify scope: Topic |
| gid | String | *optional* | Specify scope: Group |
| includeSubgroups | Boolean | *optional* | Used with `gid` configuration, whether to include contents of subgroups<br>Default is `false` |
| sticky | Boolean | *optional* | Whether it's sticky (leave empty to output all) |
| allDigest | Boolean | *optional* | Specify scope: All digest, general and premium digest<br>When passed, the `digestState` parameter will be ignored |
| digestState | Number | *optional* | Specify scope: Digest (leave empty to output all)<br>digest_state field `1` No `2` general digest `3` premium digest |
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
| orderType | String | *optional* | Sort by type: `createdTime`,`random`,`view`,`like`,`dislike`,`follow`,`block`,`comment`<br>Default `createdTime` |
| orderDirection | String | *optional* | Sort by direction, default `desc`<br>`asc`,`desc` |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
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
                // Common Data Structure -> Comment Info
            }
        ]
    }
}
```
