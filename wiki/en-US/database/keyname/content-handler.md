# Content Handler

> Panel > Extends > Content Handler

## Content Service

| Column Title | Key Name | Key Value Type | Command Word | Description |
| --- | --- | --- | --- | --- |
| IP Service Provider | ip_service | **plugin** | `ipInfo` | Plugin application scenario parameter `extendIp` |
| Map Service Provider | map_service | **plugin** |  | Plugin application scenario parameter `extendMap` |
| Notification Service Provider | notifications_service | **plugin** | `sendNotification` | Plugin application scenario parameter `extendNotification` |
| Content Review Service Provider | content_review_service | **plugin** | `reviewNotice` | Plugin application scenario parameter `extendReview` |

## Content List

| Column Title | Key Name | Key Value Type | Command Word | Description |
| --- | --- | --- | --- | --- |
| Posts and Comments List | content_list_service | **plugin** | `getPostByAll`<br>`getCommentByAll` | Plugin application scenario parameter `extendData` |
| Posts and Comments List | content_follow_service | **plugin** | `getPostByFollow`<br>`getCommentByFollow` | Plugin application scenario parameter `extendData` |
| Posts and Comments List | content_nearby_service | **plugin** | `getPostByNearby`<br>`getCommentByNearby` | Plugin application scenario parameter `extendData` |

## Content Details

| Column Title | Key Name | Key Value Type | Command Word | Description |
| --- | --- | --- | --- | --- |
| Post and Comment Detail Page | content_detail_service | **plugin** | `getPostDetail`<br>`getCommentDetail` | Plugin application scenario parameter `extendData` |

## Content Search

| Column Title | Key Name | Key Value Type | Command Word | Description |
| --- | --- | --- | --- | --- |
| Search Users Provider | search_users_service | **plugin** | `searchUsers` | Plugin application scenario parameter `extendSearch` |
| Search Groups Provider | search_groups_service | **plugin** | `searchGroups` | Plugin application scenario parameter `extendSearch` |
| Search Hashtags Provider | search_hashtags_service | **plugin** | `searchHashtags` | Plugin application scenario parameter `extendSearch` |
| Search Posts Provider | search_posts_service | **plugin** | `searchPosts` | Plugin application scenario parameter `extendSearch` |
| Search Comments Provider | search_comments_service | **plugin** | `searchComments` | Plugin application scenario parameter `extendSearch` |
