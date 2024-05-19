# File Command Word

## checkUploadPerm

```php
\FresnsCmdWord::plugin('Fresns')->checkUploadPerm($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uid | Number | **required** | Uploader UID |
| usageType | String | **required** | File usage type |
| usageFsid | String | **required** | Usage target fsid |
| archiveCode | String | *optional* | `elementType` File Archive |
| type | Number | **required** | 1.Image / 2.Video / 3.Audio / 4.Document |
| extension | String | *optional* | File Extension Name |
| size | Number | *optional* | in `Byte` |
| duration | Number | *optional* | Audio or video duration in `seconds` |

::: details Usage Type and Fsid
| usageType | usageFsid | archiveCode |
| --- | --- | --- |
| `userAvatar` | User `uidOrUsername` |  |
| `userBanner` | User `uidOrUsername` |  |
| `userArchive` | User `uidOrUsername` | Archive `code` |
| `conversation` | Receives the user `uidOrUsername` |  |
| `post` | Post ID `pid` |  |
| `comment` | Comment ID `comment` |  |
| `postDraft` | Post Draft ID `did` |  |
| `postDraftArchive` | Post Draft ID `did` | Archive `code` |
| `commentDraft` | Comment Draft ID `did` |  |
| `commentDraftArchive` | Comment Draft ID `did` | Archive `code` |
:::

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
        "type": "presignedUrl",
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
| file | File | **required** | File |
| type | Number | **required** | 1.Image / 2.Video / 3.Audio / 4.Document |
| warningType | Number | *optional* | 1.No 2.Nudity 3.Violence 4.Sensitive |
| usageType | Number | **required** | [File usage type](../../database/numbered-description.md#type-of-file-usage) |
| platformId | Number | **required** | Platform number (key value from the configuration table [platforms](../../configs/dictionary/platforms.md)) |
| tableName | String | **required** | Source table name (which table is using) |
| tableColumn | String | **required** | Source field name (which field is using) |
| tableId | Number | *optional* | Source table primary id |
| tableKey | String | *optional* | Source table key name `PrimaryHelper::fresnsPrimaryId()` |
| moreInfo | Object | *optional* | Custom Info |
| aid | String | *optional* | Account parameter `file_usages->account_id`<br>Stored as `aid` converted to `accounts->id` |
| uid | Number | *optional* | User parameter `file_usages->user_id`<br>Stored as `uid` converted to `users->id` |

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

## getTemporaryUrlFileInfo (One)

```php
\FresnsCmdWord::plugin('Fresns')->getTemporaryUrlFileInfo($wordBody);
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
- If temporary url is not enabled, the encapsulated function in the model can be used to output information.
- `$file->getFileInfo();`
:::

## getTemporaryUrlFileInfoList (Multiple)

```php
\FresnsCmdWord::plugin('Fresns')->getTemporaryUrlFileInfoList($wordBody);
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
- If temporary url is not enabled, the encapsulated function can be used to output information.
- `FileHelper::fresnsFileInfoListByIds('fileIdsOrFids');`
:::

## getTemporaryUrlOfOriginalFile

```php
\FresnsCmdWord::plugin('Fresns')->getTemporaryUrlOfOriginalFile($wordBody);
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
- If temporary url is not enabled, the encapsulated function in the model can be used to output information.
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
