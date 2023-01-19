# User Mark List

- Endpoint Path: `/api/v2/user/{uidOrUsername}/mark/{markType}/{listType}`
- Method: `GET`
- Request: `Rest` + `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uidOrUsername | String | **required** | 用户 `uid` 或者 `username` |
| markType | String | **required** | 标记类型 `like`,`dislike`,`follow`,`block` |
| listType | String | **required** | 列表类型 `users`,`groups`,`hashtags`,`posts`,`comments` |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| orderDirection | String | *optional* | 排序方式 `asc`,`desc`，默认 `desc` |
| pageSize | Number | *optional* | 每页显示条数（默认 15 条） |
| page | Number | *optional* | 页码（默认 1） |

**Request Description**

- TA 操作标注的内容。获取 `uidOrUsername` 用户标记内容列表。
- 根据记录时间排序，比如帖子，是根据标注时间排序，而不是帖子发表时间。
- 接口会根据配置表设置 `运营 > 互动配置 > 查看别人内容设置` 决定是否输出数据。
    - 点赞配置 `markType=like`
        - `listType=users` 获取 TA 点赞的用户列表，配置键名 `it_like_users` 决定是否输出。
        - `listType=groups` 获取 TA 点赞的小组列表，配置键名 `it_like_groups` 决定是否输出。
        - `listType=hashtags` 获取 TA 点赞的话题列表，配置键名 `it_like_hashtags` 决定是否输出。
        - `listType=posts` 获取 TA 点赞的帖子列表，配置键名 `it_like_posts` 决定是否输出。
        - `listType=comments` 获取 TA 点赞的评论列表，配置键名 `it_like_comments` 决定是否输出。
    - 点踩配置 `markType=dislike`
        - `listType=users` 获取 TA 踩的用户列表，配置键名 `it_dislike_users` 决定是否输出。
        - `listType=groups` 获取 TA 踩的小组列表，配置键名 `it_dislike_groups` 决定是否输出。
        - `listType=hashtags` 获取 TA 踩的话题列表，配置键名 `it_dislike_hashtags` 决定是否输出。
        - `listType=posts` 获取 TA 踩的帖子列表，配置键名 `it_dislike_posts` 决定是否输出。
        - `listType=comments` 获取 TA 踩的评论列表，配置键名 `it_dislike_comments` 决定是否输出。
    - 关注配置 `markType=follow`
        - `listType=users` 获取 TA 关注的用户列表，配置键名 `it_follow_users` 决定是否输出。
        - `listType=groups` 获取 TA 关注的小组列表，配置键名 `it_follow_groups` 决定是否输出。
        - `listType=hashtags` 获取 TA 关注的话题列表，配置键名 `it_follow_hashtags` 决定是否输出。
        - `listType=posts` 获取 TA 关注的帖子列表，配置键名 `it_follow_posts` 决定是否输出。
        - `listType=comments` 获取 TA 关注的评论列表，配置键名 `it_follow_comments` 决定是否输出。
    - 屏蔽配置 `markType=block`
        - `listType=users` 获取 TA 屏蔽的用户列表，配置键名 `it_block_users` 决定是否输出。
        - `listType=groups` 获取 TA 屏蔽的小组列表，配置键名 `it_block_groups` 决定是否输出。
        - `listType=hashtags` 获取 TA 屏蔽的话题列表，配置键名 `it_block_hashtags` 决定是否输出。
        - `listType=posts` 获取 TA 屏蔽的帖子列表，配置键名 `it_block_posts` 决定是否输出。
        - `listType=comments` 获取 TA 屏蔽的评论列表，配置键名 `it_block_comments` 决定是否输出。
- 如果 `uidOrUsername` 为登录用户自己时，上方配置无效，直接输出数据，表示查看自己的内容时无视开关。
- `orderDirection` 排序方式以创建时间排序。

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
                // Common Data Structure -> 对应内容类型的信息
            }
        ]
    }
}
```
