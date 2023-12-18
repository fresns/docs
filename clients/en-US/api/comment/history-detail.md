# Comment History Detail

- Endpoint Path: `/api/fresns/v1/comment/history/{hcid}/detail`
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
| hcid | String | **required** | History Comment ID |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // Common Data Structure -> Comment -> History Comment Info
        }
    }
}
```

- [Common Data Structure -> Comment -> History Comment Info](../../reference/data/comment.md#history-comment-info)
