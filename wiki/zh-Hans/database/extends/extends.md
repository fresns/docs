# extends *扩展内容表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| eid | varchar(32) | 对外公开 ID |  | NO | **唯一值** |
| user_id | bigint *UNSIGNED* | 创建者 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| plugin_fskey | varchar(64) | 创建者插件 |  | NO | 关联字段 [plugins->fskey](../plugins/plugins.md) |
| type | tinyint *UNSIGNED* | 类型 | 1 |  NO| 1.文本框 / 2.信息框 / 3.交互框 |
| text_content | text | 文本框专用-内容 |  | YES | 仅 frame 为“文本框”扩展类型的时候有效，支持 Morkdown 格式 |
| text_is_markdown | tinyint *UNSIGNED* | 文本框专用-内容是否为 MD 格式 | 0 | NO | 0.否 / 1.是 |
| info_box_type | tinyint *UNSIGNED* | 信息框专用-类型 |  | YES | 1.正方形信息框架<br>2.大号正方形信息框架<br>3.纵图信息框架<br>4.横图信息框架 |
| cover_file_id | bigint *UNSIGNED* | 封面图 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| cover_file_url | varchar(255) | 封面图 URL |  | YES |  |
| title | varchar(255) | 标题 |  | YES | **多语言**  |
| title_color | char(6) | 标题-文字颜色 |  | YES |  |
| desc_primary | varchar(255) | 主要副信息 |  | YES | **多语言** |
| desc_primary_color | char(6) | 主要副信息-文字颜色 |  | YES |  |
| desc_secondary | varchar(255) | 次要副信息 |  | YES | **多语言** |
| desc_secondary_color | char(6) | 次要副信息-文字颜色 |  | YES |  |
| button_name | varchar(64) | 按钮名称 |  | YES | **多语言** |
| button_color | char(6) | 按钮颜色 |  | YES |  |
| position | tinyint *UNSIGNED* | 显示位置 | 2 | NO | 1.上方 / 2.下方 |
| parameter | varchar(128) | 自定义参数 |  | YES | 逻辑参见[插件说明](../plugins/plugins.md#地址拼接说明) |
| more_json | json | 扩展配置 |  | YES | 自定义信息，如何使用需客户端配合 |
| is_enabled | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效 / 1.有效 |
| created_at | timestamp | 上传时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES | 为空代表没有删除 |
