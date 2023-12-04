# 获取帖子[详情] 引用它的帖子列表

- 接口地址：`/fresns-api/v1/post/{pid}/quotes`
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
| pid | String | YES | 帖子 ID |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| whitelistKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| whitelistGroupKeys | String | NO | 针对帖子信息中的 `group` 参数 |
| blacklistGroupKeys | String | NO | 针对帖子信息中的 `group` 参数 |
| whitelistHashtagKeys | String | NO | 针对帖子信息中的 `hashtags` 参数 |
| blacklistHahtagKeyss | String | NO | 针对帖子信息中的 `hashtags` 参数 |
| whitelistGeotagKeys | String | NO | 针对帖子信息中的 `geotag` 参数 |
| blacklistGeotagKeys | String | NO | 针对帖子信息中的 `geotag` 参数 |
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
