# User Interactive Users

- Endpoint Path: `/api/v2/user/{uidOrUsername}/interactive/{type}`
- Method: `GET`
- Request: `Rest` + `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | **required** |
| uid | *optional* | **required** |
| token | *optional* | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uidOrUsername | String | **required** | 用户 `uid` 或者 `username` |
| type | String | **required** | 查看类型 `like`,`dislike`,`follow`,`block` |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| orderDirection | String | *optional* | 排序方式 `asc`,`desc`，默认 `desc` |
| pageSize | Number | *optional* | 每页显示条数（默认 15 条） |
| page | Number | *optional* | 页码（默认 1） |

**Request Description**

- 获取对 TA 操作标注的用户。
- `type=like` 获得点赞了 `uidOrUsername` 的用户列表。
- `type=dislike` 获得点踩了 `uidOrUsername` 的用户列表。
- `type=follow` 获得关注了 `uidOrUsername` 的用户列表。
- `type=block` 获得屏蔽了 `uidOrUsername` 的用户列表。
- 接口会根据配置表设置 `运营 > 互动配置 > 查看互动记录设置` 决定是否输出数据。
    - `user_likers` 配置，是否输出点赞 TA 的用户
    - `user_dislikers` 配置，是否输出点踩 TA 的用户
    - `user_followers` 配置，是否输出关注 TA 的用户
    - `user_blockers` 配置，是否输出屏蔽 TA 的用户
- 如果 `uidOrUsername` 为登录用户自己时，表示查看自己的数据，当上方配置为关闭时，则以此判断是否输出数据。
    - `my_likers` 配置，是否输出点赞我的用户
    - `my_dislikers` 配置，是否输出点踩我的用户
    - `my_followers` 配置，是否输出关注我的用户
    - `my_blockers` 配置，是否输出屏蔽我的用户
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
                // Common Data Structure -> User Info
            }
        ]
    }
}
```
