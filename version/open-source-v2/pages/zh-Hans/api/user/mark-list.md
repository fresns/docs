# 获取用户[详情] 标记列表

- 接口地址：`/api/v2/user/{uidOrUsername}/mark/{markType}/{listType}`
- 请求方式：`GET`
- 传参方式：`Rest` + `Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Rest 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uidOrUsername | Number / String | YES | 用户 `uid` 或者 `username` |
| markType | String | YES | 标记类型 `like`,`dislike`,`follow`,`block` |
| listType | String | YES | 列表类型 `users`,`groups`,`hashtags`,`posts`,`comments` |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| orderDirection | String | NO | 排序方向 `asc`,`desc`，默认 `desc` |
| whitelistKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

**接口使用说明**

- 他操作标注的内容。获取 `uidOrUsername` 用户标记内容列表。
- 根据记录时间排序，比如帖子，是根据标注时间排序，而不是帖子发表时间。
- 接口会根据配置表设置 `运营 > 互动配置 > 查看别人内容设置` 决定是否输出数据。
    - 点赞配置 `markType=like`
        - `listType=users` 获取他点赞的用户列表，配置键名 `it_like_users` 决定是否输出。
        - `listType=groups` 获取他点赞的小组列表，配置键名 `it_like_groups` 决定是否输出。
        - `listType=hashtags` 获取他点赞的话题列表，配置键名 `it_like_hashtags` 决定是否输出。
        - `listType=posts` 获取他点赞的帖子列表，配置键名 `it_like_posts` 决定是否输出。
        - `listType=comments` 获取他点赞的评论列表，配置键名 `it_like_comments` 决定是否输出。
    - 点踩配置 `markType=dislike`
        - `listType=users` 获取他踩的用户列表，配置键名 `it_dislike_users` 决定是否输出。
        - `listType=groups` 获取他踩的小组列表，配置键名 `it_dislike_groups` 决定是否输出。
        - `listType=hashtags` 获取他踩的话题列表，配置键名 `it_dislike_hashtags` 决定是否输出。
        - `listType=posts` 获取他踩的帖子列表，配置键名 `it_dislike_posts` 决定是否输出。
        - `listType=comments` 获取他踩的评论列表，配置键名 `it_dislike_comments` 决定是否输出。
    - 关注配置 `markType=follow`
        - `listType=users` 获取他关注的用户列表，配置键名 `it_follow_users` 决定是否输出。
        - `listType=groups` 获取他关注的小组列表，配置键名 `it_follow_groups` 决定是否输出。
        - `listType=hashtags` 获取他关注的话题列表，配置键名 `it_follow_hashtags` 决定是否输出。
        - `listType=posts` 获取他关注的帖子列表，配置键名 `it_follow_posts` 决定是否输出。
        - `listType=comments` 获取他关注的评论列表，配置键名 `it_follow_comments` 决定是否输出。
    - 屏蔽配置 `markType=block`
        - `listType=users` 获取他屏蔽的用户列表，配置键名 `it_block_users` 决定是否输出。
        - `listType=groups` 获取他屏蔽的小组列表，配置键名 `it_block_groups` 决定是否输出。
        - `listType=hashtags` 获取他屏蔽的话题列表，配置键名 `it_block_hashtags` 决定是否输出。
        - `listType=posts` 获取他屏蔽的帖子列表，配置键名 `it_block_posts` 决定是否输出。
        - `listType=comments` 获取他屏蔽的评论列表，配置键名 `it_block_comments` 决定是否输出。
- 如果 `uidOrUsername` 为登录用户自己时，上方配置无效，直接输出数据，表示查看自己的内容时无视开关。
- `orderDirection` 排序方向以创建时间排序。

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
                // 通用数据结构->对应内容类型的结构信息
            }
        ]
    }
}
```
