---
aside: false
---

# users

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | User Primary Key ID |  | NO | Auto Increment |
| account_id | bigint *UNSIGNED* | Account Primary Key ID |  | NO | Related field [accounts->id](../accounts/accounts.md) |
| uid | bigint *UNSIGNED* | User ID |  | NO | **Unique**<br>Initialized with 8-digit random number, 9 digits if not enough, and so on.<br>Randomly generated without starting with 0 |
| username | varchar(64) | Username |  | NO | **Unique**, can only contain letters, numbers, and single hyphens |
| nickname | varchar(64) | Nickname |  | NO | Cannot contain punctuation or special symbols<br>Single space allowed but not at the beginning or end |
| pin | varchar(64) | PIN |  | YES | Personal identification number |
| avatar_file_id | bigint *UNSIGNED* | Avatar Image ID |  | YES | Related field [files->id](../systems/files.md) |
| avatar_file_url | varchar(255) | Avatar Image Full URL |  | YES |  |
| banner_file_id | bigint *UNSIGNED* | Background Banner Image ID |  | YES | Related field [files->id](../systems/files.md) |
| banner_file_url | varchar(255) | Background Banner Image URL |  | YES |  |
| gender | tinyint *UNSIGNED* | Gender | 1 | NO | 1.Unknown / 2.Male / 3.Female / 4.Custom |
| gender_pronoun | tinyint *UNSIGNED* | Gender Pronoun |  | YES | 1.She / 2.He / 3.They |
| gender_custom | varchar(64) | Gender Custom |  | YES |  |
| birthday_display_type | tinyint *UNSIGNED* | Birthday Display Type | 1 | NO | 1.Y-m-d / 2.Y / 3.m-d / 4.Hidden |
| bio | text | Bio |  | YES |  |
| location | varchar(128) | Location |  | YES |  |
| verified_status | tinyint *UNSIGNED* | User Verification Status | 0 | NO | 0.Unverified / 1.Verified |
| verified_desc | varchar(255) | User Verification Description |  | YES |  |
| verified_at | timestamp | User Verification Time |  | YES |  |
| conversation_policy | tinyint *UNSIGNED* | Conversation Settings | 1 | NO | `1` Everyone<br>`2` People you follow<br>`3` People you follow or verified<br>`4` No one is allowed |
| comment_policy | tinyint *UNSIGNED* | Comment Settings | 1 | NO | `1` Everyone<br>`2` People you follow<br>`3` People you follow or verified<br>`4` No one is allowed |
| more_info | json | More Info |  | YES |  |
| expired_at | timestamp | Expiration Time |  | YES | Private mode dedicated field, empty means permanently valid |
| last_login_at | timestamp | Last Login Time |  | NO |  |
| last_activity_at | timestamp | Last Activity Time |  | YES |  |
| last_post_at | timestamp | Last Post Published Time |  | YES |  |
| last_comment_at | timestamp | Last Comment Published Time |  | YES |  |
| last_username_at | timestamp | Last Username Modification Time |  | YES |  |
| last_nickname_at | timestamp | Last Nickname Modification Time |  | YES |  |
| rank_state | tinyint *UNSIGNED* | Rank State | 1 | NO | 1.Not set |
| is_enabled | tinyint *UNSIGNED* | Account Disabled | 1 | NO | 0.Disabled / 1.Normal |
| wait_delete | tinyint *UNSIGNED* | Pending Deletion | 0 | NO | 0.No / 1.Yes |
| wait_delete_at | timestamp | Pending Deletion Time |  | YES |  |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
