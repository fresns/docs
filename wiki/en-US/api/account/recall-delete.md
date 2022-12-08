# Recall Delete

- Endpoint Path: `/api/v2/account/recall-delete`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| aidToken | **required** | **required** |
| uid | *optional* | *optional* |
| uidToken | *optional* | *optional* |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
