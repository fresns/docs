# 钱包设置

> 控制面板 > 系统 > 钱包设置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 钱包功能 | wallet_status | false | boolean | true 或 false |
| 钱包货币代码 | wallet_currency_code | USD | string | 货币代码 [currency_codes](../dictionary/currency-codes.md) |
| 货币自定义命名 | wallet_currency_name |  | string | **多语言** |
| 货币单位自定义命名 | wallet_currency_unit |  | string | **多语言** |
| 货币精度 | wallet_currency_precision | 2 | number | 小数点位数 |
| 提现功能 | wallet_withdraw_status | false | boolean | true 或 false |
| 提现是否需要审核 | wallet_withdraw_review | false | boolean | true 或 false |
| 提现是否验证实名信息 | wallet_withdraw_verify | false | boolean | true 或 false |
| 提现间隔时间 | wallet_withdraw_interval_time | 10 | number | 单位: 分钟<br>0 或不填则不限制 |
| 提现手续费率 | wallet_withdraw_rate | 5 | number | 百分比，6 代表 6% |
| 单次提现最小金额 | wallet_withdraw_min_sum | 100 | number | 单位: 元 |
| 单次提现最大金额 | wallet_withdraw_max_sum | 1000 | number | 单位: 元 |
| 每日提现总金额上限 | wallet_withdraw_sum_limit | 30000 | number | 整站用户所有提现的每日上限总金额 |