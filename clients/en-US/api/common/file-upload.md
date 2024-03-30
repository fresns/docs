# File Upload

- Endpoint Path: `/api/fresns/common/v1/file/upload`
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
| file | File | **required** |  |
| warning | String | *optional* | File Warning `none`, `nudity`, `violence`, `sensitive` |
| moreInfo | String | *optional* | File custom information (Object to String) |

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
