# 文件工具 FileUtility

`App\Utilities\FileUtility`

## 上传文件

```php
FileUtility::uploadFile($bodyInfo, $diskConfig, $file);
```

::: details 查看示例
```php
$bodyInfo = [
    'type' => 'files->type',
    'width' => 'files->width', // image and video Only
    'height' => 'files->height', // image and video Only
    'duration' => 'files->duration', // audio and video Only
    'warningType' => 'files->warning_type',

    'usageType' => 'file_usages->usage_type',
    'platformId' => 'file_usages->platform_id',
    'tableName' => 'file_usages->table_name',
    'tableColumn' => 'file_usages->table_column',
    'tableId' => 'file_usages->table_id',
    'tableKey' => 'file_usages->table_key',
    'sortOrder' => 'file_usages->sort_order',
    'moreInfo' => [
        // file_usages->more_info
    ],
    'aid' => 'file_usages->account_id',
    'uid' => 'file_usages->user_id',
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
    'width' => 'files->width', // image and video Only
    'height' => 'files->height', // image and video Only
    'duration' => 'files->duration', // audio and video Only
    'sha' => 'files->sha',
    'shaType' => 'files->sha_type',
    'warningType' => 'files->warning_type',
    'path' => 'files->path',
    'transcodingState' => 'files->transcoding_state', // audio and video only
    'videoPosterPath' => 'files->video_poster_path', // video only
    'originalPath' => 'files->original_path',
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
    'moreInfo' => [
        // file_usages->more_info
    ],
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
    'width' => 'files->width', // image and video Only
    'height' => 'files->height', // image and video Only
    'duration' => 'files->duration', // audio and video Only
    'sha' => 'files->sha',
    'shaType' => 'files->sha_type',
    'warningType' => 'files->warning_type',
    'path' => 'files->path', // required
    'transcodingState' => 'files->transcoding_state', // audio and video only
    'videoPosterPath' => 'files->video_poster_path', // video only
    'originalPath' => 'files->original_path',
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
    'moreInfo' => [
        // file_usages->more_info
    ],
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
    'moreInfo' => [
        // file_usages->more_info
    ],
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
