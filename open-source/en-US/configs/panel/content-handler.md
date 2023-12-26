# Content Handler

> Panel > Extends > Content Handler

## Content Service

| Column Title | Key Name | Key Value Type | Command Word | Description |
| --- | --- | --- | --- | --- |
| IP Service Provider | ip_service | **plugin** | `ipInfo` | panelUsages `extendIp` |
| Map Service Provider | map_service | **plugin** |  | panelUsages `extendMap` |
| Notification Service Provider | notifications_service | **plugin** | `sendNotification` | panelUsages `extendNotification` |
| Content Review Service Provider | content_review_service | **plugin** | `reviewNotice` | panelUsages `extendReview` |

## Content List

| Column Title | Key Name | Key Value Type | Command Word | Description |
| --- | --- | --- | --- | --- |
| Post List | post_list_service | **plugin** | `getPosts` | panelUsages `extendData` |
| Post List by Timelines | post_timelines_service | **plugin** | `getPostsByTimelines` | panelUsages `extendData` |
| Post List by Nearby | post_nearby_service | **plugin** | `getPostsByNearby` | panelUsages `extendData` |
| Comment List | comment_list_service | **plugin** | `getComments` | panelUsages `extendData` |
| Comment List by Timelines | comment_timelines_service | **plugin** | `getCommentsByTimelines` | panelUsages `extendData` |
| Comment List by Nearby | comment_nearby_service | **plugin** | `getCommentsByNearby` | panelUsages `extendData` |

## Content Details

| Column Title | Key Name | Key Value Type | Command Word | Description |
| --- | --- | --- | --- | --- |
| Post Detail | post_detail_service | **plugin** | `getPostDetail` | panelUsages `extendData` |
| Comment Detail | comment_detail_service | **plugin** | `getCommentDetail` | panelUsages `extendData` |

## Search

| Column Title | Key Name | Key Value Type | Command Word | Description |
| --- | --- | --- | --- | --- |
| Search Users Provider | search_users_service | **plugin** | `searchUsers` | panelUsages `extendSearch` |
| Search Groups Provider | search_groups_service | **plugin** | `searchGroups` | panelUsages `extendSearch` |
| Search Hashtags Provider | search_hashtags_service | **plugin** | `searchHashtags` | panelUsages `extendSearch` |
| Search Geotags Provider | search_geotags_service | **plugin** | `searchGeotags` | panelUsages `extendSearch` |
| Search Posts Provider | search_posts_service | **plugin** | `searchPosts` | panelUsages `extendSearch` |
| Search Comments Provider | search_comments_service | **plugin** | `searchComments` | panelUsages `extendSearch` |
