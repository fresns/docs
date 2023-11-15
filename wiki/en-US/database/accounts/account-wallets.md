# account_wallets

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| account_id | bigint *UNSIGNED* | Account ID |  | NO | Related field [accounts->id](accounts.md) |
| balance | decimal(10,2) | Wallet Balance | 0.00 | NO | Unit: Yuan |
| freeze_amount | decimal(10,2) | Unavailable Amount | 0.00 | NO | e.g. Withdrawal in progress or frozen<br>Unit: Yuan |
| password | varchar(64) | Wallet Payment Password |  | YES |  |
| bank_name | varchar(64) | Bank Name |  | YES | Dedicated field for withdrawal information storage |
| swift_code | varchar(32) | SWIFT Code |  | YES | Dedicated field for withdrawal information storage |
| bank_address | varchar(255) | Bank Address |  | YES | Dedicated field for withdrawal information storage |
| bank_account | varchar(128) | Bank Account |  | YES | Dedicated field for withdrawal information storage |
| bank_status | tinyint *UNSIGNED* | Bank Verification Status | 1 | NO | Dedicated field for withdrawal information storage<br>1.Unverified / 2.Verified |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Disabled / 1.Normal<br>Cannot conduct any transactions, including withdrawals, when disabled |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Description of withdrawal dedicated fields

**Dedicated withdrawal fields to ensure that updating the wallet plugin does not affect the withdrawal information entered by users**

Chase Bank example:
- Bank Name: JPMorgan Chase Bank, N.A.
- SWIFT Code: CHASUS33
- Bank Address:
- Bank Account: 5329 9268 5228 1990
- Account Holder Name: *Related field users->verify_real_name*
- Account Holder Phone Number: *Related field users->phone*

PayPal example:
- Bank Name: PayPal
- SWIFT Code: *Empty*
- Bank Address:
- Bank Account: support@fresns.org
- Account Holder Name: *Related field users->verify_real_name*
- Account Holder Phone Number: *Related field users->phone*

*The "SWIFT Code" field can be left empty or store plugin-specific content, such as a code for quickly identifying banks*
