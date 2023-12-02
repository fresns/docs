# 获取评论[列表] 时间线

- 接口地址：`/fresns-api/v1/comment/timelines`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | NO | `user`,`group`,`hashtag`，留空输出全部 |
| contentType | String | NO | 筛选过滤内容类型 |
| lastCid | String | NO | 以此评论为界线，查询新内容 |
| mapId | Number | NO | [地图服务商编号](../../reference/dictionary/maps.md) |
| mapLng | String | NO | 地图经度（用于计算距离） |
| mapLat | String | NO | 地图纬度（用于计算距离） |
| whitelistKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| whitelistHashtagKeys | String | NO | 针对评论信息中的 `hashtags` 参数 |
| blacklistHashtagKeys | String | NO | 针对评论信息中的 `hashtags` 参数 |
| whitelistAuthorKeys | String | NO | 针对评论信息中的 `author` 参数 |
| blacklistAuthorKeys | String | NO | 针对评论信息中的 `author` 参数 |
| whitelistPreviewLikeUserKeys | String | NO | 针对评论信息中的 `previewLikeUsers` 参数 |
| blacklistPreviewLikeUserKeys | String | NO | 针对评论信息中的 `previewLikeUsers` 参数 |
| whitelistPreviewCommentKeys | String | NO | 针对评论信息中的 `previewComments` 参数 |
| blacklistPreviewCommentKeys | String | NO | 针对评论信息中的 `previewComments` 参数 |
| whitelistReplyToPostKeys | String | NO | 针对评论信息中的 `replyToPost` 参数 |
| blacklistReplyToPostKeys | String | NO | 针对评论信息中的 `replyToPost` 参数 |
| whitelistReplyToCommentKeys | String | NO | 针对评论信息中的 `replyToComment` 参数 |
| blacklistReplyToCommentKeys | String | NO | 针对评论信息中的 `replyToComment` 参数 |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

**接口使用说明**

- `type` 逻辑参考[帖子时间线](../post/timelines.md)

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
                // 通用数据结构->评论信息
            }
        ]
    }
}
```
