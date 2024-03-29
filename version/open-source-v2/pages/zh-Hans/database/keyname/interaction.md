# 互动配置

> 控制面板 > 运营 > 互动配置

## 内容功能设置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 艾特功能 | mention_status | true | boolean |  |
| 话题功能 | hashtag_status | true | boolean |  |
| 话题格式 | hashtag_format | 2 | number | `#话题` 和 `#话题#` 的区别 |
| 话题长度 | hashtag_length | 20 | number |  |
| 话题正则表达式 | hashtag_regexp |  | object |  |
| 帖子点赞用户预览 | preview_post_like_users | 0 | number | 0 代表不启用，最大数字 10 |
| 帖子评论预览数量 | preview_post_comments | 0 | number | 0 代表不启用，最大数字 5 |
| 帖子评论预览类型 | preview_post_comment_sort | like | string | `like` 点赞数量，`comment` 子级评论数量，`oldest` 正序发表时间，`latest` 倒序发表时间 |
| 帖子评论预览条件 | preview_post_comment_require | 10 | number | `like` 和 `comment` 专用，表示数量达到多少才输出预览 |
| 子级评论预览数量 | preview_sub_comments | 3 | number | 0 代表不启用，最大数字 5 |
| 子级评论预览类型 | preview_sub_comment_sort | oldest | string | `like` 点赞数量，`oldest` 正序发表时间，`latest` 倒序发表时间 |
| 评论可见度规则 | comment_visibility_rule | 0 | number | 单位：天<br>0 代表不限制，7 代表显示 7 天内可见<br>以帖子发表时间为计算值，大于可见度规则天数，该帖子的评论不再显示，也不可再评论。 |
| 附近帖子默认范围（公里） | nearby_length_km | 50 | number |  |
| 附近帖子默认范围（英里） | nearby_length_mi | 30 | number |  |

- 话题正则表达式-默认键值 `{"hash":"/#[\\p{L}\\p{N}\\p{M}]+[^\n\\p{P}]#/u","space":"/#[\\p{L}\\p{N}\\p{M}]+[^\n\\p{P}\\s]/u"}`

## 对话功能设置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 私信对话功能 | conversation_status | false | boolean |  |
| 私信对话附件 | conversation_files | ["image"] | array | image,video,audio,document<br>数组 |

## 关注功能设置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 查看关注对象的帖子 | view_posts_by_follow_object | true | boolean |  |
| 查看关注对象的评论 | view_comments_by_follow_object | false | boolean |  |

## 互动行为设置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 点赞用户 | like_user_setting | false | boolean | 喜欢 |
| 点赞小组 | like_group_setting | false | boolean | 点赞 |
| 点赞话题 | like_hashtag_setting | false | boolean | 点赞 |
| 点赞帖子 | like_post_setting | true | boolean | 点赞 |
| 点赞评论 | like_comment_setting | true | boolean | 点赞 |
| 踩用户 | dislike_user_setting | false | boolean |  |
| 踩小组 | dislike_group_setting | false | boolean |  |
| 踩话题 | dislike_hashtag_setting | false | boolean |  |
| 踩帖子 | dislike_post_setting | true | boolean |  |
| 踩评论 | dislike_comment_setting | true | boolean |  |
| 关注用户 | follow_user_setting | true | boolean | 关注 |
| 关注小组 | follow_group_setting | true | boolean | 加入 |
| 关注话题 | follow_hashtag_setting | false | boolean | 订阅 |
| 关注帖子 | follow_post_setting | true | boolean | 收藏 |
| 关注评论 | follow_comment_setting | true | boolean | 收藏 |
| 屏蔽用户 | block_user_setting | false | boolean | 拉黑 |
| 屏蔽小组 | block_group_setting | false | boolean | 屏蔽 |
| 屏蔽话题 | block_hashtag_setting | false | boolean | 不感兴趣 |
| 屏蔽帖子 | block_post_setting | false | boolean | 不喜欢 |
| 屏蔽评论 | block_comment_setting | false | boolean | 不喜欢 |

## 查看用户内容设置

**用户的哪些内容可以被别人查看**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 他发表的帖子 | it_posts | true | boolean | 帖子 |
| 他发表的评论 | it_comments | true | boolean | 评论 |
| 你认识的关注者 | it_followers_you_follow | true | boolean | 你关注的用户也关注了他 |
| 他点赞的用户 | it_like_users | false | boolean | 喜欢 |
| 他点赞的小组 | it_like_groups | false | boolean | 点赞 |
| 他点赞的话题 | it_like_hashtags | false | boolean | 点赞 |
| 他点赞的帖子 | it_like_posts | false | boolean | 点赞 |
| 他点赞的评论 | it_like_comments | false | boolean | 点赞 |
| 他踩的用户 | it_dislike_users | false | boolean |  |
| 他踩的小组 | it_dislike_groups | false | boolean |  |
| 他踩的话题 | it_dislike_hashtags | false | boolean |  |
| 他踩的帖子 | it_dislike_posts | false | boolean |  |
| 他踩的评论 | it_dislike_comments | false | boolean |  |
| 他关注的用户 | it_follow_users | true | boolean | 正在关注 |
| 他关注的小组 | it_follow_groups | true | boolean | 加入 |
| 他关注的话题 | it_follow_hashtags | false | boolean | 订阅 |
| 他关注的帖子 | it_follow_posts | false | boolean | 收藏 |
| 他关注的评论 | it_follow_comments | false | boolean | 收藏 |
| 他屏蔽的用户 | it_block_users | false | boolean | 黑名单 |
| 他屏蔽的小组 | it_block_groups | false | boolean | 屏蔽 |
| 他屏蔽的话题 | it_block_hashtags | false | boolean | 不感兴趣 |
| 他屏蔽的帖子 | it_block_posts | false | boolean | 不喜欢 |
| 他屏蔽的评论 | it_block_comments | false | boolean | 不喜欢 |

**访问用户主页时，默认内容列表**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 他的主页默认内容列表 | it_home_list | it_posts | string |  |

- `it_home_list` 选项
    - it_posts
    - it_comments
    - **user_likers** 点赞他的用户
    - **user_dislikers** 踩他的用户
    - **user_followers** 关注他的用户
    - **user_blockers** 屏蔽他的用户
    - it_like_users
    - it_like_groups
    - it_like_hashtags
    - it_like_posts
    - it_like_comments
    - it_dislike_users
    - it_dislike_groups
    - it_dislike_hashtags
    - it_dislike_posts
    - it_dislike_comments
    - it_follow_users
    - it_follow_groups
    - it_follow_hashtags
    - it_follow_posts
    - it_follow_comments
    - it_block_users
    - it_block_groups
    - it_block_hashtags
    - it_block_posts
    - it_block_comments

## 查看互动记录设置

**哪些互动记录可以被查看**

**用户**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 点赞了他的用户 | user_likers | false | boolean |  |
| 踩了他的用户 | user_dislikers | false | boolean |  |
| 关注了他的用户 | user_followers | true | boolean |  |
| 屏蔽了他的用户 | user_blockers | false | boolean |  |
| 点赞了他的用户总数 | user_liker_count | true | boolean |  |
| 踩了他的用户总数 | user_disliker_count | false | boolean |  |
| 关注了他的用户总数 | user_follower_count | true | boolean |  |
| 屏蔽了他的用户总数 | user_blocker_count | false | boolean |  |

**小组**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 点赞了他的用户 | group_likers | true | boolean |  |
| 踩了他的用户 | group_dislikers | false | boolean |  |
| 关注了他的用户 | group_followers | true | boolean |  |
| 屏蔽了他的用户 | group_blockers | false | boolean |  |
| 点赞了他的用户总数 | group_liker_count | true | boolean |  |
| 踩了他的用户总数 | group_disliker_count | false | boolean |  |
| 关注了他的用户总数 | group_follower_count | true | boolean |  |
| 屏蔽了他的用户总数 | group_blocker_count | false | boolean |  |

**话题**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 点赞了他的用户 | hashtag_likers | true | boolean |  |
| 踩了他的用户 | hashtag_dislikers | false | boolean |  |
| 关注了他的用户 | hashtag_followers | true | boolean |  |
| 屏蔽了他的用户 | hashtag_blockers | false | boolean |  |
| 点赞了他的用户总数 | hashtag_liker_count | true | boolean |  |
| 踩了他的用户总数 | hashtag_disliker_count | false | boolean |  |
| 关注了他的用户总数 | hashtag_follower_count | true | boolean |  |
| 屏蔽了他的用户总数 | hashtag_blocker_count | false | boolean |  |

**帖子**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 点赞了他的用户 | post_likers | true | boolean |  |
| 踩了他的用户 | post_dislikers | false | boolean |  |
| 关注了他的用户 | post_followers | true | boolean |  |
| 屏蔽了他的用户 | post_blockers | false | boolean |  |
| 点赞了他的用户总数 | post_liker_count | true | boolean |  |
| 踩了他的用户总数 | post_disliker_count | false | boolean |  |
| 关注了他的用户总数 | post_follower_count | true | boolean |  |
| 屏蔽了他的用户总数 | post_blocker_count | false | boolean |  |

**评论**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 点赞了他的用户 | comment_likers | true | boolean |  |
| 踩了他的用户 | comment_dislikers | false | boolean |  |
| 关注了他的用户 | comment_followers | true | boolean |  |
| 屏蔽了他的用户 | comment_blockers | false | boolean |  |
| 点赞了他的用户总数 | comment_liker_count | true | boolean |  |
| 踩了他的用户总数 | comment_disliker_count | false | boolean |  |
| 关注了他的用户总数 | comment_follower_count | true | boolean |  |
| 屏蔽了他的用户总数 | comment_blocker_count | false | boolean |  |

**用户可以查看自己的哪些互动**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 点赞我的用户 | my_likers | false | boolean | 当 `user_likers` 配置为开启时，此配置将无效 |
| 踩我的用户 | my_dislikers | false | boolean | 当 `user_dislikers` 配置为开启时，此配置将无效 |
| 关注我的用户 | my_followers | true | boolean | 当 `user_followers` 配置为开启时，此配置将无效 |
| 屏蔽我的用户 | my_blockers | false | boolean | 当 `user_blockers` 配置为开启时，此配置将无效 |
| 点赞我的用户总数 | my_liker_count | true | boolean | 当 `user_liker_count` 配置为开启时，此配置将无效 |
| 踩我的用户总数 | my_disliker_count | false | boolean | 当 `user_disliker_count` 配置为开启时，此配置将无效 |
| 关注我的用户总数 | my_follower_count | true | boolean | 当 `user_follower_count` 配置为开启时，此配置将无效 |
| 屏蔽我的用户总数 | my_blocker_count | false | boolean | 当 `user_blocker_count` 配置为开启时，此配置将无效 |
