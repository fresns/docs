# Account Logout

- Endpoint Path: `/api/fresns/v1/account/auth-token`
- Method: `DELETE`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
