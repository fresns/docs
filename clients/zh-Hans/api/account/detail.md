# 账号基本信息

- 接口地址：`/api/fresns/v1/account/detail`
- 请求方式：`GET`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | NO | NO |
| X-Fresns-Uid-Token | NO | NO |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| whitelistUserKeys | String | NO | 针对账号信息中的 `users` 参数 |
| blacklistUserKeys | String | NO | 针对账号信息中的 `users` 参数 |

**接口使用说明**

- 本接口不会输出 token 参数，该参数仅限注册和登录接口才会创建并输出。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "items": {
            "walletRecharges": [
                {
                    // 钱包充值扩展
                    // 通用数据结构->扩展功能信息
                }
            ],
            "walletWithdraws": [
                {
                    // 钱包提现扩展
                    // 通用数据结构->扩展功能信息
                }
            ],
        },
        "detail": {
            // 通用数据结构->账号信息
        }
    }
}
```

- [通用数据结构->扩展->扩展功能信息](../../reference/data/extends.md#扩展功能信息)
- [通用数据结构->账号信息](../../reference/data/account.md)
