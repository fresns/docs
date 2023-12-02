# [Conversation] Pin

- Endpoint Path: `/fresns-api/v1/conversation/pin`
- Method: `PUT`
- Request: `application/json`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Body Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| cvid | String | **required** | Conversation ID |

**Request Description**

- If not pinned, pin it; if pinned, unpin it.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
