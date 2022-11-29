# 获取用户[详情] 互动列表

- 接口地址：`/api/v2/user/{uidOrUsername}/interaction/{type}`
- 请求方式：`GET`
- 传参方式：`Rest` + `Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | NO | YES |
| uid | NO | YES |
| token | NO | YES |

## Rest 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uidOrUsername | String | YES | 用户 `uid` 或者 `username` |
| type | String | YES | 查看类型 `like`,`dislike`,`follow`,`block` |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| orderDirection | String | NO | 排序方式 `asc`,`desc`，默认 `desc` |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

**接口使用说明**

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
