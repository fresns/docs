# [Conversation] Send Message

- Endpoint Path: `/api/v2/conversation/send-message`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| uid | **required** | **required** |
| token | **required** | **required** |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uidOrUsername | String | **required** | 用户 `uid` 或者 `username` |
| message | String | *optional* | 消息内容 |
| fid | String | *optional* | 文件 FID |

**Request Description**

- `message` 和 `fid` 二选一传参，不可全部留空，不可全部传参。
- 发送文件，先使用[文件上传接口](../common/upload-file.md)，上传后获得 `fid` 传参。
- 上传参数例子：
    - `usageType` = `6`
    - `tableName` = `conversation_messages`
    - `tableColumn` = `message_file_id`
    - `tableId` = `null`
    - `tableKey` = 对方的 uid 或 username

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "messageId": "Number / 消息 ID",
        "sendUser": {
            // 发信用户信息
            // Common Data Structure -> User Info
        },
        "sendUserIsMe": "Boolean / 是否为自己发的",
        "sendTime": "String / 发送时间",
        "sendTimeFormat": "String / 格式化的发送时间",
        "type": "Number / 1.文本消息 2.文件消息",
        "content": "String / 消息内容",
        "file": {
            // 文件消息专用
            // Common Data Structure -> File Info
        },
        "readStatus": "Boolean / 阅读状态"
    }
}
```
