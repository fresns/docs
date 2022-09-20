# Storage Plugin Development

- Storage Service Provider Configuration `Panel > Systems > Storage`
- [View plugin configuration information](../../database/keyname/storage.md)

## Path Rules

```php
FileHelper::fresnsFileStoragePath($fileType, $usageType);
```

- [View fileType](../../database/number.md#file-type)
- [View usageType](../../database/number.md#type-of-file-usage)

## Command Word

The main program interacts with the storage plug-in through command words, so the storage plug-in mainly implements the following command words.

| Command Word | Description |
| --- | --- |
| getUploadToken | Get Upload Token |
| uploadFile | upload File |
| uploadFileInfo | Upload File Information |
| getAntiLinkFileInfo | Get information about anti-theft link file [one] |
| getAntiLinkFileInfoList | Get information about anti-theft link file[Multiple] |
| getAntiLinkFileOriginalUrl | Get the source file anti-theft link |
| logicalDeletionFiles | Logical Deletion Files |
| physicalDeletionFiles | Physical Deletion Files |

As for the function of file-related command words and parameter instructions, please refer to [development support](../../supports/cmd-word/file.md).

## Audio and video functions

- Transcoding command word triggered reactively.
- Such three tables as `posts`, `comments`, and `dialog_messages` shall be [subscribed](functions.md) to when installing the plug-in. When there are any newly-added contents, trigger the transcoding command word and scan whether there are any audio/video files.
- If there are any audios/videos and transcoding is not performed (`transcoding_state = 1`), execute transcoding.

**Transcoding Configuration**

- As for videos of file type `2`, execute transcoding according to the `video_transcode` key value in the configuration table.
- As for audios of file type `3`, execute transcoding according to the `audio_transcode` key value in the configuration table.

**Transcoding Process**

- 1. Wait for the [subscription function](functions.md) of the main program to trigger you (notify your command word of the table state you subscribed)
- 2. Your command word is triggered. Inquire file content attachment with `primaryId`. 
    - `file_usages->file_type` = `2` video, `3` audio
    - `file_usages->table_name` = table name
    - `file_usages->table_column` = column name, post, comment, dialog message, is ID
    - `file_usages->table_id` = `primaryId`
    - The procedure should suspend if there is no attachment.
- 3. Inquire the transcoding state `files->transcoding_state`
    - 3.1 `transcoding_state = 1` to be transcoded: the procedure continues;
    - 3.2 `transcoding_state = 2` transcoding: transcoding is being performed and the procedure suspends;
    - 3.3 `transcoding_state = 3` transcoded: transcoding is completed and the procedure suspends;
    - 3.4 `transcoding_state = 4` transcoding failed and the procedure suspends;
- 4. Execute transcoding and modify file subsidiary table field as `transcoding_state = 2` at the same time.
- 5. Accept the call-back notification from the cloud service provider.
    - 5.1 Transcoding performed successfully:
        - 5.1.1 Fill the transcoded file name into the `files->path`
        - 5.1.2 Fill the source file path before transcoding into `files->original_path`
        - 5.1.3 Replace the new file information (this step could be neglected if there is no relevant new information)
            - `files->mime`
            - `files->extension`
            - `files->size`
            - `files->md5`
            - `files->sha`
            - `files->sha_type`
        - 5.1.4 Modify the transcoding state as `files->transcoding_state = 3`
    - 5.2 Transcoding failed
        - 5.2.1 Modify the transcoding state as `files->transcoding_state = 4`
        - 5.2.2 If there are any other parameters or notes that failed to be transcoded, fill them into the `files->transcoding_reason` field.

## File Information Structure

**File Information**

```php
use App\Models\File;

$file->getFileInfo();
```

::: details Example of information
```json
{
    "fid": "files > fid",
    "type": "files > type",
    "status": "files > is_enable",
    "substitutionImageUrl": "File expiration alert image",
    "sensitive": "files > is_sensitive",
    "name": "files > name",
    "mime": "files > mime",
    "extension": "files > extension",
    "size": "files > size",
    "md5": "files > md5",
    "sha": "files > sha",
    "shaType": "files > sha_type",
    "moreJson": {
        // files->more_json
    },
    // Image Parameters
    "imageWidth": "files > image_width",
    "imageHeight": "files > image_height",
    "imageLong": "files > image_is_long",
    "imageDefaultUrl": "image_bucket_domain + files->path",
    "imageConfigUrl": "image_bucket_domain + files->path + image_thumb_config",
    "imageAvatarUrl": "image_bucket_domain + files->path + image_thumb_avatar",
    "imageRatioUrl": "image_bucket_domain + files->path + image_thumb_ratio",
    "imageSquareUrl": "image_bucket_domain + files->path + image_thumb_square",
    "imageBigUrl": "image_bucket_domain + files->path + image_thumb_big",
    // Video Parameters
    "videoTime": "files > video_time",
    "videoCoverUrl": "video_bucket_domain + file->video_cover",
    "videoGifUrl": "video_bucket_domain + files->video_gif",
    "videoUrl": "video_bucket_domain + files->path",
    // Audio Parameters
    "audioTime": "files > audio_time",
    "audioUrl": "audio_bucket_domain + files->path",
    // Document Parameters
    "documentUrl": "document_bucket_domain + files->path",
    "documentPreviewUrl": "Links after replacement by rule",
    // Audio and Video Parameter
    "transcodingState": "files > transcoding_state"
}
```
:::

**Link to Original File**

```php
use App\Models\File;

$file->getFileOriginalUrl();
```
