# 频道配置

> 控制面板 > 客户端 > 频道配置

- 以下所有配置状态 `query_state` 选项如下：
    - `1` 不接受客户端传参（但支持默认参数）
    - `2` 仅接受客户端分页参数
    - `3` 接受全部参数
- 以下所有配置内容 `query_config` 同 API Query 传参一致

## 首页

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 默认首页 | default_homepage | post | string |  |

::: details `default_homepage` 选项
- portal
- user
- group
- hashtag
- geotag
- post
- comment
:::

## 门户

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 名称 | channel_portal_name |  | object | `门户` **多语言** |
| SEO 配置 | channel_portal_seo |  | object | **多语言** |

## 用户

**主页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 名称 | channel_user_name |  | object | `用户` **多语言** |
| SEO 配置 | channel_user_seo |  | object | **多语言** |
| 配置状态 | channel_user_query_state | 2 | number |  |
| 配置内容 | channel_user_query_config |  | string |  |

**列表页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 名称 | channel_user_list_name |  | object | `用户列表` **多语言** |
| SEO 配置 | channel_user_list_seo |  | object | **多语言** |
| 配置状态 | channel_user_list_query_state | 2 | number |  |
| 配置内容 | channel_user_list_query_config |  | string |  |

**互动页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 赞的用户-名称 | channel_my_like_users_name |  | object | `我的喜欢` **多语言** |
| 踩的用户-名称 | channel_my_dislike_users_name |  | object | `我不喜欢的` **多语言** |
| 关注的用户-名称 | channel_my_follow_users_name |  | object | `我的关注` **多语言** |
| 屏蔽的用户-名称 | channel_my_block_users_name |  | object | `黑名单` **多语言** |

## 小组

**主页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 名称 | channel_group_name |  | object | `小组` **多语言** |
| SEO 配置 | channel_group_seo |  | object | **多语言** |
| 列表类型 | channel_group_type | tree | string | `tree` 树结构<br>`list` 列表 |
| 配置状态 | channel_group_query_state | 2 | number |  |
| 配置内容 | channel_group_query_config |  | string |  |

**列表页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 名称 | channel_group_list_name |  | object | `小组列表` **多语言** |
| SEO 配置 | channel_group_list_seo |  | object | **多语言** |
| 配置状态 | channel_group_list_query_state | 2 | number |  |
| 配置内容 | channel_group_list_query_config |  | string |  |

**详情页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 列表类型 | channel_group_detail_type | posts | string | `posts` 帖子列表<br>`comments` 评论列表 |

**互动页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 赞的小组-名称 | channel_my_like_groups_name |  | object | `我赞的小组` **多语言** |
| 踩的小组-名称 | channel_my_dislike_groups_name |  | object | `我不喜欢的小组` **多语言** |
| 关注的小组-名称 | channel_my_follow_groups_name |  | object | `我的小组` **多语言** |
| 屏蔽的小组-名称 | channel_my_block_groups_name |  | object | `我屏蔽的` **多语言** |

## 话题

**主页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 名称 | channel_hashtag_name |  | object | `话题` **多语言** |
| SEO 配置 | channel_hashtag_seo |  | object | **多语言** |
| 配置状态 | channel_hashtag_query_state | 2 | number |  |
| 配置内容 | channel_hashtag_query_config |  | string |  |

**列表页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 名称 | channel_hashtag_list_name |  | object | `话题列表` **多语言** |
| SEO 配置 | channel_hashtag_list_seo |  | object | **多语言** |
| 配置状态 | channel_hashtag_list_query_state | 2 | number |  |
| 配置内容 | channel_hashtag_list_query_config |  | string |  |

**详情页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 列表类型 | channel_hashtag_detail_type | posts | string | `posts` 帖子列表<br>`comments` 评论列表 |

**互动页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 赞的话题-名称 | channel_my_like_hashtags_name |  | object | `我赞的话题` **多语言** |
| 踩的话题-名称 | channel_my_dislike_hashtags_name |  | object | `我不喜欢的话题` **多语言** |
| 关注的话题-名称 | channel_my_follow_hashtags_name |  | object | `我的订阅` **多语言** |
| 屏蔽的话题-名称 | channel_my_block_hashtags_name |  | object | `我不感兴趣的` **多语言** |

## 地理

**主页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 名称 | channel_geotag_name |  | object | `地理` **多语言** |
| SEO 配置 | channel_geotag_seo |  | object | **多语言** |
| 配置状态 | channel_geotag_query_state | 2 | number |  |
| 配置内容 | channel_geotag_query_config |  | string |  |

**列表页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 名称 | channel_geotag_list_name |  | object | `地理列表` **多语言** |
| SEO 配置 | channel_geotag_list_seo |  | object | **多语言** |
| 配置状态 | channel_geotag_list_query_state | 2 | number |  |
| 配置内容 | channel_geotag_list_query_config |  | string |  |

**详情页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 列表类型 | channel_geotag_detail_type | posts | string | `posts` 帖子列表<br>`comments` 评论列表 |

**互动页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 赞的地理-名称 | channel_my_like_geotags_name |  | object | `我赞的地理` **多语言** |
| 踩的地理-名称 | channel_my_dislike_geotags_name |  | object | `我不喜欢的地理` **多语言** |
| 关注的地理-名称 | channel_my_follow_geotags_name |  | object | `地理收藏夹` **多语言** |
| 屏蔽的地理-名称 | channel_my_block_geotags_name |  | object | `我不感兴趣的` **多语言** |

## 帖子

**主页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 名称 | channel_post_name |  | object | `帖子` **多语言** |
| SEO 配置 | channel_post_seo |  | object | **多语言** |
| 配置状态 | channel_post_query_state | 2 | number |  |
| 配置内容 | channel_post_query_config |  | string |  |

**列表页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 名称 | channel_post_list_name |  | object | `帖子列表` **多语言** |
| SEO 配置 | channel_post_list_seo |  | object | **多语言** |
| 配置状态 | channel_post_list_query_state | 2 | number |  |
| 配置内容 | channel_post_list_query_config |  | string |  |

**互动页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 赞的帖子-名称 | channel_my_like_posts_name |  | object | `我赞的帖子` **多语言** |
| 踩的帖子-名称 | channel_my_dislike_posts_name |  | object | `我不喜欢的帖子` **多语言** |
| 关注的帖子-名称 | channel_my_follow_posts_name |  | object | `帖子收藏夹` **多语言** |
| 屏蔽的帖子-名称 | channel_my_block_posts_name |  | object | `我不感兴趣的` **多语言** |

## 评论

**主页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 名称 | channel_comment_name |  | object | `评论` **多语言** |
| SEO 配置 | channel_comment_seo |  | object | **多语言** |
| 配置状态 | channel_comment_query_state | 2 | number |  |
| 配置内容 | channel_comment_query_config |  | string |  |

**列表页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 名称 | channel_comment_list_name |  | object | `评论列表` **多语言** |
| SEO 配置 | channel_comment_list_seo |  | object | **多语言** |
| 配置状态 | channel_comment_list_query_state | 2 | number |  |
| 配置内容 | channel_comment_list_query_config |  | string |  |

**互动页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 赞的评论-名称 | channel_my_like_comments_name |  | object | `我赞的评论` **多语言** |
| 踩的评论-名称 | channel_my_dislike_comments_name |  | object | `我不喜欢的评论` **多语言** |
| 关注的评论-名称 | channel_my_follow_comments_name |  | object | `评论收藏夹` **多语言** |
| 屏蔽的评论-名称 | channel_my_block_comments_name |  | object | `我不感兴趣的` **多语言** |

## 时间线

**主页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 名称 | channel_timeline_name |  | object | `正在关注` **多语言** |
| 默认列表 | channel_timeline_type | posts | string | `posts` 帖子列表<br>`comments` 评论列表 |

**列表页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 全部关注的帖子 | channel_timeline_posts_name |  | object | `正在关注` **多语言** |
| 关注用户的帖子 | channel_timeline_user_posts_name |  | object | `关注用户的帖子` **多语言** |
| 关注小组的帖子 | channel_timeline_group_posts_name |  | object | `关注小组的帖子` **多语言** |
| 全部关注的评论 | channel_timeline_comments_name |  | object | `正在关注` **多语言** |
| 关注用户的评论 | channel_timeline_user_comments_name |  | object | `关注用户的评论` **多语言** |
| 关注小组的评论 | channel_timeline_group_comments_name |  | object | `关注小组的评论` **多语言** |

## 附近

**主页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 名称 | channel_nearby_name |  | object | `附近` **多语言** |
| 默认列表 | channel_nearby_type | posts | string | `posts` 帖子列表<br>`comments` 评论列表 |

**列表页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 附近的帖子 | channel_nearby_posts_name |  | object | `附近` **多语言** |
| 附近的评论 | channel_nearby_comments_name |  | object | `附近` **多语言** |

## 个人中心

**主页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 个人中心 | channel_me_name |  | object | `我` **多语言** |

**列表页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 钱包 | channel_me_wallet_name |  | object | `钱包` **多语言** |
| 扩展分值 | channel_me_extcredits_name |  | object | `扩展分值` **多语言** |
| 草稿箱 | channel_me_drafts_name |  | object | `草稿箱` **多语言** |
| 名下用户 | channel_me_users_name |  | object | `用户` **多语言** |
| 设置 | channel_me_settings_name |  | object | `设置` **多语言** |

## 消息

**主页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 对话 | channel_conversations_name |  | object | `消息` **多语言** |
| 通知 | channel_notifications_name |  | object | `通知` **多语言** |

**列表页**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 全部 | channel_notifications_all_name |  | object | `全部` **多语言** |
| 系统 | channel_notifications_systems_name |  | object | `系统` **多语言** |
| 推荐 | channel_notifications_recommends_name |  | object | `推荐` **多语言** |
| 赞 | channel_notifications_likes_name |  | object | `赞` **多语言** |
| 踩 | channel_notifications_dislikes_name |  | object | `踩` **多语言** |
| 关注 | channel_notifications_follows_name |  | object | `关注` **多语言** |
| 屏蔽 | channel_notifications_blocks_name |  | object | `屏蔽` **多语言** |
| 提及 | channel_notifications_mentions_name |  | object | `提及` **多语言** |
| 评论 | channel_notifications_comments_name |  | object | `评论` **多语言** |
| 引用 | channel_notifications_quotes_name |  | object | `引用` **多语言** |

## 搜索

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 搜索 | channel_search_name |  | object | `搜索` **多语言** |
