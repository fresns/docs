# 获取帖子[列表]

- 接口地址：`/fresns-api/v1/post/list`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| mapId | Number | NO | [地图服务商编号](../../reference/dictionary/maps.md) |
| mapLng | String | NO | 地图经度（用于计算距离） |
| mapLat | String | NO | 地图纬度（用于计算距离） |
| uidOrUsername | Number / String | NO | 指定范围：用户 |
| hid | String | NO | 指定范围：话题 |
| gid | String | NO | 指定范围：小组 |
| includeSubgroups | Boolean | NO | 与 `gid` 配置使用，是否包含子级小组的内容<br>默认为 `false` |
| allDigest | Boolean | NO | 指定范围：全部精华，一级精华和二级精华<br>传参后，将忽略 `digestState` 参数 |
| digestState | Number | NO | 指定范围：精华（留空输出全部）<br>digest_state 字段 1.否 2.一级精华 3.二级精华 |
| stickyState | Number | NO | 指定范围：置顶（留空输出全部）<br>sticky_state 字段 1.否 2.小组页置顶 3.全局置顶 |
| contentType | String | NO | 内容类型（内容类型扩展配置的参数） |
| createdDays | Number | NO | 发表天数：指定天数内创建的内容 |
| createdDate | String | NO | 发表日期：`today`,`yesterday`,`week`,`lastWeek`,`month`,`lastMonth`,`year`,`lastYear` |
| createdDateGt | String | NO | 发表时间大于 `Y-m-d` |
| createdDateLt | String | NO | 发表时间小于 `Y-m-d` |
| viewCountGt | Number | NO | 查看数大于 |
| viewCountLt | Number | NO | 查看数小于 |
| likeCountGt | Number | NO | 点赞数大于 |
| likeCountLt | Number | NO | 点赞数小于 |
| dislikeCountGt | Number | NO | 点踩数大于 |
| dislikeCountLt | Number | NO | 点踩数小于 |
| followCountGt | Number | NO | 关注数大于 |
| followCountLt | Number | NO | 关注数小于 |
| blockCountGt | Number | NO | 屏蔽数大于 |
| blockCountLt | Number | NO | 屏蔽数小于 |
| commentCountGt | Number | NO | 评论总数大于 |
| commentCountLt | Number | NO | 评论总数小于 |
| lastPid | String | NO | 以此帖子为界线，查询新内容 |
| orderType | String | NO | 排序类型 `createdTime`,`commentTime`,`random`,`view`,`like`,`dislike`,`follow`,`block`,`comment`<br>默认 `createdTime` |
| orderDirection | String | NO | 排序方向，默认 `desc`<br>`asc`,`desc` |
| blockGroups | String | NO | 过滤小组，`gid` 多个以英文逗号隔开 |
| blockHashtags | String | NO | 过滤话题，`hid` 多个以英文逗号隔开 |
| whitelistKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| whitelistGroupKeys | String | NO | 针对帖子信息中的 `group` 参数 |
| blacklistGroupKeys | String | NO | 针对帖子信息中的 `group` 参数 |
| whitelistHashtagKeys | String | NO | 针对帖子信息中的 `hashtags` 参数 |
| blacklistHashtagKeys | String | NO | 针对帖子信息中的 `hashtags` 参数 |
| whitelistAuthorKeys | String | NO | 针对帖子信息中的 `author` 参数 |
| blacklistAuthorKeys | String | NO | 针对帖子信息中的 `author` 参数 |
| whitelistQuotedPostKeys | String | NO | 针对帖子信息中的 `quotedPost` 参数 |
| blacklistQuotedPostKeys | String | NO | 针对帖子信息中的 `quotedPost` 参数 |
| whitelistPreviewLikeUserKeys | String | NO | 针对帖子信息中的 `previewLikeUsers` 参数 |
| blacklistPreviewLikeUserKeys | String | NO | 针对帖子信息中的 `previewLikeUsers` 参数 |
| whitelistPreviewCommentKeys | String | NO | 针对帖子信息中的 `previewComments` 参数 |
| blacklistPreviewCommentKeys | String | NO | 针对帖子信息中的 `previewComments` 参数 |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

**接口使用说明**

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
| {AbcName} | 输出含有插件 fskey 为 AbcName 扩展内容的帖子 |

- 内容类型列表参考 [/fresns-api/v1/global/{type}/content-types](../global/content-types.md)

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "pagination": {
            "total": "Number / 一共有多少条数据",
            "pageSize": "Number / 每页有多少条数据",
            "currentPage": "Number / 当前页码",
            "lastPage": "Number / 最后一页页码"
        },
        "list": [
            {
                // 通用数据结构->帖子信息
            }
        ]
    }
}
```
