# Delete Draft

- Endpoint Path: `/api/v2/editor/{type}/{draftId}`
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
| type | String | **required** | `post` 或 `comment` |
| draftId | Number | **required** | 草稿 ID |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
