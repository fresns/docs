# Send Verify Code

- Endpoint Path: `/fresns-api/v1/common/send-verify-code`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | *optional* |
| X-Fresns-Aid-Token | *optional* | *optional* |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Body Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | Sending type: `email`, `sms` |
| useType | Number | **required** | Purpose type: 1. New account verification / 2. Existing account verification / 3. Fill-in-the-blank verification / 4. Identity verification / 5. Others |
| templateId | Number | **required** | [Template ID](../../database/keyname/send.md#verify-code-templates) |
| account | String | *optional* | Email or phone number (Not required for useType with 4, required for other types) |
| countryCode | Number | *optional* | For phone number usage only, required when used, international area code |

**Request Description**

- useType
    - `1` New account verification: can be requested even if not logged in, but the account must not exist in the database. For example, new registration, change of binding, etc.
    - `2` Existing account verification: Can be requested even if you are not logged in, but the account must exist in the database. For example, verification code login, password reset, etc.
    - `3` Fill-in-the-blank verification: Can only be requested when logged in, and the corresponding email or mobile phone number of the account must be blank. For example, set the account email or cell phone number binding, etc.
    - `4` Authentication: It can be requested only at login, no `account` parameter is needed, the system will use the email or mobile phone number of the current login account to send the verification code. For example, pre-verification for changing important information, etc.
    - `5` Send directly by account.
- There is a limit on interface, only one verification code can be sent in 1 minute, and five in 10 minutes. If there is other limit on interface, it is determined by the associated plug-in.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
