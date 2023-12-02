# 获取用户认识的关注者

- 接口地址：`/fresns-api/v1/user/{uidOrUsername}/followers-you-follow`
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
| uidOrUsername | Number / String | YES | 用户 `uid` 或者 `username` |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| whitelistKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

**接口使用说明**

- 接口会根据配置表设置 `运营 > 互动配置 > 查看用户内容设置 > 用户的哪些内容可以被别人查看` 决定是否输出数据。
    - 你认识的关注者
    - 配置 key `it_followers_you_follow`
- 未登录也可以请求，将输出为空列表。

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
