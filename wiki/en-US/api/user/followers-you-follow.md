# Followers You Know

- Endpoint Path: `/api/v2/user/{uidOrUsername}/followers-you-follow`
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
| uidOrUsername | String | **required** | User `uid` or `username` |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| pageSize | Number | *optional* | 每页显示条数（默认 15 条） |
| page | Number | *optional* | 页码（默认 1） |

**Request Description**

- 接口会根据配置表设置 `运营 > 互动配置 > 查看用户内容设置 > 用户的哪些内容可以被别人查看` 决定是否输出数据。
    - 你认识的关注者
    - 配置 key `it_followers_you_follow`
- 未登录也可以请求，将输出为空列表。

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
