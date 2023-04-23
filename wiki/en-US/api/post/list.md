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
| commentCountGt | Number | *optional* | Total number of comments greater than |
| commentCountLt | Number | *optional* | Total number of comments less than |
| orderType | String | *optional* | Sort by type, default `createDate`<br>createDate,like,dislike,follow,block,comment |
| orderDirection | String | *optional* | Sort by direction, default `desc`<br>`asc`,`desc` |
| blockGroups | String | *optional* | Filter groups, `gid` multiple separated by commas |
| blockHashtags | String | *optional* | Filter hashtags, `hid` multiple separated by commas |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pluginRatingId | Number | *optional* | Sort number (plug-in specific) |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Request Description**

- 如果是**私有模式**，当过期后 `users->expired_at`，需判断到期后的状态。
    - 配置表 `site_private_end_after` 键值为 `1` 时，该接口不可请求；
    - 键值为 `2` 时，仅输出 `posts->created_at` 发表时间小于失效时间 `users->expired_at` 的帖子。
- `uidOrUsername` 参数值代表获取指定用户的帖子，根据 `运营 > 互动配置 > 查看别人内容设置` 决定是否输出。
    - `it_posts` 配置，是否输出点赞我的用户
- 如果 `uidOrUsername` 为登录用户自己时，上方配置无效，直接输出数据，表示查看自己的内容时无视开关。
- 如果是非公开小组的帖子，不是小组内成员（未关注小组），不输出。
- 屏蔽对象的帖子（用户、小组、话题、帖子）不输出。

| contentType 参数（大驼峰格式） | 说明 |
| --- | --- |
| {空} | 输出全部内容 |
| All | 输出全部内容 |
| Text | 输出纯文本帖子 |
| Image | 输出带图片的帖子 |
| Video | 输出带视频的帖子 |
| Audio | 输出带音频的帖子 |
| Document | 输出带文档的帖子 |
| {AbcName} | 输出含有插件 unikey 为 AbcName 扩展内容的帖子 |

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
                // Common Data Structure -> Post Info
            }
        ]
    }
}
```
