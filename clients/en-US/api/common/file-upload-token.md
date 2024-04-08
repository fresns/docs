# Make S3 Upload File Token

- Endpoint Path: `/api/fresns/common/v1/file/upload-token`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Body Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| usageType | String | **required** | File usage type<br>`userAvatar`<br>`userBanner`<br>`conversation`<br>`post`<br>`comment`<br>`postDraft`<br>`commentDraft` |
| usageFsid | String | **required** | File usage fsid<br>`userAvatar` parameter `uidOrUsername`<br>`userBanner` parameter `uidOrUsername`<br>`conversation` parameter `uidOrUsername`<br>`post` parameter `pid`<br>`comment` parameter `cid`<br>`postDraft` parameter `did`<br>`commentDraft` parameter `did` |
| type | String | **required** | Choose one from `image`, `video`, `audio`, `document` |
| name | String | **required** | File Name |
| mime | String | **required** | File Mime Type |
| extension | String | **required** | File Extension Name |
| size | Number | **required** | in `Byte` |
| sha | String | *optional* | File SHA |
| shaType | String | *optional* | File SHA Type |
| width | Number | *optional* | `Image-Only`, in `px` |
| height | Number | *optional* | `Image-Only`, in `px` |
| duration | Number | *optional* | `Audio or Video-Only`, in `Seconds` |
| warning | String | *optional* | File Warning `none`, `nudity`, `violence`, `sensitive` |
| moreInfo | Object | *optional* |  |

- Get S3 presigned url
- [Working with presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html)

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "fid": "String / File ID",
        "method": "String / Method",
        "url": "String / Upload Endpoint URL",
        "headers": "Object / Headers",
        "activeMinutes": "Number / Active Minutes",
        "expiration": "String / Expiration Datetime Y-m-d H:i:s" // UTC+0
    }
}
```
