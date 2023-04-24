# [Conversation] Pin

- Endpoint Path: `/api/v2/conversation/pin`
- Method: `PUT`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| conversationId | Number | **required** | Conversation ID |

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
