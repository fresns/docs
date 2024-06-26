---
aside: false
---

# comments

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto-increment |
| cid | varchar(32) | Public ID |  | NO | **Unique** |
| post_id | bigint *UNSIGNED* | Post ID |  | NO | Related field [posts->id](posts.md) |
| top_parent_id | bigint *UNSIGNED* | Top-level Comment ID | 0 | NO | Belongs to which comment, 0 means not belonging to any comment |
| parent_id | bigint *UNSIGNED* | Parent Comment ID | 0 | NO | 0 means a first-level comment |
| user_id | bigint *UNSIGNED* | Publisher ID |  | NO | Related field [users->id](../users/users.md) |
| geotag_id | int *UNSIGNED* | Geotag ID | 0 | NO | Related field [geotags->id](geotags.md) |
| content | longtext | Content |  | YES |  |
| lang_tag | varchar(16) | Language Tag |  | YES |  |
| is_markdown | tinyint *UNSIGNED* | Content in MD format | 0 | NO | 0.No / 1.Yes |
| is_anonymous | tinyint *UNSIGNED* | Anonymous | 0 | NO | 0.No / 1.Yes |
| privacy_state | tinyint *UNSIGNED* | Privacy | 1 | NO | `1` Public<br>`2` Private<br>`3` Private configured by post<br>Private: visible only to the author of the comment and the author of the post |
| is_sticky | tinyint *UNSIGNED* | Is Sticky | 0 | NO |  0.No / 1.Yes |
| digest_state | tinyint *UNSIGNED* | Digest Status | 1 | NO |  1.No / 2.General Digest / 3.Premium Digest |
| digested_at | timestamp | Digest Time |  | YES | Time set to Digest |
| view_count | int *UNSIGNED* | Number of View | 0 | NO | Count by plugin |
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
| edit_count | smallint *UNSIGNED* | Number of edits | 0 | NO | Total number of edits |
| last_edit_at | timestamp | Edit Time |  | YES | If editable after publish, record edit time here |
| last_comment_at | timestamp | Comment Time |  | YES | Time of the latest comment<br>When a user replies to this comment |
| more_info | json | More Info |  | YES | E.g. publisher IP location name, device name, etc. |
| permissions | json | Permissions |  | YES |  |
| rank_state | tinyint *UNSIGNED* | Rank Status | 1 | NO | `1` Not set |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid (visible only to yourself) / 1.Valid |
| created_at | timestamp | Publish Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Introduction to Permission Parameters

```json
{
    "editor": {
        "isAppEditor": "Boolean / Whether the editor plugin create",
        "editorFskey": "String / editor fskey"
    },
    "contentWritingDirection": "String / Writing Direction", // ltr or rtl
    "canDelete": "Boolean / Does the author have the right to delete?",
    "activeButton": {
        // Link with post commentConfig.action, replace this configuration
        "hasActiveButton": "Boolean / Whether there is an active button or not",
        "buttonName": {
            "Language Tag": "String / Button Name",
            "en": "Name"
        },
        "buttonStyle": "String / Button Style primary secondary success danger warning info",
        "appFskey": "String / App fskey"
    },
}
```
