# Post History Detail

- Endpoint Path: `/api/fresns/v1/history/{hpid}/detail`
- Method: `GET`
- Request: `Rest` + `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Path Variables

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| hpid | String | **required** | History Post ID |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // Common Data Structure -> Post -> History Post Info
        }
    }
}
```
