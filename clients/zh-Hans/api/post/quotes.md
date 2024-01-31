# 获取帖子[详情] 引用它的帖子列表

- 接口地址：`/api/fresns/v1/post/{pid}/quotes`
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
| filterType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对 |
| filterKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterGroupType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `group` 参数有效 |
| filterGroupKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterHashtagType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `hashtags` 参数有效 |
| filterHashtagKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterGeotagType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `geotag` 参数有效 |
| filterGeotagKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterAuthorType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `author` 参数有效 |
| filterAuthorKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterQuotedPostType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `quotedPost` 参数有效 |
| filterQuotedPostKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterPreviewLikeUserType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `previewLikeUsers` 参数有效 |
| filterPreviewLikeUserKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterPreviewCommentType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `previewComments` 参数有效 |
| filterPreviewCommentKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
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

- [通用数据结构->帖子信息](../../reference/data/post.md)
