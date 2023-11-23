# [Conversation] Mark As Read

- Endpoint Path: `/api/v2/conversation/mark-as-read`
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
| type | String | **required** | `conversation` or `message` |
| conversationId | Number | *optional* |  |
| messageIds | String | *optional* | separated by English commas for multiple id |

**Request Description**

- Choose either `conversationId` or `messageIds` to pass as a parameter, but not both.
- `type = conversation`: Use the `conversationId` parameter to set the current conversation as read, not including messages within the conversation.
- `type = message`: Use the `messageIds` parameter to set specified ID messages as read in bulk.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
