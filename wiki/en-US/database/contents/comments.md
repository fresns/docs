# comments

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto-increment |
| cid | varchar(32) | Public ID |  | NO | **Unique** |
| post_id | bigint *UNSIGNED* | Post ID |  | NO | Related field [posts->id](posts.md) |
| top_parent_id | bigint *UNSIGNED* | Top-level Comment ID | 0 | NO | Belongs to which comment, 0 means not belonging to any comment |
| parent_id | bigint *UNSIGNED* | Parent Comment ID | 0 | NO | 0 means a first-level comment |
| user_id | bigint *UNSIGNED* | Publisher ID |  | NO | Related field [users->id](../users/users.md) |
| content | longtext | Content |  | YES |  |
| lang_tag | char(16) | Language Tag |  | YES |  |
| writing_direction | char(3) | Writing Direction |  | YES |  |
| is_markdown | tinyint *UNSIGNED* | Is the content in MD format | 0 | NO | 0.No / 1.Yes |
| is_anonymous | tinyint *UNSIGNED* | Is Anonymous | 0 | NO | 0.No / 1.Yes |
| map_longitude | decimal(12,8) | Map-Longitude |  | YES | Float, range -180~180, negative numbers represent west longitude |
| map_latitude | decimal(12,8) | Map-Latitude |  | YES | Float, range -90~90, negative numbers represent south latitude |
| is_sticky | tinyint *UNSIGNED* | Is Sticky | 0 | NO |  0.No / 1.Yes |
| digest_state | tinyint *UNSIGNED* | Digest Status | 1 | NO |  1.No / 2.General Digest / 3.Advanced Digest |
| like_count | int *UNSIGNED* | Number of Likes | 0 | NO | Number of users who liked this comment |
| dislike_count | int *UNSIGNED* | Number of Dislikes | 0 | NO | Number of users who disliked this comment |
| follow_count | int *UNSIGNED* | Number of Follows | 0 | NO | Number of users who followed (collected) this comment |
| block_count | int *UNSIGNED* | Number of Blocks | 0 | NO | Number of users who blocked (not interested) this comment |
| comment_count | int *UNSIGNED* | Number of Comments | 0 | NO | Number of replies to this comment |
| comment_digest_count | int *UNSIGNED* | Total Digest Comments | 0 | NO | Total number of digest comments in response to this comment |
| comment_like_count | int *UNSIGNED* | Number of Likes for Sub-Comments | 0 | NO | Total number of likes for all comments in response to this comment |
| comment_dislike_count | int *UNSIGNED* | Number of Dislikes for Sub-Comments | 0 | NO | Total number of dislikes for all comments in response to this comment |
| comment_follow_count | int *UNSIGNED* | Number of Follows for Sub-Comments | 0 | NO | Total number of follows for all comments in response to this comment |
| comment_block_count | int *UNSIGNED* | Number of Blocks for Sub-Comments | 0 | NO | Total number of blocks for all comments in response to this comment |
| latest_edit_at | timestamp | Edit Time |  | YES | If editable after publish, record edit time here |
| latest_comment_at | timestamp | Comment Time |  | YES | Time of the latest comment<br>When a user replies to this comment |
| rank_state | tinyint *UNSIGNED* | Rank Status | 1 | NO | 1.Not set |
| is_enable | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid (visible only to yourself) / 1.Valid |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO | Publish time |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
