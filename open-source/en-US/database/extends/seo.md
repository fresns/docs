---
aside: false
---

# seo

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| usage_type | tinyint *UNSIGNED* | Type of target |  | NO | [Content Type](../numbered-description.md#content-type) |
| usage_id | bigint *UNSIGNED* | Target primary key ID |  | NO | 1.Related field `users->id`<br>2.Related field `groups->id`<br>3.Related field `hashtags->id`<br>4.Related field `posts->id`<br>5.Related field `comments->id` |
| lang_tag | varchar(16) | Language Tag |  | NO | Refer to "[Multilingual Uniqueness Logic](../../extensions/multilingual.md)" |
| title | varchar(255) | SEO Title |  | YES |  |
| keywords | varchar(255) | SEO Keywords |  | YES |  |
| description | varchar(255) | SEO Description |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
