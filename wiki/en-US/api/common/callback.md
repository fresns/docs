# Plugin Callback

- Endpoint Path: `/api/v2/common/callback`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | **required** |
| uid | *optional* | **required** |
| token | *optional* | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| unikey | String | **required** | Data usage plug-in unikey |
| uuid | String | **required** | Universally unique identifier |

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
