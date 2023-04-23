# Reset Password

- Endpoint Path: `/api/v2/account/reset-password`
- Method: `PUT`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | *optional* |
| X-Fresns-Aid-Token | *optional* | *optional* |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | Account type: `email`, `phone` |
| account | String | **required** | Email address or phone number |
| countryCode | Number | *optional* | Phone number specific, required when used, international area code |
| verifyCode | String | **required** | Verification code (checked with `checkCode` command) |
| newPassword | String | **required** | New password (Base64 encoded) |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
