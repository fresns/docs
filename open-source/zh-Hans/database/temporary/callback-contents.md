---
aside: false
---

# temp_callback_contents *回调内容表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| app_fskey | varchar(64) | 生成数据的插件名称 |  | NO | 关联字段 [apps->fskey](../apps/apps.md) |
| key | varchar(64) | 回调查询键 |  | NO | **唯一值** |
| type | smallint *UNSIGNED* | 类型 | 1 | NO | 见下方描述 |
| content | json | 返参内容 |  | YES |  |
| retention_days | tinyint *UNSIGNED* | 保留天数 | 1 | NO | 数据可保留天数，超时后可以被删除 |
| is_enabled | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效 / 1.有效 |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## type 类型

| 类型编号 | 常量名 | 描述 |
| --- | --- | --- |
| 1 | TYPE_UNKNOWN | 未知 |
| 2 | TYPE_AUTHORIZATION | 授权信息 |
| 3 | TYPE_TOKEN | 凭证 |
| 4 | TYPE_ACCOUNT | 账号 |
| 5 | TYPE_WALLET | 钱包 |
| 6 | TYPE_USER | 用户 |
| 7 | TYPE_GROUP | 小组 |
| 8 | TYPE_HASHTAG | 话题 |
| 9 | TYPE_GEOTAG | 地理 |
| 10 | TYPE_POST | 帖子 |
| 11 | TYPE_COMMENT | 评论 |
| 12 | TYPE_ARCHIVE | 扩展资料信息 |
| 13 | TYPE_EXTEND | 扩展内容信息 |
| 14 | TYPE_OPERATION | 扩展功能信息 |
| 15 | TYPE_FILE | 文件 |
| 16 | TYPE_LOCATION_INFO | 位置信息 |
