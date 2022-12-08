# Upload File

- Endpoint Path: `/api/v2/common/upload-file`
- Method: `POST`
- Request: `multipart/form-data`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| aidToken | **required** | **required** |
| uid | **required** | **required** |
| uidToken | **required** | **required** |

## Form-data Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| usageType | Number | **required** | 参见数据库[文件用途类型](../../database/number.md#文件用途类型) |
| tableName | String | **required** | 来源表名 |
| tableColumn | String | **required** | 来源字段名，默认为 id |
| tableId | Number | *optional* | 来源表主键 ID |
| tableKey | String | *optional* | 来源表键名<br>`tableName=configs` 传参 `configs -> item_key`<br>`tableName=accounts` 传参 `accounts -> aid`<br>`tableName=users` 传参 `users -> uid 或 username`<br>`tableName=posts` 传参 `posts -> pid`<br>`tableName=comments` 传参 `comments -> cid`<br>`tableName=extends` 传参 `extends -> eid`<br>`tableName=groups` 传参 `groups -> gid`<br>`tableName=hashtags` 传参 `hashtags -> slug` |
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
        "path": "存储到 files > path",
        "imageWidth": "图片专用，存储到 files > image_width",
        "imageHeight": "图片专用，存储到 files > image_height",
        "videoTime": "视频专用，存储到 files > video_time",
        "videoCoverPath": "视频专用，存储到 files > video_cover_path",
        "videoGifPath": "视频专用，存储到 files > video_gif_path",
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
