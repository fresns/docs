# Content Handler

> Panel > Expands > Content Handler

## Content Service

| 栏目标题 | 键名 | 键值类型 | Command Word | 说明 |
| --- | --- | --- | --- | --- |
| IP 服务商 | ip_service | **plugin** | `ipInfo` | 插件应用场景参数 `extendIp` |
| 内容审核服务商 | content_review_service | **plugin** | `reviewNotice` | 插件应用场景参数 `extendData` |

## Content List

| 栏目标题 | 键名 | 键值类型 | Command Word | 说明 |
| --- | --- | --- | --- | --- |
| 帖子和评论列表 | content_list_service | **plugin** | `getPostByAll`<br>`getCommentByAll` | 插件应用场景参数 `extendData` |
| 帖子和评论列表 | content_follow_service | **plugin** | `getPostByFollow`<br>`getCommentByFollow` | 插件应用场景参数 `extendData` |
| 帖子和评论列表 | content_nearby_service | **plugin** | `getPostByNearby`<br>`getCommentByNearby` | 插件应用场景参数 `extendData` |

## Content Details

| 栏目标题 | 键名 | 键值类型 | Command Word | 说明 |
| --- | --- | --- | --- | --- |
| 帖子和评论详情页 | content_detail_service | **plugin** | `getPostDetail`<br>`getCommentDetail` | 插件应用场景参数 `extendData` |

## Content Search

| 栏目标题 | 键名 | 键值类型 | Command Word | 说明 |
| --- | --- | --- | --- | --- |
| 搜索用户服务商 | search_users_service | **plugin** | `searchUsers` | 插件应用场景参数 `extendSearch` |
| 搜索小组服务商 | search_groups_service | **plugin** | `searchGroups` | 插件应用场景参数 `extendSearch` |
| 搜索话题服务商 | search_hashtags_service | **plugin** | `searchHashtags` | 插件应用场景参数 `extendSearch` |
| 搜索帖子服务商 | search_posts_service | **plugin** | `searchPosts` | 插件应用场景参数 `extendSearch` |
| 搜索评论服务商 | search_comments_service | **plugin** | `searchComments` | 插件应用场景参数 `extendSearch` |

