# File Command Word

## getUploadToken

```php
\FresnsCmdWord::plugin($unikey)->getUploadToken($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Image / 2.Video / 3.Audio / 4.Document |
| name | String | **required** | The filename of this upload |
| expireTime | Number | **required** | Expiration time, in seconds |

- Clients can upload directly to the cloud service provider with a Token using the SDK.
- [Storage Service Provider Number](../../database/dictionary/storages.md)

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "storageId": "Number / Storage service provider ID, see dictionary key-value",
        "token": "String / SDK upload token requested from the plugin",
        "expireTime": "Number / Expiration time, in seconds" // If not available, output null
    }
}
```
:::

## uploadFile

```php
\FresnsCmdWord::plugin($unikey)->uploadFile($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| platformId | Number | **required** | Platform number (key value from the configuration table [platforms](../../database/dictionary/platforms.md)) |
| usageType | Number | **required** | [File usage type](../../database/number.md#type-of-file-usage) |
| tableName | String | **required** | Source table name (which table is using) |
| tableColumn | String | **required** | Source field name (which field is using) |
| tableId | Number | *optional* | Source table primary id |
| tableKey | String | *optional* | Source table key name `PrimaryHelper::fresnsPrimaryId()` |
| aid | String | *optional* | Account parameter `file_usages->account_id`<br>Stored as `aid` converted to `accounts->id` |
| uid | Number | *optional* | User parameter `file_usages->user_id`<br>Stored as `uid` converted to `users->id` |
| type | Number | **required** | 1.Image / 2.Video / 3.Audio / 4.Document |
| moreJson | String | *optional* | Custom |
| file | File | **required** | File |

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

::: details Logic Notes
- The storage method can call the main program's encapsulated function [FileUtility::saveFileInfoToDatabase($bodyInfo, $diskPath, $file)](../utilities/file.md#save-file-information-to-database)
- If the file type is video `type=2`, the video cover image also needs to be processed, corresponding to the field `file->video_poster_path`.
- View the returned result [File Information Structure](../../extensions/plugin/storage.md#file-information-structure)
:::

## uploadFileInfo

```php
\FresnsCmdWord::plugin($unikey)->uploadFileInfo($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| platformId | Number | **required** | Platform number (key value from the configuration table [platforms](../../database/dictionary/platforms.md)) |
| usageType | Number | **required** | [File usage type](../../database/number.md#type-of-file-usage) |
| tableName | String | **required** | Source table name |
| tableColumn | String | **required** | Source field name |
| tableId | Number | *optional* | Source table primary id |
| tableKey | String | *optional* | Source table key name `PrimaryHelper::fresnsPrimaryId()` |
| aid | String | *optional* | Account parameter `file_usages->account_id`<br>Stored as `aid` converted to `accounts->id` |
| uid | Number | *optional* | User parameter `file_usages->user_id`<br>Stored as `uid` converted to `users->id` |
| type | Number | **required** | 1.Image / 2.Video / 3.Audio / 4.Document |
| fileInfo | Array | **required** | File information array |

- Either `tableId` or `tableKey` must be passed.

::: details fileInfo Example
```json
[
    {
        "name": "Store to files->name",
        "mime": "Store to files->mime",
        "extension": "Store to files->extension",
        "size": "Store to files->size", // Unit Byte
        "md5": "Store to files->md5",
        "sha": "Store to files->sha",
        "shaType": "Store to files->sha_type",
        "path": "Store to files->path",
        "imageWidth": "Image specific, store to files->image_width",
        "imageHeight": "Image specific, store to files->image_height",
        "videoTime": "Video specific, store to files->video_time",
        "videoPosterPath": "Video specific, store to files->video_poster_path",
        "audioTime": "Audio specific, store to files->audio_time",
        "transcodingState": "Audio and video specific, Store to files->transcoding_state",
        "moreJson": {
            // Extended information, store to files->more_json
        },
        "originalPath": "Store to files->original_path",
        "rating": "Store to file_usages->rating",
    }
]
```
:::

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
- The storage method can call the main program's encapsulated function [FileUtility::uploadFileInfo($bodyInfo)](../utilities/file.md#upload-file-information)
- If the file type is video `type=2`, the video cover image also needs to be processed, corresponding to the field `file->video_poster_path`.
- View the returned result [File Information Structure](../../extensions/plugin/storage.md#file-information-structure)
:::

## getAntiLinkFileInfo (One)

```php
\FresnsCmdWord::plugin($unikey)->getAntiLinkFileInfo($wordBody)
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
\FresnsCmdWord::plugin($unikey)->getAntiLinkFileInfoList($wordBody)
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
\FresnsCmdWord::plugin($unikey)->getAntiLinkFileOriginalUrl($wordBody)
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
\FresnsCmdWord::plugin($unikey)->logicalDeletionFiles($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fileIdsOrFids | Array | **required** | `files->id` or `files->fid` |

## physicalDeletionFiles

```php
\FresnsCmdWord::plugin($unikey)->physicalDeletionFiles($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Image / 2.Video / 3.Audio / 4.Document |
| fileIdsOrFids | Array | **required** | `files->id` or `files->fid` |

- The file types in the `fileIds` or `fids` array must belong to the same `type` category.
