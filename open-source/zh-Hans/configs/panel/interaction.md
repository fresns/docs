# 互动配置

> 控制面板 > 运营 > 互动配置

## 用户互动

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 赞-是否启用 | user_like_enabled | false | boolean |  |
| 赞-行为名称 | user_like_name |  | object | `喜欢` **多语言**|
| 赞-赞者头衔 | user_like_user_title |  | object | `喜欢者` **多语言** |
| 赞-是否公开记录 | user_like_public_record | 1 | number | 赞了他的用户<br>`1`不公开<br>`2`仅对自己公开<br>`3`对所有人公开 |
| 赞-是否公开总数 | user_like_public_count | 1 | number | 赞了他的用户总数<br>`1`不公开<br>`2`仅对自己公开<br>`3`对所有人公开 |
| 踩-是否启用 | user_dislike_enabled | false | boolean |  |
| 踩-行为名称 | user_dislike_name |  | object | `不喜欢` **多语言** |
| 踩-踩者头衔 | user_dislike_user_title |  | object | `不喜欢者` **多语言** |
| 踩-是否公开记录 | user_dislike_public_record | 1 | number | 踩了他的用户<br>`1`不公开<br>`2`仅对自己公开<br>`3`对所有人公开 |
| 踩-是否公开总数 | user_dislike_public_count | 1 | number | 踩了他的用户总数<br>`1`不公开<br>`2`仅对自己公开<br>`3`对所有人公开 |
| 关注-是否启用 | user_follow_enabled | true | boolean |  |
| 关注-行为名称 | user_follow_name |  | object | `关注` **多语言** |
| 关注-关注者头衔 | user_follow_user_title |  | object | `关注者` **多语言** |
| 关注-是否公开记录 | user_follow_public_record | 3 | number | 关注了他的用户<br>`1`不公开<br>`2`仅对自己公开<br>`3`对所有人公开 |
| 关注-是否公开总数 | user_follow_public_count | 3 | number | 关注了他的用户总数<br>`1`不公开<br>`2`仅对自己公开<br>`3`对所有人公开 |
| 屏蔽-是否启用 | user_block_enabled | false | boolean |  |
| 屏蔽-行为名称 | user_block_name |  | true | `拉黑` **多语言** |
| 屏蔽-屏蔽者头衔 | user_block_user_title |  | object | `黑名单` **多语言** |
| 屏蔽-是否公开记录 | user_block_public_record | 1 | number | 屏蔽了他的用户<br>`1`不公开<br>`2`仅对自己公开<br>`3`对所有人公开 |
| 屏蔽-是否公开总数 | user_block_public_count | 1 | number | 屏蔽了他的用户总数<br>`1`不公开<br>`2`仅对自己公开<br>`3`对所有人公开 |

## 小组互动

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 赞-是否启用 | group_like_enabled | false | boolean |  |
| 赞-行为名称 | group_like_name |  | object | `赞` **多语言**|
| 赞-赞者头衔 | group_like_user_title |  | object | `喜欢者` **多语言** |
| 赞-是否公开记录 | group_like_public_record | false | boolean | 赞了他的用户 |
| 赞-是否公开总数 | group_like_public_count | true | boolean | 赞了他的用户总数 |
| 踩-是否启用 | group_dislike_enabled | false | boolean |  |
| 踩-行为名称 | group_dislike_name |  | object | `不喜欢` **多语言** |
| 踩-踩者头衔 | group_dislike_user_title |  | object | `不喜欢者` **多语言** |
| 踩-是否公开记录 | group_dislike_public_record | false | boolean | 踩了他的用户 |
| 踩-是否公开总数 | group_dislike_public_count | true | boolean | 踩了他的用户总数 |
| 关注-是否启用 | group_follow_enabled | true | boolean |  |
| 关注-行为名称 | group_follow_name |  | object | `加入` **多语言** |
| 关注-关注者头衔 | group_follow_user_title |  | object | `成员` **多语言** |
| 关注-是否公开记录 | group_follow_public_record | false | boolean | 关注了他的用户 |
| 关注-是否公开总数 | group_follow_public_count | true | boolean | 关注了他的用户总数 |
| 屏蔽-是否启用 | group_block_enabled | false | boolean |  |
| 屏蔽-行为名称 | group_block_name |  | object | `屏蔽` **多语言** |
| 屏蔽-屏蔽者头衔 | group_block_user_title |  | object | `屏蔽者` **多语言** |
| 屏蔽-是否公开记录 | group_block_public_record | false | boolean | 屏蔽了他的用户 |
| 屏蔽-是否公开总数 | group_block_public_count | false | boolean | 屏蔽了他的用户总数 |

## 话题互动

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 赞-是否启用 | hashtag_like_enabled | true | boolean |  |
| 赞-行为名称 | hashtag_like_name |  | object | `赞` **多语言**|
| 赞-赞者头衔 | hashtag_like_user_title |  | object | `喜欢者` **多语言** |
| 赞-是否公开记录 | hashtag_like_public_record | false | boolean | 赞了他的用户 |
| 赞-是否公开总数 | hashtag_like_public_count | true | boolean | 赞了他的用户总数 |
| 踩-是否启用 | hashtag_dislike_enabled | false | boolean |  |
| 踩-行为名称 | hashtag_dislike_name |  | object | `不感兴趣` **多语言** |
| 踩-踩者头衔 | hashtag_dislike_user_title |  | object | `不喜欢者` **多语言** |
| 踩-是否公开记录 | hashtag_dislike_public_record | false | boolean | 踩了他的用户 |
| 踩-是否公开总数 | hashtag_dislike_public_count | true | boolean | 踩了他的用户总数 |
| 关注-是否启用 | hashtag_follow_enabled | true | boolean |  |
| 关注-行为名称 | hashtag_follow_name |  | object | `订阅` **多语言** |
| 关注-关注者头衔 | hashtag_follow_user_title |  | object | `订阅者` **多语言** |
| 关注-是否公开记录 | hashtag_follow_public_record | false | boolean | 关注了他的用户 |
| 关注-是否公开总数 | hashtag_follow_public_count | true | boolean | 关注了他的用户总数 |
| 屏蔽-是否启用 | hashtag_block_enabled | false | boolean |  |
| 屏蔽-行为名称 | hashtag_block_name |  | object | `屏蔽` **多语言** |
| 屏蔽-屏蔽者头衔 | hashtag_block_user_title |  | object | `屏蔽者` **多语言** |
| 屏蔽-是否公开记录 | hashtag_block_public_record | false | boolean | 屏蔽了他的用户 |
| 屏蔽-是否公开总数 | hashtag_block_public_count | false | boolean | 屏蔽了他的用户总数 |

## 地理互动

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 赞-是否启用 | geotag_like_enabled | true | boolean |  |
| 赞-行为名称 | geotag_like_name |  | object | `赞` **多语言**|
| 赞-赞者头衔 | geotag_like_user_title |  | object | `喜欢者` **多语言** |
| 赞-是否公开记录 | geotag_like_public_record | false | boolean | 赞了他的用户 |
| 赞-是否公开总数 | geotag_like_public_count | true | boolean | 赞了他的用户总数 |
| 踩-是否启用 | geotag_dislike_enabled | false | boolean |  |
| 踩-行为名称 | geotag_dislike_name |  | object | `不感兴趣` **多语言** |
| 踩-踩者头衔 | geotag_dislike_user_title |  | object | `不喜欢者` **多语言** |
| 踩-是否公开记录 | geotag_dislike_public_record | false | boolean | 踩了他的用户 |
| 踩-是否公开总数 | geotag_dislike_public_count | true | boolean | 踩了他的用户总数 |
| 关注-是否启用 | geotag_follow_enabled | true | boolean |  |
| 关注-行为名称 | geotag_follow_name |  | object | `收藏` **多语言** |
| 关注-关注者头衔 | geotag_follow_user_title |  | object | `收藏者` **多语言** |
| 关注-是否公开记录 | geotag_follow_public_record | false | boolean | 关注了他的用户 |
| 关注-是否公开总数 | geotag_follow_public_count | true | boolean | 关注了他的用户总数 |
| 屏蔽-是否启用 | geotag_block_enabled | false | boolean |  |
| 屏蔽-行为名称 | geotag_block_name |  | object | `屏蔽` **多语言** |
| 屏蔽-屏蔽者头衔 | geotag_block_user_title |  | object | `屏蔽者` **多语言** |
| 屏蔽-是否公开记录 | geotag_block_public_record | false | boolean | 屏蔽了他的用户 |
| 屏蔽-是否公开总数 | geotag_block_public_count | false | boolean | 屏蔽了他的用户总数 |

## 帖子互动

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 赞-是否启用 | post_like_enabled | true | boolean |  |
| 赞-行为名称 | post_like_name |  | object | `赞` **多语言**|
| 赞-赞者头衔 | post_like_user_title |  | object | `喜欢者` **多语言** |
| 赞-是否公开记录 | post_like_public_record | false | boolean | 赞了他的用户 |
| 赞-是否公开总数 | post_like_public_count | true | boolean | 赞了他的用户总数 |
| 踩-是否启用 | post_dislike_enabled | true | boolean |  |
| 踩-行为名称 | post_dislike_name |  | object | `不喜欢` **多语言** |
| 踩-踩者头衔 | post_dislike_user_title |  | object | `不喜欢者` **多语言** |
| 踩-是否公开记录 | post_dislike_public_record | false | boolean | 踩了他的用户 |
| 踩-是否公开总数 | post_dislike_public_count | false | boolean | 踩了他的用户总数 |
| 关注-是否启用 | post_follow_enabled | true | boolean |  |
| 关注-行为名称 | post_follow_name |  | object | `收藏` **多语言** |
| 关注-关注者头衔 | post_follow_user_title |  | object | `收藏者` **多语言** |
| 关注-是否公开记录 | post_follow_public_record | false | boolean | 关注了他的用户 |
| 关注-是否公开总数 | post_follow_public_count | true | boolean | 关注了他的用户总数 |
| 屏蔽-是否启用 | post_block_enabled | true | boolean |  |
| 屏蔽-行为名称 | post_block_name |  | object | `不想看到` **多语言** |
| 屏蔽-屏蔽者头衔 | post_block_user_title |  | object | `屏蔽者` **多语言** |
| 屏蔽-是否公开记录 | post_block_public_record | false | boolean | 屏蔽了他的用户 |
| 屏蔽-是否公开总数 | post_block_public_count | false | boolean | 屏蔽了他的用户总数 |

## 评论互动

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 赞-是否启用 | comment_like_enabled | true | boolean |  |
| 赞-行为名称 | comment_like_name |  | object | `赞` **多语言**|
| 赞-赞者头衔 | comment_like_user_title |  | object | `喜欢者` **多语言** |
| 赞-是否公开记录 | comment_like_public_record | false | boolean | 赞了他的用户 |
| 赞-是否公开总数 | comment_like_public_count | true | boolean | 赞了他的用户总数 |
| 踩-是否启用 | comment_dislike_enabled | true | boolean |  |
| 踩-行为名称 | comment_dislike_name |  | object | `不喜欢` **多语言** |
| 踩-踩者头衔 | comment_dislike_user_title |  | object | `不喜欢者` **多语言** |
| 踩-是否公开记录 | comment_dislike_public_record | false | boolean | 踩了他的用户 |
| 踩-是否公开总数 | comment_dislike_public_count | false | boolean | 踩了他的用户总数 |
| 关注-是否启用 | comment_follow_enabled | true | boolean |  |
| 关注-行为名称 | comment_follow_name |  | object | `收藏` **多语言** |
| 关注-关注者头衔 | comment_follow_user_title |  | object | `收藏者` **多语言** |
| 关注-是否公开记录 | comment_follow_public_record | false | boolean | 关注了他的用户 |
| 关注-是否公开总数 | comment_follow_public_count | true | boolean | 关注了他的用户总数 |
| 屏蔽-是否启用 | comment_block_enabled | true | boolean |  |
| 屏蔽-行为名称 | comment_block_name |  | object | `不想看到` **多语言** |
| 屏蔽-屏蔽者头衔 | comment_block_user_title |  | object | `屏蔽者` **多语言** |
| 屏蔽-是否公开记录 | comment_block_public_record | false | boolean | 屏蔽了他的用户 |
| 屏蔽-是否公开总数 | comment_block_public_count | false | boolean | 屏蔽了他的用户总数 |

## 用户主页

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 他发表的帖子 | profile_posts_enabled | true | boolean | 名称 `post_name` |
| 他发表的评论 | profile_comments_enabled | true | boolean | 名称 `comment_name` |

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 赞他的用户 | profile_likes_name |  | object | `被喜欢` **多语言** |
| 踩他的用户 | profile_dislikes_name |  | object | **多语言** |
| 关注他的用户 | profile_followers_name |  | object | `粉丝` **多语言** |
| 屏蔽他的用户 | profile_blockers_name |  | object | `被拉黑` **多语言** |
| 你认识的关注者 | profile_followers_you_follow_enabled | true | boolean |  |
|  | profile_followers_you_follow_name |  | object | **多语言** |

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 他赞的用户 | profile_likes_users_enabled | false | boolean |  |
|  | profile_likes_users_name |  | object | **多语言** |
| 他赞的小组 | profile_likes_groups_enabled | false | boolean |  |
|  | profile_likes_groups_name |  | object | **多语言** |
| 他赞的话题 | profile_likes_hashtags_enabled | false | boolean |  |
|  | profile_likes_hashtags_name |  | object | **多语言** |
| 他赞的地理 | profile_likes_geotags_enabled | false | boolean |  |
|  | profile_likes_geotags_name |  | object | **多语言** |
| 他赞的帖子 | profile_likes_posts_enabled | false | boolean |  |
|  | profile_likes_posts_name |  | object | **多语言** |
| 他赞的评论 | profile_likes_comments_enabled | false | boolean |  |
|  | profile_likes_comments_name |  | object | **多语言** |

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 他踩的用户 | profile_dislikes_users_enabled | false | boolean |  |
|  | profile_dislikes_users_name |  | object | **多语言** |
| 他踩的小组 | profile_dislikes_groups_enabled | false | boolean |  |
|  | profile_dislikes_groups_name |  | object | **多语言** |
| 他踩的话题 | profile_dislikes_hashtags_enabled | false | boolean |  |
|  | profile_dislikes_hashtags_name |  | object | **多语言** |
| 他踩的地理 | profile_dislikes_geotags_enabled | false | boolean |  |
|  | profile_dislikes_geotags_name |  | object | **多语言** |
| 他踩的帖子 | profile_dislikes_posts_enabled | false | boolean |  |
|  | profile_dislikes_posts_name |  | object | **多语言** |
| 他踩的评论 | profile_dislikes_comments_enabled | false | boolean |  |
|  | profile_dislikes_comments_name |  | object | **多语言** |

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 他关注的用户 | profile_following_users_enabled | true | boolean |  |
| `正在关注` | profile_following_users_name |  | object | **多语言** |
| 他关注的小组 | profile_following_groups_enabled | true | boolean |  |
| `加入的小组` | profile_following_groups_name |  | object | **多语言** |
| 他关注的话题 | profile_following_hashtags_enabled | false | boolean |  |
| `正在订阅` | profile_following_hashtags_name |  | object | **多语言** |
| 他关注的地理 | profile_following_geotags_enabled | false | boolean |  |
|  | profile_following_geotags_name |  | object | **多语言** |
| 他关注的帖子 | profile_following_posts_enabled | false | boolean |  |
| `他的收藏` | profile_following_posts_name |  | object | **多语言** |
| 他关注的评论 | profile_following_comments_enabled | false | boolean |  |
|  | profile_following_comments_name |  | object | **多语言** |

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 他屏蔽的用户 | profile_blocking_users_enabled | false | boolean |  |
|  | profile_blocking_users_name |  | object | **多语言** |
| 他屏蔽的小组 | profile_blocking_groups_enabled | false | boolean |  |
|  | profile_blocking_groups_name |  | object | **多语言** |
| 他屏蔽的话题 | profile_blocking_hashtags_enabled | false | boolean |  |
|  | profile_blocking_hashtags_name |  | object | **多语言** |
| 他屏蔽的地理 | profile_blocking_geotags_enabled | false | boolean |  |
|  | profile_blocking_geotags_name |  | object | **多语言** |
| 他屏蔽的帖子 | profile_blocking_posts_enabled | false | boolean |  |
|  | profile_blocking_posts_name |  | object | **多语言** |
| 他屏蔽的评论 | profile_blocking_comments_enabled | false | boolean |  |
|  | profile_blocking_comments_name |  | object | **多语言** |
