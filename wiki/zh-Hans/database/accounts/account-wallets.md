# account_wallets *账号钱包表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递赠 |
| account_id | bigint *UNSIGNED* | 账号主键 ID |  | NO | 关联字段 [accounts->id](accounts.md) |
| balance | decimal(10,2) | 钱包金额 | 0.00 | NO | 单位：元 |
| freeze_amount | decimal(10,2) | 不可用金额 | 0.00 | NO | 例如正在提现或者冻结<br>单位：元 |
| password | char(64) | 钱包支付密码 |  | YES |  |
| bank_name | varchar(64) | 银行名称 |  | YES | 提现专用信息存储字段 |
| swift_code | varchar(32) | SWIFT 代码 |  | YES | 提现专用信息存储字段 |
| bank_address | varchar(255) | 银行地址 |  | YES | 提现专用信息存储字段 |
| bank_account | varchar(128) | 银行账号 |  | YES | 提现专用信息存储字段 |
| bank_status | tinyint *UNSIGNED* | 银行验证状态 | 1 | NO | 提现专用信息存储字段<br>1.未验证 / 2.已验证 |
| is_enable | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.禁用 / 1.正常<br>禁用时不可进行任何交易，包括提现 |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## 提现专用字段说明

**提现专用字段，保证更新钱包插件也不影响用户填写的提现信息**

招商银行举例：
- 银行名称：招商银行
- SWIFT 代码：*空*
- 银行地址：上海市唐镇支行
- 银行账号：6214 8888 8888 8888 8888
- 账户持有人姓名：*关联字段 users->verify_real_name*
- 账户持有人的电话号码：*关联字段 users->phone*

支付宝举例：
- 银行名称：Alipay
- SWIFT 代码：*空*
- 银行地址：
- 银行账号：support@fresns.org
- 账户持有人姓名：*关联字段 users->verify_real_name*
- 账户持有人的电话号码：*关联字段 users->phone*

*「SWIFT 代码」字段可以留空，或者存储插件专用内容，比如用于快速识别银行的编号*