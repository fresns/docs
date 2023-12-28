---
aside: false
---

# user_stats *用户数据统计表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| user_id | bigint *UNSIGNED* | 用户主键 ID |  | NO | 关联字段 [users->id](users.md) |
| like_user_count | int *UNSIGNED* | 用户赞数 | 0 | NO | 我赞的用户总数 |
| like_group_count | int *UNSIGNED* | 小组赞数 | 0 | NO | 我赞的小组总数 |
| like_hashtag_count | int *UNSIGNED* | 话题赞数 | 0 | NO | 我赞的话题总数 |
| like_post_count | int *UNSIGNED* | 帖子赞数 | 0 | NO | 我赞的帖子总数 |
| like_comment_count | int *UNSIGNED* | 评论赞数 | 0 | NO | 我赞的评论总数 |
| dislike_user_count | int *UNSIGNED* | 用户踩数 | 0 | NO | 我踩的用户总数 |
| dislike_group_count | int *UNSIGNED* | 小组踩数 | 0 | NO | 我踩的小组总数 |
| dislike_hashtag_count | int *UNSIGNED* | 话题踩数 | 0 | NO | 我踩的话题总数 |
| dislike_post_count | int *UNSIGNED* | 帖子踩数 | 0 | NO | 我踩的帖子总数 |
| dislike_comment_count | int *UNSIGNED* | 评论踩数 | 0 | NO | 我踩的评论总数 |
| follow_user_count | int *UNSIGNED* | 用户关注数 | 0 | NO | 我关注的用户总数 |
| follow_group_count | int *UNSIGNED* | 小组关注数 | 0 | NO | 我关注的小组总数 |
| follow_hashtag_count | int *UNSIGNED* | 话题关注数 | 0 | NO | 我关注的（收藏）话题总数 |
| follow_post_count | int *UNSIGNED* | 帖子关注数 | 0 | NO | 我关注的（收藏）帖子总数 |
| follow_comment_count | int *UNSIGNED* | 评论关注数 | 0 | NO | 我关注的（收藏）评论总数 |
| block_user_count | int *UNSIGNED* | 用户屏蔽数 | 0 | NO | 我一共屏蔽（拉黑）了多少用户 |
| block_group_count | int *UNSIGNED* | 小组屏蔽数 | 0 | NO | 我屏蔽的（不感兴趣）小组总数 |
| block_hashtag_count | int *UNSIGNED* | 话题屏蔽数 | 0 | NO | 我屏蔽的（不感兴趣）话题总数 |
| block_post_count | int *UNSIGNED* | 帖子屏蔽数 | 0 | NO | 我屏蔽的（不感兴趣）帖子总数 |
| block_comment_count | int *UNSIGNED* | 评论屏蔽数 | 0 | NO | 我屏蔽的（不感兴趣）评论总数 |
| like_me_count | int *UNSIGNED* | 被赞数 | 0 | NO | 别人赞我的人数 |
| dislike_me_count | int *UNSIGNED* | 被踩数 | 0 | NO | 别人踩我的人数 |
| follow_me_count | int *UNSIGNED* | 被关注数 | 0 | NO | 别人关注我的人数（粉丝数） |
| block_me_count | int *UNSIGNED* | 被屏蔽数 | 0 | NO | 别人屏蔽（拉黑）我的人数 |
| post_publish_count | int *UNSIGNED* | 帖子发表总数 | 0 | NO | 我发表的帖子总数 |
| post_digest_count | int *UNSIGNED* | 帖子精华总数 | 0 | NO | 我的帖子精华总数 |
| post_like_count | int *UNSIGNED* | 帖子被赞总数 | 0 | NO | 别人赞了我的帖子总数 |
| post_dislike_count | int *UNSIGNED* | 帖子被踩总数 | 0 | NO | 别人踩了我的帖子总数 |
| post_follow_count | int *UNSIGNED* | 帖子被关注总数 | 0 | NO | 别人关注了我的帖子总数 |
| post_block_count | int *UNSIGNED* | 帖子被屏蔽总数 | 0 | NO | 别人屏蔽了我的帖子总数 |
| comment_publish_count | int *UNSIGNED* | 评论发表总数 | 0 | NO | 我发表的评论总数 |
| comment_digest_count | int *UNSIGNED* | 评论精华总数 | 0 | NO | 我的评论精华总数 |
| comment_like_count | int *UNSIGNED* | 评论被赞总数 | 0 | NO | 别人赞了我的评论总数 |
| comment_dislike_count | int *UNSIGNED* | 评论被踩总数 | 0 | NO | 别人踩了我的评论总数 |
| comment_follow_count | int *UNSIGNED* | 评论被关注总数 | 0 | NO | 别人关注了我的评论总数 |
| comment_block_count | int *UNSIGNED* | 评论被屏蔽总数 | 0 | NO | 别人屏蔽了我的评论总数 |
| extcredits1 | int *UNSIGNED* | 扩展 1 | 0 | NO | 备用字段，由插件加减数值和定义名称，命名存储在系统配置表里<br>extcredits1_name 该键名定义该扩展命名，例如：积分<br>extcredits1_unit 该键名定义扩展单位，例如：分 |
| extcredits2 | int *UNSIGNED* | 扩展 2 | 0 | NO | extcredits2_name 该键名定义该扩展命名，例如：金币<br>extcredits2_unit 该键名定义扩展单位，例如：枚 |
| extcredits3 | int *UNSIGNED* | 扩展 3 | 0 | NO | 同上，留空代表不定义名称或单位 |
| extcredits4 | int *UNSIGNED* | 扩展 4 | 0 | NO | 同上，留空代表不定义名称或单位 |
| extcredits5 | int *UNSIGNED* | 扩展 5 | 0 | NO | 同上，留空代表不定义名称或单位 |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |