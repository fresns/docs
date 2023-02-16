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
| tableName | String | **required** | 来源表名<br>`users` [/api/v2/user/edit](../user/edit.md)<br>`posts`<br>`comments`<br>`conversation_messages` [/api/v2/conversation/send-message](../message/conversation-send.md)<br>`post_logs` [/api/v2/editor/{type}/{draftId}](../editor/update.md)<br>`comment_logs` [/api/v2/editor/{type}/{draftId}](../editor/update.md) |
| tableColumn | String | **required** | 来源字段名，默认填参 `id` |
| tableId | Number | *optional* | 来源表主键 ID |
| tableKey | String | *optional* | 来源表键名 |
| type | String | **required** | 四选一 `image`,`video`,`audio`,`document` |
| uploadMode | String | **required** | 二选一<br>`file` 上传文件<br>`fileInfo` 上传文件信息 |
| fileInfo | Array | *optional* | `uploadMode=fileInfo` 专用，上传文件信息数组 |
| moreJson | Object | *optional* | `uploadMode=file` 专用，可选 |
| file | File | *optional* | `uploadMode=file` 专用，上传文件 |

**Request Description**

- 参数 fileInfo 示例如下，参数类型可查看 [files](../../database/systems/files.md) 表结构。

```json
[
    {
        "name": "存储到 files > name",
        "mime": "存储到 files > mime",
        "extension": "存储到 files > extension",
        "size": "存储到 files > size", // 单位 Byte
        "md5": "存储到 files > md5",
        "sha": "存储到 files > sha",
        "shaType": "存储到 files > sha_type",
        "disk": "存储到 files > disk",
        "path": "存储到 files > path",
        "imageHandlePosition": "存储到 files > image_handle_position",
        "imageWidth": "图片专用，存储到 files > image_width",
        "imageHeight": "图片专用，存储到 files > image_height",
        "videoTime": "视频专用，存储到 files > video_time",
        "videoPosterPath": "视频专用，存储到 files > video_poster_path",
        "audioTime": "音频专用，存储到 files > audio_time",
        "transcodingState": "音视频专用，存储到 files > transcoding_state",
        "moreJson": {
            // 扩展信息，存储到 files > more_json
        },
        "originalPath": "存储到 files > original_path",
        "rating": "存储到 file_usages > rating",
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
