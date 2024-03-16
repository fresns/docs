---
aside: false
---

# account_wallets

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| account_id | bigint *UNSIGNED* | Account ID |  | NO | Related field [accounts->id](accounts.md) |
| balance | decimal(10,2) | Wallet Balance | 0.00 | NO | Unit: Yuan |
| freeze_amount | decimal(10,2) | Unavailable Amount | 0.00 | NO | e.g. Withdrawal in progress or frozen<br>Unit: Yuan |
| password | varchar(64) | Wallet Payment Password |  | YES |  |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Disabled / 1.Normal<br>Cannot conduct any transactions, including withdrawals, when disabled |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
