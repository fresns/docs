# Plugin Callback

- Endpoint Path: `/api/v2/common/callback`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fskey | String | **required** | Data usage plug-in fskey |
| ulid | String | **required** | Callback query key |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "ulid": "plugin_callbacks->ulid",
        "type": "plugin_callbacks->type",
        "content": "plugin_callbacks->content",
    }
}
```
