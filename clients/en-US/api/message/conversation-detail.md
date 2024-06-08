# [Conversation] Detail

- Endpoint Path: `/api/fresns/v1/conversation/{uidOrUsername}/detail`
- Method: `GET`
- Request: `Rest` + `Query`

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
| uidOrUsername | Number / String | **required** | User `uid` or `username` |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| filterUserType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `user` parameter in the returned result |
| filterUserKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |

**Request Description**

- Upload Files `uploadType`
    - `api` Using the upload interface [/api/fresns/v1/common/file-upload](../common/file-upload.md)
    - `page` Use WebView to access the address of the `uploadAppUrl` parameter to upload, see [callback](../../reference/callback/index.md) for rules.
    - `sdk` Use [S3 SDK to upload](../common/file-upload-token.md), after upload, update the file information as successfully uploaded [/api/fresns/v1/common/file-info](../common/file-update.md)

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "configs": {
            "status": "Boolean / Whether to allow message to be sent",
            "files": {
                "image": {
                    "status": "Boolean / Enable images",
                    "extensions": "String / Supported extensions, e.g., png,gif,jpg,jpeg,bmp,heic",
                    "inputAccept": "String / Supported extensions, e.g., image/png,image/gif,image/jpeg,image/jpeg,image/bmp",
                    "maxSize": "Number / Maximum file size, in MB",
                    "uploadMethod": "String / Upload method: api, page, sdk",
                    "uploadAppUrl": "String / Page URL for page upload method"
                },
                "video": {
                    "status": "Boolean / Enable videos",
                    "extensions": "String / Supported extensions, e.g., wmv,rm,mov,mpeg,mp4,3gp,flv,avi,rmvb",
                    "inputAccept": "String / Supported extensions, e.g., video/x-ms-wmv,application/vnd.rn-realmedia,video/quicktime,video/mpeg,video/mp4,video/3gpp,video/x-flv,video/x-msvideo,application/vnd.rn-realmedia-vbr",
                    "maxSize": "Number / Maximum file size, in MB",
                    "uploadMethod": "String / Upload method: api, page, sdk",
                    "uploadAppUrl": "String / Page URL for page upload method"
                },
                "audio": {
                    "status": "Boolean / Enable audios",
                    "extensions": "String / Supported extensions, e.g., mp3,wav,m4a",
                    "inputAccept": "String / Supported extensions, e.g., audio/mpeg,audio/x-wav,audio/mp4",
                    "maxSize": "Number / Maximum file size, in MB",
                    "uploadMethod": "String / Upload method: api, page, sdk",
                    "uploadAppUrl": "String / Page URL for page upload method"
                },
                "document": {
                    "status": "Boolean / Enable documents",
                    "extensions": "String / Supported extensions, e.g., doc,docx,xls,xlsx,csv,ppt,pptx,pps,ppts,pdf,txt,md,markdown,rar,zip,7z,epub,mobi",
                    "inputAccept": "String / Supported extensions, e.g., application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel",
                    "maxSize": "Number / Maximum file size, in MB",
                    "uploadMethod": "String / Upload method: api, page, sdk",
                    "uploadAppUrl": "String / Page URL for page upload method"
                }
            }
        },
        "detail": {
            "user": {
                // User information for the conversation with me, empty if the user has been deactivated.
                // Common Data Structure -> User Info
            },
            "messageCount": "Number / Total message count",
            "unreadCount": "Number / Unread message count in the conversation"
        }
    }
}
```

- [Common Data Structure -> User Info](../../reference/data/user.md)
