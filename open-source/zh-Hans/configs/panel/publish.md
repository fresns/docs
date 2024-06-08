# 发表配置

> 控制面板 > 运营 > 发表配置

## 发表帖子

**认证要求**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 发表帖子要求-邮箱 | post_required_email | false | boolean |  |
| 发表帖子要求-手机号 | post_required_phone | false | boolean |  |
| 发表帖子要求-实名制 | post_required_kyc | false | boolean |  |

**特殊规则**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 发表帖子特殊规则 | post_limit_status | false | boolean |  |
| 规则类型 | post_limit_type | 1 | number | 1.时间段限制<br>2.循环时间段限制 |
| 时间段限制-开始时间 | post_limit_period_start |  | string |  |
| 时间段限制-结束时间 | post_limit_period_end |  | string |  |
| 循环时间段限制-开始时间 | post_limit_cycle_start | 23:30 | string |  |
| 循环时间段限制-结束时间 | post_limit_cycle_end | 08:30 | string |  |
| 限制规则 | post_limit_rule | 1 | number | 1.可以发表，但需审核<br>2.禁止发表 |
| 限制提示语 | post_limit_tip |  | string | **多语言** |
| 特殊规则白名单 | post_limit_whitelist | ["1"] | array | 用户角色 ID |

**编辑器**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 帖子编辑器 | post_editor_service |  | **plugin** | 用途场景 `editor` |
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
| 图片上传方式 | post_editor_image_upload_method | api | string | `api` 接口<br>`page` 插件页<br>`sdk` s3 客户端 |
| 图片上传个数 | post_editor_image_max_upload_number | 9 | number |  |
| 视频上传方式 | post_editor_video_upload_method | api | string | `api` 接口<br>`page` 插件页<br>`sdk` s3 客户端 |
| 视频上传个数 | post_editor_video_max_upload_number | 1 | number |  |
| 音频上传方式 | post_editor_audio_upload_method | api | string | `api` 接口<br>`page` 插件页<br>`sdk` s3 客户端 |
| 音频上传个数 | post_editor_audio_max_upload_number | 1 | number |  |
| 文档上传方式 | post_editor_document_upload_method | api | string | `api` 接口<br>`page` 插件页<br>`sdk` s3 客户端 |
| 文档上传个数 | post_editor_document_max_upload_number | 10 | number |  |
| 小组是否必选 | post_editor_group_required | false | boolean |  |
| 标题输入框是否强显示 | post_editor_title_view | 1 | number | 1.默认显示<br>2.默认隐藏 |
| 标题是否必填 | post_editor_title_required | false | boolean |  |
| 标题字数限制 | post_editor_title_length | 60 | number |  |
| 帖子字数限制 | post_editor_content_length | 10000 | number |  |

## 发表评论

**认证要求**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 发表评论要求-邮箱 | comment_required_email | false | boolean |  |
| 发表评论要求-手机号 | comment_required_phone | false | boolean |  |
| 发表评论要求-实名制 | comment_required_kyc | false | boolean |  |

**特殊规则**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 发表评论特殊规则 | comment_limit_status | false | boolean |  |
| 规则类型 | comment_limit_type | 1 | number | 1.时间段限制<br>2.循环时间段限制 |
| 时间段限制-开始时间 | comment_limit_period_start |  | string |  |
| 时间段限制-结束时间 | comment_limit_period_end |  | string |  |
| 循环时间段限制-开始时间 | comment_limit_cycle_start | 23:30 | string |  |
| 循环时间段限制-结束时间 | comment_limit_cycle_end | 08:30 | string |  |
| 限制规则 | comment_limit_rule | 1 | number | 1.可以发表，但需审核<br>2.禁止发表 |
| 限制提示语 | comment_limit_tip |  | string | **多语言** |
| 特殊规则白名单角色 | comment_limit_whitelist | ["1"] | array | 用户角色 ID |

**编辑器**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 评论编辑器 | comment_editor_service |  | **plugin** | 用途场景 `editor` |
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
| 图片上传方式 | comment_editor_image_upload_method | api | string | `api` 接口<br>`page` 插件页<br>`sdk` s3 客户端 |
| 图片上传个数 | comment_editor_image_max_upload_number | 9 | number |  |
| 视频上传方式 | comment_editor_video_upload_method | api | string | `api` 接口<br>`page` 插件页<br>`sdk` s3 客户端 |
| 视频上传个数 | comment_editor_video_max_upload_number | 1 | number |  |
| 音频上传方式 | comment_editor_audio_upload_method | api | string | `api` 接口<br>`page` 插件页<br>`sdk` s3 客户端 |
| 音频上传个数 | comment_editor_audio_max_upload_number | 1 | number |  |
| 文档上传方式 | comment_editor_document_upload_method | api | string | `api` 接口<br>`page` 插件页<br>`sdk` s3 客户端 |
| 文档上传个数 | comment_editor_document_max_upload_number | 10 | number |  |
| 评论字数限制 | comment_editor_content_length | 1000 | number |  |
