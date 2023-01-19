# 上传文件

- 接口地址：`/api/v2/common/upload-file`
- 请求方式：`POST`
- 传参方式：`multipart/form-data`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## Form-data 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| usageType | Number | YES | 参见数据库[文件用途类型](../../database/number.md#文件用途类型) |
| tableName | String | YES | 来源表名 |
| tableColumn | String | YES | 来源字段名，默认为 id |
| tableId | Number | NO | 来源表主键 ID |
| tableKey | String | NO | 来源表键名<br>`tableName=configs` 传参 `configs -> item_key`<br>`tableName=accounts` 传参 `accounts -> aid`<br>`tableName=users` 传参 `users -> uid 或 username`<br>`tableName=posts` 传参 `posts -> pid`<br>`tableName=comments` 传参 `comments -> cid`<br>`tableName=extends` 传参 `extends -> eid`<br>`tableName=groups` 传参 `groups -> gid`<br>`tableName=hashtags` 传参 `hashtags -> slug` |
| type | String | YES | 四选一 `image`,`video`,`audio`,`document` |
| uploadMode | String | YES | 二选一<br>`file` 上传文件<br>`fileInfo` 上传文件信息 |
| fileInfo | Array | NO | `uploadMode=fileInfo` 专用，上传文件信息数组 |
| moreJson | Object | NO | `uploadMode=file` 专用，可选 |
| file | File | NO | `uploadMode=file` 专用，上传文件 |

**接口使用说明**

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

## 返回结果

**uploadMode = file**

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // 通用数据结构->文件信息
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
            // 通用数据结构->文件信息
        }
    ]
}
```
