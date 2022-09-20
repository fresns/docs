# Send Verify Code

- Endpoint Path: `/api/v2/common/send-verify-code`
- Method: `POST`
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
| type | String | **required** | 发送类型：`email`,`sms` |
| useType | Number | **required** | 用途类型：1.新账号验证 / 2.已存账号验证 / 3.填空验证 / 4.身份验证 / 5.其他 |
| templateId | Number | **required** | [模板编号](../../database/keyname/send.md#verify-code-templates) |
| account | String | **required** | 邮箱或者手机号（用途为 4 时，填写任意内容，不作使用） |
| countryCode | Number | *optional* | 手机号码专用，专用时必填，国际区号 |

**Request Description**

- `1` Verification of a new account: you can also send a request when you are not logged in, but the account must not exist in the database. For example, in scenarios of new registration, change of binding, etc.
- `2` Verification of an existing account: you can also send a request when you are not logged in, but the account must exist in the database. For example, in scenarios of login via verification code, etc.
- `3` Fill-in-the-blank verification: you can only send a request when you have logged in, and the corresponding email or mobile phone number of the account must be blank. For example, in situations of setting up an account email or mobile phone number binding, etc.
- `4` Authentication: You can only send a request when you are logging in. If the `account` is arbitrarily passed, the interface will ignore this parameter and send the verification code to the bound email or mobile phone number of the current registered account. For example, in situations of pre-verification of modifying important data, etc.
- `5` Send it directly according to the account number.
- There is a limit on interface, only one verification code can be sent in 1 minute, and five in 10 minutes. If there is other limit on interface, it is determined by the associated plug-in.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
