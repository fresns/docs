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
    - `api` Using the upload interface [/api/fresns/v1/common/file-upload](../common/file-upload.md)
    - `page` Use WebView to access the address of the uploadUrl parameter to upload, see [callback](../../reference/callback/index.md) for rules.
    - `sdk` Use [S3 SDK to upload](../common/file-upload-token.md), after upload, update the file information as successfully uploaded [/api/fresns/v1/common/file-info](../common/file-update.md)

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "editor": {
            "sticker": "Boolean / Enable stickers",
            "image": {
                "status": "Boolean / Enable images",
                "extensions": "String / Supported extensions, e.g., png,gif,jpg,jpeg,bmp,heic",
                "inputAccept": "String / Supported extensions, e.g., image/png,image/gif,image/jpeg,image/jpeg,image/bmp",
                "maxSize": "Number / Maximum file size, in MB",
                "maxUploadNumber": "Number / Number of allowed uploads",
                "uploadType": "String / Upload type: api, page, sdk",
                "uploadUrl": "String / Address for page upload type"
            },
            "video": {
                "status": "Boolean / Enable videos",
                "extensions": "String / Supported extensions, e.g., wmv,rm,mov,mpeg,mp4,3gp,flv,avi,rmvb",
                "inputAccept": "String / Supported extensions, e.g., video/x-ms-wmv,application/vnd.rn-realmedia,video/quicktime,video/mpeg,video/mp4,video/3gpp,video/x-flv,video/x-msvideo,application/vnd.rn-realmedia-vbr",
                "maxSize": "Number / Maximum file size, in MB",
                "maxDuration": "Number / Maximum file duration, in seconds",
                "maxUploadNumber": "Number / Number of allowed uploads",
                "uploadType": "String / Upload type: api, page, sdk",
                "uploadUrl": "String / Address for page upload type"
            },
            "audio": {
                "status": "Boolean / Enable audios",
                "extensions": "String / Supported extensions, e.g., mp3,wav,m4a",
                "inputAccept": "String / Supported extensions, e.g., audio/mpeg,audio/x-wav,audio/mp4",
                "maxSize": "Number / Maximum file size, in MB",
                "maxDuration": "Number / Maximum file duration, in seconds",
                "maxUploadNumber": "Number / Number of allowed uploads",
                "uploadType": "String / Upload type: api, page, sdk",
                "uploadUrl": "String / Address for page upload type",
            },
            "document": {
                "status": "Boolean / Enable documents",
                "extensions": "String / Supported extensions, e.g., doc,docx,xls,xlsx,csv,ppt,pptx,pps,ppts,pdf,txt,md,markdown,rar,zip,7z,epub,mobi",
                "inputAccept": "String / Supported extensions, e.g., application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel",
                "maxSize": "Number / Maximum file size, in MB",
                "maxUploadNumber": "Number / Number of allowed uploads",
                "uploadType": "String / Upload type: api, page, sdk",
                "uploadUrl": "String / Address for page upload type"
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
                        "isInToolbar": "Boolean / Whether to display in toolbar"
                    }
                ]
            },
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
        },
        "publish": {
            "perm": {
                "draft": "Boolean / Can create new drafts",
                "publish": "Boolean / Has permission to publish",
                "review": "Boolean / Publishing requires review",
                "requiredEmail": "Boolean / The account must have been filled in with an email address",
                "requiredPhone": "Boolean / The account must be filled with a mobile phone number",
                "requiredKyc": "Boolean / The account must be KYC certified",
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
            "status": "Boolean / Whether to enable editing",
            "timeLimit": "Number / How long after publication can you edit",
            "editSticky": "Boolean / Editable after post is sticky",
            "editDigest": "Boolean / Editable after post is digest"
        }
    }
}
```
