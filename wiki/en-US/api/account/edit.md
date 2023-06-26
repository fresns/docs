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
| newEmail | String | *optional* | Email (leave blank to not modify) |
| newPhone | Number | *optional* | Phone number (leave blank to not modify) |
| newCountryCode | Number | *optional* | International area code, required when modifying phone number |
| newVerifyCode | String | *optional* | New account verification code, for email and phone number modification |
| currentPassword | String | *optional* | Current login password (passed in Base64) |
| newPassword | String | *optional* | Modify login password (leave blank to not modify, passed in Base64) |
| currentWalletPassword | String | *optional* | Current wallet password (passed in Base64) |
| newWalletPassword | String | *optional* | Modify wallet password (leave blank to not modify, passed in Base64) |
| updateLastLoginTime | Boolean | *optional* | Last login time (leave blank to not modify)<br>`1` Update |
| disconnectPlatformId | Number | *optional* | disconnect [connect platform](../../database/dictionary/connects.md) |
| deviceToken | String | *optional* | iOS or Android device Token (leave blank to not modify) |

**Request Description**

- A verify code can only be used to modify information once
- Modify `updateLastLoginTime`, `disconnectPlatformId`, `deviceToken` does not require a verify code
- Set email (current account has no email)
    - `newEmail`
    - `newVerifyCode` Verify code template ID is `4`
- Modify email
    - `codeType = email`
    - `verifyCode` Verify code template ID is `4`
    - `newEmail`
    - `newVerifyCode` Verify code template ID is `3`
- Set phone number (current account has no phone number)
    - `newPhone`
    - `newCountryCode`
    - `newVerifyCode` Verify code template ID is `4`
- Modify phone number
    - `codeType = sms`
    - `verifyCode` Verify code template ID is `4`
    - `newPhone`
    - `newCountryCode`
    - `newVerifyCode` Verify code template ID is `3`
- Modify login password: either `verifyCode` or `currentPassword` must be provided, or both can be provided for full verify
    - `codeType`
    - `verifyCode` Verify code template ID is `5`
    - `currentPassword`
    - `newPassword`
- Modify wallet password: either `verifyCode` or `currentWalletPassword` must be provided, or both can be provided for full verify
    - `codeType`
    - `verifyCode` Verify code template ID is `6`
    - `currentWalletPassword`
    - `newWalletPassword`

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
