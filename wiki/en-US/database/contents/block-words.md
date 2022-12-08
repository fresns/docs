# block_words

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| word | varchar(32) | 处理词 |  | NO | **唯一值** |
| content_mode | tinyint *UNSIGNED* | 内容处理方式（帖子和评论） | 1 | NO | 1.不处理<br>2.自动替换<br>3.禁止发表<br>4.发表后需审核 |
| user_mode | tinyint *UNSIGNED* | 用户处理方式（昵称和简介） | 1 | NO | 1.不处理<br>2.自动替换<br>3.禁止使用 |
| conversation_mode | tinyint *UNSIGNED* | 消息处理方式（对话私信） | 1 | NO | 1.不处理<br>2.自动替换<br>3.禁止发送 |
| replace_word | varchar(64) | 替换词 |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
