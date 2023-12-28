---
aside: false
---

# groups

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Group ID | | NO | Auto Increment |
| gid | varchar(32) | Public ID |  | NO | **Unique** |
| parent_id | int *UNSIGNED* | Parent Group ID |  | YES |  |
| user_id | bigint *UNSIGNED* | Creator ID |  | YES | Related field [users->id](../users/users.md) |
| name | json | Group Name |  | NO | **Multilingual**  |
| description | json | Group Description |  | YES | **Multilingual** |
| type | smallint *UNSIGNED* | Group Category | 1 | NO |  |
| privacy | tinyint *UNSIGNED* | Group Mode | 1 | NO | 1.Public (Anyone can see who's in the group and what they post.)<br>2.Private (Only members can see who's in the group and what they post.) |
| private_end_after | tinyint *UNSIGNED* | Private Group Configuration | 1 | NO | 1.No restrictions<br>2.All group content invisible<br>3.Content visible before expiration, new content not visible |
| visibility | tinyint *UNSIGNED* | Is Discoverable<br>Also understood as whether to display | 1 | NO | 1.Discoverable (anyone can find this group)<br>2.Undiscoverable (only members can find this group) |
| follow_type | tinyint *UNSIGNED* | Follow Method | 1 | NO | 1.Native / 2.Plugin / 3.Closed |
| follow_app_fskey | varchar(64) | Related Plugin |  | YES | Used when follow_type=2<br>Related field [apps->fskey](../apps/apps.md) |
| cover_file_id | bigint *UNSIGNED* | Group Cover Image ID |  | YES | Related field [files->id](../systems/files.md) |
| cover_file_url | varchar(255) | Group Cover Image URL |  | YES |  |
| banner_file_id | bigint *UNSIGNED* | Group Banner Image ID |  | YES | Related field [files->id](../systems/files.md) |
| banner_file_url | varchar(255) | Group Banner Image URL |  | YES |  |
| sort_order | smallint *UNSIGNED* | Display Order | 9 | NO | Ascending order |
| is_recommend | tinyint *UNSIGNED* | Recommended Status | 0 | NO | 0.Not recommended / 1.Recommended |
| recommend_sort_order | smallint *UNSIGNED* | Recommended Order | 9 | NO | Ascending order |
| permissions | json | Permission Parameters |  | NO |  |
| more_info | json | More Info |  | YES |  |
| subgroup_count | int *UNSIGNED* | Number of Subgroup | 0 | NO |  |
| like_count | int *UNSIGNED* | Number of Likes | 0 | NO | Number of users who liked this group |
| dislike_count | int *UNSIGNED* | Number of Dislikes | 0 | NO | Number of users who disliked this group |
| follow_count | int *UNSIGNED* | Number of Followers | 0 | NO | Number of users who followed (bookmarked) this group |
| block_count | int *UNSIGNED* | Number of Blocks | 0 | NO | Number of users who blocked (not interested in) this group |
| post_count | int *UNSIGNED* | Number of Posts | 0 | NO | Number of posts published in this group |
| comment_count | int *UNSIGNED* | Number of Comments | 0 | NO | Number of comments published in this group |
| post_digest_count | int *UNSIGNED* | Number of digest Posts | 0 | NO | Plugin operation to digest posts, plugin adds and subtracts count |
| comment_digest_count | int *UNSIGNED* | Number of digest Comments | 0 | NO | Plugin operation to digest comments, plugin adds and subtracts count |
| is_enabled | tinyint *UNSIGNED* | Is Enabled | 1 | NO | 0.Not enabled / 1.Enabled |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Introduction to Permission Parameters

```json
{
    // Whitelist roles for non-public mode
    "private_whitelist_roles": [
        "2", "3"
    ],
    "can_publish": true, // Whether to open the publishing privilege, if not, all people have no right to publish, the following publishing configuration is invalid.
    // Post publishing settings
    "publish_post": 1, // Post publishing permissions 1.All users 2.Users who followed the group only 3.Only specified role users 4.Group administrators only
    "publish_post_roles": [
        // Authorized role IDs, Related field roles->id
        "2", "3"
    ],
    "publish_post_review": false, // Enable post review
    // Comment publishing settings
    "publish_comment": 1, // Comment publishing permissions 1.All users 2.Users who followed the group only 3.Only specified role users 4.Group administrators only
    "publish_comment_roles": [
        "2", "3"
    ],
    "publish_comment_review": false, // Enable comment review
    // Additional custom settings can be added below
}
```

## Default values of Permission Parameters

```json
{"private_whitelist_roles":[],"can_publish": true,"publish_post":1,"publish_post_roles":[],"publish_post_review":false,"publish_comment":1,"publish_comment_roles":[],"publish_comment_review":false}
```
