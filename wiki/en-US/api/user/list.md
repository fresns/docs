# User List

- Endpoint Path: `/api/v2/user/list`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| roles | String | *optional* | 指定主角色，多个以英文逗号隔开 |
| verified | Boolean | *optional* | 认证状态 |
| gender | Number | *optional* | 性别 gender 字段<br>`1` 未设置 / `2` 男 / `3` 女 |
| createDate | String | *optional* | 注册日期：`today`,`yesterday`,`week`,`lastWeek`,`month`,`lastMonth`,`year`,`lastYear` |
| createDateGt | String | *optional* | 注册时间大于 `Y-m-d` |
| createDateLt | String | *optional* | 注册时间小于 `Y-m-d` |
| likeCountGt | Number | *optional* | 点赞数大于 |
| likeCountLt | Number | *optional* | 点赞数小于 |
| dislikeCountGt | Number | *optional* | 点踩数大于 |
| dislikeCountLt | Number | *optional* | 点踩数小于 |
| followCountGt | Number | *optional* | 关注数大于 |
| followCountLt | Number | *optional* | 关注数小于 |
| blockCountGt | Number | *optional* | 屏蔽数大于 |
| blockCountLt | Number | *optional* | 屏蔽数小于 |
| postCountGt | Number | *optional* | 发帖数大于 |
| postCountLt | Number | *optional* | 发帖数小于 |
| commentCountGt | Number | *optional* | 发评论数大于 |
| commentCountLt | Number | *optional* | 发评论数小于 |
| postDigestCountGt | Number | *optional* | 精华帖数大于 |
| postDigestCountLt | Number | *optional* | 精华帖数小于 |
| commentDigestCountGt | Number | *optional* | 精华评论数大于 |
| commentDigestCountLt | Number | *optional* | 精华评论数小于 |
| extcredits1CountGt | Number | *optional* | extcredits1 大于 |
| extcredits1CountLt | Number | *optional* | extcredits1 小于 |
| extcredits2CountGt | Number | *optional* | extcredits2 大于 |
| extcredits2CountLt | Number | *optional* | extcredits2 小于 |
| extcredits3CountGt | Number | *optional* | extcredits3 大于 |
| extcredits3CountLt | Number | *optional* | extcredits3 小于 |
| extcredits4CountGt | Number | *optional* | extcredits4 大于 |
| extcredits4CountLt | Number | *optional* | extcredits4 小于 |
| extcredits5CountGt | Number | *optional* | extcredits5 大于 |
| extcredits5CountLt | Number | *optional* | extcredits5 小于 |
| orderType | String | *optional* | 排序类型，默认 `createDate`<br>createDate,like,dislike,follow,block<br>post,comment,postDigest,commentDigest<br>extcredits1,extcredits2,extcredits3,extcredits4,extcredits5 |
| orderDirection | String | *optional* | 排序方向，默认 `desc`<br>`asc`,`desc` |
| whitelistKeys | String | *optional* | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistKeys | String | *optional* | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| pageSize | Number | *optional* | 每页显示条数（默认 15 条） |
| page | Number | *optional* | 页码（默认 1） |

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
