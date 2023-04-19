# domain_link_usages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | 自动递增 |
| usage_type | tinyint *UNSIGNED* | 目标类型 |  | NO | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| usage_id | bigint *UNSIGNED* | Key ID |  | NO | 1.Related field users > id<br>2.Related field groups > id<br>3.Related field hashtags > id<br>4.Related field posts > id<br>5.Related field comments > id |
| link_id | int *UNSIGNED* | 链接 ID |  | NO | Related field domain_links > id |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
