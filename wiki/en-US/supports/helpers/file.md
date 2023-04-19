# FileHelper

`App\Helpers\FileHelper`

## 根据文件类型输出存储配置信息

```php
FileHelper::fresnsFileStorageConfigByType($type);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 类型 ID |

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
    "storageConfigStatus": true, // true 存储已经配置完整
    "antiLinkConfigStatus": false, // false 未开启防盗链
}
```
:::

## 获取文件存储路径

```php
FileHelper::fresnsFileStoragePath($fileType, $usageType);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fileType | Number | **required** | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| usageType | Number | **required** | [见编号说明](../../database/number.md#文件用途类型) |

## 获取文件支持的格式

```php
FileHelper::fresnsFileAcceptByType($type);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | No | 1.图片 / 2.视频 / 3.音频 / 4.文档 |

- Mime 格式，多个以英文逗号隔开
- 不传 type 则输出全部

## 根据文件 ID 或 FID 获取单个信息

```php
FileHelper::fresnsFileInfoById($fileIdOrFid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fileIdOrFid | String | **required** | `files->id` 或者 `files->fid` |

- 输出结果会判断防盗链配置，如果开启则输出防盗链文件信息。
- [查看文件信息格式](../../extensions/plugin/storage.md#文件信息结构)

## 根据文件 ID 或 FID 获取多个信息

```php
FileHelper::fresnsFileInfoListByIds($fileIdsOrFids);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fileIdsOrFids | Array | **required** | `files->id` 或者 `files->fid` |

- 输出结果会判断防盗链配置，如果开启则输出防盗链文件信息。

::: details Example
```json
{
    "images": [
        {
            // 图片信息
        }
    ],
    "videos": [
        {
            // 视频信息
        }
    ],
    "audios": [
        {
            // 音频信息
        }
    ],
    "documents": [
        {
            // 文档信息
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
| tableName | String | **required** | 表名 |
| tableColumn | String | **required** | 字段名 |
| tableId | Number | *optional* | 主键 ID |
| tableKey | String | *optional* | 主键名 |

- `tableId` 或 `tableKey` 二选一传参
- 输出结果会判断防盗链配置，如果开启则输出防盗链文件信息。

::: details Example
```json
{
    "images": [
        {
            // 图片信息
        }
    ],
    "videos": [
        {
            // 视频信息
        }
    ],
    "audios": [
        {
            // 音频信息
        }
    ],
    "documents": [
        {
            // 文档信息
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
| idColumn | Number | **required** | file_id 字段，比如 `users->decorate_file_id` |
| urlColumn | String | **required** | file_url 字段，比如 `users->decorate_file_url` |
| urlType | String | *optional* | URL 类型，不传则使用默认 `imageConfigUrl` |

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
| fileIdOrFid | String | **required** | `files->id` 或者 `files->fid` |

- 输出结果会判断防盗链配置，如果开启则输出防盗链文件信息。
