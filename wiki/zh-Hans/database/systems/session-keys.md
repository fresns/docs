# session_keys *交互密钥表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| platform_id | tinyint *UNSIGNED* | 平台编号 |  | NO | 关联键名 [configs->item_key = platforms](../dictionary/platforms.md) |
| name | varchar(64) | 用途名称 |  | NO |  |
| type | tinyint *UNSIGNED* | 密钥权限类型 |  | NO | 1.主程 API / 2.管理 API / 3.插件 API |
| plugin_fskey | varchar(64) | 关联插件 |  | YES | 插件 API 专用，关联字段 [plugins->fskey](../plugins/plugins.md) |
| app_id | char(8) | App ID |  | NO | 自动生成 |
| app_secret | char(32) | 客户端密钥 |  | NO | 自动生成，加密存储数据库中 |
| is_read_only | tinyint *UNSIGNED* | 是否只读密钥 | 0 | NO | 0.否 / 1.是 |
| is_enabled | tinyint *UNSIGNED* | 是否启用 | 1 | NO | 0.停用 / 1.启用 |
| remark | text | 备注 |  | YES |  |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## 密钥权限说明

- 主程序 API 密钥，可以请求所有接口，包括插件的 API
- 插件 API 密钥，只能请求插件自己的 API