# 获取评论[详情]

- 接口地址：`/api/fresns/v1/comment/{cid}/detail`
- 请求方式：`GET`
- 传参方式：`Rest` + `Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Path 变量

| 变量名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| cid | String | YES | 评论 ID |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| mapId | Number | NO | [地图服务商编号](../../reference/dictionary/maps.md) |
| mapLng | String | NO | 地图经度（用于计算距离） |
| mapLat | String | NO | 地图纬度（用于计算距离） |
| whitelistKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| whitelistHashtagKeys | String | NO | 针对评论信息中的 `hashtags` 参数 |
| blacklistHashtagKeys | String | NO | 针对评论信息中的 `hashtags` 参数 |
| whitelistGeotagKeys | String | NO | 针对评论信息中的 `geotag` 参数 |
| blacklistGeotagKeys | String | NO | 针对评论信息中的 `geotag` 参数 |
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

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "items": {
            "title": "String / SEO 标题",
            "keywords": "String / SEO 关键词",
            "description": "String / SEO 描述"
        },
        "detail": {
            // 通用数据结构->评论信息
        }
    }
}
```

- [通用数据结构->评论信息](../../reference/data/comment.md)
