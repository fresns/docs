# File Uploads

- Endpoint Path: `/api/fresns/common/v1/file/uploads`
- Method: `POST`
- Request: `multipart/form-data`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Form-data Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| usageType | String | **required** | File usage type<br>`userAvatar`<br>`userBanner`<br>`conversation`<br>`post`<br>`comment`<br>`postDraft`<br>`commentDraft` |
| usageFsid | String | **required** | File usage fsid<br>`userAvatar` parameter `uidOrUsername`<br>`userBanner` parameter `uidOrUsername`<br>`conversation` parameter `uidOrUsername`<br>`post` parameter `pid`<br>`comment` parameter `cid`<br>`postDraft` parameter `did`<br>`commentDraft` parameter `did` |
| type | String | **required** | Choose one from `image`, `video`, `audio`, `document` |
| uploadMode | String | **required** | Choose one from<br>`file` Upload file<br>`fileInfo` Upload file information |
| file | File | *optional* | For `uploadMode=file` only, upload file |
| fileInfo | String | *optional* | For `uploadMode=fileInfo` only, upload file information (Object to String) |
| warning | String | *optional* | File Warning `nudity`, `violence`, `sensitive` |
| moreInfo | String | *optional* | File custom information (Object to String) |

**Request Description**

- The `fileInfo` parameter example is shown below.

```json
{
    "name": "Store to files->name", // required
    "mime": "Store to files->mime",
    "extension": "Store to files->extension", // required
    "size": "Store to files->size", // required, Unit Byte
    "md5": "Store to files->md5",
    "sha": "Store to files->sha",
    "shaType": "Store to files->sha_type",
    "path": "Store to files->path", // required
    "imageWidth": "Image specific, store to files->image_width",
    "imageHeight": "Image specific, store to files->image_height",
    "videoTime": "Video specific, store to files->video_time",
    "videoPosterPath": "Video specific, store to files->video_poster_path",
    "audioTime": "Audio specific, store to files->audio_time",
    "transcodingState": "Audio and video specific, store to files->transcoding_state",
    "originalPath": "Store to files->original_path",
    "sortOrder": "Store to file_usages->sort_order",
}
```

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // Common Data Structure -> File Info
    }
}
```

- [Common Data Structure -> File Info](../../reference/data/file.md)
