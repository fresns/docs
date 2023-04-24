# FileUtility

`App\Utilities\FileUtility`

## Upload File

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

## Upload File Information

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

::: details View `fileInfo` information structure
```json
[
    {
        "name": "Store to files->name",
        "mime": "Store to files->mime",
        "extension": "Store to files->extension",
        "size": "Store to files->size", // Unit Byte
        "md5": "Store to files->md5",
        "sha": "Store to files->sha",
        "shaType": "Store to files->sha_type",
        "disk": "Store to files->disk", // local or remote
        "path": "Store to files->path",
        "imageHandlePosition": "Store to files->image_handle_position", // Physical image files only, Support: path-start, path-end, name-start, name-end
        "imageWidth": "Image specific, store to files->image_width",
        "imageHeight": "Image specific, store to files->image_height",
        "videoTime": "Video specific, store to files->video_time",
        "videoPosterPath": "Video specific, store to files->video_poster_path",
        "audioTime": "Audio specific, store to files->audio_time",
        "transcodingState": "Audio and video specific, store to files->transcoding_state",
        "moreJson": {
            // Extended information, store to files->more_json
        },
        "originalPath": "Store to files->original_path",
        "rating": "Store to file_usages->rating",
    }
]
```
:::

## Save File Information to Database

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

## Logically Delete File

```php
FileUtility::logicalDeletionFiles($fileIdsOrFids);
```
