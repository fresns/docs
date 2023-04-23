# Hashtag Interaction Users

- Endpoint Path: `/api/v2/hashtag/{hid}/interaction/{type}`
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
| hid | String | **required** | Hashtag slug |
| type | String | **required** | View Type `like`,`dislike`,`follow`,`block` |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| orderDirection | String | *optional* | Sort by direction `asc`,`desc`, Default: `desc` |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Request Description**

- `type=like` 获得点赞了 `hid` 的用户列表。
- `type=dislike` 获得点踩了 `hid` 的用户列表。
- `type=follow` 获得关注了 `hid` 的用户列表。
- `type=block` 获得屏蔽了 `hid` 的用户列表。
- 接口会根据配置表设置 `运营 > 互动配置 > 查看互动记录设置` 决定是否输出数据。
    - `hashtag_likers` 配置，是否输出点赞 TA 的用户
    - `hashtag_dislikers` 配置，是否输出点踩 TA 的用户
    - `hashtag_followers` 配置，是否输出关注 TA 的用户
    - `hashtag_blockers` 配置，是否输出屏蔽 TA 的用户
- `orderDirection` 排序方向以创建时间排序。

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
