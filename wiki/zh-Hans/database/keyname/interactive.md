# 互动配置

> 控制面板 > 运营 > 互动配置

## 内容功能设置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 话题功能形式 | hashtag_show | 2 | number | `#话题` 和 `#话题#` 的区别 |
| 帖子热评条件 | top_comment_require | 50 | number | 0 代表不启用 |
| 评论可见度规则 | comment_visibility_rule | 0 | number | 单位：天<br>0 代表不限制，7 代表显示 7 天内可见<br>以帖子发表时间为计算值，大于可见度规则天数，该帖子的评论不再显示，也不可再评论。 |
| 评论预览数量 | comment_preview | 0 | number | 0 代表不启用，最大数字 3 |
| 附近帖子默认范围（公里） | nearby_length_km | 50 | number |  |
| 附近帖子默认范围（英里） | nearby_length_mi | 30 | number |  |

## 会话功能设置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 私信会话功能 | dialog_status | false | boolean |  |
| 私信会话附件 | dialog_files | ["image"] | array | image,video,audio,document<br>数组 |

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
| TA 发表的帖子 | it_posts | true | boolean | 帖子 |
| TA 发表的评论 | it_comments | false | boolean | 评论 |
| TA 点赞的用户 | it_like_users | false | boolean | 喜欢 |
| TA 点赞的小组 | it_like_groups | false | boolean | 点赞 |
| TA 点赞的话题 | it_like_hashtags | false | boolean | 点赞 |
| TA 点赞的帖子 | it_like_posts | true | boolean | 点赞 |
| TA 点赞的评论 | it_like_comments | false | boolean | 点赞 |
| TA 踩的用户 | it_dislike_users | false | boolean |  |
| TA 踩的小组 | it_dislike_groups | false | boolean |  |
| TA 踩的话题 | it_dislike_hashtags | false | boolean |  |
| TA 踩的帖子 | it_dislike_posts | false | boolean |  |
| TA 踩的评论 | it_dislike_comments | false | boolean |  |
| TA 关注的用户 | it_follow_users | true | boolean | 正在关注 |
| TA 关注的小组 | it_follow_groups | true | boolean | 加入 |
| TA 关注的话题 | it_follow_hashtags | false | boolean | 订阅 |
| TA 关注的帖子 | it_follow_posts | false | boolean | 收藏 |
| TA 关注的评论 | it_follow_comments | false | boolean | 收藏 |
| TA 屏蔽的用户 | it_block_users | false | boolean | 黑名单 |
| TA 屏蔽的小组 | it_block_groups | false | boolean | 屏蔽 |
| TA 屏蔽的话题 | it_block_hashtags | false | boolean | 不感兴趣 |
| TA 屏蔽的帖子 | it_block_posts | false | boolean | 不喜欢 |
| TA 屏蔽的评论 | it_block_comments | false | boolean | 不喜欢 |

**访问用户主页时，默认内容列表**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| TA 的主页默认内容列表 | it_home_list | it_posts | string |  |

- `it_home_list` 选项
    - it_posts
    - it_comments
    - **user_likers** 点赞 TA 的用户
    - **user_dislikers** 踩 TA 的用户
    - **user_followers** 关注 TA 的用户
    - **user_blockers** 屏蔽 TA 的用户
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
    - it_follow_users
    - it_follow_groups
    - it_follow_hashtags
    - it_follow_posts
    - it_follow_comments

## 查看互动记录设置

**用户可以查看自己的哪些互动**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 点赞我的用户 | my_likers | false | boolean |  |
| 踩我的用户 | my_dislikers | false | boolean |  |
| 关注我的用户 | my_followers | true | boolean |  |
| 屏蔽我的用户 | my_blockers | false | boolean |  |

**哪些互动记录可以被查看**

**用户**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 点赞了 TA 的用户 | user_likers | true | boolean |  |
| 踩了 TA 的用户 | user_dislikers | false | boolean |  |
| 关注了 TA 的用户 | user_followers | true | boolean |  |
| 屏蔽了 TA 的用户 | user_blockers | false | boolean |  |

**小组**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 点赞了 TA 的用户 | group_likers | true | boolean |  |
| 踩了 TA 的用户 | group_dislikers | false | boolean |  |
| 关注了 TA 的用户 | group_followers | true | boolean |  |
| 屏蔽了 TA 的用户 | group_blockers | false | boolean |  |

**话题**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 点赞了 TA 的用户 | hashtag_likers | true | boolean |  |
| 踩了 TA 的用户 | hashtag_dislikers | false | boolean |  |
| 关注了 TA 的用户 | hashtag_followers | false | boolean |  |
| 屏蔽了 TA 的用户 | hashtag_blockers | false | boolean |  |

**帖子**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 点赞了 TA 的用户 | post_likers | false | boolean |  |
| 踩了 TA 的用户 | post_dislikers | false | boolean |  |
| 关注了 TA 的用户 | post_followers | true | boolean |  |
| 屏蔽了 TA 的用户 | post_blockers | false | boolean |  |

**评论**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 点赞了 TA 的用户 | comment_likers | true | boolean |  |
| 踩了 TA 的用户 | comment_dislikers | false | boolean |  |
| 关注了 TA 的用户 | comment_followers | false | boolean |  |
| 屏蔽了 TA 的用户 | comment_blockers | false | boolean |  |
