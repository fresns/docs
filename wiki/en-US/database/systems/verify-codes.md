# verify_codes

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| template_id | tinyint *UNSIGNED* | 模板编号 |  | NO |  |
| type | tinyint *UNSIGNED* | 类型 | 1 | NO | 1.邮件 / 2.短信 |
| account | varchar(128) | 账号 |  | NO | 邮箱或手机，手机号带国际区号，区号无加号 |
| code | char(8) | 验证码 |  | NO |  |
| is_enable | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid |
| expired_at | timestamp | 失效时间 |  | NO |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |