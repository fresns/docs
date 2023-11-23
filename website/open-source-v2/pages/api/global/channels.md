# Extend Channels

- Endpoint Path: `/api/v2/global/channels`
- Method: `GET`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
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
