# 存储服务开发

- 存储服务商配置位置 `控制面板 > 系统设置 > 存储设置`
- [查看插件配置信息](../../database/keyname/storage.md)

## 路径规则

```php
FileHelper::fresnsFileStoragePath($fileType, $usageType);
```

- [查看 fileType 文件类型](../../database/number.md#文件类型)
- [查看 usageType 文件用途类型](../../database/number.md#文件用途类型)

## 命令字

主程序与存储插件的交互方式以命令字通讯，所以存储插件主要实现以下命令字。

| 命令字 | 说明 |
| --- | --- |
| getUploadToken | 获取上传凭证 |
| uploadFile | 上传文件 |
| uploadFileInfo | 上传文件信息 |
| getAntiLinkFileInfo | 获取防盗链文件信息[单个] |
| getAntiLinkFileInfoList | 获取防盗链文件信息[多个] |
| getAntiLinkFileOriginalUrl | 获取源文件防盗链链接 |
| logicalDeletionFiles | 逻辑删除文件 |
| physicalDeletionFiles | 物理删除文件 |

文件相关命令字功能和参数说明，[参见开发支持](../../supports/cmd-word/file.md)。

## 上传页面

插件上传页面的访问路径配置在 `plugin.json` 文件的 `accessPath` 参数，配置后供运营者和用户使用插件页面上传文件。

> 由于 Fresns API 和编辑器采用的是基础表单上传模式，对于大文件会产生超时中断的风险，存储插件可以提供上传页面，在插件页集成 JS-SDK 实现大文件的分片和断点上传。

- 路径参考 `/qiniu/upload?sign={sign}&config={uploadInfo}&postMessageKey={postMessageKey}`
- [路径中变量名介绍](../callback/variables.md)

## 音视频被动功能

- 被动触发的转码命令字。
- 插件安装时，[订阅](functions.md) `posts`、`comments`、`conversation_messages` 三张表，当有新增内容时，触发转码命令字，扫描是否有音视频文件。
- 如果有音视频，并且没有转码 `transcoding_state = 1`，则执行转码。

**转码配置**

- 文件类型 `2` 视频，根据配置表 `video_transcode` 键值，执行转码配置。
- 文件类型 `3` 音频，根据配置表 `audio_transcode` 键值，执行转码配置。

**转码流程**

- 1、等待[主程序订阅功能](functions.md)触发你（将你订阅的表状态通知到你的命令字）。
- 2、你的命令字被触发，凭主键 ID `primaryId` 查询文件内容附件。
    - `file_usages->file_type` = `2` 视频，`3` 音频
    - `file_usages->table_name` = 表名
    - `file_usages->table_column` = 字段名，帖子、评论、对话消息，则是 `id`
    - `file_usages->table_id` = `primaryId`
    - 无附件则流程中止。
- 3、查询转码状态 `files->transcoding_state`
    - 3.1、`transcoding_state = 1` 待转码状态，流程继续；
    - 3.2、`transcoding_state = 2` 转码中，已经在转码，流程中止；
    - 3.3、`transcoding_state = 3` 转码完成，已经完成转码，流程中止；
    - 3.4、`transcoding_state = 4` 转码失败，流程中止；
- 4、执行转码，同时修改文件附属表字段 `transcoding_state = 2`
- 5、接受云服务商回调通知
    - 5.1、转码成功：
        - 5.1.1、将转码后的文件名填入 `files->path`
        - 5.1.2、将转码前的源文件路径填入 `files->original_path`
        - 5.1.3、替换新的文件信息（无相关新信息，可忽略）
            - `files->mime`
            - `files->extension`
            - `files->size`
            - `files->md5`
            - `files->sha`
            - `files->sha_type`
        - 5.1.4、修改转码状态 `files->transcoding_state = 3`
    - 5.2、转码失败：
        - 5.2.1、修改转码状态 `files->transcoding_state = 4`
        - 5.2.2、如果有转码失败其他参数或备注，填入 `files->transcoding_reason` 字段中。

## 文件信息结构

**文件信息**

```php
use App\Models\File;

$file->getFileInfo();
```

::: details 信息示例
```json
{
    "fid": "files->fid",
    "type": "files->type",
    "status": "files->is_enable",
    "substitutionImageUrl": "文件无效提示图",
    "sensitive": "files->is_sensitive",
    "name": "files->name",
    "mime": "files->mime",
    "extension": "files->extension",
    "size": "files->size",
    "md5": "files->md5",
    "sha": "files->sha",
    "shaType": "files->sha_type",
    "moreJson": {
        // 扩展信息 files->more_json
    },
    // 图片专用参数
    "imageWidth": "files->image_width",
    "imageHeight": "files->image_height",
    "imageLong": "files->image_is_long",
    "imageConfigUrl": "image_bucket_domain + 文件 path 字段 + image_thumb_config",
    "imageRatioUrl": "image_bucket_domain + 文件 path 字段 + image_thumb_ratio",
    "imageSquareUrl": "image_bucket_domain + 文件 path 字段 + image_thumb_square",
    "imageBigUrl": "image_bucket_domain + 文件 path 字段 + image_thumb_big",
    // 视频专用参数
    "videoTime": "files->video_time",
    "videoPosterUrl": "video_bucket_domain + 文件 video_poster_path 字段",
    "videoUrl": "video_bucket_domain + 文件 path 字段",
    // 音频专用参数
    "audioTime": "files->audio_time",
    "audioUrl": "audio_bucket_domain + 文件 path 字段",
    // 文档专用参数
    "documentPreviewUrl": "按规则替换后的链接",
    // 音视频共有参数
    "transcodingState": "files->transcoding_state"
}
```
:::

**源文件链接**

```php
use App\Models\File;

$file->getFileOriginalUrl();
```
