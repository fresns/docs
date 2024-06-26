# 文件功能

## 判断上传权限

```php
\FresnsCmdWord::plugin('Fresns')->checkUploadPerm($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uid | Number | YES | 上传者 UID |
| usageType | String | YES | 文件用途类型 |
| usageFsid | String | YES | 用途目标 fsid |
| archiveCode | String | NO | `elementType` 文件类扩展档案 |
| type | Number | YES | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| extension | String | NO | 文件扩展名 |
| size | Number | NO | 单位 `Byte` |
| duration | Number | NO | 音视频时长，单位 `秒` |

::: details 参数说明
| usageType | usageFsid | archiveCode |
| --- | --- | --- |
| `userAvatar` | 用户的 `uidOrUsername` |  |
| `userBanner` | 用户的 `uidOrUsername` |  |
| `userArchive` | 用户的 `uidOrUsername` | 扩展档案 `code` |
| `conversation` | 接收用户的 `uidOrUsername` |  |
| `post` | 帖子 ID `pid` |  |
| `comment` | 评论 ID `comment` |  |
| `postDraft` | 帖子草稿 ID `did` |  |
| `postDraftArchive` | 帖子草稿 ID `did` | 扩展档案 `code` |
| `commentDraft` | 评论草稿 ID `did` |  |
| `commentDraftArchive` | 评论草稿 ID `did` | 扩展档案 `code` |
:::

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "usageType": "Number / 用途类型编号",
        "tableName": "String / 表名",
        "tableColumn": "String / 字段名",
        "tableId": "Number / 主键 ID",
        "tableKey": "String / FSID",
        "maxUploadNumber": "Number / 剩下可上传数量"
    }
}
```
:::

## 获取 S3 上传令牌

```php
\FresnsCmdWord::plugin('Fresns')->getUploadToken($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| path | String | YES | 文件路径 |
| minutes | Number | YES | 有效分钟数 |

- 获取 S3 预签名 URL

::: details 结果示例

::: code-group
```json [Presigned URL]
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": "presignedUrl",
        "method": "String / 请求方式",
        "url": "String / 请求地址",
        "headers": "Object / 请求标头",
        "activeMinutes": "Number / 有效期分钟数",
        "expiration": "String / 到期时间 Y-m-d H:i:s" // UTC+0
    }
}
```

```json [STS]
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": "sts",
        // 待完善
    }
}
```
:::

## 上传文件

```php
\FresnsCmdWord::plugin('Fresns')->uploadFile($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| file | File | YES | 文件 |
| type | Number | YES | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| warningType | Number | NO | 文件警告 1.无 2.Nudity 3.Violence 4.Sensitive |
| usageType | Number | YES | [文件用途类型](../../database/numbered-description.md#文件用途类型) |
| platformId | Number | YES | 平台编号（配置表 [platforms](../../configs/dictionary/platforms.md) 键名的键值） |
| tableName | String | YES | 来源表名（哪个张使用） |
| tableColumn | String | YES | 来源字段名（哪个字段使用） |
| tableId | Number | NO | 来源表主键 ID |
| tableKey | String | NO | 来源表键名 `PrimaryHelper::fresnsPrimaryId()` |
| moreInfo | Object | NO | 自定义内容 |
| aid | String | NO | 账号参数 `file_usages->account_id`<br>存储时由 `aid` 转换成 `accounts->id` |
| uid | Number | NO | 用户参数 `file_usages->user_id`<br>存储时由 `uid` 转换成 `users->id` |

- `tableId` 和 `tableKey` 二选一必传一个。

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // 通用数据结构->文件信息
    }
}
```
:::

## 获取临时 URL 文件信息[单个]

```php
\FresnsCmdWord::plugin('Fresns')->getTemporaryUrlFileInfo($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| fileIdOrFid | String | NO | `files->id` 或者 `files->fid` |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // 通用数据结构->文件信息
    }
}
```
:::

::: details 逻辑说明
- 如果未开启临时 URL，可使用模型中封装功能输出信息。
- `$file->getFileInfo();`
:::

## 获取临时 URL 文件信息[多个]

```php
\FresnsCmdWord::plugin('Fresns')->getTemporaryUrlFileInfoList($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| fileIdsOrFids | Array | NO | `files->id` 或者 `files->fid` |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            // 通用数据结构->文件信息
        },
        {
            // 通用数据结构->文件信息
        }
    ]
}
```
:::

::: details 逻辑说明
- 如果未开启临时 URL，可请求封装功能输出信息。
- `FileHelper::fresnsFileInfoListByIds('fileIdsOrFids');`
:::

## 获取源文件临时 URL

```php
\FresnsCmdWord::plugin('Fresns')->getTemporaryUrlOfOriginalFile($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| fileIdOrFid | String | NO | `files->id` 或者 `files->fid` |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "originalUrl": "由 file->original_path 字段拼接",
        // original_path 为空时，由 files->path 字段拼接替补
    }
}
```
:::

::: details 逻辑说明
- 如果未开启临时 URL，可请求模型中封装功能输出信息。
- `$file->getFileOriginalUrl();`
:::

## 逻辑删除文件

```php
\FresnsCmdWord::plugin('Fresns')->logicalDeletionFiles($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| fileIdsOrFids | Array | YES | `files->id` 或者 `files->fid` |

## 物理删除文件

```php
\FresnsCmdWord::plugin('Fresns')->physicalDeletionFiles($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| fileIdsOrFids | Array | YES | `files->id` 或者 `files->fid` |

- `fileIds` 或 `fids` 数组值文件类型必须属于同一个 `type` 类型的文件。
