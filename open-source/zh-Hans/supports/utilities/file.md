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
    'videoDuration' => '',
    'videoPosterPath' => '',
    'audioDuration' => '',
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
        "path": "存储到 files->path",
        "imageWidth": "图片专用，存储到 files->image_width",
        "imageHeight": "图片专用，存储到 files->image_height",
        "videoDuration": "视频专用，存储到 files->video_duration",
        "videoPosterPath": "视频专用，存储到 files->video_poster_path",
        "audioDuration": "音频专用，存储到 files->audio_duration",
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
    'videoDuration' => '',
    'videoPosterPath' => '',
    'audioDuration' => '',
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
