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
| uidOrUsername | String | *optional* | Specify scope: User |
| pid | String | *optional* | Specify scope: Post |
| cid | String | *optional* | Specify scope: Comment (retrieve descendant comments of this comment) |
| hid | String | *optional* | Specify scope: Topic |
| gid | String | *optional* | Specify scope: Group |
| includeSubgroups | Boolean | *optional* | Used with `gid` configuration, whether to include contents of subgroups<br>Default is `false` |
| sticky | Boolean | *optional* | Whether it's sticky (leave empty to output all) |
| allDigest | Boolean | *optional* | Specify scope: All digest, general and advanced digest<br>When passed, the `digestState` parameter will be ignored |
| digestState | Number | *optional* | Specify scope: Digest (leave empty to output all)<br>digest_state field `1` No `2` general digest `3` advanced digest |
| contentType | String | *optional* | Filter content by type |
| createDate | String | *optional* | Publish date: `today`,`yesterday`,`week`,`lastWeek`,`month`,`lastMonth`,`year`,`lastYear` |
| createDateGt | String | *optional* | Publish time greater than `Y-m-d` |
| createDateLt | String | *optional* | Publish time less than `Y-m-d` |
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
| orderType | String | *optional* | Sort by type, default `createDate`<br>createDate,like,dislike,follow,block,comment |
| orderDirection | String | *optional* | Sort by direction, default `desc`<br>`asc`,`desc` |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Request Description**

- `uidOrUsername` 参数有值，代表获取指定用户的帖子，将根据 `运营 > 互动配置 > 查看别人内容设置` 决定是否输出数据。
    - `it_comments` 配置，是否输出点赞我的用户
- 如果 `uidOrUsername` 为登录用户自己时，上方配置无效，直接输出数据，表示查看自己的内容时无视开关。

| contentType 参数（大驼峰格式） | 说明 |
| --- | --- |
| {空} | 输出全部内容 |
| All | 输出全部内容 |
| Text | 输出纯文本评论 |
| Image | 输出带图片的评论 |
| Video | 输出带视频的评论 |
| Audio | 输出带音频的评论 |
| Document | 输出带文档的评论 |
| {AbcName} | 输出含有插件 unikey 为 AbcName 扩展内容的评论 |

- 内容类型列表参考 [/api/v2/global/{type}/content-types](../global/content-types.md)

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
