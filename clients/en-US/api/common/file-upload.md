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
| usageType | String | **required** | File usage type |
| usageFsid | String | **required** | Usage target fsid |
| archiveCode | String | *optional* | `elementType` File [Archive](../global/archives.md) |
| type | String | **required** | Choose one from `image`, `video`, `audio`, `document` |
| file | File | **required** |  |
| warning | String | *optional* | File Warning `none`, `nudity`, `violence`, `sensitive` |
| moreInfo | String | *optional* | File custom information (Object to String) |

**Request Description**

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
        // Common Data Structure -> File Info
    }
}
```

- [Common Data Structure -> File Info](../../reference/data/file.md)
