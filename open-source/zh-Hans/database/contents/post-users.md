---
aside: false
---

# post_users *帖子-特定用户表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| post_id | bigint *UNSIGNED* | 帖子 ID |  | NO | 关联字段 [posts->id](posts.md) |
| user_id | bigint *UNSIGNED* | 用户 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| app_fskey | varchar(64) | 录入的插件 |  | NO | 哪个插件触发的记录<br>关联字段 [apps->fskey](../apps/apps.md) |
| more_json | json | 扩展字段 |  | YES |  |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## 说明

- 由插件填入的数据，API 接口会输出，视图如何使用，由客户端决定。
- 举例场景：打赏用户列表