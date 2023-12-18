# 获取小组[详情] 互动列表

- 接口地址：`/api/fresns/v1/group/{gid}/interaction/{type}`
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
| gid | String | YES | 小组 GID |
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

- 类型
    - `type=likers` 获得点赞了 `gid` 的用户列表。
    - `type=dislikers` 获得点踩了 `gid` 的用户列表。
    - `type=followers` 获得关注了 `gid` 的用户列表。
    - `type=blockers` 获得屏蔽了 `gid` 的用户列表。
- 排序
    - `orderDirection` 排序方向以创建时间排序。
- 是否输出记录的判断
    - `detail.interaction.likePublicRecord`
    - `detail.interaction.dislikePublicRecord`
    - `detail.interaction.followPublicRecord`
    - `detail.interaction.blockPublicRecord`

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

- [通用数据结构->用户信息](../../reference/data/user.md)
