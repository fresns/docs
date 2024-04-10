---
aside: false
---

# temp_verify_codes

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| template_id | tinyint *UNSIGNED* | Template ID |  | NO |  |
| type | tinyint *UNSIGNED* | Type |  | NO | 1.Email / 2.SMS |
| account | varchar(128) | Account |  | NO | Email or phone, phone number with international area code, no plus sign |
| code | varchar(8) | Verification Code |  | NO |  |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid |
| expired_at | timestamp | Expiration Time |  | NO |  |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## template_id

| Number | Const Name | Description |
| --- | --- | --- |
| 1 | TEMPLATE_GENERAL | General Verify Code |
| 2 | TEMPLATE_REGISTER_ACCOUNT | Register New Account |
| 3 | TEMPLATE_EDIT_PROFILE | Modify Information Verify |
| 4 | TEMPLATE_CHANGE_EMAIL_OR_PHONE | Change New Binding |
| 5 | TEMPLATE_RESET_LOGIN_PASSWORD | Reset Login Password |
| 6 | TEMPLATE_RESET_WALLET_PASSWORD | Reset Payment Password |
| 7 | TEMPLATE_LOGIN_ACCOUNT | Use Verify Code to Login |
| 8 | TEMPLATE_DELETE_ACCOUNT | Use Verify Code to Delete Account |

## type

| Number | Const Name | Description |
| --- | --- | --- |
| 1 | TYPE_EMAIL | Email |
| 2 | TYPE_SMS | SMS |
