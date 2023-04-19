# block_words

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| word | varchar(32) | Processed Word |  | NO | **Unique** |
| content_mode | tinyint *UNSIGNED* | Content Processing Mode (posts and comments) | 1 | NO | 1.No processing<br>2.Automatic replacement<br>3.Prohibited publication<br>4.Requires review after publication |
| user_mode | tinyint *UNSIGNED* | User Processing Mode (nickname and bio) | 1 | NO | 1.No processing<br>2.Automatic replacement<br>3.Prohibited use |
| conversation_mode | tinyint *UNSIGNED* | Message Processing Mode (conversation messages) | 1 | NO | 1.No processing<br>2.Automatic replacement<br>3.Prohibited sending |
| replace_word | varchar(64) | Replacement Word |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
