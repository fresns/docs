# Post Log Detail

- Endpoint Path: `/api/v2/post/{pid}/log/{logId}`
- Method: `GET`
- Request: `Rest` + `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| pid | String | **required** | 帖子 PID |
| logId | Number | **required** | 帖子日志 ID |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // Common Data Structure -> Post Log Info
        }
    }
}
```
