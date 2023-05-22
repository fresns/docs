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
| Post List | post_list_service | **plugin** | `getPostByAll` | Plugin application scenario parameter `extendData` |
| Post List by Follow | post_follow_service | **plugin** | `getPostByFollow` | Plugin application scenario parameter `extendData` |
| Post List by Nearby | post_nearby_service | **plugin** | `getPostByNearby` | Plugin application scenario parameter `extendData` |
| Comment List | comment_list_service | **plugin** | `getCommentByAll` | Plugin application scenario parameter `extendData` |
| Comment List by Follow | comment_follow_service | **plugin** | `getCommentByFollow` | Plugin application scenario parameter `extendData` |
| Comment List by Nearby | comment_nearby_service | **plugin** | `getCommentByNearby` | Plugin application scenario parameter `extendData` |

## Content Details

| Column Title | Key Name | Key Value Type | Command Word | Description |
| --- | --- | --- | --- | --- |
| Post Detail | post_detail_service | **plugin** | `getPostDetail` | Plugin application scenario parameter `extendData` |
| Comment Detail | comment_detail_service | **plugin** | `getCommentDetail` | Plugin application scenario parameter `extendData` |

## Search

| Column Title | Key Name | Key Value Type | Command Word | Description |
| --- | --- | --- | --- | --- |
| Search Users Provider | search_users_service | **plugin** | `searchUsers` | Plugin application scenario parameter `extendSearch` |
| Search Groups Provider | search_groups_service | **plugin** | `searchGroups` | Plugin application scenario parameter `extendSearch` |
| Search Hashtags Provider | search_hashtags_service | **plugin** | `searchHashtags` | Plugin application scenario parameter `extendSearch` |
| Search Posts Provider | search_posts_service | **plugin** | `searchPosts` | Plugin application scenario parameter `extendSearch` |
| Search Comments Provider | search_comments_service | **plugin** | `searchComments` | Plugin application scenario parameter `extendSearch` |
