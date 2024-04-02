# File Command Word

## checkUploadPerm

```php
\FresnsCmdWord::plugin('Fresns')->checkUploadPerm($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uid | Number | **required** | Uploader UID |
| usageType | String | **required** | File usage type<br>`userAvatar`<br>`userBanner`<br>`conversation`<br>`post`<br>`comment`<br>`postDraft`<br>`commentDraft` |
| usageFsid | String | **required** | File usage fsid<br>`userAvatar` parameter `uidOrUsername`<br>`userBanner` parameter `uidOrUsername`<br>`conversation` parameter `uidOrUsername`<br>`post` parameter `pid`<br>`comment` parameter `cid`<br>`postDraft` parameter `did`<br>`commentDraft` parameter `did` |
| type | Number | **required** | 1.Image / 2.Video / 3.Audio / 4.Document |
| extension | String | *optional* | File Extension Name |
| size | Number | *optional* | in `Byte` |
| duration | Number | *optional* | Audio or video duration in `seconds` |

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "usageType": "Number / Type of File Usage",
        "tableName": "String / Table Name",
        "tableColumn": "String / Column Name",
        "tableId": "Number / Primary ID",
        "tableKey": "String / FSID",
        "maxUploadNumber": "Number / Max Upload Number"
    }
}
```
:::

## getUploadToken

```php
\FresnsCmdWord::plugin('Fresns')->getUploadToken($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Image / 2.Video / 3.Audio / 4.Document |
| path | String | **required** | File Path |
| minutes | Number | **required** | Active Minutes |

- Get S3 presigned url

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "method": "String / Method",
        "url": "String / Endpoint URL",
        "headers": "Object / Headers",
        "activeMinutes": "Number / Active Minutes",
        "expiration": "String / Expiration Datetime Y-m-d H:i:s" // UTC+0
    }
}
```
:::

## uploadFile

```php
\FresnsCmdWord::plugin('Fresns')->uploadFile($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| platformId | Number | **required** | Platform number (key value from the configuration table [platforms](../../configs/dictionary/platforms.md)) |
| usageType | Number | **required** | [File usage type](../../database/numbered-description.md#type-of-file-usage) |
| tableName | String | **required** | Source table name (which table is using) |
| tableColumn | String | **required** | Source field name (which field is using) |
| tableId | Number | *optional* | Source table primary id |
| tableKey | String | *optional* | Source table key name `PrimaryHelper::fresnsPrimaryId()` |
| aid | String | *optional* | Account parameter `file_usages->account_id`<br>Stored as `aid` converted to `accounts->id` |
| uid | Number | *optional* | User parameter `file_usages->user_id`<br>Stored as `uid` converted to `users->id` |
| type | Number | **required** | 1.Image / 2.Video / 3.Audio / 4.Document |
| file | File | **required** | File |
| warningType | Number | *optional* | 1.No 2.Nudity 3.Violence 4.Sensitive |
| moreInfo | Object | *optional* | Custom |

- Either `tableId` or `tableKey` must be passed.

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // Common Data Structure -> File Info
    }
}
```
:::

## getAntiLinkFileInfo (One)

```php
\FresnsCmdWord::plugin('Fresns')->getAntiLinkFileInfo($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Image / 2.Video / 3.Audio / 4.Document |
| fileIdOrFid | String | *optional* | `files->id` or `files->fid` |

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // Common Data Structure -> File Info
    }
}
```
:::

::: details Logic Notes
- If hotlink protection is not enabled, the encapsulated function in the model can be used to output information.
- `$file->getFileInfo();`
:::

## getAntiLinkFileInfoList (Multiple)

```php
\FresnsCmdWord::plugin('Fresns')->getAntiLinkFileInfoList($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Image / 2.Video / 3.Audio / 4.Document |
| fileIdsOrFids | Array | *optional* | `files->id` or `files->fid` |

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            // Common Data Structure -> File Info
        },
        {
            // Common Data Structure -> File Info
        }
    ]
}
```
:::

::: details Logic Notes
- If hotlink protection is not enabled, the encapsulated function can be used to output information.
- `FileHelper::fresnsFileInfoListByIds('fileIdsOrFids');`
:::

## getAntiLinkFileOriginalUrl

```php
\FresnsCmdWord::plugin('Fresns')->getAntiLinkFileOriginalUrl($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Image / 2.Video / 3.Audio / 4.Document |
| fileIdOrFid | String | *optional* | `files->id` or `files->fid` |

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "originalUrl": "Concatenated from file->original_path field",
        // When original_path is empty, concatenate from files->path field as a substitute
    }
}
```
:::

::: details Logic Notes
- If hotlink protection is not enabled, the encapsulated function in the model can be used to output information.
- `$file->getFileOriginalUrl();`
:::

## logicalDeletionFiles

```php
\FresnsCmdWord::plugin('Fresns')->logicalDeletionFiles($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fileIdsOrFids | Array | **required** | `files->id` or `files->fid` |

## physicalDeletionFiles

```php
\FresnsCmdWord::plugin('Fresns')->physicalDeletionFiles($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Image / 2.Video / 3.Audio / 4.Document |
| fileIdsOrFids | Array | **required** | `files->id` or `files->fid` |

- The file types in the `fileIds` or `fids` array must belong to the same `type` category.
