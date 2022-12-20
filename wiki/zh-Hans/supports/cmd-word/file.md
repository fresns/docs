# 文件功能

## 获取上传凭证

```php
\FresnsCmdWord::plugin($unikey)->getUploadToken($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| name | String | YES | 本次上传的文件名 |
| expireTime | Number | YES | 有效期，单位：秒 |

- 客户端凭 Token 可以通过 SDK 直接上传到云服务商。
- [存储服务商编号](../../database/dictionary/storages.md)

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "storageId": "存储服务商编号，见字典键值",
        "token": "上传 token",
        "expireTime": "有效期，单位：秒" //没有则输出 null
    }
}
```
:::

## 上传文件

```php
\FresnsCmdWord::plugin($unikey)->uploadFile($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| platformId | Number | YES | 平台编号（配置表 [platforms](../../database/dictionary/platforms.md) 键名的键值） |
| usageType | Number | YES | [文件用途类型](../../database/number.md#文件用途类型) |
| tableName | String | YES | 来源表名（哪个张使用） |
| tableColumn | String | YES | 来源字段名（哪个字段使用） |
| tableId | Number | NO | 来源表主键 ID |
| tableKey | String | NO | 来源表键名 `PrimaryHelper::fresnsPrimaryId()` |
| aid | String | NO | 账号参数 `file_usages > account_id`<br>存储时由 `aid` 转换成 `accounts > id` |
| uid | Number | NO | 用户参数 `file_usages > user_id`<br>存储时由 `uid` 转换成 `users > id` |
| type | Number | YES | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| moreJson | String | NO | 自定义 |
| file | File | YES | 文件 |

- `tableId` 和 `tableKey` 二选一必传一个。

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // 文件信息
    }
}
```
:::

::: details 逻辑说明
- 入库方法可以调用主程序封装功能 [FileUtility::saveFileInfoToDatabase($bodyInfo, $diskPath, $file)](../utilities/file.md#保存文件信息到数据库)
- 如果文件类型为视频 `type=2`，还需处理视频封面图，对应字段为 `file->video_cover_path`，也可以处理视频动态封面图 `file->video_gif_path`。
- 查看返回结果[文件信息结构](../../extensions/plugin/storage.md#文件信息结构)
:::

## 上传文件信息

```php
\FresnsCmdWord::plugin($unikey)->uploadFileInfo($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| platformId | Number | YES | 平台编号（配置表 [platforms](../../database/dictionary/platforms.md) 键名的键值） |
| usageType | Number | YES | [文件用途类型](../../database/number.md#文件用途类型) |
| tableName | String | YES | 来源表名 |
| tableColumn | String | YES | 来源字段名 |
| tableId | Number | NO | 来源表主键 ID |
| tableKey | String | NO | 来源表键名 `PrimaryHelper::fresnsPrimaryId()` |
| aid | String | NO | 账号参数 `file_usages > account_id`<br>存储时由 `aid` 转换成 `accounts > id` |
| uid | Number | NO | 用户参数 `file_usages > user_id`<br>存储时由 `uid` 转换成 `users > id` |
| type | Number | YES | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| fileInfo | Array | YES | 文件信息数组 |

- `tableId` 和 `tableKey` 二选一必传一个。

::: details fileInfo 数组示例
```json
[
    {
        "name": "存储到 files > name",
        "mime": "存储到 files > mime",
        "extension": "存储到 files > extension",
        "size": "存储到 files > size", // 单位 Byte
        "md5": "存储到 files > md5",
        "sha": "存储到 files > sha",
        "shaType": "存储到 files > sha_type",
        "path": "存储到 files > path",
        "imageWidth": "图片专用，存储到 files > image_width",
        "imageHeight": "图片专用，存储到 files > image_height",
        "videoTime": "视频专用，存储到 files > video_time",
        "videoCoverPath": "视频专用，存储到 files > video_cover_path",
        "videoGifPath": "视频专用，存储到 files > video_gif_path",
        "audioTime": "音频专用，存储到 files > audio_time",
        "transcodingState": "音视频专用，存储到 files > transcoding_state",
        "moreJson": {
            // 扩展信息，存储到 files > more_json
        },
        "originalPath": "存储到 files > original_path",
        "rating": "存储到 file_usages > rating",
    }
]
```
:::

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            // 文件信息
        },
        {
            // 文件信息
        }
    ]
}
```
:::

::: details 逻辑说明
- 入库方法可以调用主程序封装功能 [FileUtility::uploadFileInfo($bodyInfo)](../utilities/file.md#上传文件信息)
- 如果文件类型为视频 `type=2`，还需处理视频封面图，对应字段为 `file->video_cover_path`，也可以处理视频动态封面图 `file->video_gif_path`。
- 查看返回结果[文件信息结构](../../extensions/plugin/storage.md#文件信息结构)
:::

## 获取防盗链文件信息[单个]

```php
\FresnsCmdWord::plugin($unikey)->getAntiLinkFileInfo($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| fileIdOrFid | String | NO | `files > id` 或者 `files > fid` |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // 文件信息
    }
}
```
:::

::: details 逻辑说明
- 如果未开启防盗链，可使用模型中封装功能输出信息。
- `$file->getFileInfo();`
:::

## 获取防盗链文件信息[多个]

```php
\FresnsCmdWord::plugin($unikey)->getAntiLinkFileInfoList($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| fileIdsOrFids | Array | NO | `files > id` 或者 `files > fid` |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            // 文件信息
        },
        {
            // 文件信息
        }
    ]
}
```
:::

::: details 逻辑说明
- 如果未开启防盗链，可请求封装功能输出信息。
- `FileHelper::fresnsFileInfoListByIds('fileIdsOrFids');`
:::

## 获取源文件防盗链链接

```php
\FresnsCmdWord::plugin($unikey)->getAntiLinkFileOriginalUrl($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| fileIdOrFid | String | NO | `files > id` 或者 `files > fid` |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "originalUrl": "由 file > original_path 字段拼接",
        // original_path 为空时，由 files > path 字段拼接替补
    }
}
```
:::

::: details 逻辑说明
- 如果未开启防盗链，可请求模型中封装功能输出信息。
- `$file->getFileOriginalUrl();`
:::

## 逻辑删除文件

```php
\FresnsCmdWord::plugin($unikey)->logicalDeletionFiles($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| fileIdsOrFids | Array | YES | `files > id` 或者 `files > fid` |

## 物理删除文件

```php
\FresnsCmdWord::plugin($unikey)->physicalDeletionFiles($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| fileIdsOrFids | Array | YES | `files > id` 或者 `files > fid` |

- `fileIds` 或 `fids` 数组值文件类型必须属于同一个 `type` 类型的文件。
