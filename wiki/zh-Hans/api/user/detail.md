# 获取用户[详情]

- 接口地址：`/api/v2/user/{uidOrUsername}/detail`
- 请求方式：`GET`
- 传参方式：`Rest`

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
| uidOrUsername | String | YES | 用户 `uid` 或者 `username` |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| whitelistKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "items": {
            "title": "String / SEO 标题",
            "keywords": "String / SEO 关键词",
            "description": "String / SEO 描述",
            "manages": [
                {
                    // 用户管理扩展
                    // 通用数据结构->扩展功能信息
                }
            ],
        },
        "detail": {
            // 通用数据结构->用户信息
        }
    }
}
```

::: details 开发说明
- 无论是否登录，输出的是 `uidOrUsername` 用户信息，不是 `header` 里的 `uid` 的用户信息。
- 自己的 `uid` 和接口 `uidOrUsername` 参数一样，则代表自己查看自己的信息；参数不一样，代表查看别人的信息。
- 查看别人的信息，参数 `extcredits1` 要判断 `extcredits1_state` 键值，未启用或者为私有状态，则不输出。其他 2～5 同理。
- 查看别人的信息，`features` 和 `profiles` 扩展列表不输出。
:::