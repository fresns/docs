---
aside: false
---

# accounts

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Account ID |  | NO | Auto Increment |
| aid | varchar(32) | Account ID |  | NO | **Unique** |
| type | tinyint *UNSIGNED* | Type | 3 | NO | 1.Super Administrator<br>2.Regular Administrator<br>3.Regular User |
| country_code | varchar(8) | International Area Code |  | YES | Format without plus sign, e.g., Singapore is 65, USA is 1 |
| pure_phone | varchar(128) | Phone Number without Area Code |  | YES | Without international area code |
| phone | varchar(128) | Phone Number with Area Code |  | YES | **Unique** With international area code (no plus sign in the area code) |
| email | varchar(128) | Email |  | YES | **Unique** |
| password | varchar(64) | Password |  | YES | Encrypted storage |
| last_login_at | timestamp | Last Login Time |  | NO |  |
| is_verify | tinyint *UNSIGNED* | Real Name Verification Status | 0 | NO | 0.Unverified / 1.Verified |
| verify_app_fskey | varchar(64) | Real Name Auth Plugin Fskey |  | YES | Which plugin handled the authentication, Related field [apps->fskey](../apps/apps.md) |
| verify_real_name | varchar(128) | Certificate Name |  | YES |  |
| verify_gender | tinyint *UNSIGNED* | Certificate Gender | 1 | NO | 1.Unknown / 2.Male / 3.Female |
| verify_cert_type | varchar(32) | Certificate Type | idcard | YES | `idcard`, `passport`, `driving`, `business` |
| verify_cert_number | varchar(128) | Certificate Number |  | YES |  |
| verify_identity_type | tinyint *UNSIGNED* | Real Name Verification Type |  | YES | 1.Unknown / 2.Individual / 3.Company |
| verify_at | timestamp | Real Name Verification Time |  | YES |  |
| verify_log | text | Verification Result Record |  | YES | Full backup of the returned data package<br>**Note data desensitization** |
| fs_connected_id | varchar(26) | Fresns connected id |  | YES | **Unique** |
| fs_connected_token | char(64) | Fresns connected token |  | YES | **Unique** |
| is_enabled | tinyint *UNSIGNED* | Is Enabled | 1 | NO | 0.Disabled / 1.Normal |
| wait_delete | tinyint *UNSIGNED* | Is Pending Deletion | 0 | NO | 0.No / 1.Yes |
| wait_delete_at | timestamp | Waiting Delete Time |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
