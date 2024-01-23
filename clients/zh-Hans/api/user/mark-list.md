# 获取用户[详情] 标记列表

- 接口地址：`/api/fresns/v1/user/{uidOrUsername}/mark/{markType}/{listType}`
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
| uidOrUsername | Number / String | YES | 用户 `uid` 或者 `username` |
| markType | String | YES | 标记类型 `like`,`dislike`,`follow`,`block` |
| listType | String | YES | 列表类型 `users`,`groups`,`hashtags`,`posts`,`comments` |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| orderDirection | String | NO | 排序方向 `asc`,`desc`，默认 `desc` |
| filterType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对 |
| filterKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

**接口使用说明**

- 他操作标注的内容。获取 `uidOrUsername` 用户标记内容列表。
- 根据记录时间排序，比如帖子，是根据标注时间排序，而不是帖子发表时间。
- 是否输出记录的判断
    - 点赞配置 `markType=like`
        - `listType=users` 他点赞的用户列表，配置键名 `profile_likes_users_enabled`
        - `listType=groups` 他点赞的小组列表，配置键名 `profile_likes_groups_enabled`
        - `listType=hashtags` 他点赞的话题列表，配置键名 `profile_likes_hashtags_enabled`
        - `listType=geotags` 他点赞的地理列表，配置键名 `profile_likes_geotags_enabled`
        - `listType=posts` 他点赞的帖子列表，配置键名 `profile_likes_posts_enabled`
        - `listType=comments` 他点赞的评论列表，配置键名 `profile_likes_comments_enabled`
    - 点踩配置 `markType=dislike`
        - `listType=users` 他踩的用户列表，配置键名 `profile_dislikes_users_enabled`
        - `listType=groups` 他踩的小组列表，配置键名 `profile_dislikes_groups_enabled`
        - `listType=hashtags` 他踩的话题列表，配置键名 `profile_dislikes_hashtags_enabled`
        - `listType=geotags` 他踩的地理列表，配置键名 `profile_dislikes_geotags_enabled`
        - `listType=posts` 他踩的帖子列表，配置键名 `profile_dislikes_posts_enabled`
        - `listType=comments` 他踩的评论列表，配置键名 `profile_dislikes_comments_enabled`
    - 关注配置 `markType=follow`
        - `listType=users` 他关注的用户列表，配置键名 `profile_following_users_enabled`
        - `listType=groups` 他关注的小组列表，配置键名 `profile_following_groups_enabled`
        - `listType=hashtags` 他关注的话题列表，配置键名 `profile_following_hashtags_enabled`
        - `listType=geotags` 他关注的地理列表，配置键名 `profile_following_geotags_enabled`
        - `listType=posts` 他关注的帖子列表，配置键名 `profile_following_posts_enabled`
        - `listType=comments` 他关注的评论列表，配置键名 `profile_following_comments_enabled`
    - 屏蔽配置 `markType=block`
        - `listType=users` 他屏蔽的用户列表，配置键名 `profile_blocking_users_enabled`
        - `listType=groups` 他屏蔽的小组列表，配置键名 `profile_blocking_groups_enabled`
        - `listType=hashtags` 他屏蔽的话题列表，配置键名 `profile_blocking_hashtags_enabled`
        - `listType=geotags` 他屏蔽的地理列表，配置键名 `profile_blocking_geotags_enabled`
        - `listType=posts` 他屏蔽的帖子列表，配置键名 `profile_blocking_posts_enabled`
        - `listType=comments` 他屏蔽的评论列表，配置键名 `profile_blocking_comments_enabled`
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

- [通用数据结构->用户信息](../../reference/data/user.md)
- [通用数据结构->小组信息](../../reference/data/group.md)
- [通用数据结构->话题信息](../../reference/data/hashtag.md)
- [通用数据结构->地理信息](../../reference/data/geotag.md)
- [通用数据结构->帖子信息](../../reference/data/post.md)
- [通用数据结构->评论信息](../../reference/data/comment.md)
