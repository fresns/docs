# 内容处理扩展

> 控制面板 > 扩展 > 内容处理扩展

## 内容处理

| 栏目标题 | 键名 | 键值类型 | 命令字 | 说明 |
| --- | --- | --- | --- | --- |
| IP 服务商 | ip_service | **plugin** | `ipInfo` | 插件应用场景参数 `extendIp` |
| 地图服务商 | map_service | **plugin** |  | 插件应用场景参数 `extendMap` |
| 通知服务商 | notifications_service | **plugin** | `sendNotification` | 插件应用场景参数 `extendNotification` |
| 内容审核服务商 | content_review_service | **plugin** | `reviewNotice` | 插件应用场景参数 `extendReview` |

## 内容列表

| 栏目标题 | 键名 | 键值类型 | 命令字 | 说明 |
| --- | --- | --- | --- | --- |
| 帖子列表 | post_list_service | **plugin** | `getPostByAll` | 插件应用场景参数 `extendData` |
| 帖子列表-关注对象的 | post_follow_service | **plugin** | `getPostByFollow` | 插件应用场景参数 `extendData` |
| 帖子列表-位置附近的 | post_nearby_service | **plugin** | `getPostByNearby` | 插件应用场景参数 `extendData` |
| 评论列表 | comment_list_service | **plugin** | `getCommentByAll` | 插件应用场景参数 `extendData` |
| 评论列表-关注对象的 | comment_follow_service | **plugin** | `getCommentByFollow` | 插件应用场景参数 `extendData` |
| 评论列表-位置附近的 | comment_nearby_service | **plugin** | `getCommentByNearby` | 插件应用场景参数 `extendData` |

## 内容详情

| 栏目标题 | 键名 | 键值类型 | 命令字 | 说明 |
| --- | --- | --- | --- | --- |
| 帖子详情 | post_detail_service | **plugin** | `getPostDetail` | 插件应用场景参数 `extendData` |
| 评论详情 | comment_detail_service | **plugin** | `getCommentDetail` | 插件应用场景参数 `extendData` |

## 查看

| 栏目标题 | 键名 | 键值类型 | 命令字 | 说明 |
| --- | --- | --- | --- | --- |
| 查看用户服务商 | view_user_service | **plugin** | `viewUser` | 插件应用场景参数 `extendView` |
| 查看小组服务商 | view_group_service | **plugin** | `viewGroup` | 插件应用场景参数 `extendView` |
| 查看话题服务商 | view_hashtag_service | **plugin** | `viewHashtag` | 插件应用场景参数 `extendView` |
| 查看帖子服务商 | view_post_service | **plugin** | `viewPost` | 插件应用场景参数 `extendView` |
| 查看评论服务商 | view_comment_service | **plugin** | `viewComment` | 插件应用场景参数 `extendView` |

## 搜索

| 栏目标题 | 键名 | 键值类型 | 命令字 | 说明 |
| --- | --- | --- | --- | --- |
| 搜索用户服务商 | search_users_service | **plugin** | `searchUsers` | 插件应用场景参数 `extendSearch` |
| 搜索小组服务商 | search_groups_service | **plugin** | `searchGroups` | 插件应用场景参数 `extendSearch` |
| 搜索话题服务商 | search_hashtags_service | **plugin** | `searchHashtags` | 插件应用场景参数 `extendSearch` |
| 搜索帖子服务商 | search_posts_service | **plugin** | `searchPosts` | 插件应用场景参数 `extendSearch` |
| 搜索评论服务商 | search_comments_service | **plugin** | `searchComments` | 插件应用场景参数 `extendSearch` |
