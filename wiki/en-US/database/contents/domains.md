# domains

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | 自动递增 |
| domain | varchar(64) | 域名 |  | NO | 顶级域名 |
| host | varchar(128) | 网址 Host |  | NO | **Unique** |
| post_count | int *UNSIGNED* | 帖子数 | 0 | NO | 有多少帖子内容包含了该域名 |
| comment_count | int *UNSIGNED* | 评论数 | 0 | NO | 有多少评论内容包含了该域名 |
| is_enable | tinyint *UNSIGNED* | 是否启用 | 1 | NO | 0.禁用 / 1.启用<br>禁用则该域名 URL 不能解析成超链接，仅作为纯文本显示 |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES | 为空代表没有删除 |

## 域名说明

**示例 1**
- link_url = https://mp.weixin.qq.com/s/NeUVDiSBksrt4N3piZE_RQ
- domain = qq.com
- host = mp.weixin.qq.com

**示例 2**
- link_url = https://github.com/jarvis-tang
- domain = tangjie.me
- host = tangjie.me