# Storage Plugin Development

- Storage Service Provider Configuration `Panel > Systems > Storage`
- [View plugin configuration information](../configs/panel/storage.md)
- Reference Plugin: [S3 Storage](https://github.com/fresns/plugins/tree/3.x/S3Storage)

## Path Rules

```php
FileHelper::fresnsFileStoragePath($fileType, $usageType);
```

- [View fileType](../database/numbered-description.md#file-type)
- [View usageType](../database/numbered-description.md#type-of-file-usage)

## Command Word

The main program interacts with the storage plug-in through command words, so the storage plug-in mainly implements the following command words.

| Command Word | Description |
| --- | --- |
| getUploadToken | Get S3 Upload Token |
| uploadFile | upload File |
| getTemporaryUrlFileInfo | Get information file temporary url [one] |
| getTemporaryUrlFileInfoList | Get information file temporary url [Multiple] |
| getTemporaryUrlOfOriginalFile | Get the temporary URL of the original file |
| physicalDeletionFiles | Physical Deletion Files |

As for the function of file-related command words and parameter instructions, please refer to [development support](../supports/cmd-words/file.md).

## Upload Page

The access path to the plugin upload page is configured in the `accessPath` parameter of the `plugin.json` file for operators and users to upload files using the plugin page after configuration.

> Since the Fresns API and editor use the basic form upload mode, there is a risk of timeout interruptions for large files. The storage plugin can provide an upload page that integrates JS-SDK on the plugin page to implement slicing and breakpoint uploads for large files.

- Path Reference `/s3-storage/upload?accessToken={accessToken}&uploadInfo={uploadInfo}&postMessageKey={postMessageKey}`
- [Introduction of variable names in paths](https://docs.fresns.com/clients/reference/callback/variables.html)

## Audio or video functions

- Transcoding command word triggered reactively.
- Such three tables as `posts`, `comments`, and `conversation_messages` shall be [subscribed](functions.md) to when installing the plug-in. When there are any newly-added contents, trigger the transcoding command word and scan whether there are any audio/video files.
- If there are any audios/videos and transcoding is not performed (`transcoding_state = 1`), execute transcoding.

**Transcoding Configuration**

- As for videos of file type `2`, execute transcoding according to the `video_transcode` key value in the configuration table.
- As for audios of file type `3`, execute transcoding according to the `audio_transcode` key value in the configuration table.

**Transcoding Process**

- 1. Wait for the [subscription function](functions.md) of the main program to trigger you (notification your command word of the table state you subscribed)
- 2. Your command word is triggered. Inquire file content attachment with `primaryId`. 
    - `file_usages->file_type` = `2` video, `3` audio
    - `file_usages->table_name` = table name
    - `file_usages->table_column` = column name, post, comment, conversation message, is ID
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

**Link to Original File**

```php
use App\Models\File;

$file->getFileOriginalUrl();
```
