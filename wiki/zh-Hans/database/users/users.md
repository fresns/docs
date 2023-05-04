# users *用户主表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 用户主键 ID |  | NO | 自动递赠 |
| account_id | bigint *UNSIGNED* | 账号主键 ID |  | NO | 关联字段 [accounts->id](../accounts/accounts.md) |
| uid | bigint *UNSIGNED* | 用户 ID |  | NO | **唯一值**<br>初始化 8 位数随机生成，8 位数不够再 9 位数，以此类推。<br>随机生成时，不以 0 开头 |
| username | varchar(64) | 用户名 |  | NO | **唯一值**，只能是包含字母、数字和单个连字符 |
| nickname | varchar(64) | 用户昵称 |  | NO | 不能带标点符号或特殊符号<br>允许有单个空格，但空格不能在开头或结尾 |
| password | char(64) | 密码 |  | YES | 加密存储<br>为空代表无密码，切换用户无需验证<br>密码四位数起，只能是数字、英文字母，或者两种组合 |
| avatar_file_id | bigint *UNSIGNED* | 头像图片 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| avatar_file_url | varchar(255) | 头像图片完整 URL |  | YES |  |
| banner_file_id | bigint *UNSIGNED* | 背景条幅图 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| banner_file_url | varchar(255) | 背景条幅图 URL |  | YES |  |
| gender | tinyint *UNSIGNED* | 性别 | 1 | NO | 1.未知 / 2.男 / 3.女 |
| birthday | timestamp | 生日 |  | YES |  |
| bio | text | 简介 |  | YES |  |
| location | varchar(128) | 地点 |  | YES |  |
| verified_status | tinyint *UNSIGNED* | 用户认证状态 | 0 | NO | 0.未认证 / 1.已认证 |
| verified_desc | varchar(255) | 用户认证描述 |  | YES |  |
| verified_at | timestamp | 用户认证时间 |  | YES |  |
| conversation_limit | tinyint *UNSIGNED* | 对话设置 | 1 | NO | 1.允许所有用户<br>2.仅允许我关注的用户<br>3.我关注的用户和已认证的用户（verified_status）<br>4.不允许所有用户 |
| comment_limit | tinyint *UNSIGNED* | 评论设置 | 1 | NO | 1.允许所有用户<br>2.仅允许我关注的用户<br>3.我关注的用户和已认证的用户（verified_status）<br>4.不允许所有用户 |
| timezone | varchar(16) | 偏好时区 |  | YES |  |
| expired_at | timestamp | 失效时间 |  | YES | 私有模式专用字段，为空代表永久有效 |
| last_post_at | timestamp | 最后发表帖子时间 |  | YES |  |
| last_comment_at | timestamp | 最后发表评论时间 |  | YES |  |
| last_username_at | timestamp | 最后修改用户名时间 |  | YES |  |
| last_nickname_at | timestamp | 最后修改用户昵称时间 |  | YES |  |
| rank_state | tinyint *UNSIGNED* | 等级状态 | 1 | NO | 1.未设置 |
| is_enabled | tinyint *UNSIGNED* | 是否封号 | 1 | NO | 0.封号 / 1.正常 |
| wait_delete | tinyint *UNSIGNED* | 是否待删除 | 0 | NO | 0.否 / 1.是 |
| wait_delete_at | timestamp | 等待删除时间 |  | YES |  |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
