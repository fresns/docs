# User Auth

- Endpoint Path: `/api/v2/user/auth`
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
| uidOrUsername | String | **required** | User `uid` or `username` |
| password | String | *optional* | Password (Base64 encoded)  |
| deviceToken | String | *optional* | iOS or Android device Token |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "sessionToken": {
            "uid": "String / User ID",
            "token": "String / User login token",
            "expiredHours": "Number / Validity period in hours, null for permanent validity",
            "expiredDays": "Number / Validity period in days, null for permanent validity",
            "expiredDateTime": "String / token validity time, null for permanent validity, format: Y-m-d H:i:s"
        },
        "detail": {
            // Common Data Structure -> User Info
        }
    }
}
```
