---
aside: false
---

# verify_codes

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| template_id | tinyint *UNSIGNED* | Template ID |  | NO |  |
| type | tinyint *UNSIGNED* | Type | 1 | NO | 1.Email / 2.SMS |
| account | varchar(128) | Account |  | NO | Email or phone, phone number with international area code, no plus sign |
| code | varchar(8) | Verification Code |  | NO |  |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid |
| expired_at | timestamp | Expiration Time |  | NO |  |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
