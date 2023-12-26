# Editor Configs

- Endpoint Path: `/api/fresns/v1/editor/{type}/configs`
- Method: `GET`
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

**Request Description**

- Forms Configuration
    - Use [/api/fresns/v1/global/{type}/archives](../global/archives.md) to get if the editor has extra forms.
    - Get the form configuration for extra `post` or `comment` parameters.
    - If a group is selected, get the type of the `group` and append the query parameter to get the extra parameters for posting or commenting in the group.
- Upload Files `uploadType`
    - `api` Using the upload interface [/api/fresns/v1/file/upload](../file/upload.md) `uploadMode=file`
    - `page` Use WebView to access the address of the uploadUrl parameter to upload, see [callback](../../reference/callback/index.md) for rules.
    - `sdk` Use [the s3 client SDK to upload](../file/storage-token.md), after uploading pass the data to the interface in the [/api/fresns/v1/file/upload](../file/upload.md) library. `uploadMode=fileInfo`

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "editor": {
            "toolbar": {
                "sticker": "Boolean / Enable stickers",
                "image": {
                    "status": "Boolean / Enable images",
                    "extensions": "String / Supported extensions, e.g., png,gif,jpg,jpeg,bmp,heic",
                    "inputAccept": "String / Supported extensions, e.g., image/png,image/gif,image/jpeg,image/jpeg,image/bmp",
                    "maxSize": "Number / Maximum file size, in MB",
                    "uploadType": "String / Upload type: api, page, sdk",
                    "uploadUrl": "String / Address for page upload type",
                    "uploadNumber": "Number / Number of allowed uploads"
                },
                "video": {
                    "status": "Boolean / Enable videos",
                    "extensions": "String / Supported extensions, e.g., wmv,rm,mov,mpeg,mp4,3gp,flv,avi,rmvb",
                    "inputAccept": "String / Supported extensions, e.g., video/x-ms-wmv,application/vnd.rn-realmedia,video/quicktime,video/mpeg,video/mp4,video/3gpp,video/x-flv,video/x-msvideo,application/vnd.rn-realmedia-vbr",
                    "maxSize": "Number / Maximum file size, in MB",
                    "maxTime": "Number / Maximum file duration, in seconds",
                    "uploadType": "String / Upload type: api, page, sdk",
                    "uploadUrl": "String / Address for page upload type",
                    "uploadNumber": "Number / Number of allowed uploads"
                },
                "audio": {
                    "status": "Boolean / Enable audios",
                    "extensions": "String / Supported extensions, e.g., mp3,wav,m4a",
                    "inputAccept": "String / Supported extensions, e.g., audio/mpeg,audio/x-wav,audio/mp4",
                    "maxSize": "Number / Maximum file size, in MB",
                    "maxTime": "Number / Maximum file duration, in seconds",
                    "uploadType": "String / Upload type: api, page, sdk",
                    "uploadUrl": "String / Address for page upload type",
                    "uploadNumber": "Number / Number of allowed uploads"
                },
                "document": {
                    "status": "Boolean / Enable documents",
                    "extensions": "String / Supported extensions, e.g., doc,docx,xls,xlsx,csv,ppt,pptx,pps,ppts,pdf,txt,md,markdown,rar,zip,7z,epub,mobi",
                    "inputAccept": "String / Supported extensions, e.g., application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel",
                    "maxSize": "Number / Maximum file size, in MB",
                    "uploadType": "String / Upload type: api, page, sdk",
                    "uploadUrl": "String / Address for page upload type",
                    "uploadNumber": "Number / Number of allowed uploads"
                },
                "title": {
                    "status": "Boolean / Enable titles",
                    "required": "Boolean / Is required",
                    "show": "Boolean / Whether to display input by default",
                    "length": "Number / Maximum length"
                },
                "mention": {
                    "status": "Boolean / Enable mentions",
                    "display": "Boolean / Toolbar displays mention operation button"
                },
                "hashtag": {
                    "status": "Boolean / Enable hashtags",
                    "display": "Boolean / Toolbar displays hashtag operation button",
                    "format": "Number / Hashtag format 1. Single # 2. Double"
                },
                "extend": {
                    "status": "Boolean / Enable extends",
                    "list": [
                        {
                            "fskey": "String / App Fskey",
                            "icon": "String / Icon URL",
                            "name": "String / Name",
                            "appUrl": "String / App Access URL",
                            "editorToolbar": "Boolean / Editor specific, whether to display in toolbar",
                            "editorNumber": "Number / Editor specific, available number",
                        }
                    ]
                }
            },
            "features": {
                "group": {
                    "status": "Boolean / Enable groups",
                    "required": "Boolean / Is required"
                },
                "location": {
                    "status": "Boolean / Enable locations",
                    "mapUrl": "String / Map Web page"
                },
                "anonymous": "Boolean / Support anonymous",
                "contentLength": "Number / Maximum content length"
            }
        },
        "publish": {
            "perm": {
                "draft": "Boolean / Can create new drafts",
                "publish": "Boolean / Has permission to publish",
                "review": "Boolean / Publishing requires review",
                "emailRequired": "Boolean / Email requirement met",
                "phoneRequired": "Boolean / Phone requirement met",
                "realNameRequired": "Boolean / Real name requirement met",
                "tips": [
                    "String / Request language without requirements 1",
                    "String / Request language without requirements 2"
                ]
            },
            "limit": {
                "status": "Boolean / Are there special rules",
                "isInTime": "Boolean / Is within the execution time range",
                "type": "Number / 1. Effective within a specified time period 2. Recurring effective within a specified time period every day",
                "periodStart": "String / type=1 exclusive, start date and time",
                "periodEnd": "String / type=1 exclusive, end date and time",
                "cycleStart": "String / type=2 exclusive, start time",
                "cycleEnd": "String / type=2 exclusive, end time",
                "rule": "Number / 1. Can be published but needs review 2. Forbidden to publish",
                "tip": "String / Tips"
            }
        },
        "editPerm": {
            "status": "Boolean / Has permission to edit",
            "timeLimit": "Number / Editable within a certain time",
            "editSticky": "Boolean / Editable after post is sticky",
            "editDigest": "Boolean / Editable after post is digest"
        }
    }
}
```
