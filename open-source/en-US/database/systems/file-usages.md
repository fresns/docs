---
aside: false
---

# file_usages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| file_id | bigint *UNSIGNED* | File ID |  | NO | Related field [files->id](../systems/files.md)<br>Not a unique value, one file can be associated with multiple additional information |
| file_type | tinyint *UNSIGNED* | File Type | 1 | NO | 1.Image / 2.Video / 3.Audio / 4.Document |
| usage_type | tinyint *UNSIGNED* | Usage Type | 1 | NO | [See Number Description](../number.md#type-of-file-usage) |
| platform_id | tinyint *UNSIGNED* | Platform ID |  | NO | [Dictionary Key Value -> Platform Number](../dictionary/platforms.md)<br>Platform where the operation takes place |
| table_name | varchar(64) | Source Table Name |  | NO | Which table |
| table_column | varchar(64) | Source Column Name |  | NO | Which column is the file value |
| table_id | bigint *UNSIGNED* | Source Table Primary Key ID |  | YES | Which data record's file, the `Primary Key ID` of that record |
| table_key | varchar(64) | Source Table Identifier |  | YES | If the data record is not based on `Primary Key ID`, fill in the identifier of the data record<br>For example: The configuration table is not based on `Primary Key ID`, so the key name is used as the identifier.<br>Another example is the plugin table identifier, Related field [apps->fskey](../apps/apps.md) |
| rating | smallint *UNSIGNED* | Sorting |  | YES |  |
| account_id | bigint *UNSIGNED* | Account ID |  | YES | Related field [accounts->id](../accounts/accounts.md) |
| user_id | bigint *UNSIGNED* | User ID |  | YES | Related field [users->id](../users/users.md) |
| remark | text | Remark |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
