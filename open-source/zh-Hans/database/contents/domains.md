---
aside: false
---

# domains *域名表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| domain | varchar(64) | 域名 |  | NO | 顶级域名 |
| host | varchar(128) | 网址 Host |  | NO | **唯一值** |
| post_count | int *UNSIGNED* | 帖子数 | 0 | NO | 有多少帖子内容包含了该域名 |
| comment_count | int *UNSIGNED* | 评论数 | 0 | NO | 有多少评论内容包含了该域名 |
| is_enabled | tinyint *UNSIGNED* | 是否启用 | 1 | NO | 0.禁用 / 1.启用<br>禁用则该域名 URL 不能解析成超链接，仅作为纯文本显示 |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES | 为空代表没有删除 |

## 域名说明

**示例 1**
- link_url = https://pm.fresns.org/guide/use-cases.html
- domain = fresns.org
- host = pm.fresns.org

**示例 2**
- link_url = https://tangjie.me
- domain = tangjie.me
- host = tangjie.me
