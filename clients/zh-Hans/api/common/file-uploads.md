# 上传文件

- 接口地址：`/api/fresns/v1/common/file/uploads`
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
| usageType | String | YES | 文件用途类型<br>`userAvatar`<br>`userBanner`<br>`conversation`<br>`post`<br>`comment`<br>`postDraft`<br>`commentDraft` |
| usageFsid | String | YES | 文件用途 fsid<br>`userAvatar` 传参 `uidOrUsername`<br>`userBanner` 传参 `uidOrUsername`<br>`conversation` 传参 `uidOrUsername`<br>`post` 传参 `pid`<br>`comment` 传参 `cid`<br>`postDraft` 传参 `did`<br>`commentDraft` 传参 `did` |
| type | String | YES | 四选一 `image`,`video`,`audio`,`document` |
| uploadMode | String | YES | 二选一<br>`file` 上传文件<br>`fileInfo` 上传文件信息 |
| file | File | NO | `uploadMode=file` 专用，上传文件 |
| fileInfo | String | NO | `uploadMode=fileInfo` 专用，上传文件信息对象，转换为字符串传参 (Object to String) |
| warning | String | NO | 文件警告 `nudity`, `violence`, `sensitive` |
| moreInfo | String | NO | 文件自定义信息，转换为字符串传参 (Object to String) |

**接口使用说明**

- 参数 `fileInfo` 示例如下

```json
{
    "name": "存储到 files->name", // 必须
    "mime": "存储到 files->mime",
    "extension": "存储到 files->extension", // 必须
    "size": "存储到 files->size", // 必须，单位 Byte
    "md5": "存储到 files->md5",
    "sha": "存储到 files->sha",
    "shaType": "存储到 files->sha_type",
    "path": "存储到 files->path", // 必须
    "imageWidth": "图片专用，存储到 files->image_width",
    "imageHeight": "图片专用，存储到 files->image_height",
    "videoTime": "视频专用，存储到 files->video_time",
    "videoPosterPath": "视频专用，存储到 files->video_poster_path",
    "audioTime": "音频专用，存储到 files->audio_time",
    "transcodingState": "音视频专用，存储到 files->transcoding_state",
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

- [通用数据结构->文件信息](../../reference/data/file.md)
