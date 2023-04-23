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
| uidOrUsername | String | *optional* | 指定范围：用户 |
| hid | String | *optional* | 指定范围：话题 |
| gid | String | *optional* | 指定范围：小组 |
| includeSubgroups | Boolean | *optional* | 与 `gid` 配置使用，是否包含子级小组的内容<br>默认为 `false` |
| allDigest | Boolean | *optional* | 指定范围：全部精华，一级精华和二级精华<br>传参后，将忽略 `digestState` 参数 |
| digestState | Number | *optional* | 指定范围：精华（留空输出全部）<br>digest_state 字段 1.否 2.一级精华 3.二级精华 |
| stickyState | Number | *optional* | 指定范围：置顶（留空输出全部）<br>sticky_state 字段 1.否 2.小组页置顶 3.全局置顶 |
| contentType | String | *optional* | 内容类型（内容类型扩展配置的参数） |
| createDate | String | *optional* | 发表日期：`today`,`yesterday`,`week`,`lastWeek`,`month`,`lastMonth`,`year`,`lastYear` |
| createDateGt | String | *optional* | 发表时间大于 `Y-m-d` |
| createDateLt | String | *optional* | 发表时间小于 `Y-m-d` |
| likeCountGt | Number | *optional* | 点赞数大于 |
| likeCountLt | Number | *optional* | 点赞数小于 |
| followCountGt | Number | *optional* | 关注数大于 |
| followCountLt | Number | *optional* | 关注数小于 |
| blockCountGt | Number | *optional* | 屏蔽数大于 |
| blockCountLt | Number | *optional* | 屏蔽数小于 |
| commentCountGt | Number | *optional* | 评论总数大于 |
| commentCountLt | Number | *optional* | 评论总数小于 |
| orderType | String | *optional* | Sort by type, default `createDate`<br>createDate,like,dislike,follow,block,comment |
| orderDirection | String | *optional* | Sort by direction, default `desc`<br>`asc`,`desc` |
| blockGroups | String | *optional* | 过滤小组，多个以英文逗号隔开 |
| blockHashtags | String | *optional* | 过滤话题，多个以英文逗号隔开 |
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
