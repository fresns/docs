# extend_usages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| usage_type | tinyint *UNSIGNED* | Type of target |  | NO |  |
| usage_id | bigint *UNSIGNED* | Target primary key ID |  | NO |  |
| extend_id | bigint *UNSIGNED* | Extend Content ID |  | NO | Related field `extends->id` |
| can_delete | tinyint *UNSIGNED* | Can be deleted | 1 | NO | 0. No / 1. Yes<br>Editor: User has the right to delete |
| rating | smallint *UNSIGNED* | Display order | 9 | NO | Ascending order |
| plugin_fskey | varchar(64) | Related plugin |  | NO | Related field `extends->plugin_fskey` |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Introduction to using target associations

- `usage_type` Type of target
    - `1` User
    - `2` Group
    - `3` Hashtag
    - `4` Post
    - `5` Comment
    - `6` Post Log
    - `7` Comment Log
- `usage_id` Target primary key ID
    - `1` Related field [users->id](../users/users.md)
    - `2` Related field [groups->id](../contents/groups.md)
    - `3` Related field [hashtags->id](../contents/hashtags.md)
    - `4` Related field [posts->id](../contents/posts.md)
    - `5` Related field [comments->id](../contents/comments.md)
    - `6` Related field [post_logs->id](../contents/post-logs.md)
    - `7` Related field [comment_logs->id](../contents/comment-logs.md)
