# Account Logout

- Endpoint Path: `/api/v2/account/logout`
- Method: `DELETE`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| uid | *optional* | *optional* |
| token | **required** | **required** |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
