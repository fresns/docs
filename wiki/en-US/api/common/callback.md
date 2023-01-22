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
| unikey | String | **required** | Data usage plug-in unikey |
| ulid | String | **required** | Callback query key |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // plugin_callbacks->content
    }
}
```
