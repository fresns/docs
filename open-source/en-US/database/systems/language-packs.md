---
aside: false
---

# language_packs

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| lang_key | varchar(64) | Key Name | | NO | **Unique** |
| lang_values | json | Language Content |  | NO | **Multilingual** |
| is_custom | tinyint *UNSIGNED* | Is Custom | 1 | NO | 0. No / 1. Yes<br>0 means system-built, 1 means added by app |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
