---
aside: false
---

# files *文件表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| fid | varchar(32) | 对外公开 ID |  | NO | **唯一值** |
| type | tinyint *UNSIGNED* | 文件类型 | 1 | NO | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| name | varchar(128) | 文件名称 |  | NO | 完整原始名称，上传时的文件名，包含后缀名 |
| mime | varchar(255) | 文件 Mime 类型 |  | YES | 比如：image/jpeg 或 video/mp4 |
| extension | varchar(32) | 文件扩展名 |  | NO | 比如：jpg 或 jpeg |
| size | int *UNSIGNED* | 文件大小 |  | NO | 单位 Byte |
| md5 | varchar(128) | 文件 md5 |  | YES | 文件 md5 编码 |
| sha | varchar(128) | 文件 sha |  | YES | 文件 sha 编码 |
| sha_type | varchar(16) | 文件 sha 类型 |  | YES | 比如 SHA1 或 SHA-256 |
| disk | varchar(32) | 文件磁盘 | remote | NO | `local` 或 `remote` |
| path | varchar(255) | 文件路径 |  | NO | **相对路径** |
| image_handle_position | varchar(16) | 图片处理位置 |  | YES | 适用于生成物理缩略图的场景<br>凭此配置管理物理文件 |
| image_width | smallint *UNSIGNED* | 图片宽度 |  | YES | 图片文件专用：像素 px |
| image_height | smallint *UNSIGNED* | 图片高度 |  | YES | 图片文件专用：像素 px |
| image_is_long | tinyint *UNSIGNED* | 是否长图 | 0 | NO | 图片文件专用<br>0.否 / 1.是 |
| audio_time | smallint *UNSIGNED* | 音频时长 |  | YES | 单位：秒，音频文件专用 |
| video_time | smallint *UNSIGNED* | 视频时长 |  | YES | 单位：秒，视频文件专用 |
| video_poster_path | varchar(255) | 视频封面图 |  | YES | 视频封面图路径 |
| more_json | json | 备用字段 |  | YES | 比如某种客户端或编辑器，可以发表像小红书那样图片带标签的内容，这样这里存储的是标签信息 |
| transcoding_state | tinyint *UNSIGNED* | 音视频附件转码状态 | 1 | YES | 转码状态：1.待转码 2.转码中 3.转码完成 4.转码失败 |
| transcoding_reason | varchar(255) | 音视频附件转码失败原因 |  | YES | 转码失败原因 |
| original_path | varchar(255) | 原始文件路径 |  | YES | **相对路径**<br>如果文件涉及转码，转码前的文件存储路径<br>没有则留空 |
| is_sensitive | tinyint *UNSIGNED* | 是否敏感 | 0 | NO | 0.否 / 1.是 |
| is_enabled | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效 / 1.有效 |
| physical_deletion | tinyint *UNSIGNED* | 物理删除状态 | 0 | NO | 0.否 / 1.是（已物理删除文件） |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## 文件类型

| type | 文件类型 | 域名存储在哪个键名 | 后台设置界面 |
| --- | --- | --- | --- |
| 1 | 图片 | image_bucket_domain | 后台 > 系统 > 存储设置 > 图片存储设置 |
| 2 | 视频 | video_bucket_domain | 后台 > 系统 > 存储设置 > 视频存储设置 |
| 3 | 音频 | audio_bucket_domain | 后台 > 系统 > 存储设置 > 音频存储设置 |
| 4 | 文档 | document_bucket_domain | 后台 > 系统 > 存储设置 > 文档存储设置 |

## 长图说明

字段: `image_is_long`

当图片宽度大于 700 时，计算高度等于或大于宽度的 3.5 倍时，则为长图。

例如：
- image_width = 700
- image_height = 2100
