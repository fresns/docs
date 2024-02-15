---
aside: false
---

# file_usages *文件使用记录表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| file_id | bigint *UNSIGNED* | 文件 ID |  | NO | 关联字段 [files->id](../systems/files.md)<br>不是唯一值，一个文件支持关联多个附属信息 |
| file_type | tinyint *UNSIGNED* | 文件类型 | 1 | NO | 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| usage_type | tinyint *UNSIGNED* | 用途类型 | 1 | NO | [见编号说明](../numbered-description.md#文件用途编号) |
| platform_id | tinyint *UNSIGNED* | 平台 ID |  | NO | [字典健值->平台编号](../../configs/dictionary/platforms.md)<br>在哪个平台上操作的使用 |
| table_name | varchar(64) | 来源表名 |  | NO | 哪个表 |
| table_column | varchar(64) | 来源字段名 |  | NO | 哪个字段是文件值 |
| table_id | bigint *UNSIGNED* | 来源表主键 ID |  | YES | 哪条数据记录的文件，该条记录的`主键 ID` |
| table_key | varchar(64) | 来源表标识 |  | YES | 如果数据记录不以`主键 ID`为依据时，则填写数据记录的标识名<br>例如：配置表不以`主键 ID`为依据，所以使用键名作为标识名。<br>再比如插件表标识名，关联字段 [apps->fskey](../apps/apps.md) |
| sort_order | smallint *UNSIGNED* | 排序 |  | YES |  |
| account_id | bigint *UNSIGNED* | 账号 ID |  | YES | 关联字段 [accounts->id](../accounts/accounts.md) |
| user_id | bigint *UNSIGNED* | 用户 ID |  | YES | 关联字段 [users->id](../users/users.md) |
| remark | text | 备注 |  | YES |  |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
