# 内容处理扩展

> 控制面板 > 扩展 > 内容处理扩展

## 内容处理

| 栏目标题 | 键名 | 键值类型 | 命令字 | 说明 |
| --- | --- | --- | --- | --- |
| IP 服务商 | ip_service | **plugin** | `ipInfo` | 用途场景 `extendIp` |
| 地图服务商 | map_service | **plugin** |  | 用途场景 `extendMap` |
| 通知服务商 | notifications_service | **plugin** | `sendNotification` | 用途场景 `extendNotification` |
| 内容审核服务商 | content_review_service | **plugin** | `reviewNotice` | 用途场景 `extendReview` |

## 内容列表

| 栏目标题 | 键名 | 键值类型 | 命令字 | 说明 |
| --- | --- | --- | --- | --- |
| 帖子列表 | post_list_service | **plugin** | `getPosts` | 用途场景 `extendData` |
| 帖子列表-时间线 | post_timelines_service | **plugin** | `getPostsByTimelines` | 用途场景 `extendData` |
| 帖子列表-附近 | post_nearby_service | **plugin** | `getPostsByNearby` | 用途场景 `extendData` |
| 评论列表 | comment_list_service | **plugin** | `getComments` | 用途场景 `extendData` |
| 评论列表-时间线 | comment_timelines_service | **plugin** | `getCommentsByTimelines` | 用途场景 `extendData` |
| 评论列表-附近 | comment_nearby_service | **plugin** | `getCommentsByNearby` | 用途场景 `extendData` |

## 内容详情

| 栏目标题 | 键名 | 键值类型 | 命令字 | 说明 |
| --- | --- | --- | --- | --- |
| 帖子详情 | post_detail_service | **plugin** | `getPostDetail` | 用途场景 `extendData` |
| 评论详情 | comment_detail_service | **plugin** | `getCommentDetail` | 用途场景 `extendData` |

## 搜索

| 栏目标题 | 键名 | 键值类型 | 命令字 | 说明 |
| --- | --- | --- | --- | --- |
| 搜索用户服务商 | search_users_service | **plugin** | `searchUsers` | 用途场景 `extendSearch` |
| 搜索小组服务商 | search_groups_service | **plugin** | `searchGroups` | 用途场景 `extendSearch` |
| 搜索话题服务商 | search_hashtags_service | **plugin** | `searchHashtags` | 用途场景 `extendSearch` |
| 搜索地理服务商 | search_geotags_service | **plugin** | `searchGeotags` | 用途场景 `extendSearch` |
| 搜索帖子服务商 | search_posts_service | **plugin** | `searchPosts` | 用途场景 `extendSearch` |
| 搜索评论服务商 | search_comments_service | **plugin** | `searchComments` | 用途场景 `extendSearch` |
