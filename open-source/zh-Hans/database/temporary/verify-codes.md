---
aside: false
---

# temp_verify_codes *验证码表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| template_id | tinyint *UNSIGNED* | 模板编号 |  | NO |  |
| type | tinyint *UNSIGNED* | 类型 |  | NO | 1.邮件 / 2.短信 |
| account | varchar(128) | 账号 |  | NO | 邮箱或手机，手机号带国际区号，区号无加号 |
| code | varchar(8) | 验证码 |  | NO |  |
| is_enabled | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效 / 1.有效 |
| expired_at | timestamp | 失效时间 |  | NO |  |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## template_id

| 类型编号 | 常量名 | 描述 |
| --- | --- | --- |
| 1 | TEMPLATE_GENERAL | 通用验证码 |
| 2 | TEMPLATE_REGISTER_ACCOUNT | 注册新账号 |
| 3 | TEMPLATE_EDIT_PROFILE | 修改资料验证 |
| 4 | TEMPLATE_CHANGE_EMAIL_OR_PHONE | 更换新绑定 |
| 5 | TEMPLATE_RESET_LOGIN_PASSWORD | 重置登录密码 |
| 6 | TEMPLATE_RESET_WALLET_PASSWORD | 重置支付密码 |
| 7 | TEMPLATE_LOGIN_ACCOUNT | 使用验证码登录 |
| 8 | TEMPLATE_DELETE_ACCOUNT | 使用验证码注销账号 |

## type

| 类型编号 | 常量名 | 描述 |
| --- | --- | --- |
| 1 | TYPE_EMAIL | 邮件 |
| 2 | TYPE_SMS | 短信 |
