# Hashtag List

- Endpoint Path: `/api/v2/hashtag/list`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| createDateGt | String | *optional* | 创建时间大于 `Y-m-d` |
| createDateLt | String | *optional* | 创建时间小于 `Y-m-d` |
| likeCountGt | Number | *optional* | 点赞数大于 |
| likeCountLt | Number | *optional* | 点赞数小于 |
| followCountGt | Number | *optional* | 关注数大于  |
| followCountLt | Number | *optional* | 关注数小于 |
| blockCountGt | Number | *optional* | 屏蔽数大于 |
| blockCountLt | Number | *optional* | 屏蔽数小于 |
| postCountGt | Number | *optional* | 帖子数大于 |
| postCountLt | Number | *optional* | 帖子数小于 |
| postDigestCountGt | Number | *optional* | 精华数大于 |
| postDigestCountLt | Number | *optional* | 精华数小于 |
| orderType | String | *optional* | 排序类型 createDate,like,follow,block,post,postDigest<br>默认 createDate |
| orderDirection | String | *optional* | 排序方向 `asc`,`desc`，默认 `desc` |
| whitelistParams | String | *optional* | 白名单参数，只返回给定参数的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistParams | String | *optional* | 黑名单参数，从参数中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| pageSize | Number | *optional* | 每页显示条数（默认 30 条） |
| page | Number | *optional* | 页码（默认 1） |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "pagination": {
            "total": "Number / How much data in total",
            "current": "Number / Current page number",
            "pageSize": "Number / How much data on each page",
            "lastPage": "Number / Last page number"
        },
        "list": [
            {
                // Common Data Structure -> Hashtag Info
            }
        ]
    }
}
```
