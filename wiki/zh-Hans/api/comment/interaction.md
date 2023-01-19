# 获取评论[详情] 互动列表

- 接口地址：`/api/v2/comment/{cid}/interaction/{type}`
- 请求方式：`GET`
- 传参方式：`Rest` + `Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Rest 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| cid | String | YES | 评论 CID |
| type | String | YES | 查看类型 `like`,`dislike`,`follow`,`block` |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| orderDirection | String | NO | 排序方式 `asc`,`desc`，默认 `desc` |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

**接口使用说明**

- `type=like` 获得点赞了 `cid` 的用户列表。
- `type=dislike` 获得点踩了 `cid` 的用户列表。
- `type=follow` 获得关注了 `cid` 的用户列表。
- `type=block` 获得屏蔽了 `cid` 的用户列表。
- 接口会根据配置表设置 `运营 > 互动配置 > 查看互动记录设置` 决定是否输出数据。
    - `comment_likers` 配置，是否输出点赞 TA 的用户
    - `comment_dislikers` 配置，是否输出点踩 TA 的用户
    - `comment_followers` 配置，是否输出关注 TA 的用户
    - `comment_blockers` 配置，是否输出屏蔽 TA 的用户

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
