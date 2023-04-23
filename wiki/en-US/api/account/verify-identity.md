# Account Verify Identity

- Endpoint Path: `/api/v2/account/verify-identity`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | Verify code type: `email`,`sms` |
| verifyCode | String | **required** | Verify code |

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
