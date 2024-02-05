---
aside: false
---

# citys

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| type | smallint *UNSIGNED* | Type | 1 | NO | For custom use, such as sorting or filtering |
| cover_file_id | bigint *UNSIGNED* | Cover Image ID |  | YES | Related field [files->id](../systems/files.md) |
| cover_file_url | varchar(255) | Cover Image URL |  | YES |  |
| parent_id | int *UNSIGNED* | Parent ID |  | YES |  |
| continent_code | varchar(8) | Continent Code |  | YES | North America `NA` |
| country_code | varchar(8) | Country Code |  | YES | United States `US` |
| region_code | varchar(8) | Region Code |  | YES | California `CA` |
| city_code | varchar(8) | City Code |  | YES | Santa Clara `SC` |
| zip | varchar(32) | Zip |  | YES | 215000 |
| continent | json | Continent Name |  | YES | **Multilingual** |
| country | json | Country Name |  | YES | **Multilingual** |
| region | json | Region Name |  | YES | **Multilingual** |
| city | json | City Name |  | YES | **Multilingual** |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
