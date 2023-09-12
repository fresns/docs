# hashtags

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| name | varchar(64) | Topic Name |  | NO |  |
| slug | varchar(255) | Topic Name URL Encode |  | NO | **Unique** |
| type | smallint *UNSIGNED* | Type |  | NO | For custom use, such as sorting or filtering |
| description | text | Description |  | YES | **Multilingual**  |
| cover_file_id | bigint *UNSIGNED* | Cover Image ID |  | YES | Related field [files->id](../systems/files.md) |
| cover_file_url | varchar(255) | Cover Image URL |  | YES |  |
| like_count | int *UNSIGNED* | Like Count | 0 | NO | Number of users who liked the topic |
| dislike_count | int *UNSIGNED* | Dislike Count | 0 | NO | Number of users who disliked the topic |
| follow_count | int *UNSIGNED* | Follow Count | 0 | NO | Number of users who followed (bookmarked) the topic |
| block_count | int *UNSIGNED* | Block Count | 0 | NO | Number of users who blocked (not interested) the topic |
| post_count | int *UNSIGNED* | Post Count | 0 | NO | Number of posts associated with the topic |
| comment_count | int *UNSIGNED* | Comment Count | 0 | NO | Number of comments associated with the topic |
| post_digest_count | int *UNSIGNED* | Digest Post Count | 0 | NO | Plugin operation to digest posts, plugin counts addition and subtraction |
| comment_digest_count | int *UNSIGNED* | Digest Comment Count | 0 | NO | Plugin operation to digest comments, plugin counts addition and subtraction |
| is_enabled | tinyint *UNSIGNED* | Is Enabled | 1 | NO | 0.Disabled / 1.Enabled |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |