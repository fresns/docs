# account_wallet_logs

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| account_id | bigint *UNSIGNED* | Account ID |  | NO | The account this transaction record belongs to, Related field [accounts->id](accounts.md) |
| user_id | bigint *UNSIGNED* | User ID |  | YES | The user this transaction record belongs to, Related field [users->id](../users/users.md) |
| type | tinyint *UNSIGNED* | Transaction Type | 1 | NO | 1.Income (Recharge) / 2.Income (Unfreeze) / 3.Income (Transaction) <br> 4.Expense (Withdrawal) / 5.Expense (Freeze) / 6.Expense (Transaction) |
| plugin_fskey | varchar(64) | Related Plugin |  | NO | Related field [plugins->fskey](../plugins/plugins.md)<br>Which plugin triggered the transaction |
| transaction_id | bigint *UNSIGNED* | Transaction ID |  | YES | Plugin record value, if the plugin has separate data, this ID can be used to query the content recorded in the plugin |
| transaction_code | varchar(128) | Transaction Code |  | YES | Plugin record value, if the plugin has separate data, this Code can be used to query the content recorded in the plugin |
| amount_total | decimal(10,2) | Transaction Total |  | NO | The sum of transaction amount and service fee, actual transaction amount from the wallet<br>`transaction_amount` + `system_fee` |
| transaction_amount | decimal(10,2) | Transaction Amount |  | NO |  |
| system_fee | decimal(10,2) | Transaction Service Fee |  | NO |  |
| opening_balance | decimal(10,2) | Opening Balance |  | NO | Wallet balance before the transaction |
| closing_balance | decimal(10,2) | Closing Balance |  | NO | Wallet balance after the transaction |
| object_account_id | bigint *UNSIGNED* | Related Account ID |  | YES | Related field [accounts->id](accounts.md), this transaction is from whom |
| object_user_id | bigint *UNSIGNED* | Related User ID |  | YES | Related field [users->id](../users/users.md), this transaction is from whom |
| object_wallet_log_id | bigint *UNSIGNED* | Related Transaction Log ID |  | YES | Related field account_wallet_logs->id |
| is_enable | tinyint *UNSIGNED* | Is Successful | 1 | NO | 0.Transaction Failed / 1.Transaction Successful |
| remark | text | Remark |  | YES |  |
| more_json | json | Backup Field |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Transaction Log Explanation

- A transaction generates two transaction records, one for the payer and one for the payee.
- When object_user_id is 0, it means it's a system transaction.
- amount is the amount of each transaction spent or received from the wallet.
- transaction_amount is the actual amount used for the transaction. For example, a 100-unit reward transaction, where 80 units were actually used for the reward, the recipient received 80 units, and the remaining 20 units were the transaction difference recorded in the system_fee field.
