# Delete Draft

- Endpoint Path: `/api/v2/editor/{type}/{draftId}`
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
