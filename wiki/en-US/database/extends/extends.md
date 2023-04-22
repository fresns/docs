# extends

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| eid | varchar(32) | Public ID |  | NO | **Unique** |
| user_id | bigint *UNSIGNED* | Creator ID |  | NO | Related field [users->id](../users/users.md) |
| plugin_unikey | varchar(64) | Creator plugin |  | NO | Related field [plugins->unikey](../plugins/plugins.md) |
| type | tinyint *UNSIGNED* | Type | 1 |  NO| 1. Text box / 2. Info box / 3. Interactive box |
| text_content | text | Text box specific - content |  | YES | Valid only when frame is "text box" extension type, supports Morkdown format |
| text_is_markdown | tinyint *UNSIGNED* | Text box specific - content in MD format | 0 | NO | 0. No / 1. Yes |
| info_type | tinyint *UNSIGNED* | Info box specific - type |  | YES | 1. Square info frame<br>2. Large square info frame<br>3. Vertical image info frame<br>4. Horizontal image info frame |
| cover_file_id | bigint *UNSIGNED* | Cover image ID |  | YES | Related field [files->id](../systems/files.md) |
| cover_file_url | varchar(255) | Cover image URL |  | YES |  |
| title | varchar(255) | Title |  | YES | **Multilingual**  |
| title_color | char(6) | Title - text color |  | YES |  |
| desc_primary | varchar(255) | Primary description |  | YES | **Multilingual** |
| desc_primary_color | char(6) | Primary description - text color |  | YES |  |
| desc_secondary | varchar(255) | Secondary description |  | YES | **Multilingual** |
| desc_secondary_color | char(6) | Secondary description - text color |  | YES |  |
| button_name | varchar(64) | Button name |  | YES | **Multilingual** |
| button_color | char(6) | Button color |  | YES |  |
| position | tinyint *UNSIGNED* | Display position | 2 | NO | 1. Top / 2. Bottom |
| parameter | varchar(128) | Custom parameter |  | YES | Logic refers to [plugin description](../plugins/plugins.md#url-concatenation-description) |
| more_json | json | Extended configuration |  | YES | Custom information, how to use requires client cooperation |
| is_enable | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid |
| created_at | timestamp | Upload time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES | Empty means not deleted |

