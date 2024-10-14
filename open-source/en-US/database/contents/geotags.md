---
aside: false
---

# geotags

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| gtid | varchar(32) | Public ID |  | NO | **Unique** |
| type | smallint *UNSIGNED* | Type | 1 | NO | For custom use, such as sorting or filtering |
| cover_file_id | bigint *UNSIGNED* | Cover Image ID |  | YES | Related field [files->id](../systems/files.md) |
| cover_file_url | varchar(255) | Cover Image URL |  | YES |  |
| place_id | varchar(64) | Place ID |  | YES | **Unique** |
| place_type | varchar(64) | Place Type | unknown | NO |  |
| name | json | Name |  | YES | **Multilingual** |
| description | json | Description |  | YES | **Multilingual** |
| city_id | int *UNSIGNED* | City ID |  | YES |  |
| map_id | tinyint *UNSIGNED* | Maps | 1 | NO | [Maps](../../configs/dictionary/maps.md) |
| map_longitude | decimal(12,8) | Map - Longitude |  | NO | Decimal, range -180~180, negative for west longitude |
| map_latitude | decimal(12,8) | Map - Latitude |  | NO | Decimal, range -90~90, negative for south latitude |
| map_location | geometry | Map Location |  | NO | `latitude`, `longitude`<br>`SRID 4326` |
| district | json | District |  | YES | **Multilingual** |
| address | json | Address |  | YES | **Multilingual** |
| more_info | json | More Info |  | YES |  |
| view_count | int *UNSIGNED* | Number of View | 0 | NO | Count by plugin |
| like_count | int *UNSIGNED* | Like Count | 0 | NO | Number of users who liked the topic |
| dislike_count | int *UNSIGNED* | Dislike Count | 0 | NO | Number of users who disliked the topic |
| follow_count | int *UNSIGNED* | Follow Count | 0 | NO | Number of users who followed (bookmarked) the topic |
| block_count | int *UNSIGNED* | Block Count | 0 | NO | Number of users who blocked (not interested) the topic |
| post_count | int *UNSIGNED* | Post Count | 0 | NO | Number of posts associated with the topic |
| comment_count | int *UNSIGNED* | Comment Count | 0 | NO | Number of comments associated with the topic |
| post_digest_count | int *UNSIGNED* | Digest Post Count | 0 | NO | Plugin operation to digest posts, plugin counts addition and subtraction |
| comment_digest_count | int *UNSIGNED* | Digest Comment Count | 0 | NO | Plugin operation to digest comments, plugin counts addition and subtraction |
| last_post_at | timestamp | Last Post Published Time |  | YES |  |
| last_comment_at | timestamp | Last Comment Published Time |  | YES |  |
| is_enabled | tinyint *UNSIGNED* | Is Enabled | 1 | NO | 0.Disabled / 1.Enabled |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
