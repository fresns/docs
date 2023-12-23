# [Conversation] Delete Messages

- Endpoint Path: `/api/fresns/v1/conversation/{cvid}/messages`
- Method: `DELETE`
- Request: `Rest` + `application/json`

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
| cvid | String | **required** | Conversation ID |

## Body Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| cmids | String | **required** | separated by English commas for multiple cmid |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```