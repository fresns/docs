# User Edit

- Endpoint Path: `/api/v2/user/edit`
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
| username | String | *optional* | Username (leave empty to not modify) |
| nickname | String | *optional* | User nickname (leave empty to not modify) |
| avatarFid | String | *optional* | Avatar image file FID (leave empty to not modify) |
| avatarUrl | String | *optional* | Avatar image URL (leave empty to not modify) |
| bannerFid | String | *optional* | Background banner image file FID (leave empty to not modify) |
| bannerUrl | String | *optional* | Background banner image URL (leave empty to not modify) |
| gender | Number | *optional* | Gender (leave empty to not modify) |
| birthday | String | *optional* | Birthday (leave empty to not modify, format: Y-m-d H:i:s) |
| bio | String | *optional* | Bio (leave empty to not modify) |
| location | String | *optional* | Location (leave empty to not modify) |
| conversationLimit | Number | *optional* | Conversation settings (leave empty to not modify) |
| commentLimit | Number | *optional* | Comment settings (leave empty to not modify) |
| timezone | String | *optional* | Preferred timezone (leave empty to not modify) |
| archives | Array | *optional* | Extended information (leave empty to not modify) |
| deviceToken | String | *optional* | iOS or Android device Token (leave empty to not modify) |

**Request Description**

- Leaving both `avatarFid` and `avatarUrl` empty means not changing them, choose one when passing parameters.
- Leaving both `bannerFid` and `bannerUrl` empty means not changing them, choose one when passing parameters.
- If using `fid` for avatar and background banner images, first use the [file upload interface](../common/upload-file.md), then pass the obtained `fid` as a parameter.
- Example of upload parameters:
    - `tableName` = `users`
    - `tableColumn` = `avatar_file_id` or `banner_file_id`
    - `tableKey` = current user's uid or username
- Example of extended information:

```json
[
    {
        "code": "code",
        "value": "value",
        "isPrivate": false, // Private or not (public display or not)
        "fskey": null
    },
    {
        "code": "code",
        "value": "value",
        "isPrivate": true,
        "fskey": "Fresns"
    }
]
```

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
