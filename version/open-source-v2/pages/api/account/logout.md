# Account Logout

- Endpoint Path: `/api/v2/account/logout`
- Method: `DELETE`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
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
