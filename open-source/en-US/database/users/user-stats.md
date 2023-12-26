---
aside: false
---

# user_stats

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | User Primary Key ID |  | NO | Related field [users->id](users.md) |
| like_user_count | int *UNSIGNED* | User Like Count | 0 | NO | Total number of users I liked |
| like_group_count | int *UNSIGNED* | Group Like Count | 0 | NO | Total number of groups I liked |
| like_hashtag_count | int *UNSIGNED* | Hashtag Like Count | 0 | NO | Total number of hashtags I liked |
| like_post_count | int *UNSIGNED* | Post Like Count | 0 | NO | Total number of posts I liked |
| like_comment_count | int *UNSIGNED* | Comment Like Count | 0 | NO | Total number of comments I liked |
| dislike_user_count | int *UNSIGNED* | User Dislike Count | 0 | NO | Total number of users I disliked |
| dislike_group_count | int *UNSIGNED* | Group Dislike Count | 0 | NO | Total number of groups I disliked |
| dislike_hashtag_count | int *UNSIGNED* | Hashtag Dislike Count | 0 | NO | Total number of hashtags I disliked |
| dislike_post_count | int *UNSIGNED* | Post Dislike Count | 0 | NO | Total number of posts I disliked |
| dislike_comment_count | int *UNSIGNED* | Comment Dislike Count | 0 | NO | Total number of comments I disliked |
| follow_user_count | int *UNSIGNED* | User Follow Count | 0 | NO | Total number of users I follow |
| follow_group_count | int *UNSIGNED* | Group Follow Count | 0 | NO | Total number of groups I follow |
| follow_hashtag_count | int *UNSIGNED* | Hashtag Follow Count | 0 | NO | Total number of hashtags I follow (collected) |
| follow_post_count | int *UNSIGNED* | Post Follow Count | 0 | NO | Total number of posts I follow (collected) |
| follow_comment_count | int *UNSIGNED* | Comment Follow Count | 0 | NO | Total number of comments I follow (collected) |
| block_user_count | int *UNSIGNED* | User Block Count | 0 | NO | Total number of users I blocked (blacklisted) |
| block_group_count | int *UNSIGNED* | Group Block Count | 0 | NO | Total number of groups I blocked (not interested) |
| block_hashtag_count | int *UNSIGNED* | Hashtag Block Count | 0 | NO | Total number of hashtags I blocked (not interested) |
| block_post_count | int *UNSIGNED* | Post Block Count | 0 | NO | Total number of posts I blocked (not interested) |
| block_comment_count | int *UNSIGNED* | Comment Block Count | 0 | NO | Total number of comments I blocked (not interested) |
| like_me_count | int *UNSIGNED* | Liked By Others Count | 0 | NO | Number of people who liked me |
| dislike_me_count | int *UNSIGNED* | Disliked By Others Count | 0 | NO | Number of people who disliked me |
| follow_me_count | int *UNSIGNED* | Followed By Others Count | 0 | NO | Number of people who follow me (fans count) |
| block_me_count | int *UNSIGNED* | Blocked By Others Count | 0 | NO | Number of people who blocked (blacklisted) me |
| post_publish_count | int *UNSIGNED* | Post Publish Count | 0 | NO | Total number of posts I published |
| post_digest_count | int *UNSIGNED* | Post Digest Count | 0 | NO | Total number of my featured posts |
| post_like_count | int *UNSIGNED* | Post Like Count | 0 | NO | Total number of my posts liked by others |
| post_dislike_count | int *UNSIGNED* | Post Dislike Count | 0 | NO | Total number of my posts disliked by others |
| post_follow_count | int *UNSIGNED* | Post Follow Count | 0 | NO | Total number of my posts followed by others |
| post_block_count | int *UNSIGNED* | Post Block Count | 0 | NO | Total number of my posts blocked by others |
| comment_publish_count | int *UNSIGNED* | Comment Publish Count | 0 | NO | Total number of comments I published |
| comment_digest_count | int *UNSIGNED* | Comment Digest Count | 0 | NO | Total number of my featured comments |
| comment_like_count | int *UNSIGNED* | Comment Like Count | 0 | NO | Total number of my comments liked by others |
| comment_dislike_count | int *UNSIGNED* | Comment Dislike Count | 0 | NO | Total number of my comments disliked by others |
| comment_follow_count | int *UNSIGNED* | Comment Follow Count | 0 | NO | Total number of my comments followed by others |
| comment_block_count | int *UNSIGNED* | Comment Block Count | 0 | NO | Total number of my comments blocked by others |
| extcredits1 | int *UNSIGNED* | Extension 1 | 0 | NO | Spare field, used by apps to add or subtract values and define names, named storage in the system configuration table<br>extcredits1_name This key defines the extension name, for example: Points<br>extcredits1_unit This key defines the extension unit, for example: Points |
| extcredits2 | int *UNSIGNED* | Extension 2 | 0 | NO | extcredits2_name This key defines the extension name, for example: Gold Coins<br>extcredits2_unit This key defines the extension unit, for example: Pieces |
| extcredits3 | int *UNSIGNED* | Extension 3 | 0 | NO | As above, leaving blank means not defining a name or unit |
| extcredits4 | int *UNSIGNED* | Extension 4 | 0 | NO | As above, leaving blank means not defining a name or unit |
| extcredits5 | int *UNSIGNED* | Extension 5 | 0 | NO | As above, leaving blank means not defining a name or unit |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |