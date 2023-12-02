# Extend Channels

- Endpoint Path: `/fresns-api/v1/global/channels`
- Method: `GET`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        // Common Data Structure -> Extend Function Info
    ]
}
```

- [Common Data Structure -> Extends -> Extend Function Info](../../reference/data/extends.md#extend-function-info)
