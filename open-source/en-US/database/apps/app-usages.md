---
aside: false
---

# app_usages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| usage_type | tinyint *UNSIGNED* | Type |  | NO | 1.Wallet recharge<br>2.Wallet withdrawal<br>3.Editor extensions<br>4.Content type extensions<br>5.Management extensions<br>6.Group extensions<br>7.User feature extensions<br>8.User profile extensions<br>9.Channel extensions |
| app_fskey | varchar(64) | Associated Plugin Fskey |  | NO | Related field [apps->fskey](../apps/apps.md) |
| name | json | Name |  | NO | **Multilingual** |
| icon_file_id | bigint *UNSIGNED* | Icon file ID |  | YES | Related field [files->id](../systems/files.md) |
| icon_file_url | varchar(255) | Icon file URL |  | YES |  |
| scene | varchar(16) | For type 3,4,5: Usage scene |  | YES | 1. Post / 2. Comment / 3. User<br>Multiple separated by commas |
| editor_toolbar | tinyint *UNSIGNED* | For type 3: Display in toolbar | 0 | NO | 0. No / 1. Yes |
| editor_number | tinyint *UNSIGNED* | For type 3: Usage count |  | YES | Maximum value 10 |
| is_group_admin | tinyint *UNSIGNED* | For type 5,6: Group admin only | 0 | NO | 0. No / 1. Yes<br>When value is 1, roles field is invalid |
| group_id | int *UNSIGNED* | For type 6: Group ID |  | YES | Related field [groups->id](../contents/groups.md)<br>Associated plugin's group |
| roles | varchar(128) | Authorized roles |  | YES | Authorized role IDs, multiple separated by commas |
| parameter | varchar(128) | Custom parameter |  | YES |  |
| sort_order | smallint *UNSIGNED* | Sorting order | 9 | NO | Ascending order |
| can_delete | tinyint *UNSIGNED* | Can be deleted | 1 | NO | 0. Cannot delete / 1. Can delete |
| is_enabled | tinyint *UNSIGNED* | Is enabled | 1 | NO | 0. Disabled / 1. Enabled |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Application Scene Parameter Description

**Editor Extension - Application Scene**

- 1. Post: Apply in the post editor
- 2. Comment: Apply in the comment editor

**Management Extension - Application Scene**

- 1. Post: Apply in the post function menu
- 2. Comment: Apply in the post function menu
- 2. User: Apply in the user homepage function menu

## URL Concatenation Explanation and Custom Parameter Explanation

- View apps table [URL Concatenation Explanation](apps.md#url-concatenation-description)
