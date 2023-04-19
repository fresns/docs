# seo

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | 自动递增 |
| usage_type | tinyint *UNSIGNED* | 目标类型 |  | NO | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| usage_id | bigint *UNSIGNED* | 目标主键 ID |  | NO | 1.Related field users > id<br>2.Related field groups > id<br>3.Related field hashtags > id<br>4.Related field posts > id<br>5.Related field comments > id |
| lang_tag | char(16) | Language Tag |  | NO | 参见「[多语言唯一性逻辑](../../extensions/multilingual.md)」 |
| title | varchar(255) | SEO 标题 |  | YES |  |
| keywords | varchar(255) | SEO 关键词 |  | YES |  |
| description | varchar(255) | SEO 描述 |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
