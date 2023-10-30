# 发表配置

> 控制面板 > 运营 > 发布配置

## 发表帖子

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 发表帖子要求-邮箱 | post_email_verify | false | boolean |  |
| 发表帖子要求-手机号 | post_phone_verify | false | boolean |  |
| 发表帖子要求-实名制 | post_real_name_verify | false | boolean |  |
| <hr> |  |  |  |  |
| 发表帖子特殊规则 | post_limit_status | false | boolean |  |
| 规则类型 | post_limit_type | 1 | number | 1.时间段限制<br>2.循环时间段限制 |
| 时间段限制-开始时间 | post_limit_period_start |  | string |  |
| 时间段限制-结束时间 | post_limit_period_end |  | string |  |
| 循环时间段限制-开始时间 | post_limit_cycle_start | 23:30 | string |  |
| 循环时间段限制-结束时间 | post_limit_cycle_end | 08:30 | string |  |
| 限制规则 | post_limit_rule | 1 | number | 1.可以发表，但需审核<br>2.禁止发表 |
| 限制提示语 | post_limit_tip |  | string | **多语言** |
| 特殊规则白名单 | post_limit_whitelist | ["1"] | array | 用户角色 ID |
| <hr> |  |  |  |  |
| 帖子编辑权限 | post_edit | false | boolean |  |
| 多长时间内可以编辑 | post_edit_time_limit | 5 | number |  |
| 帖子置顶后编辑权限 | post_edit_sticky_limit | false | boolean |  |
| 帖子加精后编辑权限 | post_edit_digest_limit | false | boolean |  |
| 帖子删除权限 | post_delete | true | boolean |  |
| 帖子置顶后删除权限 | post_delete_sticky_limit | true | boolean |  |
| 帖子加精后删除权限 | post_delete_digest_limit | true | boolean |  |
| <hr> |  |  |  |  |
| 帖子编辑器 | post_editor_service |  | **plugin** | 插件应用场景参数 `editor` |
| <hr> |  |  |  |  |
| 小组 | post_editor_group | true | boolean |  |
| 标题 | post_editor_title | true | boolean |  |
| 表情 | post_editor_sticker | true | boolean |  |
| 图片 | post_editor_image | false | boolean |  |
| 视频 | post_editor_video | false | boolean |  |
| 音频 | post_editor_audio | false | boolean |  |
| 文档 | post_editor_document | false | boolean |  |
| 艾特 | post_editor_mention | true | boolean |  |
| 话题 | post_editor_hashtag | true | boolean |  |
| 扩展功能 | post_editor_extend | false | boolean |  |
| 定位 | post_editor_location | false | boolean |  |
| 匿名 | post_editor_anonymous | false | boolean |  |
| <hr> |  |  |  |  |
| 图片上传方式 | post_editor_image_upload_form | fresns | string | fresns 或者 plugin |
| 图片上传个数 | post_editor_image_upload_number | 9 | number |  |
| 视频上传方式 | post_editor_video_upload_form | fresns | string | fresns 或者 plugin |
| 视频上传个数 | post_editor_video_upload_number | 1 | number |  |
| 音频上传方式 | post_editor_audio_upload_form | fresns | string | fresns 或者 plugin |
| 音频上传个数 | post_editor_audio_upload_number | 1 | number |  |
| 文档上传方式 | post_editor_document_upload_form | fresns | string | fresns 或者 plugin |
| 文档上传个数 | post_editor_document_upload_number | 10 | number |  |
| 小组是否必选 | post_editor_group_required | false | boolean |  |
| 标题输入框是否强显示 | post_editor_title_view | 1 | number | 1.默认显示<br>2.默认隐藏 |
| 标题是否必填 | post_editor_title_required | false | boolean |  |
| 标题字数限制 | post_editor_title_length | 60 | number |  |
| 帖子字数限制 | post_editor_content_length | 10000 | number |  |
| 帖子摘要字数 | post_editor_brief_length | 280 | number |  |

## 发表评论

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 发表评论要求-邮箱 | comment_email_verify | false | boolean |  |
| 发表评论要求-手机号 | comment_phone_verify | false | boolean |  |
| 发表评论要求-实名制 | comment_real_name_verify | false | boolean |  |
| <hr> |  |  |  |  |
| 发表评论特殊规则 | comment_limit_status | false | boolean |  |
| 规则类型 | comment_limit_type | 1 | number | 1.时间段限制<br>2.循环时间段限制 |
| 时间段限制-开始时间 | comment_limit_period_start |  | string |  |
| 时间段限制-结束时间 | comment_limit_period_end |  | string |  |
| 循环时间段限制-开始时间 | comment_limit_cycle_start | 23:30 | string |  |
| 循环时间段限制-结束时间 | comment_limit_cycle_end | 08:30 | string |  |
| 限制规则 | comment_limit_rule | 1 | number | 1.可以发表，但需审核<br>2.禁止发表 |
| 限制提示语 | comment_limit_tip |  | string | **多语言** |
| 特殊规则白名单角色 | comment_limit_whitelist | ["1"] | array | 用户角色 ID |
| <hr> |  |  |  |  |
| 评论编辑权限 | comment_edit | false | boolean |  |
| 多长时间内可以编辑 | comment_edit_time_limit | 5 | number |  |
| 评论置顶后编辑权限 | comment_edit_sticky_limit | false | boolean |  |
| 评论加精后编辑权限 | comment_edit_digest_limit | false | boolean |  |
| 评论删除权限 | comment_delete | true | boolean |  |
| 评论置顶后删除权限 | comment_delete_sticky_limit | true | boolean |  |
| 评论加精后删除权限 | comment_delete_digest_limit | true | boolean |  |
| <hr> |  |  |  |  |
| 评论编辑器 | comment_editor_service |  | **plugin** | 插件应用场景参数 `editor` |
| <hr> |  |  |  |  |
| 表情 | comment_editor_sticker | true | boolean |  |
| 图片 | comment_editor_image | false | boolean |  |
| 视频 | comment_editor_video | false | boolean |  |
| 音频 | comment_editor_audio | false | boolean |  |
| 文档 | comment_editor_document | false | boolean |  |
| 艾特 | comment_editor_mention | true | boolean |  |
| 话题 | comment_editor_hashtag | true | boolean |  |
| 扩展功能 | comment_editor_extend | false | boolean |  |
| 定位 | comment_editor_location | false | boolean |  |
| 匿名 | comment_editor_anonymous | false | boolean |  |
| <hr> |  |  |  |  |
| 图片上传方式 | comment_editor_image_upload_form | fresns | string | fresns 或者 plugin |
| 图片上传个数 | comment_editor_image_upload_number | 9 | number |  |
| 视频上传方式 | comment_editor_video_upload_form | fresns | string | fresns 或者 plugin |
| 视频上传个数 | comment_editor_video_upload_number | 1 | number |  |
| 音频上传方式 | comment_editor_audio_upload_form | fresns | string | fresns 或者 plugin |
| 音频上传个数 | comment_editor_audio_upload_number | 1 | number |  |
| 文档上传方式 | comment_editor_document_upload_form | fresns | string | fresns 或者 plugin |
| 文档上传个数 | comment_editor_document_upload_number | 10 | number |  |
| 评论字数限制 | comment_editor_content_length | 1000 | number |  |
| 评论摘要字数 | comment_editor_brief_length | 280 | number |  |