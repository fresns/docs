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
| usageType | String | **required** | File usage type |
| usageFsid | String | **required** | Usage target fsid |
| archiveCode | String | *optional* | `elementType` File [Archive](../global/archives.md) |
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

**Request Description**

- Get S3 presigned url
- [Working with presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html)

| usageType | usageFsid | archiveCode |
| --- | --- | --- |
| `userAvatar` | User `uidOrUsername` |  |
| `userBanner` | User `uidOrUsername` |  |
| `userArchive` | User `uidOrUsername` | [Archive](../global/archives.md) `code` |
| `conversation` | Receives the user `uidOrUsername` |  |
| `post` | Post ID `pid` |  |
| `comment` | Comment ID `comment` |  |
| `postDraft` | Post Draft ID `did` |  |
| `postDraftArchive` | Post Draft ID `did` | [Archive](../global/archives.md) `code` |
| `commentDraft` | Comment Draft ID `did` |  |
| `commentDraftArchive` | Comment Draft ID `did` | [Archive](../global/archives.md) `code` |

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
