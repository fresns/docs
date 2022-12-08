# Account Verify Identity

- Endpoint Path: `/api/v2/account/verify-identity`
- Method: `POST`
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
| type | String | **required** | 验证码类型：`email`,`sms` |
| verifyCode | String | **required** | 验证码 |

**Request Description**

- This interface is used for pre-inspection.
- For example, if a user wants to modify his account, he can use the verification code interface `useType=4` to [send the verification code](../common/send-verify-code.md). In this way, he can verify whether he has the right to modify it.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
