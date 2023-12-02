# App or Plugin Callback

- Endpoint Path: `/fresns-api/v1/common/callback`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| fskey | String | **required** | Data usage plug-in fskey |
| ulid | String | **required** | Callback query key |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "ulid": "String / ULID",
        "type": "Number / Data Type",
        "content": "Object or Array / Data",
    }
}
```
