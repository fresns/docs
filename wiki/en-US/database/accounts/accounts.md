# accounts

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Account ID |  | NO | 自动递赠 |
| aid | varchar(32) | 账号 ID |  | NO | **唯一值** |
| type | tinyint *UNSIGNED* | 类型 | 3 | NO | 1.超级管理员<br>2.普通管理员<br>3.普通用户 |
| country_code | varchar(8) | 国际区号 |  | YES | 格式无加号，例如中国是 86，美国是 1 |
| pure_phone | varchar(128) | 没有区号的手机号 |  | YES | 不带国际区号 |
| phone | varchar(128) | 带区号的手机号 |  | YES | **唯一值** 带国际区号（区号无加号） |
| email | varchar(128) | 邮箱 |  | YES | **唯一值** |
| password | char(64) | 密码 |  | YES | 加密存储 |
| last_login_at | timestamp | 最后一次登录时间 |  | NO |  |
| is_verify | tinyint *UNSIGNED* | 实名认证状态 | 0 | NO | 0.未认证 / 1.已认证 |
| verify_plugin_unikey | varchar(64) | 实名认证插件名称 |  | YES | 哪个插件处理的认证，关联字段 [plugins->unikey](../plugins/plugins.md) |
| verify_real_name | varchar(128) | 证件姓名 |  | YES |  |
| verify_gender | tinyint *UNSIGNED* | 证件性别 |  | NO | 0.未知 / 1.男 / 2.女 |
| verify_cert_type | varchar(32) | 证件类型 | idcard | YES | `idcard` 身份证<br>`passport` 护照<br>`driving` 驾驶证<br>`business` 营业执照 |
| verify_cert_number | varchar(128) | 证件号码 |  | YES |  |
| verify_identity_type | tinyint *UNSIGNED* | 实名认证类型 |  | YES | 0.未知 / 1.个人 / 2.企业 |
| verify_at | timestamp | 实名认证时间 |  | YES |  |
| verify_log | text | 认证结果记录 |  | YES | 接口返回数据包完整备份<br>**注意数据脱敏** |
| is_enable | tinyint *UNSIGNED* | 是否启用 | 1 | NO | 0.禁用 / 1.正常 |
| wait_delete | tinyint *UNSIGNED* | 是否待删除 | 0 | NO | 0.否 / 1.是 |
| wait_delete_at | timestamp | 等待Delete Time |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
