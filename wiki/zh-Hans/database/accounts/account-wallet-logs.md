# account_wallet_logs *账号钱包交易日志表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| account_id | bigint *UNSIGNED* | 账号 ID |  | NO | 这笔交易记录属于谁，关联字段 [accounts->id](accounts.md) |
| user_id | bigint *UNSIGNED* | 用户 ID |  | YES | 这笔交易记录属于谁，关联字段 [users->id](../users/users.md) |
| type | tinyint *UNSIGNED* | 交易类型 | 1 | NO | 1.收入(充值) / 2.收入(解冻) / 3.收入(交易) <br> 4.支出(提现) / 5.支出(冻结) / 6.支出(交易) |
| plugin_fskey | varchar(64) | 关联插件 |  | NO | 关联字段 [plugins->fskey](../plugins/plugins.md)<br>哪个插件触发的交易 |
| transaction_id | bigint *UNSIGNED* | 交易 ID |  | YES | 插件记录值，如果插件有单独数据，可凭该 ID 查询到插件那边记录的内容 |
| transaction_code | varchar(128) | 交易代码 |  | YES | 插件记录值，如果插件有单独数据，可凭该 Code 查询到插件那边记录的内容 |
| amount_total | decimal(10,2) | 交易总额 |  | NO | 交易金额和服务费的总和，实际从钱包产生交易的金额<br>`transaction_amount` + `system_fee` |
| transaction_amount | decimal(10,2) | 交易金额 |  | NO |  |
| system_fee | decimal(10,2) | 交易服务费 |  | NO |  |
| opening_balance | decimal(10,2) | 期初余额 |  | NO | 交易前钱包余额 |
| closing_balance | decimal(10,2) | 期末余额 |  | NO | 交易后钱包余额 |
| object_account_id | bigint *UNSIGNED* | 关联账号 ID |  | YES | 关联字段 [accounts->id](accounts.md)，这笔交易来自谁 |
| object_user_id | bigint *UNSIGNED* | 关联用户 ID |  | YES | 关联字段 [users->id](../users/users.md)，这笔交易来自谁 |
| object_wallet_log_id | bigint *UNSIGNED* | 关联交易日志 ID |  | YES | 关联字段 account_wallet_logs->id |
| state | tinyint *UNSIGNED* | 交易状态 | 1 | NO | 1.待处理<br>2.处理中<br>3.成功<br>4.失败<br>5.撤回 |
| remark | text | 备注 |  | YES |  |
| more_json | json | 备用字段 |  | YES |  |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## 交易日志说明

- 一笔交易会生成两条交易记录，一条是支出方，另一条是收入方。
- 当 object_user_id 为 0 时，代表是系统交易。
- amount 是每笔交易从钱包中支出或者收入的金额。
- transaction_amount 实际用于交易的金额，比如一笔打赏交易，打赏了 100 元，其中实际用于打赏的是 80 元，对方收到 80 元，另外 20 元是交易外的差额，记录在 system_fee 字段中，差额可能是交易手续费。最终这笔交易是 amount = 100 元，transaction_amount = 80 元，system_fee = 20 元。