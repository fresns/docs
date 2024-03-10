---
aside: false
---

# user_logs *用户日志表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| user_id | bigint *UNSIGNED* | 用户主键 ID |  | NO | 关联字段 [users->id](users.md) |
| type | tinyint *UNSIGNED* | 日志类型 |  | NO | `1` 修改 UID<br>`2` 修改用户名<br>`3` 修改昵称<br>`4` 修改头像<br>`5` 修改条幅<br>`6` 修改 Bio<br>`7` 修改认证描述 |
| content | text | 内容 |  | NO | 修改前内容 |
| is_enabled | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效 / 1.有效<br>无效表示修改被撤回 |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
