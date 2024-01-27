# 文件工具 FileUtility

`App\Utilities\FileUtility`

## 上传文件

```php
FileUtility::uploadFile($bodyInfo, $file);
```

::: details 查看示例
```php
$bodyInfo = [
    'usageType' => $dtoWordBody->usageType,
    'platformId' => $dtoWordBody->platformId,
    'tableName' => $dtoWordBody->tableName,
    'tableColumn' => $dtoWordBody->tableColumn,
    'tableId' => $dtoWordBody->tableId,
    'tableKey' => $dtoWordBody->tableKey,
    'aid' => $dtoWordBody->aid,
    'uid' => $dtoWordBody->uid,
    'type' => $dtoWordBody->type,
    'md5' => $md5,
    'sha' => $sha,
    'shaType' => $shaType,
    'disk' => $disk, // local 或 remote
    'imageHandlePosition' => $imageHandlePosition, // 生成物理图片专用，支持 path-start, path-end, name-start, name-end
    'videoTime' => '',
    'videoPosterPath' => '',
    'audioTime' => '',
    'transcodingState' => '',
    'moreInfo' => $dtoWordBody->moreInfo,
];

$uploadFile = FileUtility::uploadFile($bodyInfo, $dtoWordBody->file);
```
:::

## 上传文件信息

```php
FileUtility::uploadFileInfo($bodyInfo);
```

::: details 查看示例
```php
$bodyInfo = [
    'usageType' => $dtoWordBody->usageType,
    'platformId' => $dtoWordBody->platformId,
    'tableName' => $dtoWordBody->tableName,
    'tableColumn' => $dtoWordBody->tableColumn,
    'tableId' => $dtoWordBody->tableId,
    'tableKey' => $dtoWordBody->tableKey,
    'aid' => $dtoWordBody->aid,
    'uid' => $dtoWordBody->uid,
    'type' => $dtoWordBody->type,
    'fileInfo' => $dtoWordBody->fileInfo,
];

$uploadFileInfo = FileUtility::uploadFileInfo($bodyInfo);
```
:::

::: details 查看 fileInfo 信息结构
```json
[
    {
        "name": "存储到 files->name",
        "mime": "存储到 files->mime",
        "extension": "存储到 files->extension",
        "size": "存储到 files->size", // 单位 Byte
        "md5": "存储到 files->md5",
        "sha": "存储到 files->sha",
        "shaType": "存储到 files->sha_type",
        "disk": "存储到 files->disk", // local 或 remote
        "path": "存储到 files->path",
        "imageWidth": "图片专用，存储到 files->image_width",
        "imageHeight": "图片专用，存储到 files->image_height",
        "videoTime": "视频专用，存储到 files->video_time",
        "videoPosterPath": "视频专用，存储到 files->video_poster_path",
        "audioTime": "音频专用，存储到 files->audio_time",
        "transcodingState": "音视频专用，存储到 files->transcoding_state",
        "moreInfo": {
            // 扩展信息，存储到 files->more_info
        },
        "originalPath": "存储到 files->original_path",
        "rating": "存储到 file_usages->rating",
    }
]
```
:::

## 保存文件信息到数据库

```php
FileUtility::saveFileInfoToDatabase($bodyInfo, $diskPath, $file);
```

::: details 查看示例
```php
$bodyInfo = [
    'usageType' => $dtoWordBody->usageType,
    'platformId' => $dtoWordBody->platformId,
    'tableName' => $dtoWordBody->tableName,
    'tableColumn' => $dtoWordBody->tableColumn,
    'tableId' => $dtoWordBody->tableId,
    'tableKey' => $dtoWordBody->tableKey,
    'aid' => $dtoWordBody->aid,
    'uid' => $dtoWordBody->uid,
    'type' => $dtoWordBody->type,
    'md5' => $md5,
    'sha' => $sha,
    'shaType' => $shaType,
    'disk' => $disk, // local 或 remote
    'imageHandlePosition' => $imageHandlePosition, // 生成物理图片专用，支持 path-start, path-end, name-start, name-end
    'videoTime' => '',
    'videoPosterPath' => '',
    'audioTime' => '',
    'transcodingState' => '',
    'moreInfo' => $dtoWordBody->moreInfo,
];

$uploadFile = FileUtility::saveFileInfoToDatabase($bodyInfo, $diskPath, $file);
```
:::

## 逻辑删除文件

```php
FileUtility::logicalDeletionFiles($fileIdsOrFids);
```
