# 路径结构

## 首页

| 路由名 | 模板文件 | 介绍 |
| --- | --- | --- |
| fresns.home |  | 首页 |

## 门户页

| 路由名 | 模板文件 | 介绍 |
| --- | --- | --- |
| fresns.portal | /portal/index.blade.php | 门户主页 |
| fresns.policies | /portal/policies.blade.php | 隐私权和条款信息页 |
|  | /portal/private.blade.php | 私有模式提示页 |
| fresns.custom.page<br>`['name' => 'fileName']` | /portal/{fileName}.blade.php | 自定义页面 |

## 用户页

| 路由名 | 模板文件 | 介绍 |
| --- | --- | --- |
| fresns.user.index | /users/index.blade.php | 用户主页 |
| fresns.user.list | /users/list.blade.php | 用户列表页 |
| fresns.user.likes | /users/likes.blade.php | 我点赞的用户 |
| fresns.user.dislikes | /users/dislikes.blade.php | 我点踩的用户 |
| fresns.user.following | /users/following.blade.php | 我关注的用户 |
| fresns.user.blocking | /users/blocking.blade.php | 我屏蔽的用户 |

## 小组页

| 路由名 | 模板文件 | 介绍 |
| --- | --- | --- |
| fresns.group.index | /groups/index.blade.php | 小组主页 |
| fresns.group.list | /groups/list.blade.php | 小组列表页 |
| fresns.group.likes | /groups/likes.blade.php | 我点赞的小组 |
| fresns.group.dislikes | /groups/dislikes.blade.php | 我点踩的小组 |
| fresns.group.following | /groups/following.blade.php | 我关注的小组 |
| fresns.group.blocking | /groups/blocking.blade.php | 我屏蔽的小组 |
| fresns.group.detail | /groups/detail.blade.php | 小组详情页 |
| fresns.group.detail.likers | /groups/detail-likers.blade.php | 点赞小组的用户 |
| fresns.group.detail.dislikers | /groups/detail-dislikers.blade.php | 点踩小组的用户 |
| fresns.group.detail.followers | /groups/detail-followers.blade.php | 关注小组的用户 |
| fresns.group.detail.blockers | /groups/detail-blockers.blade.php | 屏蔽小组的用户 |

## 话题页

| 路由名 | 模板文件 | 介绍 |
| --- | --- | --- |
| fresns.hashtag.index | /hashtags/index.blade.php | 话题主页 |
| fresns.hashtag.list | /hashtags/list.blade.php | 话题列表页 |
| fresns.hashtag.likes | /hashtags/likes.blade.php | 我点赞的话题 |
| fresns.hashtag.dislikes | /hashtags/dislikes.blade.php | 我点踩的话题 |
| fresns.hashtag.following | /hashtags/following.blade.php | 我关注的话题 |
| fresns.hashtag.blocking | /hashtags/blocking.blade.php | 我屏蔽的话题 |
| fresns.hashtag.detail | /hashtags/detail.blade.php | 话题详情页 |
| fresns.hashtag.detail.likers | /hashtags/detail-likers.blade.php | 点赞小组的话题 |
| fresns.hashtag.detail.dislikers | /hashtags/detail-dislikers.blade.php | 点踩小组的话题 |
| fresns.hashtag.detail.followers | /hashtags/detail-followers.blade.php | 关注小组的话题 |
| fresns.hashtag.detail.blockers | /hashtags/detail-blockers.blade.php | 屏蔽小组的话题 |

## 地理页

| 路由名 | 模板文件 | 介绍 |
| --- | --- | --- |
| fresns.geotag.index | /geotags/index.blade.php | 地理主页 |
| fresns.geotag.list | /geotags/list.blade.php | 地理列表页 |
| fresns.geotag.likes | /geotags/likes.blade.php | 我点赞的地理 |
| fresns.geotag.dislikes | /geotags/dislikes.blade.php | 我点踩的地理 |
| fresns.geotag.following | /geotags/following.blade.php | 我关注的地理 |
| fresns.geotag.blocking | /geotags/blocking.blade.php | 我屏蔽的地理 |
| fresns.geotag.detail | /geotags/detail.blade.php | 地理详情页 |
| fresns.geotag.detail.likers | /geotags/detail-likers.blade.php | 点赞小组的地理 |
| fresns.geotag.detail.dislikers | /geotags/detail-dislikers.blade.php | 点踩小组的地理 |
| fresns.geotag.detail.followers | /geotags/detail-followers.blade.php | 关注小组的地理 |
| fresns.geotag.detail.blockers | /geotags/detail-blockers.blade.php | 屏蔽小组的地理 |

## 帖子页

| 路由名 | 模板文件 | 介绍 |
| --- | --- | --- |
| fresns.post.index | /posts/index.blade.php | 帖子主页 |
| fresns.post.list | /posts/list.blade.php | 帖子列表页 |
| fresns.post.likes | /posts/likes.blade.php | 我点赞的帖子 |
| fresns.post.dislikes | /posts/dislikes.blade.php | 我点踩的帖子 |
| fresns.post.following | /posts/following.blade.php | 我关注的帖子 |
| fresns.post.blocking | /posts/blocking.blade.php | 我屏蔽的帖子 |
| fresns.post.detail | /posts/detail.blade.php | 帖子详情页 |
| fresns.post.detail.likers | /posts/detail-likers.blade.php | 点赞小组的帖子 |
| fresns.post.detail.dislikers | /posts/detail-dislikers.blade.php | 点踩小组的帖子 |
| fresns.post.detail.followers | /posts/detail-followers.blade.php | 关注小组的帖子 |
| fresns.post.detail.blockers | /posts/detail-blockers.blade.php | 屏蔽小组的帖子 |

## 评论页

| 路由名 | 模板文件 | 介绍 |
| --- | --- | --- |
| fresns.comment.index | /comments/index.blade.php | 评论主页 |
| fresns.comment.list | /comments/list.blade.php | 评论列表页 |
| fresns.comment.likes | /comments/likes.blade.php | 我点赞的评论 |
| fresns.comment.dislikes | /comments/dislikes.blade.php | 我点踩的评论 |
| fresns.comment.following | /comments/following.blade.php | 我关注的评论 |
| fresns.comment.blocking | /comments/blocking.blade.php | 我屏蔽的评论 |
| fresns.comment.detail | /comments/detail.blade.php | 评论详情页 |
| fresns.comment.detail.likers | /comments/detail-likers.blade.php | 点赞评论的用户 |
| fresns.comment.detail.dislikers | /comments/detail-dislikers.blade.php | 点踩评论的用户 |
| fresns.comment.detail.followers | /comments/detail-followers.blade.php | 关注评论的用户 |
| fresns.comment.detail.blockers | /comments/detail-blockers.blade.php | 屏蔽评论的用户 |

## 时间线

| 路由名 | 模板文件 | 介绍 |
| --- | --- | --- |
| fresns.timeline.index | /timelines/index.blade.php | 时间线主页 |
| fresns.timeline.user.posts | /timelines/user-posts.blade.php | 关注用户的帖子 |
| fresns.timeline.group.posts | /timelines/group-posts.blade.php | 关注小组的帖子 |
| fresns.timeline.hashtag.posts | /timelines/hashtag-posts.blade.php | 关注话题的帖子 |
| fresns.timeline.user.comments | /timelines/user-comments.blade.php | 关注用户的评论 |
| fresns.timeline.group.comments | /timelines/group-comments.blade.php | 关注小组的评论 |
| fresns.timeline.hashtag.comments | /timelines/hashtag-comments.blade.php | 关注话题的评论 |

## 附近

| 路由名 | 模板文件 | 介绍 |
| --- | --- | --- |
| fresns.nearby.index | /nearby/index.blade.php | 附近 |

## 个人中心

| 路由名 | 模板文件 | 介绍 |
| --- | --- | --- |
| fresns.me.index | /me/index.blade.php | 个人中心 |
| fresns.me.wallet | /me/wallet.blade.php | 钱包 |
| fresns.me.extcredits | /me/extcredits.blade.php | 扩展分值 |
| fresns.me.users | /me/users.blade.php | 名下用户 |
| fresns.me.settings | /me/settings.blade.php | 设置 |

## 消息

| 路由名 | 模板文件 | 介绍 |
| --- | --- | --- |
| fresns.message.index | /messages/index.blade.php | 消息主页 |
| fresns.message.conversation | /messages/conversation.blade.php | 对话页 |
| fresns.message.notifications | /messages/notifications.blade.php | 通知页 |

## 用户详情页

| 路由名 | 模板文件 | 介绍 |
| --- | --- | --- |
| fresns.profile.index |  | 用户详情主页 |
| fresns.profile.posts | /profile/posts.blade.php | 他帖子列表 |
| fresns.profile.comments | /profile/comments.blade.php | 他评论列表 |
| fresns.profile.followers.you.follow | /profile/interactions/followers-you-follow.blade.php | 你认识的关注者 |
| fresns.profile.likers | /profile/interactions/likers.blade.php | 点赞他的用户 |
| fresns.profile.dislikers | /profile/interactions/dislikers.blade.php | 点踩他的用户 |
| fresns.profile.followers | /profile/interactions/followers.blade.php | 关注他的用户 |
| fresns.profile.blockers | /profile/interactions/blockers.blade.php | 屏蔽他的用户 |
| fresns.profile.likes.users | /profile/likes/users.blade.php | 他点赞的用户 |
| fresns.profile.likes.groups | /profile/likes/groups.blade.php | 他点赞的小组 |
| fresns.profile.likes.hashtags | /profile/likes/hashtags.blade.php | 他点赞的话题 |
| fresns.profile.likes.geotags | /profile/likes/geotags.blade.php | 他点赞的地理 |
| fresns.profile.likes.posts | /profile/likes/posts.blade.php | 他点赞的帖子 |
| fresns.profile.likes.comments | /profile/likes/comments.blade.php | 他点赞的评论 |
| fresns.profile.dislikes.users | /profile/dislikes/users.blade.php | 他点踩的用户 |
| fresns.profile.dislikes.groups | /profile/dislikes/groups.blade.php | 他点踩的小组 |
| fresns.profile.dislikes.hashtags | /profile/dislikes/hashtags.blade.php | 他点踩的话题 |
| fresns.profile.dislikes.geotags | /profile/dislikes/geotags.blade.php | 他点踩的地理 |
| fresns.profile.dislikes.posts | /profile/dislikes/posts.blade.php | 他点踩的帖子 |
| fresns.profile.dislikes.comments | /profile/dislikes/comments.blade.php | 他点踩的评论 |
| fresns.profile.following.users | /profile/following/users.blade.php | 他关注的用户 |
| fresns.profile.following.groups | /profile/following/groups.blade.php | 他关注的小组 |
| fresns.profile.following.hashtags | /profile/following/hashtags.blade.php | 他关注的话题 |
| fresns.profile.following.geotags | /profile/following/geotags.blade.php | 他关注的地理 |
| fresns.profile.following.posts | /profile/following/posts.blade.php | 他关注的帖子 |
| fresns.profile.following.comments | /profile/following/comments.blade.php | 他关注的评论 |
| fresns.profile.blocking.users | /profile/blocking/users.blade.php | 他屏蔽的用户 |
| fresns.profile.blocking.groups | /profile/blocking/groups.blade.php | 他屏蔽的小组 |
| fresns.profile.blocking.hashtags | /profile/blocking/hashtags.blade.php | 他屏蔽的话题 |
| fresns.profile.blocking.geotags | /profile/blocking/geotags.blade.php | 他屏蔽的地理 |
| fresns.profile.blocking.posts | /profile/blocking/posts.blade.php | 他屏蔽的帖子 |
| fresns.profile.blocking.comments | /profile/blocking/comments.blade.php | 他屏蔽的评论 |

## 搜索

| 路由名 | 模板文件 | 介绍 |
| --- | --- | --- |
| fresns.search.index | /search/index.blade.php | 搜索主页 |
| fresns.search.users | /search/users.blade.php | 搜索用户列表 |
| fresns.search.groups | /search/groups.blade.php | 搜索小组列表 |
| fresns.search.hashtags | /search/hashtags.blade.php | 搜索话题列表 |
| fresns.search.geotags | /search/geotags.blade.php | 搜索地理列表 |
| fresns.search.posts | /search/posts.blade.php | 搜索帖子列表 |
| fresns.search.comments | /search/comments.blade.php | 搜索评论列表 |

## 编辑器

| 路由名 | 模板文件 | 介绍 |
| --- | --- | --- |
| fresns.editor.drafts | /editor/drafts.blade.php | 草稿箱 |
| fresns.editor.post | /editor/editor.blade.php | 帖子编辑器 |
| fresns.editor.comment | /editor/editor.blade.php | 评论编辑器 |
