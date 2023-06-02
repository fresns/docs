# Account Edit

- Endpoint Path: `/api/v2/account/edit`
- Method: `PUT`
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
| codeType | String | *optional* | Verification code type: `email`, `sms` |
| verifyCode | String | *optional* | Verification code |
| newVerifyCode | String | *optional* | New account verification code, for email and phone number modification |
| editEmail | String | *optional* | Email (leave blank to not modify) |
| editPhone | Number | *optional* | Phone number (leave blank to not modify) |
| editCountryCode | Number | *optional* | International area code, required when modifying phone number |
| password | String | *optional* | Current login password (passed in Base64) |
| editPassword | String | *optional* | Modify login password (leave blank to not modify, passed in Base64) |
| editPasswordConfirm | String | *optional* | Pass the new password again (leave blank to not modify, passed in Base64) |
| walletPassword | String | *optional* | Current wallet password (passed in Base64) |
| editWalletPassword | String | *optional* | Modify wallet password (leave blank to not modify, passed in Base64) |
| editWalletPasswordConfirm | String | *optional* | Pass the new wallet password again (leave blank to not modify, passed in Base64) |
| editLastLoginTime | Boolean | *optional* | Last login time (leave blank to not modify)<br>`1` Update |
| disconnectPlatformId | Number | *optional* | disconnect [connect platform](../../database/dictionary/connects.md) |
| deviceToken | String | *optional* | iOS or Android device Token (leave blank to not modify) |

**Request Description**

- `editLastLoginTime` does not require a verification code
- A verification code can only be used to modify information once
- Set email (current account has no email)
    - `codeType`
    - `newVerifyCode` Verification code template ID is `4`
    - `editEmail`
- Modify email
    - `codeType`
    - `verifyCode` Verification code template ID is `4`
    - `newVerifyCode` Verification code template ID is `3`
    - `editEmail`
- Set phone number (current account has no phone number)
    - `codeType`
    - `newVerifyCode` Verification code template ID is `4`
    - `editPhone`
    - `editCountryCode`
- Modify phone number
    - `codeType`
    - `verifyCode` Verification code template ID is `4`
    - `newVerifyCode` Verification code template ID is `3`
    - `editPhone`
    - `editCountryCode`
- Modify login password: either `verifyCode` or `password` must be provided, or both can be provided for full verification
    - `verifyCode` Verification code template ID is `5`
    - `password`
    - `editPassword`
    - `editPasswordConfirm`
- Modify wallet password: either `verifyCode` or `walletPassword` must be provided, or both can be provided for full verification
    - `verifyCode` Verification code template ID is `6`
    - `walletPassword`
    - `editWalletPassword`
    - `editWalletPasswordConfirm`

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
