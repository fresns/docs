# FileHelper

`App\Helpers\FileHelper`

## Get Storage Config Info by File Type

```php
FileHelper::fresnsFileStorageConfigByType($type);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | [File Type Number](../../database/numbered-description.md#file-type) |

::: details Return Example
```json
{
    "service": "", // plugin fskey
    "secretId": "",
    "secretKey": "",
    "secretApp": "",
    "bucketName": "",
    "bucketArea": "",
    "bucketDomain": "",
    "antiLinkStatus": "",
    "antiLinkKey": "",
    "antiLinkExpire": "",
    "storageConfigStatus": true, // true means that the storage is fully configured
    "antiLinkConfigStatus": false, // false means that anti-theft links are not enabled
}
```
:::

## Get File Storage Path

```php
FileHelper::fresnsFileStoragePath($fileType, $usageType);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fileType | Number | **required** | 1.Image / 2.Video / 3.Audio / 4.Document |
| usageType | Number | **required** | [Type of File Usage](../../database/numbered-description.md#type-of-file-usage) |

## Get Supported File Formats

```php
FileHelper::fresnsFileAcceptByType($type);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | *optional* | 1.Image / 2.Video / 3.Audio / 4.Document |

- Mime format, multiple values separated by commas
- If `type` is not passed, output all

## Get Single Information by File ID or FID

```php
FileHelper::fresnsFileInfoById($fileIdOrFid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fileIdOrFid | String | **required** | `files->id` or `files->fid` |

- The output result will check the anti-leech configuration, and if enabled, output the anti-leech file information.
- [File Information Structure](../../extensions/plugin/storage.md#file-information-structure)

## Get Multiple Information by File ID or FID

```php
FileHelper::fresnsFileInfoListByIds($fileIdsOrFids);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fileIdsOrFids | Array | **required** | `files->id` or `files->fid` |

- The output result will check the anti-leech configuration, and if enabled, output the anti-leech file information.

::: details Example
```json
{
    "images": [
        {
            // Common Data Structure -> File Info
        }
    ],
    "videos": [
        {
            // Common Data Structure -> File Info
        }
    ],
    "audios": [
        {
            // Common Data Structure -> File Info
        }
    ],
    "documents": [
        {
            // Common Data Structure -> File Info
        }
    ],
}
```
:::

## Get File Information List by Table Field

```php
FileHelper::fresnsFileInfoListByTableColumn($tableName, $tableColumn, $tableId, $tableKey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| tableName | String | **required** | Table Name |
| tableColumn | String | **required** | Table Column Name |
| tableId | Number | *optional* | Primary ID |
| tableKey | String | *optional* | Primary Key Name |

- Either `tableId` or `tableKey` must be passed as a parameter
- The output result will check the anti-leech configuration, and if enabled, output the anti-leech file information.

::: details Example
```json
{
    "images": [
        {
            // Common Data Structure -> File Info
        }
    ],
    "videos": [
        {
            // Common Data Structure -> File Info
        }
    ],
    "audios": [
        {
            // Common Data Structure -> File Info
        }
    ],
    "documents": [
        {
            // Common Data Structure -> File Info
        }
    ],
}
```
:::

## Get File URL by File Field

```php
FileHelper::fresnsFileUrlByTableColumn($idColumn, $urlColumn, $urlType);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| idColumn | Number | **required** | file_id field, e.g. `users->decorate_file_id` |
| urlColumn | String | **required** | file_url field, e.g. `users->decorate_file_url` |
| urlType | String | *optional* | URL type, if not provided, the default `imageConfigUrl` will be used |

::: details urlType
- `imageConfigUrl`
- `imageRatioUrl`
- `imageSquareUrl`
- `imageBigUrl`
- `videoPosterUrl`
- `videoUrl`
- `audioUrl`
- `documentPreviewUrl`
:::

## Get Original URL by File ID or FID

```php
FileHelper::fresnsFileOriginalUrlById($fileIdOrFid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fileIdOrFid | String | **required** | `files->id` or `files->fid` |

- The output result will check the anti-leech configuration, and if enabled, output the anti-leech file information.
