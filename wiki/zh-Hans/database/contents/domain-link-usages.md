# domain_link_usages *链接使用记录表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| usage_type | tinyint *UNSIGNED* | 目标类型 |  | NO | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| usage_id | bigint *UNSIGNED* | 目标主键 ID |  | NO | 1.关联字段 users->id<br>2.关联字段 groups->id<br>3.关联字段 hashtags->id<br>4.关联字段 posts->id<br>5.关联字段 comments->id |
| link_id | int *UNSIGNED* | 链接 ID |  | NO | 关联字段 domain_links->id |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
