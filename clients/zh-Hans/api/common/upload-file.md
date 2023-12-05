# 上传文件

- 接口地址：`/api/fresns/v1/common/upload-file`
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
| usageType | String | YES | 文件用途类型<br>`userAvatar`<br>`userBanner`<br>`conversationMessage`<br>`post`<br>`comment`<br>`postDraft`<br>`commentDraft` |
| usageFsid | String | YES | 文件用途 fsid<br>`userAvatar` 传参 `uidOrUsername`<br>`userBanner` 传参 `uidOrUsername`<br>`conversationMessage` 传参 `cvid`<br>`post` 传参 `pid`<br>`comment` 传参 `cid`<br>`postDraft` 传参 `did`<br>`commentDraft` 传参 `did` |
| type | String | YES | 四选一 `image`,`video`,`audio`,`document` |
| uploadMode | String | YES | 二选一<br>`file` 上传文件<br>`fileInfo` 上传文件信息 |
| file | File | NO | `uploadMode=file` 专用，上传文件 |
| moreInfo | Object | NO | `uploadMode=file` 专用，可选 |
| fileInfo | Object | NO | `uploadMode=fileInfo` 专用，上传文件信息数组 |

**接口使用说明**

- 参数 `fileInfo` 示例如下，参数类型可查看 [files](../../database/systems/files.md) 表结构。

```json
{
    "name": "存储到 files->name",
    "mime": "存储到 files->mime",
    "extension": "存储到 files->extension",
    "size": "存储到 files->size", // 单位 Byte
    "md5": "存储到 files->md5",
    "sha": "存储到 files->sha",
    "shaType": "存储到 files->sha_type",
    "disk": "存储到 files->disk",
    "path": "存储到 files->path",
    "imageHandlePosition": "存储到 files->image_handle_position",
    "imageWidth": "图片专用，存储到 files->image_width",
    "imageHeight": "图片专用，存储到 files->image_height",
    "videoTime": "视频专用，存储到 files->video_time",
    "videoPosterPath": "视频专用，存储到 files->video_poster_path",
    "audioTime": "音频专用，存储到 files->audio_time",
    "transcodingState": "音视频专用，存储到 files->transcoding_state",
    "moreInfo": {
        // 扩展信息，存储到 files->more_info
    },
    "originalPath": "存储到 files->original_path",
    "sortOrder": "存储到 file_usages->sort_order",
}
```

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // 通用数据结构->文件信息
    }
}
```
