---
aside: false
---

# languages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| table_name | varchar(64) | Table Name |  | NO | Which table |
| table_column | varchar(64) | Column Name |  | NO | Which column is multilingual |
| table_id | bigint *UNSIGNED* | Data record primary key ID |  | YES | Which data record is multilingual, the `primary key ID` of that record |
| table_key | varchar(64) | Data record identifier name |  | YES | If the data record is not based on the `primary key ID`, fill in the identifier name of the data record<br>For example: The configuration table is not based on the `primary key ID`, so the `key name` is used as the identifier name |
| lang_tag | char(16) | Language Tag |  | NO | See "[Multilingual Uniqueness Logic](../../extensions/multilingual.md)" |
| lang_content | longtext | Language Content |  | NO |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Database tables for multilingual

| Table Name | Column Name | Fresns Panel Path |
| --- | --- | --- |
| roles | name | Panel > Operations > Roles |
| stickers | name | Panel > Operations > Stickers |
| groups | name | Panel > Operations > Groups |
| groups | description | Panel > Operations > Groups |
| plugin_usages | name | Panel > Extends |
| users_icons | name | *Plugin Input* |
| hashtags | description | *Plugin Input* |
| post_appends | read_btn_name | *Plugin Input* |
| post_appends | user_list_name | *Plugin Input* |
| post_appends | comment_btn_name | *Plugin Input* |
| extends | title | *Plugin Input* |
| extends | desc_primary | *Plugin Input* |
| extends | desc_secondary | *Plugin Input* |
| extends | btn_name | *Plugin Input* |

## Configuration key for multilingual

| Key Name | Description | Fresns Panel Path |
| --- | --- | --- |
| account_terms | Terms of Service | Panel > Systems > Policy |
| account_privacy | Privacy Policy | Panel > Systems > Policy |
| account_cookies | Cookies Policy | Panel > Systems > Policy |
| account_delete | Delete Policy | Panel > Systems > Policy |
| site_name | Site Name | Panel > Systems > General |
| site_desc | Site Description | Panel > Systems > General |
| | Custom Name | Panel > Operations > Rename |
| *_limit_tip | Limit Tip | Panel > Operations > Publish |
| extcredits1_name | Extension 1 Name | *Plugin Input* |
| extcredits1_unit | Extension 1 Unit | *Plugin Input* |
| extcredits2_name | Extension 2 Name | *Plugin Input* |
| extcredits2_unit | Extension 2 Unit | *Plugin Input* |
| extcredits3_name | Extension 3 Name | *Plugin Input* |
| extcredits3_unit | Extension 3 Unit | *Plugin Input* |
| extcredits4_name | Extension 4 Name | *Plugin Input* |
| extcredits4_unit | Extension 4 Unit | *Plugin Input* |
| extcredits5_name | Extension 5 Name | *Plugin Input* |
| extcredits5_unit | Extension 5 Unit | *Plugin Input* |
