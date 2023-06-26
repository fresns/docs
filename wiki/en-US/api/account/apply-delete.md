# Apply Delete

- Endpoint Path: `/api/v2/account/apply-delete`
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
| password | String | *optional* | Login password (transferred in Base64) |
| verifyCode | String | *optional* | Verification code |
| codeType | String | *optional* | Verification code type: `email`, `sms` |

**Request Description**

- Choose either `password` or `verifyCode` for transfer.
- When transferring `verifyCode`, the `codeType` parameter must be transferred.
- Send verify code parameters `useType=4`, `templateId=8`

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "day": "Number / Cancellation buffer period, number of days before the deletion process is officially executed",
        "dateTime": "String / Specific date and time",
    }
}
```
