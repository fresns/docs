# Reset Password

- Endpoint Path: `/api/v2/account/reset-password`
- Method: `PUT`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | *optional* |
| uid | *optional* | *optional* |
| token | *optional* | *optional* |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | 账号类型：`email`,`phone` |
| account | String | **required** | 邮箱地址或者手机号码 |
| countryCode | Number | *optional* | 手机号码专用，专用时必填，国际区号 |
| verifyCode | String | **required** | 验证码（命令字 `checkCode` 查验） |
| newPassword | String | **required** | 新密码（以 Base64 传参） |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
