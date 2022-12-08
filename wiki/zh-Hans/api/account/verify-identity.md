# 身份验证

- 接口地址：`/api/v2/account/verify-identity`
- 请求方式：`POST`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| aidToken | YES | YES |
| uid | NO | NO |
| uidToken | NO | NO |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | 验证码类型：`email`,`sms` |
| verifyCode | String | YES | 验证码 |

**接口使用说明**

- 本接口用于前置验权使用。
- 比如用户要修改账号，可使用[发送验证码](../common/send-verify-code.md)接口 `useType=4` 发送验证码，在此接口验证是否有权修改。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

::: details 开发说明
- type = email
    - 凭 headers 信息，获取账号邮箱 `accounts > email`
- type = sms
    - 凭 headers 信息，获取账号手机信息 `accounts > phone`
- 不使用命令字验参，验证码不重置为停用，此接口仅验证是否有效，不修改状态，为接下来其他用途保留验证码有效状态。
:::