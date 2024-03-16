---
aside: false
---

# account_wallets *账号钱包表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| account_id | bigint *UNSIGNED* | 账号主键 ID |  | NO | 关联字段 [accounts->id](accounts.md) |
| balance | decimal(10,2) | 钱包金额 | 0.00 | NO | 单位：元 |
| freeze_amount | decimal(10,2) | 不可用金额 | 0.00 | NO | 例如正在提现或者冻结<br>单位：元 |
| password | varchar(64) | 钱包支付密码 |  | YES |  |
| is_enabled | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.禁用 / 1.正常<br>禁用时不可进行任何交易，包括提现 |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
