# Delete Post

- Endpoint Path: `/api/v2/post/{pid}`
- Method: `DELETE`
- Request: `Rest`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| aidToken | **required** | **required** |
| uid | **required** | **required** |
| uidToken | **required** | **required** |

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
