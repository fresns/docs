# Group Interaction Users

- Endpoint Path: `/api/v2/group/{gid}/interaction/{type}`
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
| gid | String | **required** | 小组 GID |
| type | String | **required** | 查看类型 `like`,`dislike`,`follow`,`block` |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| orderDirection | String | *optional* | 排序方式 `asc`,`desc`，默认 `desc` |
| pageSize | Number | *optional* | 每页显示条数（默认 15 条） |
| page | Number | *optional* | 页码（默认 1） |

**Request Description**

- `type=like` 获得点赞了 `gid` 的用户列表。
- `type=dislike` 获得点踩了 `gid` 的用户列表。
- `type=follow` 获得关注了 `gid` 的用户列表。
- `type=block` 获得屏蔽了 `gid` 的用户列表。
- 接口会根据配置表设置 `运营 > 互动配置 > 查看互动记录设置` 决定是否输出数据。
    - `group_likers` 配置，是否输出点赞 TA 的用户
    - `group_dislikers` 配置，是否输出点踩 TA 的用户
    - `group_followers` 配置，是否输出关注 TA 的用户
    - `group_blockers` 配置，是否输出屏蔽 TA 的用户
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