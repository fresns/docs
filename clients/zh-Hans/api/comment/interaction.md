# 获取评论[详情] 互动列表

- 接口地址：`/api/fresns/v1/comment/{cid}/interaction/{type}`
- 请求方式：`GET`
- 传参方式：`Rest` + `Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Path 变量

| 变量名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| cid | String | YES | 评论 ID |
| type | String | YES | 查看类型 `likers`,`dislikers`,`followers`,`blockers` |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| orderDirection | String | NO | 排序方向 `asc`,`desc`，默认 `desc` |
| whitelistKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

**接口使用说明**

- `type=likers` 获得点赞了 `cid` 的用户列表。
- `type=dislikers` 获得点踩了 `cid` 的用户列表。
- `type=followers` 获得关注了 `cid` 的用户列表。
- `type=blockers` 获得屏蔽了 `cid` 的用户列表。
- 接口会根据配置表设置 `运营 > 互动配置 > 查看互动记录设置` 决定是否输出数据。
    - `comment_likers` 配置，是否输出点赞他的用户
    - `comment_dislikers` 配置，是否输出点踩他的用户
    - `comment_followers` 配置，是否输出关注他的用户
    - `comment_blockers` 配置，是否输出屏蔽他的用户
- `orderDirection` 排序方向以创建时间排序。

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
