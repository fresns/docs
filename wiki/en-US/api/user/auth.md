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
| uidOrUsername | String | **required** | 用户 `uid` 或者 `username` |
| password | String | *optional* | 密码（以 Base64 传参） |
| deviceToken | String | *optional* | iOS 或 Android 设备 Token |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "sessionToken": {
            "token": "String / 用户登录凭证",
            "expiredHours": "Number / 有效期小时数，null 代表永久有效",
            "expiredDays": "Number / 有效期天数，null 代表永久有效",
            "expiredDateTime": "String / 凭证有效时间，null 代表永久有效，格式为 Y-m-d H:i:s"
        },
        "detail": {
            // Common Data Structure -> User Info
        }
    }
}
```
