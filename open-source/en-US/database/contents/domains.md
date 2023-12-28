---
aside: false
---

# domains

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| domain | varchar(64) | Domain |  | NO | Top-level Domain |
| host | varchar(128) | URL Host |  | NO | **Unique** |
| post_count | int *UNSIGNED* | Number of Posts | 0 | NO | Number of posts containing this domain |
| comment_count | int *UNSIGNED* | Number of Comments | 0 | NO | Number of comments containing this domain |
| is_enabled | tinyint *UNSIGNED* | Is Enabled | 1 | NO | 0.Disabled / 1.Enabled<br>Disabled means the domain URL cannot be parsed into a hyperlink and is displayed as plain text only |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES | Empty means not deleted |

## Domain Name Description

**Example 1**
- link_url = https://pm.fresns.org/guide/installation.html
- domain = fresns.org
- host = pm.fresns.org

**Example 2**
- link_url = https://github.com/jevantang
- domain = github.com
- host = github.com
