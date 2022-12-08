# [Conversation] Mark As Read

- Endpoint Path: `/api/v2/conversation/mark-as-read`
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
| type | String | **required** | `conversation` 或 `message` |
| conversationId | Number | *optional* |  |
| messageIds | String | *optional* | 多个以英文逗号隔开 |

**Request Description**

- `conversationId` 和 `messageIds` 二选一传参，不可同时传参。
- `type = conversation` 使用 `conversationId` 参数，将当前对话框设置为已读，不包括对话下的消息。
- `type = message` 使用 `messageIds` 参数，批量设置指定 ID 的消息为已读。

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
