# 注册

- 接口地址：`/api/v2/account/register`
- 请求方式：`POST`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式：接口不可请求 |
| --- | --- | --- |
| aid | NO |  |
| aidToken | NO |  |
| uid | NO |  |
| uidToken | NO |  |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | 账号类型：`email`,`phone` |
| account | String | YES | 邮箱地址 / 手机号码 |
| countryCode | Number | NO | 手机号专用：国际区号 |
| verifyCode | String | YES | 验证码 |
| password | String | YES | 登录密码（以 Base64 传参） |
| nickname | String | YES | 昵称 |
| deviceToken | String | NO | iOS 或 Android 设备 Token |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "sessionToken": {
            "token": "String / 账号登录凭证",
            "expiredHours": "Number / 有效期小时数，null 代表永久有效",
            "expiredDays": "Number / 有效期天数，null 代表永久有效",
            "expiredDateTime": "String / 凭证有效时间，null 代表永久有效，格式为 Y-m-d H:i:s"
        },
        "items": {
            "walletRecharges": [
                {
                    // 钱包充值扩展
                    // 通用数据结构->扩展功能信息
                }
            ],
            "walletWithdraws": [
                {
                    // 钱包充值扩展
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

::: details 开发说明
- 配置表 `site_mode` 键值为 `private` 时，该接口不可请求，为 `public` 时可请求。
- 配置表 `site_public_status` 键值为 `false` 时，该接口不可请求，为 `true` 时可请求。
- 配置表 `site_public_service` 键值有值时，该接口不可请求，为空可以请求。
- 配置表 `site_register_email` 键值为 `false` 时，不支持邮箱方式注册。
- 配置表 `site_register_phone` 键值为 `false` 时，不支持手机号方式注册。
- 必须首先查验 `verifyCode` 参数是否正确（命令字 `checkCode` 查验），正确才执行下一步。
- 全部条件符合后，使用命令字 `addAccount` 执行注册账号，并以 nickname 参数再请求命令字 `addUser` 生成一个用户。
:::