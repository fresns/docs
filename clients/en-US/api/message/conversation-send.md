# [Conversation] Send Message

- Endpoint Path: `/api/fresns/v1/conversation/send-message`
- Method: `POST`
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
| uidOrUsername | Number / String | **required** | User `uid` or `username` |
| message | String | *optional* | Message Content |
| fid | String | *optional* | File FID |

**Request Description**

- Choose either `message` or `fid` to pass as a parameter, but not both or neither.
- To send a file, first use the [file upload API](../common/upload-file.md) to upload and obtain the `fid` as a parameter.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "cmid": "String / Message ID",
        "user": {
            // Sender's user information
            // Common Data Structure -> User Info
        },
        "isMe": "Boolean / Whether sent by myself",
        "type": "Number / 1. Text message 2. File message",
        "content": "String / Message content",
        "file": {
            // File message specific
            // Common Data Structure -> File Info
        },
        "datetime": "String / Sent time",
        "datetimeFormat": "String / Formatted sent time",
        "timeAgo": "String / Humanization time",
        "readStatus": "Boolean / Read status"
    }
}
```
