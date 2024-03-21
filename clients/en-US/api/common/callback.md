# App or Plugin Callback

- Endpoint Path: `/api/fresns/v1/common/callback`
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
| ulid | String | **required** | Callback query key |
| fskey | String | *optional* | Data usage plug-in fskey |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // Object or Array / app_callbacks->content
    }
}
```
