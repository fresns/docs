# FileHelper

`App\Helpers\FileHelper`

## 根据文件类型输出存储配置信息

```php
FileHelper::fresnsFileStorageConfigByType($type);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | [File Type Number](../../database/number.md#file-type) |

::: details Return Example
```json
{
    "service": "", // plugin unikey
    "secretId": "",
    "secretKey": "",
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

## 获取文件存储路径

```php
FileHelper::fresnsFileStoragePath($fileType, $usageType);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fileType | Number | **required** | 1.Image / 2.Video / 3.Audio / 4.Document |
| usageType | Number | **required** | [Type of File Usage](../../database/number.md#type-of-file-usage) |

## 获取文件支持的格式

```php
FileHelper::fresnsFileAcceptByType($type);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | *optional* | 1.Image / 2.Video / 3.Audio / 4.Document |

- Mime 格式，多个以英文逗号隔开
- 不传 type 则输出全部

## 根据文件 ID 或 FID 获取单个信息

```php
FileHelper::fresnsFileInfoById($fileIdOrFid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fileIdOrFid | String | **required** | `files->id` or `files->fid` |

- 输出结果会判断防盗链配置，如果开启则输出防盗链文件信息。
- [查看文件信息格式](../../extensions/plugin/storage.md#file-information-structure)

## 根据文件 ID 或 FID 获取多个信息

```php
FileHelper::fresnsFileInfoListByIds($fileIdsOrFids);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fileIdsOrFids | Array | **required** | `files->id` or `files->fid` |

- 输出结果会判断防盗链配置，如果开启则输出防盗链文件信息。

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

## 根据表字段获取文件信息列表

```php
FileHelper::fresnsFileInfoListByTableColumn($tableName, $tableColumn, $tableId, $tableKey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| tableName | String | **required** | Table Name |
| tableColumn | String | **required** | Table Column Name |
| tableId | Number | *optional* | Primary Key ID |
| tableKey | String | *optional* | Primary Key Name |

- `tableId` 或 `tableKey` 二选一传参
- 输出结果会判断防盗链配置，如果开启则输出防盗链文件信息。

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

## 根据文件字段输出指定链接

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

## 根据文件 ID 或 FID 获取源文件链接

```php
FileHelper::fresnsFileOriginalUrlById($fileIdOrFid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fileIdOrFid | String | **required** | `files->id` or `files->fid` |

- 输出结果会判断防盗链配置，如果开启则输出防盗链文件信息。
