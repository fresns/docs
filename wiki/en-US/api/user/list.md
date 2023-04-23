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
| roles | String | *optional* | 指定主角色 ID，多个以英文逗号隔开 |
| verified | Boolean | *optional* | 认证状态 |
| gender | Number | *optional* | 性别 gender 字段<br>`1` 未设置 / `2` 男 / `3` 女 |
| createDate | String | *optional* | 注册日期：`today`,`yesterday`,`week`,`lastWeek`,`month`,`lastMonth`,`year`,`lastYear` |
| createDateGt | String | *optional* | 注册时间大于 `Y-m-d` |
| createDateLt | String | *optional* | 注册时间小于 `Y-m-d` |
| likeCountGt | Number | *optional* | Likes count greater than |
| likeCountLt | Number | *optional* | Likes count less than |
| dislikeCountGt | Number | *optional* | Dislikes count greater than |
| dislikeCountLt | Number | *optional* | Dislikes count less than |
| followCountGt | Number | *optional* | Follows count greater than |
| followCountLt | Number | *optional* | Follows count less than |
| blockCountGt | Number | *optional* | Block count greater than |
| blockCountLt | Number | *optional* | Block count less than |
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
| orderType | String | *optional* | Sort by type, default `createDate`<br>createDate,like,dislike,follow,block<br>post,comment,postDigest,commentDigest<br>extcredits1,extcredits2,extcredits3,extcredits4,extcredits5 |
| orderDirection | String | *optional* | Sort by direction, default `desc`<br>`asc`,`desc` |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

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
