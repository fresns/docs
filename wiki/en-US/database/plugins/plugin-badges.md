# plugin_badges

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| plugin_fskey | varchar(64) | Associated Plugin Fskey |  | NO | Related field [plugins->fskey](../plugins/plugins.md) |
| user_id | bigint *UNSIGNED* | User ID |  | NO | Related field [users->id](../users/users.md) |
| display_type | tinyint *UNSIGNED* | Display Type |  | NO | 1. Red dot / 2. Text / 3. Number |
| value_text | varchar(8) | Text |  | YES | Pure text content |
| value_number | smallint *UNSIGNED* | Numeric Value |  | YES | Numeric content |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
