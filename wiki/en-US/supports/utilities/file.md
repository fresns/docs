# FileUtility

`App\Utilities\FileUtility`

## 上传文件

```php
FileUtility::uploadFile($bodyInfo, $file);
```

::: details Example
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
    'disk' => $disk, // local or remote
    'imageHandlePosition' => $imageHandlePosition, // Physical image files only, Support: path-start, path-end, name-start, name-end
    'moreJson' => $dtoWordBody->moreJson,
];

$uploadFile = FileUtility::uploadFile($bodyInfo, $dtoWordBody->file);
```
:::

## 上传文件信息

```php
FileUtility::uploadFileInfo($bodyInfo);
```

::: details Example
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
        "disk": "存储到 files->disk", // local or remote
        "path": "存储到 files->path",
        "imageHandlePosition": "存储到 files->image_handle_position", // Physical image files only, Support: path-start, path-end, name-start, name-end
        "imageWidth": "图片专用，存储到 files->image_width",
        "imageHeight": "图片专用，存储到 files->image_height",
        "videoTime": "视频专用，存储到 files->video_time",
        "videoCover": "视频专用，存储到 files->video_cover",
        "videoGif": "视频专用，存储到 files->video_gif",
        "audioTime": "音频专用，存储到 files->audio_time",
        "transcodingState": "音视频专用，存储到 files->transcoding_state",
        "moreJson": {
            // 扩展信息，存储到 files->more_json
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

::: details Example
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
    'disk' => $disk, // local or remote
    'imageHandlePosition' => $imageHandlePosition, // Physical image files only, Support: path-start, path-end, name-start, name-end
    'moreJson' => $dtoWordBody->moreJson,
];

$uploadFile = FileUtility::saveFileInfoToDatabase($bodyInfo, $diskPath, $file);
```
:::

## 逻辑删除文件

```php
FileUtility::logicalDeletionFiles($fileIdsOrFids);
```
