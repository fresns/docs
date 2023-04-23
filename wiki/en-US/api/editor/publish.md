# Publish or Review

- Endpoint Path: `/api/v2/editor/{type}/{draftId}`
- Method: `POST`
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
| type | String | **required** | `post` or `comment` |
| draftId | Number | **required** | Draft ID |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
