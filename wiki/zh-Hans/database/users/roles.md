# roles *角色表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | 主键 ID |  | NO | 自动递赠 |
| type | tinyint *UNSIGNED* | 角色类型 | 3 | NO | 1.管理人员类：管理员、版主<br>2.系统设置类：待审核用户、禁止用户<br>3.用户运营类：普通会员、高级会员 |
| name | varchar(128) | 角色名 |  | NO | **多语言** |
| icon_file_id | bigint *UNSIGNED* | 图标文件 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| icon_file_url | varchar(255) | 图标文件 URL |  | YES |  |
| is_display_name | tinyint *UNSIGNED* | 是否显示文字标识 | 0 | NO | 0.不显示 / 1.显示  |
| is_display_icon | tinyint *UNSIGNED* | 是否显示图标标识 | 0 | NO | 0.不显示 / 1.显示  |
| nickname_color | char(7) | 用户昵称颜色值 |  |  YES  |  |
| permissions | json | 权限参数 |  | NO |  |
| rank_state | tinyint *UNSIGNED* | 等级状态 | 1 | NO | 1.未设置 |
| rating | smallint *UNSIGNED* | 排列顺序 | 9 | NO | 升序排序 |
| is_enable | tinyint *UNSIGNED* | 是否启用 | 1 | NO | 0.停用 / 1.启用 |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## 角色类型介绍

- 管理人员类，在后台“用户配置”页面，选择“默认用户角色”和“禁言用户角色”时，不供选择，无法作为配置项。

## 权限参数介绍

权限参数字段: `permissions`

```json
[
    //基础设置
    {
        "permKey": "content_view", //浏览权限
        "permValue": true, //false=无权；true=有权
        "isCustom": false //false=固定；true=自定义
    },
    {
        "permKey": "dialog", //对话权限
        "permValue": true, //false=无权；true=有权
        "isCustom": false
    },
    //发表帖子设置
    {
        "permKey": "post_publish", //发表帖子权限
        "permValue": true, //false=无权；true=有权
        "isCustom": false
    },
    {
        "permKey": "post_review", //发表帖子是否需要审核
        "permValue": false, //false=不需要；true=需要
        "isCustom": false
    },
    {
        "permKey": "post_email_verify", //发表帖子要求-邮箱
        "permValue": false, //false=不要求；true=要求
        "isCustom": false
    },
    {
        "permKey": "post_phone_verify", //发表帖子要求-手机号
        "permValue": false, //false=不要求；true=要求
        "isCustom": false
    },
    {
        "permKey": "post_real_name_verify", //发表帖子要求-实名制
        "permValue": false, //false=不要求；true=要求
        "isCustom": false
    },
    {
        "permKey": "post_limit_status", //发表帖子特殊规则
        "permValue": false, //false=关闭；true=开启
        "isCustom": false
    },
    {
        "permKey": "post_limit_type", //规则类型，当 post_limit_status=true 时有效
        "permValue": 1, //1.指定某个时间段范围内生效 2.指定每天的某个时间段范围内循环生效
        "isCustom": false
    },
    {
        "permKey": "post_limit_period_start", //post_limit_type=1 专用
        "permValue": "2022-06-01 22:30:00", //开始日期和时间
        "isCustom": false
    },
    {
        "permKey": "post_limit_period_end", //post_limit_type=1 专用
        "permValue": "2022-06-06 08:00:00", //结束日期和时间
        "isCustom": false
    },
    {
        "permKey": "post_limit_cycle_start", //post_limit_type=2 专用
        "permValue": "23:00:00", //开始时间
        "isCustom": false
    },
    {
        "permKey": "post_limit_cycle_end", //post_limit_type=2 专用
        "permValue": "08:30:00", //结束时间
        "isCustom": false
    },
    {
        "permKey": "post_limit_rule", //限制规则
        "permValue": 1, //1.可以发表，但是需要审核 2.禁止发表
        "isCustom": false
    },
    {
        "permKey": "post_minute_interval", //时间间隔规则
        "permValue": 1, // 0 为不限制，其余时间为间隔分钟数
        "isCustom": false
    },
    {
        "permKey": "post_draft_count", //草稿数量限制
        "permValue": 10, // 最大 10 篇待发表评论草稿
        "isCustom": false
    },
    //发表评论设置
    {
        "permKey": "comment_publish", //发表评论权限
        "permValue": true, //false=无权；true=有权
        "isCustom": false
    },
    {
        "permKey": "comment_review", //发表评论是否需要审核
        "permValue": false, //false=不需要；true=需要
        "isCustom": false
    },
    {
        "permKey": "comment_email_verify", //发表评论要求-邮箱
        "permValue": false, //false=不要求；true=要求
        "isCustom": false
    },
    {
        "permKey": "comment_phone_verify", //发表评论要求-手机号
        "permValue": false, //false=不要求；true=要求
        "isCustom": false
    },
    {
        "permKey": "comment_real_name_verify", //发表评论要求-实名制
        "permValue": false, //false=不要求；true=要求
        "isCustom": false
    },
    {
        "permKey": "comment_limit_status", //发表评论特殊规则
        "permValue": false, //false=关闭；true=开启
        "isCustom": false
    },
    {
        "permKey": "comment_limit_type", //规则类型，当 comment_limit_status=true 时有效
        "permValue": 1, //1.指定某个时间段范围内生效 2.指定每天的某个时间段范围内循环生效
        "isCustom": false
    },
    {
        "permKey": "comment_limit_period_start", //comment_limit_type=1 专用
        "permValue": "2022-06-01 22:30:00", //开始日期和时间
        "isCustom": false
    },
    {
        "permKey": "comment_limit_period_end", //comment_limit_type=1 专用
        "permValue": "2022-06-06 08:00:00", //结束日期和时间
        "isCustom": false
    },
    {
        "permKey": "comment_limit_cycle_start", //comment_limit_type=2 专用
        "permValue": "23:00:00", //开始时间
        "isCustom": false
    },
    {
        "permKey": "comment_limit_cycle_end", //comment_limit_type=2 专用
        "permValue": "08:30:00", //结束时间
        "isCustom": false
    },
    {
        "permKey": "comment_limit_rule", //限制规则
        "permValue": 1, //1.可以发表，但是需要审核 2.禁止发表
        "isCustom": false
    },
    {
        "permKey": "comment_minute_interval", //时间间隔规则
        "permValue": 1, // 0 为不限制，其余时间为间隔分钟数
        "isCustom": false
    },
    {
        "permKey": "comment_draft_count", //草稿数量限制
        "permValue": 10, // 最大 10 篇待发表评论草稿
        "isCustom": false
    },
    //上传权限设置
    {
        "permKey": "post_editor_image", //上传图片
        "permValue": true, //false=不可上传；true=可以上传
        "isCustom": false
    },
    {
        "permKey": "post_editor_image_upload_number", //上传图片数量
        "permValue": 9, //单位个数
        "isCustom": false
    },
    {
        "permKey": "post_editor_video", //上传视频
        "permValue": true, //false=不可上传；true=可以上传
        "isCustom": false
    },
    {
        "permKey": "post_editor_video_upload_number", //上传视频数量
        "permValue": 1, //单位个数
        "isCustom": false
    },
    {
        "permKey": "post_editor_audio", //上传音频
        "permValue": true, //false=不可上传；true=可以上传
        "isCustom": false
    },
    {
        "permKey": "post_editor_audio_upload_number", //上传音频数量
        "permValue": 2, //单位个数
        "isCustom": false
    },
    {
        "permKey": "post_editor_document", //上传文档
        "permValue": true, //false=不可上传；true=可以上传
        "isCustom": false
    },
    {
        "permKey": "post_editor_document_upload_number", //上传文档数量
        "permValue": 10, //单位个数
        "isCustom": false
    },
    {
        "permKey": "comment_editor_image", //上传图片
        "permValue": true, //false=不可上传；true=可以上传
        "isCustom": false
    },
    {
        "permKey": "comment_editor_image_upload_number", //上传图片数量
        "permValue": 9, //单位个数
        "isCustom": false
    },
    {
        "permKey": "comment_editor_video", //上传视频
        "permValue": false, //false=不可上传；true=可以上传
        "isCustom": false
    },
    {
        "permKey": "comment_editor_video_upload_number", //上传视频数量
        "permValue": 1, //单位个数
        "isCustom": false
    },
    {
        "permKey": "comment_editor_audio", //上传音频
        "permValue": false, //false=不可上传；true=可以上传
        "isCustom": false
    },
    {
        "permKey": "comment_editor_audio_upload_number", //上传音频数量
        "permValue": 2, //单位个数
        "isCustom": false
    },
    {
        "permKey": "comment_editor_document", //上传文档
        "permValue": false, //false=不可上传；true=可以上传
        "isCustom": false
    },
    {
        "permKey": "comment_editor_document_upload_number", //上传文档数量
        "permValue": 10, //单位个数
        "isCustom": false
    },
    //上传配置值
    {
        "permKey": "image_max_size", //上传图片，支持的最大尺寸
        "permValue": 5, //单位 MB
        "isCustom": false
    },
    {
        "permKey": "video_max_size", //上传视频，支持的最大尺寸
        "permValue": 50, //单位 MB
        "isCustom": false
    },
    {
        "permKey": "video_max_time", //上传视频，视频支持的最大时长
        "permValue": 60, //单位 秒
        "isCustom": false
    },
    {
        "permKey": "audio_max_size", //上传音频，支持的最大尺寸
        "permValue": 50, //单位 MB
        "isCustom": false
    },
    {
        "permKey": "audio_max_time", //上传音频，音频支持的最大时长
        "permValue": 60, //单位 秒
        "isCustom": false
    },
    {
        "permKey": "document_max_size", //上传文档，支持的最大尺寸
        "permValue": 10, //单位 MB
        "isCustom": false
    },
    //互动设置
    {
        "permKey": "follow_user_max_count", //关注用户上限数量
        "permValue": 500,
        "isCustom": false
    },
    {
        "permKey": "block_user_max_count", //屏蔽用户上限数量
        "permValue": 500,
        "isCustom": false
    },
    {
        "permKey": "download_file_count", //下载文件
        "permValue": 10, //24 小时内允许下载次数
        "isCustom": false
    }
]
```

## 权限参数默认值（压缩后）

```json
//正常角色
[{"permKey":"content_view","permValue":true,"isCustom":false},{"permKey":"dialog","permValue":true,"isCustom":false},{"permKey":"post_publish","permValue":true,"isCustom":false},{"permKey":"post_review","permValue":false,"isCustom":false},{"permKey":"post_email_verify","permValue":false,"isCustom":false},{"permKey":"post_phone_verify","permValue":false,"isCustom":false},{"permKey":"post_real_name_verify","permValue":false,"isCustom":false},{"permKey":"post_limit_status","permValue":false,"isCustom":false},{"permKey":"post_limit_type","permValue":1,"isCustom":false},{"permKey":"post_limit_period_start","permValue":"2022-06-01 22:30:00","isCustom":false},{"permKey":"post_limit_period_end","permValue":"2022-06-06 08:00:00","isCustom":false},{"permKey":"post_limit_cycle_start","permValue":"23:00:00","isCustom":false},{"permKey":"post_limit_cycle_end","permValue":"08:30:00","isCustom":false},{"permKey":"post_limit_rule","permValue":1,"isCustom":false},{"permKey":"post_minute_interval","permValue":1,"isCustom":false},{"permKey":"post_draft_count","permValue":10,"isCustom":false},{"permKey":"comment_publish","permValue":true,"isCustom":false},{"permKey":"comment_review","permValue":false,"isCustom":false},{"permKey":"comment_email_verify","permValue":false,"isCustom":false},{"permKey":"comment_phone_verify","permValue":false,"isCustom":false},{"permKey":"comment_real_name_verify","permValue":false,"isCustom":false},{"permKey":"comment_limit_status","permValue":false,"isCustom":false},{"permKey":"comment_limit_type","permValue":1,"isCustom":false},{"permKey":"comment_limit_period_start","permValue":"2022-06-01 22:30:00","isCustom":false},{"permKey":"comment_limit_period_end","permValue":"2022-06-06 08:00:00","isCustom":false},{"permKey":"comment_limit_cycle_start","permValue":"23:00:00","isCustom":false},{"permKey":"comment_limit_cycle_end","permValue":"08:30:00","isCustom":false},{"permKey":"comment_limit_rule","permValue":1,"isCustom":false},{"permKey":"comment_minute_interval","permValue":1,"isCustom":false},{"permKey":"comment_draft_count","permValue":10,"isCustom":false},{"permKey":"post_editor_image","permValue":true,"isCustom":false},{"permKey":"post_editor_image_upload_number","permValue":9,"isCustom":false},{"permKey":"post_editor_video","permValue":true,"isCustom":false},{"permKey":"post_editor_video_upload_number","permValue":1,"isCustom":false},{"permKey":"post_editor_audio","permValue":true,"isCustom":false},{"permKey":"post_editor_audio_upload_number","permValue":2,"isCustom":false},{"permKey":"post_editor_document","permValue":true,"isCustom":false},{"permKey":"post_editor_document_upload_number","permValue":10,"isCustom":false},{"permKey":"comment_editor_image","permValue":true,"isCustom":false},{"permKey":"comment_editor_image_upload_number","permValue":9,"isCustom":false},{"permKey":"comment_editor_video","permValue":false,"isCustom":false},{"permKey":"comment_editor_video_upload_number","permValue":1,"isCustom":false},{"permKey":"comment_editor_audio","permValue":false,"isCustom":false},{"permKey":"comment_editor_audio_upload_number","permValue":2,"isCustom":false},{"permKey":"comment_editor_document","permValue":false,"isCustom":false},{"permKey":"comment_editor_document_upload_number","permValue":10,"isCustom":false},{"permKey":"image_max_size","permValue":5,"isCustom":false},{"permKey":"video_max_size","permValue":50,"isCustom":false},{"permKey":"video_max_time","permValue":60,"isCustom":false},{"permKey":"audio_max_size","permValue":50,"isCustom":false},{"permKey":"audio_max_time","permValue":60,"isCustom":false},{"permKey":"document_max_size","permValue":10,"isCustom":false},{"permKey":"follow_user_max_count","permValue":500,"isCustom":false},{"permKey":"block_user_max_count","permValue":500,"isCustom":false},{"permKey":"download_file_count","permValue":10,"isCustom":false}]

//禁言或待审核角色
[{"permKey":"content_view","permValue":true,"isCustom":false},{"permKey":"dialog","permValue":false,"isCustom":false},{"permKey":"post_publish","permValue":false,"isCustom":false},{"permKey":"post_review","permValue":false,"isCustom":false},{"permKey":"post_email_verify","permValue":false,"isCustom":false},{"permKey":"post_phone_verify","permValue":false,"isCustom":false},{"permKey":"post_real_name_verify","permValue":false,"isCustom":false},{"permKey":"post_limit_status","permValue":false,"isCustom":false},{"permKey":"post_limit_type","permValue":1,"isCustom":false},{"permKey":"post_limit_period_start","permValue":"2022-06-01 22:30:00","isCustom":false},{"permKey":"post_limit_period_end","permValue":"2022-06-06 08:00:00","isCustom":false},{"permKey":"post_limit_cycle_start","permValue":"23:00:00","isCustom":false},{"permKey":"post_limit_cycle_end","permValue":"08:30:00","isCustom":false},{"permKey":"post_limit_rule","permValue":1,"isCustom":false},{"permKey":"post_minute_interval","permValue":1,"isCustom":false},{"permKey":"post_draft_count","permValue":10,"isCustom":false},{"permKey":"comment_publish","permValue":false,"isCustom":false},{"permKey":"comment_review","permValue":false,"isCustom":false},{"permKey":"comment_email_verify","permValue":false,"isCustom":false},{"permKey":"comment_phone_verify","permValue":false,"isCustom":false},{"permKey":"comment_real_name_verify","permValue":false,"isCustom":false},{"permKey":"comment_limit_status","permValue":false,"isCustom":false},{"permKey":"comment_limit_type","permValue":1,"isCustom":false},{"permKey":"comment_limit_period_start","permValue":"2022-06-01 22:30:00","isCustom":false},{"permKey":"comment_limit_period_end","permValue":"2022-06-06 08:00:00","isCustom":false},{"permKey":"comment_limit_cycle_start","permValue":"23:00:00","isCustom":false},{"permKey":"comment_limit_cycle_end","permValue":"08:30:00","isCustom":false},{"permKey":"comment_limit_rule","permValue":1,"isCustom":false},{"permKey":"comment_minute_interval","permValue":1,"isCustom":false},{"permKey":"comment_draft_count","permValue":10,"isCustom":false},{"permKey":"post_editor_image","permValue":true,"isCustom":false},{"permKey":"post_editor_image_upload_number","permValue":9,"isCustom":false},{"permKey":"post_editor_video","permValue":true,"isCustom":false},{"permKey":"post_editor_video_upload_number","permValue":1,"isCustom":false},{"permKey":"post_editor_audio","permValue":true,"isCustom":false},{"permKey":"post_editor_audio_upload_number","permValue":2,"isCustom":false},{"permKey":"post_editor_document","permValue":true,"isCustom":false},{"permKey":"post_editor_document_upload_number","permValue":10,"isCustom":false},{"permKey":"comment_editor_image","permValue":true,"isCustom":false},{"permKey":"comment_editor_image_upload_number","permValue":9,"isCustom":false},{"permKey":"comment_editor_video","permValue":false,"isCustom":false},{"permKey":"comment_editor_video_upload_number","permValue":1,"isCustom":false},{"permKey":"comment_editor_audio","permValue":false,"isCustom":false},{"permKey":"comment_editor_audio_upload_number","permValue":2,"isCustom":false},{"permKey":"comment_editor_document","permValue":false,"isCustom":false},{"permKey":"comment_editor_document_upload_number","permValue":10,"isCustom":false},{"permKey":"image_max_size","permValue":5,"isCustom":false},{"permKey":"video_max_size","permValue":50,"isCustom":false},{"permKey":"video_max_time","permValue":60,"isCustom":false},{"permKey":"audio_max_size","permValue":50,"isCustom":false},{"permKey":"audio_max_time","permValue":60,"isCustom":false},{"permKey":"document_max_size","permValue":10,"isCustom":false},{"permKey":"follow_user_max_count","permValue":500,"isCustom":false},{"permKey":"block_user_max_count","permValue":500,"isCustom":false},{"permKey":"download_file_count","permValue":0,"isCustom":false}]
```
