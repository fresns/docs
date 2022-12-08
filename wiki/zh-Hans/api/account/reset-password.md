# 重置密码

- 接口地址：`/api/v2/account/reset-password`
- 请求方式：`PUT`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | NO | NO |
| aidToken | NO | NO |
| uid | NO | NO |
| uidToken | NO | NO |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | 账号类型：`email`,`phone` |
| account | String | YES | 邮箱地址或者手机号码 |
| countryCode | Number | NO | 手机号码专用，专用时必填，国际区号 |
| verifyCode | String | YES | 验证码（命令字 `checkCode` 查验） |
| newPassword | String | YES | 新密码（以 Base64 传参） |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
