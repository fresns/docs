# Upload File

- Endpoint Path: `/api/v2/common/upload-file`
- Method: `POST`
- Request: `multipart/form-data`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Form-data Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| usageType | Number | **required** | [File usage type](../../database/number.md#type-of-file-usage) |
| tableName | String | **required** | Source table name<br>`users` [/api/v2/user/edit](../user/edit.md)<br>`posts`<br>`comments`<br>`conversation_messages` [/api/v2/conversation/send-message](../message/conversation-send.md)<br>`post_logs` [/api/v2/editor/{type}/{draftId}](../editor/update.md)<br>`comment_logs` [/api/v2/editor/{type}/{draftId}](../editor/update.md) |
| tableColumn | String | **required** | Source column name, default is `id` |
| tableId | Number | *optional* | Source table primary ID |
| tableKey | String | *optional* | Source table key name |
| type | String | **required** | Choose one from `image`, `video`, `audio`, `document` |
| uploadMode | String | **required** | Choose one from<br>`file` Upload file<br>`fileInfo` Upload file information |
| fileInfo | Array | *optional* | For `uploadMode=fileInfo` only, upload file information array |
| moreJson | Object | *optional* | For `uploadMode=file` only, optional |
| file | File | *optional* | For `uploadMode=file` only, upload file |

**Request Description**

- The `fileInfo` parameter example is shown below. The parameter types can be found in the [files](../../database/systems/files.md) table structure.

```json
[
    {
        "name": "Store to files->name",
        "mime": "Store to files->mime",
        "extension": "Store to files->extension",
        "size": "Store to files->size", // Unit Byte
        "md5": "Store to files->md5",
        "sha": "Store to files->sha",
        "shaType": "Store to files->sha_type",
        "disk": "Store to files->disk",
        "path": "Store to files->path",
        "imageHandlePosition": "Store to files->image_handle_position",
        "imageWidth": "Image specific, store to files->image_width",
        "imageHeight": "Image specific, store to files->image_height",
        "videoTime": "Video specific, store to files->video_time",
        "videoPosterPath": "Video specific, store to files->video_poster_path",
        "audioTime": "Audio specific, store to files->audio_time",
        "transcodingState": "Audio and video specific, store to files->transcoding_state",
        "moreJson": {
            // Extended information, store to files->more_json
        },
        "originalPath": "Store to files->original_path",
        "rating": "Store to file_usages->rating",
    }
]
```

## Return

**uploadMode = file**

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // Common Data Structure -> File Info
    }
}
```

**uploadMode = fileInfo**

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            // Common Data Structure -> File Info
        }
    ]
}
```
