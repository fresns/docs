---
aside: false
---

# verify_codes *验证码表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| template_id | tinyint *UNSIGNED* | 模板编号 |  | NO |  |
| type | tinyint *UNSIGNED* | 类型 | 1 | NO | 1.邮件 / 2.短信 |
| account | varchar(128) | 账号 |  | NO | 邮箱或手机，手机号带国际区号，区号无加号 |
| code | varchar(8) | 验证码 |  | NO |  |
| is_enabled | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效 / 1.有效 |
| expired_at | timestamp | 失效时间 |  | NO |  |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
