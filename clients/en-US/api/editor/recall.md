# Revoke draft under review

- Endpoint Path: `/fresns-api/v1/editor/{type}/{did}`
- Method: `PATCH`
- Request: `Rest`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Path Variables

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | `post` or `comment` |
| did | String | **required** | Draft ID |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
