---
aside: false
---

# file_downloads *文件下载记录表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| file_id | bigint *UNSIGNED* | 文件 ID |  | NO | 关联字段 [files->id](files.md) |
| file_type | tinyint *UNSIGNED* | 文件类型 | 1 | NO | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| account_id | bigint *UNSIGNED* | 下载者账号 ID |  | NO | 关联字段 [accounts->id](../accounts/accounts.md) |
| user_id | bigint *UNSIGNED* | 下载者用户 ID |  | YES | 关联字段 [users->id](../users/users.md) |
| app_fskey | varchar(64) | 下载者插件 |  | YES | 关联字段 [apps->fskey](../apps/apps.md)<br>如果在插件中下载，则是该插件 fskey |
| target_type | tinyint *UNSIGNED* | 下载来源类型 | 1 | NO | [内容类型编号](../numbered-description.md#内容类型编号) |
| target_id | bigint *UNSIGNED* | 来源目标主键 ID |  | NO |  |
| created_at | timestamp | 下载时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
