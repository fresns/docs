# Comment Log Detail

- Endpoint Path: `/api/v2/comment/{cid}/log/{logId}`
- Method: `GET`
- Request: `Rest` + `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | **required** |
| aidToken | *optional* | **required** |
| uid | *optional* | **required** |
| uidToken | *optional* | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| cid | String | **required** | 评论 CID |
| logId | Number | **required** | 评论日志 ID |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // Common Data Structure -> Comment Log Info
        }
    }
}
```
