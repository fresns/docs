# 获取用户[列表]

- 接口地址：`/api/v2/user/list`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| roles | String | NO | 指定主角色 `rid`，多个以英文逗号隔开 |
| verified | Boolean | NO | 认证状态 |
| gender | Number | NO | 性别 gender 字段<br>`1` 未设置 / `2` 男 / `3` 女 |
| createDate | String | NO | 注册日期：`today`,`yesterday`,`week`,`lastWeek`,`month`,`lastMonth`,`year`,`lastYear` |
| createDateGt | String | NO | 注册时间大于 `Y-m-d` |
| createDateLt | String | NO | 注册时间小于 `Y-m-d` |
| likeCountGt | Number | NO | 点赞数大于 |
| likeCountLt | Number | NO | 点赞数小于 |
| dislikeCountGt | Number | NO | 点踩数大于 |
| dislikeCountLt | Number | NO | 点踩数小于 |
| followCountGt | Number | NO | 关注数大于 |
| followCountLt | Number | NO | 关注数小于 |
| blockCountGt | Number | NO | 屏蔽数大于 |
| blockCountLt | Number | NO | 屏蔽数小于 |
| postCountGt | Number | NO | 发帖数大于 |
| postCountLt | Number | NO | 发帖数小于 |
| commentCountGt | Number | NO | 发评论数大于 |
| commentCountLt | Number | NO | 发评论数小于 |
| postDigestCountGt | Number | NO | 精华帖数大于 |
| postDigestCountLt | Number | NO | 精华帖数小于 |
| commentDigestCountGt | Number | NO | 精华评论数大于 |
| commentDigestCountLt | Number | NO | 精华评论数小于 |
| extcredits1CountGt | Number | NO | extcredits1 大于 |
| extcredits1CountLt | Number | NO | extcredits1 小于 |
| extcredits2CountGt | Number | NO | extcredits2 大于 |
| extcredits2CountLt | Number | NO | extcredits2 小于 |
| extcredits3CountGt | Number | NO | extcredits3 大于 |
| extcredits3CountLt | Number | NO | extcredits3 小于 |
| extcredits4CountGt | Number | NO | extcredits4 大于 |
| extcredits4CountLt | Number | NO | extcredits4 小于 |
| extcredits5CountGt | Number | NO | extcredits5 大于 |
| extcredits5CountLt | Number | NO | extcredits5 小于 |
| orderType | String | NO | 排序类型 `createDate`,`random`,`like`,`dislike`,`follow`,`block`<br>`post`,`comment`,`postDigest`,`commentDigest`<br>`extcredits1`,`extcredits2`,`extcredits3`,`extcredits4`,`extcredits5`<br>默认 `createDate` |
| orderDirection | String | NO | 排序方向，默认 `desc`<br>`asc`,`desc` |
| whitelistKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

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
                // 通用数据结构->用户信息
            }
        ]
    }
}
```
