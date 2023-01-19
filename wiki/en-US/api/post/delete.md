# Delete Post

- Endpoint Path: `/api/v2/post/{pid}`
- Method: `DELETE`
- Request: `Rest`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| pid | String | **required** | 帖子 PID |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
