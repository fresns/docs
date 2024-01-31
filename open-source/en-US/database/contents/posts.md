---
aside: false
---

# posts

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Post ID | | NO | Auto Increment |
| pid | varchar(32) | Public ID |  | NO | **Unique** |
| parent_id | bigint *UNSIGNED* | Parent Post ID | 0 | NO | 0 means no parent |
| user_id | bigint *UNSIGNED* | Publisher ID |  | NO | Related field [users->id](../users/users.md) |
| group_id | int *UNSIGNED* | Group ID | 0 | NO | Related field [groups->id](groups.md) |
| title | varchar(255) | Title |  | YES |  |
| content | longtext | Content |  | YES |  |
| lang_tag | varchar(16) | Language Tag |  | YES |  |
| is_markdown | tinyint *UNSIGNED* | Content in MD format | 0 | NO | 0.No / 1.Yes |
| is_anonymous | tinyint *UNSIGNED* | Anonymous | 0 | NO | 0.No / 1.Yes |
| map_longitude | decimal(12,8) | Map - Longitude |  | YES | Decimal, range -180~180, negative for west longitude |
| map_latitude | decimal(12,8) | Map - Latitude |  | YES | Decimal, range -90~90, negative for south latitude |
| sticky_state | tinyint *UNSIGNED* | Sticky state | 1 | NO | 1.No / 2.Group Sticky / 3.Global Sticky |
| digest_state | tinyint *UNSIGNED* | Digest state | 1 | NO | 1.No / 2.General Digest / 3.Premium Digest |
| digested_at | timestamp | Digest Time |  | YES | Time set to Digest |
| view_count | int *UNSIGNED* | Number of View | 0 | NO | Count by plugin |
| like_count | int *UNSIGNED* | Like count | 0 | NO | Number of users who liked the post |
| dislike_count | int *UNSIGNED* | Dislike count | 0 | NO | Number of users who disliked the post |
| follow_count | int *UNSIGNED* | Follow count | 0 | NO | Number of users who followed (saved) the post |
| block_count | int *UNSIGNED* | Block count | 0 | NO | Number of users who blocked (not interested) the post |
| comment_count | int *UNSIGNED* | Comment count | 0 | NO | Number of comments on the post, including second-level replies |
| comment_digest_count | int *UNSIGNED* | Comment digest count | 0 | NO | Total number of digest comments on the post |
| comment_like_count | int *UNSIGNED* | Comment like count | 0 | NO | Total number of likes on all comments |
| comment_dislike_count | int *UNSIGNED* | Comment dislike count | 0 | NO | Total number of dislikes on all comments |
| comment_follow_count | int *UNSIGNED* | Comment follow count | 0 | NO | Total number of follows on all comments |
| comment_block_count | int *UNSIGNED* | Comment block count | 0 | NO | Total number of blocks on all comments |
| post_count | int *UNSIGNED* | Sub-level post count | 0 | NO | Total number of posts referencing it |
| edit_count | smallint *UNSIGNED* | Number of edits | 0 | NO | Total number of edits |
| last_edit_at | timestamp | Edit time |  | YES | If editable after publish, record edit time here |
| last_comment_at | timestamp | Comment time |  | YES | Time of the latest comment |
| more_info | json | More Info |  | YES | E.g. publisher IP location name, device name, etc. |
| permissions | json | Permissions |  | YES |  |
| rank_state | tinyint *UNSIGNED* | Rank Status | 1 | NO | 1.Not set |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid (visible only to yourself) / 1.Valid |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Digest Description

**General Digest**
- General display
- Appears in the timeline of users who have followed the group

*When the Groups feature is enabled, by default only the content set as an digest under Groups will be displayed in the stream of the following page.

**Premium Digest**
- Appears on all users' timeline

## Introduction to Permission Parameters

```json
{
    "editor": {
        "isAppEditor": "Boolean / Is it edited only in the app?",
        "editorFskey": "String / editor fskey"
    },
    "contentWritingDirection": "String / Writing Direction", // ltr or rtl
    "canDelete": "Boolean / Does the author have the right to delete?",
    "readConfig": {
        "isReadLocked": "Boolean / Is a reading auth required",
        "previewPercentage": "Number / content display ratio when unauthorized",
        "whitelist": {
            "users": "Array / whitelist user ID",
            "roles": "Array / whitelist role ID"
        },
        "buttonName": {
            "Language Tag": "String / Button Name",
            "en": "Name"
        },
        "appFskey": "String / auth app fskey"
    },
    "associatedUserListConfig": {
        "hasUserList": "Boolean / Is there a special user list?",
        "userListName": {
            "Language Tag": "String / User List Name",
            "en": "Name"
        },
        "appFskey": "String / user list app fskey"
    },
    "commentConfig": {
        "visible": "Boolean / Whether comments are visible (invisible is hidden from everyone, including the author)",
        "enabled": "Boolean / Comments enabled or not",
        "privacy": "String / public or private (visible only to the author of the comment and the author of the post)",
        "action": {
            "hasActionButton": "Boolean / Does the comment have an action button?",
            "buttonName": {
                "Language Tag": "String / Button Name",
                "en": "Name"
            },
            "buttonStyle": "String / Button Style: primary secondary success danger warning info",
            "appFskey": "String / App fskey"
        }
    },
}
```
