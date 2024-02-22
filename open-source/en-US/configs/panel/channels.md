# Channels

> Panel > Clients > Channels

- All of the following configure the state `query_state` option as follows:
    - `1` Do not accept client parameters (but support default parameters)
    - `2` Accept only client pagination parameters
    - `3` Accept all parameters
- All of the following `query_config` configurations are the same as the API query passes.

## Homepage

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Default Homepage | default_homepage | post | string |  |

::: details `default_homepage` Options
- portal
- user
- group
- hashtag
- geotag
- post
- comment
:::

## Portal

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Name | channel_portal_name |  | object | **Multilingual** |
| SEO Config | channel_portal_seo |  | object | **Multilingual** |
| Status | channel_portal_status | true | boolean |  |

## User

**Home**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Name | channel_user_name |  | object | **Multilingual** |
| SEO Config | channel_user_seo |  | object | **Multilingual** |
| List State Config | channel_user_query_state | 2 | number |  |
| List Query Config | channel_user_query_config |  | string |  |
| Status | channel_user_status | true | boolean |  |

**List**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Name | channel_user_list_name |  | object | **Multilingual** |
| SEO Config | channel_user_list_seo |  | object | **Multilingual** |
| List State Config | channel_user_list_query_state | 2 | number |  |
| List Query Config | channel_user_list_query_config |  | string |  |
| Status | channel_user_list_status | true | boolean |  |

**Interaction**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Liked Users-Name | channel_likes_users_name |  | object | **Multilingual** |
| Disliked Users-Name | channel_dislikes_users_name |  | object | **Multilingual** |
| Followed Users-Name | channel_following_users_name |  | object | **Multilingual** |
| Blocked Users-Name | channel_blocking_users_name |  | object | **Multilingual** |

## Group

**Home**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Name | channel_group_name |  | object | **Multilingual** |
| SEO Config | channel_group_seo |  | object | **Multilingual** |
| List Type | channel_group_type | tree | string | `tree` or `list` |
| List State Config | channel_group_query_state | 2 | number |  |
| List Query Config | channel_group_query_config |  | string |  |
| Status | channel_group_status | true | boolean |  |

**List**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Name | channel_group_list_name |  | object | **Multilingual** |
| SEO Config | channel_group_list_seo |  | object | **Multilingual** |
| List State Config | channel_group_list_query_state | 2 | number |  |
| List Query Config | channel_group_list_query_config |  | string |  |
| Status | channel_group_list_status | true | boolean |  |

**Detail**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Default List Type | channel_group_detail_type | posts | string | `posts` or `comments` |

**Interaction**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Liked Groups-Name | channel_likes_groups_name |  | object | **Multilingual** |
| Disliked Groups-Name | channel_dislikes_groups_name |  | object | **Multilingual** |
| Followed Groups-Name | channel_following_groups_name |  | object | **Multilingual** |
| Blocked Groups-Name | channel_blocking_groups_name |  | object | **Multilingual** |

## Hashtag

**Home**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Name | channel_hashtag_name |  | object | **Multilingual** |
| SEO Config | channel_hashtag_seo |  | object | **Multilingual** |
| List State Config | channel_hashtag_query_state | 2 | number |  |
| List Query Config | channel_hashtag_query_config |  | string |  |
| Status | channel_hashtag_status | true | boolean |  |

**List**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Name | channel_hashtag_list_name |  | object | **Multilingual** |
| SEO Config | channel_hashtag_list_seo |  | object | **Multilingual** |
| List State Config | channel_hashtag_list_query_state | 2 | number |  |
| List Query Config | channel_hashtag_list_query_config |  | string |  |
| Status | channel_hashtag_list_status | true | boolean |  |

**Detail**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Default List Type | channel_hashtag_detail_type | posts | string | `posts` or `comments` |

**Interaction**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Liked Hashtags-Name | channel_likes_hashtags_name |  | object | **Multilingual** |
| Disliked Hashtags-Name | channel_dislikes_hashtags_name |  | object | **Multilingual** |
| Followed Hashtags-Name | channel_following_hashtags_name |  | object | **Multilingual** |
| Blocked Hashtags-Name | channel_blocking_hashtags_name |  | object | **Multilingual** |

## Geotag

**Home**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Name | channel_geotag_name |  | object | **Multilingual** |
| SEO Config | channel_geotag_seo |  | object | **Multilingual** |
| List State Config | channel_geotag_query_state | 2 | number |  |
| List Query Config | channel_geotag_query_config |  | string |  |
| Status | channel_geotag_status | true | boolean |  |

**List**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Name | channel_geotag_list_name |  | object | **Multilingual** |
| SEO Config | channel_geotag_list_seo |  | object | **Multilingual** |
| List State Config | channel_geotag_list_query_state | 2 | number |  |
| List Query Config | channel_geotag_list_query_config |  | string |  |
| Status | channel_geotag_list_status | true | boolean |  |

**Detail**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Default List Type | channel_geotag_detail_type | posts | string | `posts` or `comments` |

**Interaction**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Liked Geotags-Name | channel_likes_geotags_name |  | object | **Multilingual** |
| Disliked Geotags-Name | channel_dislikes_geotags_name |  | object | **Multilingual** |
| Followed Geotags-Name | channel_following_geotags_name |  | object | **Multilingual** |
| Blocked Geotags-Name | channel_blocking_geotags_name |  | object | **Multilingual** |

## Post

**Home**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Name | channel_post_name |  | object | **Multilingual** |
| SEO Config | channel_post_seo |  | object | **Multilingual** |
| List State Config | channel_post_query_state | 2 | number |  |
| List Query Config | channel_post_query_config |  | string |  |
| Status | channel_post_status | true | boolean |  |

**List**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Name | channel_post_list_name |  | object | **Multilingual** |
| SEO Config | channel_post_list_seo |  | object | **Multilingual** |
| List State Config | channel_post_list_query_state | 2 | number |  |
| List Query Config | channel_post_list_query_config |  | string |  |
| Status | channel_post_list_status | true | boolean |  |

**Interaction**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Liked Posts-Name | channel_likes_posts_name |  | object | **Multilingual** |
| Disliked Posts-Name | channel_dislikes_posts_name |  | object | **Multilingual** |
| Followed Posts-Name | channel_following_posts_name |  | object | **Multilingual** |
| Blocked Posts-Name | channel_blocking_posts_name |  | object | **Multilingual** |

## Comment

**Home**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Name | channel_comment_name |  | object | **Multilingual** |
| SEO Config | channel_comment_seo |  | object | **Multilingual** |
| List State Config | channel_comment_query_state | 2 | number |  |
| List Query Config | channel_comment_query_config |  | string |  |
| Status | channel_comment_status | true | boolean |  |

**List**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Name | channel_comment_list_name |  | object | **Multilingual** |
| SEO Config | channel_comment_list_seo |  | object | **Multilingual** |
| List State Config | channel_comment_list_query_state | 2 | number |  |
| List Query Config | channel_comment_list_query_config |  | string |  |
| Status | channel_comment_list_status | true | boolean |  |

**Interaction**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Liked Comments-Name | channel_likes_comments_name |  | object | **Multilingual** |
| Disliked Comments-Name | channel_dislikes_comments_name |  | object | **Multilingual** |
| Followed Comments-Name | channel_following_comments_name |  | object | **Multilingual** |
| Blocked Comments-Name | channel_blocking_comments_name |  | object | **Multilingual** |

## Timeline

**Home**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Name | channel_timeline_name |  | object | `Following` **Multilingual** |
| Default List Type | channel_timeline_type | posts | string | `posts` or `comments` |

**List**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Followed Posts - Status | channel_timeline_posts_status | true | boolean |  |
| All Followed Posts | channel_timeline_posts_name |  | object | `Following` **Multilingual** |
| I follow users posts | channel_timeline_user_posts_name |  | object | `Following Users Posts` **Multilingual** |
| I follow groups posts | channel_timeline_group_posts_name |  | object | `Following Groups Posts` **Multilingual** |
| Followed Comments - Status | channel_timeline_comments_status | true | boolean |  |
| All Followed Comments | channel_timeline_comments_name |  | object | `Following` **Multilingual** |
| I follow users comments | channel_timeline_user_comments_name |  | object | `Following Users Comments` **Multilingual** |
| I follow groups comments | channel_timeline_group_comments_name |  | object | `Following Groups Comments` **Multilingual** |

## Nearby

**Home**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Name | channel_nearby_name |  | object | `Nearby` **Multilingual** |
| Default List Type | channel_nearby_type | posts | string | `posts` or `comments` |

**List**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Post List by Nearby | channel_nearby_posts_name |  | object | `Nearby` **Multilingual** |
| Post List by Nearby - Status | channel_nearby_posts_status | true | boolean |  |
| Comment List by Nearby | channel_nearby_comments_name |  | object | `Nearby` **Multilingual** |
| Comment List by Nearby - Status | channel_nearby_comments_status | true | boolean |  |

## Personal Center

**Home**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Personal Center | channel_me_name |  | object | `Me` **Multilingual** |

**List**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Wallet | channel_me_wallet_name |  | object | **Multilingual** |
| Extcredits | channel_me_extcredits_name |  | object | **Multilingual** |
| Drafts | channel_me_drafts_name |  | object | **Multilingual** |
| Users | channel_me_users_name |  | object | **Multilingual** |
| Settings | channel_me_settings_name |  | object | **Multilingual** |

## Messages

**Home**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Conversations | channel_conversations_name |  | object | `Messages` **Multilingual** |
| Notifications | channel_notifications_name |  | object | `Notifications` **Multilingual** |

**List**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| All | channel_notifications_all_name |  | object | **Multilingual** |
| Systems | channel_notifications_systems_name |  | object | **Multilingual** |
| Recommends | channel_notifications_recommends_name |  | object | **Multilingual** |
| Likes | channel_notifications_likes_name |  | object | **Multilingual** |
| Dislikes | channel_notifications_dislikes_name |  | object | **Multilingual** |
| Follows | channel_notifications_follows_name |  | object | **Multilingual** |
| Blocks | channel_notifications_blocks_name |  | object | **Multilingual** |
| Mentions | channel_notifications_mentions_name |  | object | **Multilingual** |
| Comments | channel_notifications_comments_name |  | object | **Multilingual** |
| Quotes | channel_notifications_quotes_name |  | object | **Multilingual** |

## Search

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Search | channel_search_name |  | object | **Multilingual** |
