# Delete Comment

- Endpoint Path: `/api/fresns/v1/comment/{cid}`
- Method: `DELETE`
- Request: `Rest`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Path Variables

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| cid | String | **required** | Comment ID |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
