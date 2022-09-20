# seo

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | 自动递增 |
| usage_type | tinyint *UNSIGNED* | 目标类型 |  | NO | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| usage_id | bigint *UNSIGNED* | 目标主键 ID |  | NO | 1.关联字段 users > id<br>2.关联字段 groups > id<br>3.关联字段 hashtags > id<br>4.关联字段 posts > id<br>5.关联字段 comments > id |
| lang_tag | char(16) | Language Tag |  | NO | 参见「[多语言唯一性逻辑](../../extensions/multilingual.md)」 |
| title | varchar(255) | SEO 标题 |  | YES |  |
| keywords | varchar(255) | SEO 关键词 |  | YES |  |
| description | varchar(255) | SEO 描述 |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
