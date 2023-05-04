# user_extcredits_logs *用户扩展分值日志表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递赠 |
| user_id | bigint *UNSIGNED* | 用户 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| extcredits_id | tinyint *UNSIGNED* | extcredits 编号 |  | NO | extcredits 1~5 |
| type | tinyint *UNSIGNED* | 操作类型 | 1 | NO | 1.加分 / 2.减分 |
| amount | int *UNSIGNED* | 数值 | 0 | NO | 加或减的数值 |
| opening_amount | int *UNSIGNED* | 期初数值 |  | NO | 操作前数值 |
| closing_amount | int *UNSIGNED* | 期末数值 |  | NO | 操作后数值 |
| plugin_fskey | varchar(64) | 关联插件 |  | NO | 关联字段 [plugins->fskey](../plugins/plugins.md)<br>哪个插件触发的操作 |
| remark | text | 备注 |  | YES |  |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
