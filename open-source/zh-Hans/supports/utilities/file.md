# 文件工具 FileUtility

`App\Utilities\FileUtility`

## 上传文件

```php
FileUtility::uploadFile($bodyInfo, $diskConfig, $file);
```

::: details 查看示例
```php
$bodyInfo = [
    'platformId' => 'file_usages->platform_id',
    'usageType' => 'file_usages->usage_type',
    'tableName' => 'file_usages->table_name',
    'tableColumn' => 'file_usages->table_column',
    'tableId' => 'file_usages->table_id',
    'tableKey' => 'file_usages->table_key',
    'aid' => 'file_usages->account_id',
    'uid' => 'file_usages->user_id',
    'type' => 'files->type',
    'md5' => 'files->md5',
    'sha' => 'files->sha',
    'shaType' => 'files->sha_type',
    'warningType' => 'files->warning_type',
    'moreInfo' => 'files->more_info',
];

$diskConfig = [
    'driver' => 's3',
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION'),
    'bucket' => env('AWS_BUCKET'),
    'url' => env('AWS_URL'),
    'endpoint' => env('AWS_ENDPOINT'),
    'use_path_style_endpoint' => env('AWS_USE_PATH_STYLE_ENDPOINT', false),
    'throw' => false,
];

$fileModel = FileUtility::uploadFile($bodyInfo, $diskConfig, $dtoWordBody->file);
```
:::

## 上传文件信息

```php
FileUtility::uploadFileInfo($file, $fileInfo, $usageInfo);
```

::: details 查看示例
```php
$fileInfo = [
    'type' => 'files->type',
    'md5' => 'files->md5',
    'sha' => 'files->sha',
    'shaType' => 'files->sha_type',
    'path' => 'files->path',
    'audioDuration' => 'Audio Only: files->audio_duration',
    'videoDuration' => 'Video Only: files->video_duration',
    'videoPosterPath' => 'Video Only: files->video_poster_path',
    'moreInfo' => [
        // files->more_info
    ],
    'transcodingState' => 'files->transcoding_state', // audio or video Only
    'originalPath' => 'files->original_path',
    'warningType' => 'files->warning_type',
    'uploaded' => 'files->is_uploaded',
];

$usageInfo = [
    'usageType' => 'file_usages->usage_type',
    'platformId' => 'file_usages->platform_id',
    'tableName' => 'file_usages->table_name',
    'tableColumn' => 'file_usages->table_column',
    'tableId' => 'file_usages->table_id',
    'tableKey' => 'file_usages->table_key',
    'sortOrder' => 'file_usages->sort_order',
    'aid' => 'file_usages->account_id',
    'uid' => 'file_usages->user_id',
    'remark' => 'file_usages->remark',
];

$fileModel = FileUtility::uploadFileInfo($file, $fileInfo, $usageInfo);
```
:::

## 保存文件信息

```php
FileUtility::saveFileInfo($fileInfo, $usageInfo);
```

::: details 查看示例
```php
$fileInfo = [
    'type' => 'files->type', // required
    'name' => 'files->name', // required
    'mime' => 'files->mime',
    'extension' => 'files->extension', // required
    'size' => 'files->size', // required, unit: Byte
    'md5' => 'files->md5',
    'sha' => 'files->sha',
    'shaType' => 'files->sha_type',
    'path' => 'files->path', // required
    'imageWidth' => 'Image Only: files->image_width',
    'imageHeight' => 'Image Only: files->image_height',
    'audioDuration' => 'Audio Only: files->audio_duration',
    'videoDuration' => 'Video Only: files->video_duration',
    'videoPosterPath' => 'Video Only: files->video_poster_path',
    'moreInfo' => [
        // files->more_info
    ],
    'transcodingState' => 'files->transcoding_state', // audio or video Only
    'originalPath' => 'files->original_path',
    'warningType' => 'files->warning_type',
    'uploaded' => 'files->is_uploaded',
];

$usageInfo = [
    'usageType' => 'file_usages->usage_type',
    'platformId' => 'file_usages->platform_id',
    'tableName' => 'file_usages->table_name',
    'tableColumn' => 'file_usages->table_column',
    'tableId' => 'file_usages->table_id',
    'tableKey' => 'file_usages->table_key',
    'sortOrder' => 'file_usages->sort_order',
    'aid' => 'file_usages->account_id',
    'uid' => 'file_usages->user_id',
    'remark' => 'file_usages->remark',
];

$fileModel = FileUtility::saveFileInfo($fileInfo, $usageInfo);
```
:::

## 保存文件使用信息

```php
FileUtility::saveFileUsageInfo($fileType, $fileId, $usageInfo);
```

::: details 查看示例
```php
$usageInfo = [
    'usageType' => 'file_usages->usage_type',
    'platformId' => 'file_usages->platform_id',
    'tableName' => 'file_usages->table_name',
    'tableColumn' => 'file_usages->table_column',
    'tableId' => 'file_usages->table_id',
    'tableKey' => 'file_usages->table_key',
    'sortOrder' => 'file_usages->sort_order',
    'aid' => 'file_usages->account_id',
    'uid' => 'file_usages->user_id',
    'remark' => 'file_usages->remark',
];

$fileUsageModel = FileUtility::saveFileUsageInfo($fileType, $fileId, $usageInfo);
```
:::

## 逻辑删除文件

```php
FileUtility::logicalDeletionFiles($fileIdsOrFids);
```
