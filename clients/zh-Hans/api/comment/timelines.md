# 获取评论[列表] 时间线

- 接口地址：`/api/fresns/v1/comment/timelines`
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
| type | String | NO | `user`, `group`, `hashtag`, `geotag`<br>留空则使用全部 |
| langTag | String | NO | 指定范围：语言标签 |
| contentType | String | NO | 筛选过滤内容类型 |
| sinceCid | String | NO | 查询该评论之后的新内容 |
| beforeCid | String | NO | 查询该评论之前的旧内容 |
| mapId | Number | NO | [地图服务商编号](../../reference/dictionary/maps.md) |
| mapLng | String | NO | 地图经度（用于计算距离） |
| mapLat | String | NO | 地图纬度（用于计算距离） |
| filterType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对 |
| filterKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterHashtagType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `hashtags` 参数有效 |
| filterHashtagKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterGeotagType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `geotag` 参数有效 |
| filterGeotagKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterAuthorType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `author` 参数有效 |
| filterAuthorKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterPreviewLikeUserType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `previewLikeUsers` 参数有效 |
| filterPreviewLikeUserKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterPreviewCommentType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `previewComments` 参数有效 |
| filterPreviewCommentKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterReplyToPostType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `replyToPost` 参数有效 |
| filterReplyToPostKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterReplyToCommentType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `replyToComment` 参数有效 |
| filterReplyToCommentKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
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
                "contentSource": "String / 表示来自哪种关注 null, user, group, hashtag, geotag, digest"
            }
        ]
    }
}
```

- [通用数据结构->评论信息](../../reference/data/comment.md)
