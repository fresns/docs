# Wallet

> Panel > Systems > Wallet

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Wallet Function | wallet_status | false | boolean | true or false |
| Wallet Currency Code | wallet_currency_code | USD | string | Currency code [currency_codes](../dictionary/currency-codes.md) |
| Custom Currency Name | wallet_currency_name |  | string | **Multilingual** |
| Custom Currency Unit Name | wallet_currency_unit |  | string | **Multilingual** |
| Currency Precision | wallet_currency_precision | 2 | number | Decimal places |
| Withdraw Function | wallet_withdraw_status | false | boolean | true or false |
| Withdrawal Review Required | wallet_withdraw_review | false | boolean | true or false |
| Withdrawal Verify Identity | wallet_withdraw_verify | false | boolean | true or false |
| Withdrawal Interval Time | wallet_withdraw_interval_time | 10 | number | Unit: minutes<br>0 or empty means no limit |
| Withdrawal Fee Rate | wallet_withdraw_rate | 5 | number | Percentage, 6 means 6% |
| Minimum Withdrawal Amount per Transaction | wallet_withdraw_min_sum | 100 | number | Unit: currency |
| Maximum Withdrawal Amount per Transaction | wallet_withdraw_max_sum | 1000 | number | Unit: currency |
| Daily Withdrawal Amount Limit | wallet_withdraw_sum_limit | 30000 | number | Daily total limit for all users' withdrawals across the platform |
