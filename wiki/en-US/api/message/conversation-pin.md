# [Conversation] Pin

- Endpoint Path: `/api/v2/conversation/pin`
- Method: `PUT`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| aidToken | **required** | **required** |
| uid | **required** | **required** |
| uidToken | **required** | **required** |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| conversationId | Number | **required** | Conversation ID |

**Request Description**

- 未置顶则置顶，已置顶则取消置顶

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
