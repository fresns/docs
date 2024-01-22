# User Login

- Endpoint Path: `/api/fresns/v1/user/auth-token`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Body Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| uidOrUsername | Number / String | **required** | User `uid` or `username` |
| pin | String | *optional* | Personal Identification Number |
| deviceToken | String | *optional* | iOS or Android device Token |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "authToken": {
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

- [Common Data Structure -> User Info](../../reference/data/user.md)
