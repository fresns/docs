# Account Edit

- Endpoint Path: `/api/v2/account/edit`
- Method: `PUT`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| aidToken | **required** | **required** |
| uid | *optional* | *optional* |
| uidToken | *optional* | *optional* |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| codeType | String | *optional* | 验证码类型：`email`,`sms` |
| verifyCode | String | *optional* | 验证码 |
| newVerifyCode | String | *optional* | 新账号验证码，修改邮箱和手机号专用 |
| editEmail | String | *optional* | 邮箱（留空代表不修改） |
| editPhone | Number | *optional* | 手机号码（留空代表不修改） |
| editCountryCode | Number | *optional* | 国际区号，修改手机号必传 |
| password | String | *optional* | 登录密码（以 Base64 传参） |
| editPassword | String | *optional* | 修改登录密码（留空代表不修改，以 Base64 传参） |
| editPasswordConfirm | String | *optional* | 再传一次新密码（留空代表不修改，以 Base64 传参） |
| walletPassword | String | *optional* | 当前钱包密码（以 Base64 传参） |
| editWalletPassword | String | *optional* | 修改钱包密码（留空代表不修改，以 Base64 传参） |
| editWalletPasswordConfirm | String | *optional* | 再传一次新钱包密码（留空代表不修改，以 Base64 传参） |
| editLastLoginTime | Boolean | *optional* | 最后一次登录时间（留空代表不修改）<br>`1` 更新 |
| deviceToken | String | *optional* | iOS 或 Android 设备 Token（留空代表不修改） |

**Request Description**

- `editLastLoginTime` 不需要验证码

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
