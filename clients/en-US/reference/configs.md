# Config Items

- Endpoint Path: [/api/fresns/v1/global/configs](/api/global/configs.md)

## Languages

> Panel > Systems > Languages

| Key Name | Value Type | Description |
| --- | --- | --- |
| language_status | Boolean | Enable Multilingual |
| language_menus | Array | Language configuration list |
| default_language | String | Default Language Tag `langTag` |
| current_language_menu | Object | Current Language Menu |

::: details Language list JSON data
```json
[
    {
        "order": "Sort Order",
        "langCode": "Language code",
        "langName": "Language name (read from dictionary and store)",
        "continentId": "Continent ID",
        "areaStatus": "Area enable status, true or false",
        "areaCode": "Area code (can be empty)",
        "areaName": "Area name (can be empty, read from dictionary and store)",
        "langTag": "Language tag (combination of language name and area code)",
        "writingDirection": "Language writing direction (read from dictionary and store)",
        "lengthUnit": "Length unit",
        "dateFormat": "Date format",
        "timeFormatMinute": "Minute time format naming",
        "timeFormatHour": "Hour time format naming",
        "timeFormatDay": "Day time format naming",
        "timeFormatMonth": "Month time format naming",
        "timeFormatYear": "Year time format naming",
        "isEnabled": "true or false"
    },
    {
        "order": 1,
        "langCode": "zh-Hans",
        "langName": "Simplified Chinese",
        "continentId": 1,
        "areaStatus": true,
        "areaCode": "SG",
        "areaName": "Singapore",
        "langTag": "zh-Hans-SG",
        "writingDirection": "ltr",
        "lengthUnit": "km",
        "dateFormat": "yyyy-mm-dd",
        "timeFormatMinute": "{n} minutes ago",
        "timeFormatHour": "{n} hours ago",
        "timeFormatDay": "{n} days ago",
        "timeFormatMonth": "{n} months ago",
        "timeFormatYear": "{n} years ago",
        "isEnabled": true
    }
]
```
:::

## Language Pack

> Panel > Clients > Language Packs

| Key Name | Value Type | Description |
| --- | --- | --- |
| language_pack_version| String | Language Pack Version |

## General

> Panel > Systems > General

| Key Name | Value Type | Description |
| --- | --- | --- |
| site_url | String | Site URL `URL` |
| site_name | String | Site Name |
| site_desc | String | Site Description |
| site_intro | String | Site Introduction `Markdown` |
| site_icon | String | Site ICON `URL` |
| site_logo | String | Site LOGO `URL` |
| site_copyright_name | String | Copyright Owner Name |
| site_copyright_years | String | Copyright Year |
| site_email | string | Admin Email<br>Displayed to users when an error occurs, for users to report issues. |
| site_mode | String | Operating Mode `public` or `private` |

**Private Mode**

| Key Name | Value Type | Description |
| --- | --- | --- |
| site_private_status | Boolean | Open Status |
| site_private_service | String | Join the service `URL` |
| site_private_end_after | Number | State After User Expiration<br>`1` All site content is invisible<br>`2` Content before expiration is visible, new content is invisible |

## Policy

> Panel > Systems > Policy

| Key Name | Value Type | Description |
| --- | --- | --- |
| account_terms_status | Boolean | Show Service Terms |
| account_privacy_status | Boolean | Show Privacy Policy |
| account_cookie_status | Boolean | Show Cookie Policy |
| account_delete_status | Boolean | Show Deletion Explanation |
| account_terms_policy | String | Service Terms `Markdown` |
| account_privacy_policy | String | Privacy Policy `Markdown` |
| account_cookie_policy | String | Cookie Policy `Markdown` |
| account_delete_policy | String | Deletion Explanation `Markdown` |

## Account

> Panel > Systems > Account

| Key Name | Value Type | Description |
| --- | --- | --- |
| account_center_service | String | Account Center `URL` |
| account_register_service | String | Account Register `URL` |
| account_login_service | String | Account Login `URL` |
| account_register_status | Boolean | Register Status |
| account_users_service | String | Multi-User Manage Services `URL` |

## Wallet

> Panel > Systems > Wallet

| Key Name | Value Type | Description |
| --- | --- | --- |
| wallet_status | Boolean | Wallet Function |
| wallet_currency_code | String | Currency Code |
| wallet_currency_name | String | Custom Currency Name |
| wallet_currency_unit | String | Custom Currency Unit Name |
| wallet_withdraw_status | Boolean | Withdraw Function |
| wallet_withdraw_check_kyc | Boolean | Withdrawal Verify KYC |

## User

> Panel > Operations > User

**Name Config**

| Key Name | Value Type | Description |
| --- | --- | --- |
| user_name | String | Custom Identity Name |
| user_uid_name | String | Custom ID Name |
| user_username_name | String | Custom Display Name |
| user_nickname_name | String | Custom Nickname Name |
| user_role_name | String | Custom Role Name |
| user_bio_name | String | Custom Bio Name |

**Default Config**

| Key Name | Value Type | Description |
| --- | --- | --- |
| user_identifier | String | User Identifier Type `uid` or `username` |

**Edit Config**

| Key Name | Value Type | Description |
| --- | --- | --- |
| username_min | Number | Username Minimum Length |
| username_max | Number | Username Maximum Length |
| username_edit | Number | Username Modification Interval (Days) |
| nickname_min | Number | Nickname Minimum Length |
| nickname_max | Number | Nickname Maximum Length |
| nickname_edit | Number | Nickname Modification Interval (Days) |
| nickname_unique | Boolean | Unique Nicknames |
| user_ban_names | Array | Ban Names |
| bio_length | Number | User Bio Character Limit |
| bio_support_mention | Boolean | User Bio Supports Mentions |
| bio_support_hashtag | Boolean | User Bio Supports Hashtags |

**Conversation Config**

| Key Name | Value Type | Description |
| --- | --- | --- |
| conversation_status | Boolean | Conversation Feature |
| conversation_files | Array | File types supported by the conversation |

## Publish

> Panel > Operations > Publish

| Key Name | Value Type | Description |
| --- | --- | --- |
| post_editor_service | String | Post Editor `URL` |
| comment_editor_service | String | Comment Editor `URL` |

## Content

> Panel > Operations > Content

**Name Config**

| Key Name | Value Type | Description |
| --- | --- | --- |
| group_name | String | Custom Group Name |
| hashtag_name | String | Custom Hashtag Name |
| geotag_name | String | Custom Geotag Name |
| post_name | String | Custom Post Content Name |
| comment_name | String | Custom Comment Content Name |
| publish_post_name | String | Publish Post Action Name |
| publish_comment_name | String | Publish Comment Action Name |

**Interaction Config**

| Key Name | Value Type | Description |
| --- | --- | --- |
| mention_status | Boolean | Mention Status |
| hashtag_status | Boolean | Hashtag Status |
| hashtag_format | Number | Hashtag Format<br>1 `#hashtag`<br>2 `#hashtag#` |
| hashtag_length | Number | Hashtag Length |

## Interaction

> Panel > Operations > Interaction

| Key Name | Value Type | Description |
| --- | --- | --- |
| user_like_enabled | Boolean | User - Like |
| user_dislike_enabled | Boolean | User - Dislike |
| user_follow_enabled | Boolean | User - Follow |
| user_block_enabled | Boolean | User - Block |
| group_like_enabled | Boolean | Group - Like |
| group_dislike_enabled | Boolean | Group - Dislike |
| group_follow_enabled | Boolean | Group - Follow |
| group_block_enabled | Boolean | Group - Block |
| hashtag_like_enabled | Boolean | Hashtag - Like |
| hashtag_dislike_enabled | Boolean | Hashtag - Dislike |
| hashtag_follow_enabled | Boolean | Hashtag - Follow |
| hashtag_block_enabled | Boolean | Hashtag - Block |
| geotag_like_enabled | Boolean | Geotag - Like |
| geotag_dislike_enabled | Boolean | Geotag - Dislike |
| geotag_follow_enabled | Boolean | Geotag - Follow |
| geotag_block_enabled | Boolean | Geotag - Block |
| post_like_enabled | Boolean | Post - Like |
| post_dislike_enabled | Boolean | Post - Dislike |
| post_follow_enabled | Boolean | Post - Follow |
| post_block_enabled | Boolean | Post - Block |
| comment_like_enabled | Boolean | Comment - Like |
| comment_dislike_enabled | Boolean | Comment - Dislike |
| comment_follow_enabled | Boolean | Comment - Follow |
| comment_block_enabled | Boolean | Comment - Block |

## Channels

> Panel > Clients > Channels

### Portal

| Key Name | Value Type | Description |
| --- | --- | --- |
| channel_portal_name | String | Portal Name |
| channel_portal_seo | Object | SEO Config |
| channel_portal_status | Boolean | Status |

### User

| Key Name | Value Type | Description |
| --- | --- | --- |
| channel_user_name | String | User Name |
| channel_user_seo | Object | SEO Config |
| channel_user_query_state | Number | List State Config |
| channel_user_query_config | String | List Query Config |
| channel_user_status | Boolean | Status |
| channel_user_list_name | String | User List - Name |
| channel_user_list_seo | Object | User List - SEO Config |
| channel_user_list_query_state | Number | User List - List State Config |
| channel_user_list_query_config | String | User List - List Query Config |
| channel_user_list_status | Boolean | User List - Status |
| channel_likes_users_name | String | My Liked Users - Name |
| channel_dislikes_users_name | String | My Disliked Users - Name |
| channel_following_users_name | String | My Followed Users - Name |
| channel_blocking_users_name | String | My Blocked Users - Name |

### Group

| Key Name | Value Type | Description |
| --- | --- | --- |
| channel_group_name | String | Group Name  |
| channel_group_seo | Object | SEO Config |
| channel_group_type | String | Default type of group homepage<br>`tree` or `list` |
| channel_group_query_state | Number | List State Config |
| channel_group_query_config | String | List Query Config |
| channel_group_status | Boolean | Status |
| channel_group_list_name | String | Group List - Name  |
| channel_group_list_seo | Object | Group List - SEO Config |
| channel_group_list_query_state | Number | Group List - List State Config |
| channel_group_list_query_config | String | Group List - List Query Config |
| channel_group_list_status | Boolean | Group List - Status |
| channel_group_detail_type | String | Default list of detail page<br>`posts` or `comments` |
| channel_likes_groups_name | String | My Liked Groups - Name |
| channel_dislikes_groups_name | String | My Disliked Groups - Name |
| channel_following_groups_name | String | My Followed Groups - Name |
| channel_blocking_groups_name | String | My Blocked Groups - Name |

### Hashtag

| Key Name | Value Type | Description |
| --- | --- | --- |
| channel_hashtag_name | String | Hashtag Name |
| channel_hashtag_seo | Object | SEO Config |
| channel_hashtag_query_state | Number | List State Config |
| channel_hashtag_query_config | String | List Query Config |
| channel_hashtag_status | Boolean | Status |
| channel_hashtag_list_name | String | Hashtag List - Name  |
| channel_hashtag_list_seo | Object | Hashtag List - SEO Config |
| channel_hashtag_list_query_state | Number | Hashtag List - List State Config |
| channel_hashtag_list_query_config | String | Hashtag List - List Query Config |
| channel_hashtag_list_status | Boolean | Hashtag List - Status |
| channel_hashtag_detail_type | String | Default list of detail page<br>`posts` or `comments` |
| channel_likes_hashtags_name | String | My Liked Hashtags - Name |
| channel_dislikes_hashtags_name | String | My Disliked Hashtags - Name |
| channel_following_hashtags_name | String | My Followed Hashtags - Name |
| channel_blocking_hashtags_name | String | My Blocked Hashtags - Name |

### Geotag

| Key Name | Value Type | Description |
| --- | --- | --- |
| channel_geotag_name | String | Geotag Name |
| channel_geotag_seo | Object | SEO Config |
| channel_geotag_query_state | Number | List State Config |
| channel_geotag_query_config | String | List Query Config |
| channel_geotag_status | Boolean | Status |
| channel_geotag_list_name | String | Geotag List - Name  |
| channel_geotag_list_seo | Object | Geotag List - SEO Config |
| channel_geotag_list_query_state | Number | Geotag List - List State Config |
| channel_geotag_list_query_config | String | Geotag List - List Query Config |
| channel_geotag_list_status | Boolean | Geotag List - Status |
| channel_geotag_detail_type | String | Default list of detail page<br>`posts` or `comments` |
| channel_likes_geotags_name | String | My Liked Geotags - Name |
| channel_dislikes_geotags_name | String | My Disliked Geotags - Name |
| channel_following_geotags_name | String | My Followed Geotags - Name |
| channel_blocking_geotags_name | String | My Blocked Geotags - Name |

### Post

| Key Name | Value Type | Description |
| --- | --- | --- |
| channel_post_name | String | Post Name |
| channel_post_seo | Object | SEO Config |
| channel_post_query_state | Number | List State Config |
| channel_post_query_config | String | List Query Config |
| channel_post_status | Boolean | Status |
| channel_post_list_name | String | Post List - Name  |
| channel_post_list_seo | Object | Post List - SEO Config |
| channel_post_list_query_state | Number | Post List - List State Config |
| channel_post_list_query_config | String | Post List - List Query Config |
| channel_post_list_status | Boolean | Post List - Status |
| channel_likes_posts_name | String | My Liked Posts - Name |
| channel_dislikes_posts_name | String | My Disliked Posts - Name |
| channel_following_posts_name | String | My Followed Posts - Name |
| channel_blocking_posts_name | String | My Blocked Posts - Name |

### Comment

| Key Name | Value Type | Description |
| --- | --- | --- |
| channel_comment_name | String | Comment Name |
| channel_comment_seo | Object | SEO Config |
| channel_comment_query_state | Number | List State Config |
| channel_comment_query_config | String | List Query Config |
| channel_comment_status | Boolean | Status |
| channel_comment_list_name | String | Comment List - Name  |
| channel_comment_list_seo | Object | Comment List - SEO Config |
| channel_comment_list_query_state | Number | Comment List - List State Config |
| channel_comment_list_query_config | String | Comment List - List Query Config |
| channel_comment_list_status | Boolean | Comment List - Status |
| channel_likes_comments_name | String | My Liked Comments - Name |
| channel_dislikes_comments_name | String | My Disliked Comments - Name |
| channel_following_comments_name | String | My Followed Comments - Name |
| channel_blocking_comments_name | String | My Blocked Comments - Name |

### Timeline

| Key Name | Value Type | Description |
| --- | --- | --- |
| channel_timeline_name | String | Timeline Name |
| channel_timeline_type | String | Default list<br>`posts` or `comments` |
| channel_timeline_posts_status | Boolean | Followed Posts - Status |
| channel_timeline_posts_name | String | All Followed Posts - Name |
| channel_timeline_user_posts_name | String | I follow users posts - Name |
| channel_timeline_group_posts_name | String | I follow groups posts - Name |
| channel_timeline_comments_status | Boolean | Followed Comments - Status |
| channel_timeline_comments_name | String | All Followed Comments - Name |
| channel_timeline_user_comments_name | String | I follow users comments - Name |
| channel_timeline_group_comments_name | String | I follow groups comments - Name |

### Nearby

| Key Name | Value Type | Description |
| --- | --- | --- |
| channel_nearby_name | String | Nearby Name |
| channel_nearby_type | String | Default list<br>`posts` or `comments` |
| channel_nearby_posts_status | Boolean | Post List by Nearby - Status |
| channel_nearby_posts_name | String | Post List by Nearby - Name |
| channel_nearby_comments_status | Boolean | Comment List by Nearby - Status |
| channel_nearby_comments_name | String | Comment List by Nearby - Name |

### Personal Center

| Key Name | Value Type | Description |
| --- | --- | --- |
| channel_me_name | String | Personal Center - Name |
| channel_me_wallet_name | String | Wallet - Name |
| channel_me_extcredits_name | String | Extcredits - Name |
| channel_me_drafts_name | String | Drafts - Name |
| channel_me_users_name | String | Users - Name |
| channel_me_settings_name | String | Settings - Name |

### Messages

| Key Name | Value Type | Description |
| --- | --- | --- |
| channel_conversations_name | String | Conversations - Name |
| channel_notifications_name | String | Notifications - Name |
| channel_notifications_all_name | String | All - Name |
| channel_notifications_systems_name | String | Systems - Name |
| channel_notifications_recommends_name | String | Recommends - Name |
| channel_notifications_likes_name | String | Likes - Name |
| channel_notifications_dislikes_name | String | Dislikes - Name |
| channel_notifications_follows_name | String | Follows - Name |
| channel_notifications_blocks_name | String | Blocks - Name |
| channel_notifications_mentions_name | String | Mentions - Name |
| channel_notifications_comments_name | String | Comments - Name |
| channel_notifications_quotes_name | String | Quotes - Name |

### Search

| Key Name | Value Type | Description |
| --- | --- | --- |
| channel_search_name | String | Search - Name |

- SEO Config `*_seo`
    - Format `{"title":"","keywords":"","description":""}`
- List State Config `*_query_state`
    - `1` Do not accept client parameters (but support default parameters)
    - `2` Accept only client pagination parameters
    - `3` Accept all parameters
- List Query Config `*_query_config`
    - Server-side configuration of default parameters (in the same format as API query passes)

## Paths

> Panel > Clients > Paths

### Channels

| Key Name | Value Type | Description |
| --- | --- | --- |
| website_portal_path | String | Portal |
| website_user_path | String | User |
| website_group_path | String | Group |
| website_hashtag_path | String | Hashtag |
| website_geotag_path | String | Geotag |
| website_post_path | String | Post |
| website_comment_path | String | Comment |

### Detail

| Key Name | Value Type | Description |
| --- | --- | --- |
| website_user_detail_path | String | User |
| website_group_detail_path | String | Group |
| website_hashtag_detail_path | String | Hashtag |
| website_geotag_detail_path | String | Geotag |
| website_post_detail_path | String | Post |
| website_comment_detail_path | String | Comment |

- Example of a post, full URL format `{site_url}`/`{website_user_detail_path}`/`{pid}`

## Website Basic

> Panel > Clients > Basic

| Key Name | Value Type | Description |
| --- | --- | --- |
| website_stat_code | String | Stat Code |
| website_stat_position | String | Stat Code Position `head` or `body`<br>Position to load the statistical code in HTML |

## Default Homepage

> Panel > Clients > Channels

| Key Name | Value Type | Description |
| --- | --- | --- |
| default_homepage | String | Default Homepage |

::: details `default_homepage` Options
- portal
- user
- group
- hashtag
- post
- comment
:::

## User Default Homepage

> Panel > Operations > User

| Key Name | Value Type | Description |
| --- | --- | --- |
| profile_default_homepage | String | Default content list when visiting user home page |

::: details `profile_default_homepage` Options
- posts
- comments
- **likers** `Users who liked they`
- **dislikers** `Users who disliked him`
- **followers** `Users who followed him`
- **blockers** `Users who blocked him`
- likes_users
- likes_groups
- likes_hashtags
- likes_geotags
- likes_posts
- likes_comments
- dislikes_users
- dislikes_groups
- dislikes_hashtags
- dislikes_geotags
- dislikes_posts
- dislikes_comments
- following_users
- following_groups
- following_hashtags
- following_geotags
- following_posts
- following_comments
- blocking_users
- blocking_groups
- blocking_hashtags
- blocking_geotags
- blocking_posts
- blocking_comments
:::

### User Content

> Panel > Operations > Interaction

**Published Content**

| Key Name | Value Type | Description |
| --- | --- | --- |
| profile_posts_enabled | Boolean | They posts |
| post_name | String |  |
| profile_comments_enabled | Boolean | They comments |
| comment_name | String |  |

**Interaction Config**

| Key Name | Value Type | Description |
| --- | --- | --- |
| user_like_public_record | Number | Users who liked them |
| profile_likers_name | String |  |
| user_dislike_public_record | Number | Users who disliked them |
| profile_dislikers_name | String |  |
| user_follow_public_record | Number | Users who followed them |
| profile_followers_name | String |  |
| user_block_public_record | Number | Users who blocked them |
| profile_blockers_name | String |  |
| profile_followers_you_follow_enabled | Boolean | Followers You Know |
| profile_followers_you_follow_name | String |  |

- `*_public_record` Public Record
    - `1` Not Public
    - `2` Only Me
    - `3` Public

**Like**

| Key Name | Value Type | Description |
| --- | --- | --- |
| profile_likes_users_enabled | Boolean | They like the users |
| profile_likes_users_name | String |  |
| profile_likes_groups_enabled | Boolean | They like the groups |
| profile_likes_groups_name | String |  |
| profile_likes_hashtags_enabled | Boolean | They like the hashtags |
| profile_likes_hashtags_name | String |  |
| profile_likes_geotags_enabled | Boolean | They like the geotags |
| profile_likes_geotags_name | String |  |
| profile_likes_posts_enabled | Boolean | They like the posts |
| profile_likes_posts_name | String |  |
| profile_likes_comments_enabled | Boolean | They like the comments |
| profile_likes_comments_name | String |  |

**Dislike**

| Key Name | Value Type | Description |
| --- | --- | --- |
| profile_dislikes_users_enabled | Boolean | They dislike the users |
| profile_dislikes_users_name | String |  |
| profile_dislikes_groups_enabled | Boolean | They dislike the groups |
| profile_dislikes_groups_name | String |  |
| profile_dislikes_hashtags_enabled | Boolean | They dislike the hashtags |
| profile_dislikes_hashtags_name | String |  |
| profile_dislikes_geotags_enabled | Boolean | They dislike the geotags |
| profile_dislikes_geotags_name | String |  |
| profile_dislikes_posts_enabled | Boolean | They dislike the posts |
| profile_dislikes_posts_name | String |  |
| profile_dislikes_comments_enabled | Boolean | They dislike the comments |
| profile_dislikes_comments_name | String |  |

**Follow**

| Key Name | Value Type | Description |
| --- | --- | --- |
| profile_following_users_enabled | Boolean | They follow the users |
| profile_following_users_name | String |  |
| profile_following_groups_enabled | Boolean | They follow the groups |
| profile_following_groups_name | String |  |
| profile_following_hashtags_enabled | Boolean | They follow the hashtags |
| profile_following_hashtags_name | String |  |
| profile_following_geotags_enabled | Boolean | They follow the geotags |
| profile_following_geotags_name | String |  |
| profile_following_posts_enabled | Boolean | They follow the posts |
| profile_following_posts_name | String |  |
| profile_following_comments_enabled | Boolean | They follow the comments |
| profile_following_comments_name | String |  |

**Block**

| Key Name | Value Type | Description |
| --- | --- | --- |
| profile_blocking_users_enabled | Boolean | They block the users |
| profile_blocking_users_name | String |  |
| profile_blocking_groups_enabled | Boolean | They block the groups |
| profile_blocking_groups_name | String |  |
| profile_blocking_hashtags_enabled | Boolean | They block the hashtags |
| profile_blocking_hashtags_name | String |  |
| profile_blocking_geotags_enabled | Boolean | They block the geotags |
| profile_blocking_geotags_name | String |  |
| profile_blocking_posts_enabled | Boolean | They block the posts |
| profile_blocking_posts_name | String |  |
| profile_blocking_comments_enabled | Boolean | They block the comments |
| profile_blocking_comments_name | String |  |

## System Bulletin

| Key Name | Value Type | Description |
| --- | --- | --- |
| bulletin_name | String | System bulletin name |
| bulletin_contents | Array | System bulletin content |

::: details Example
```json
[
    {
        "date": "10/18/2022",
        "title": "[Must Read] Guide to give feedback to Fresns official questions",
        "titleColor": "#f40",
        "description": "Guide to give feedback to Fresns official questions",
        "descriptionColor": null,
        "buttonName": "Learn more",
        "buttonLink": "https://fresns.org/guide/feedback.html",
    }
]
```
:::

## Extends

> Panel > Extends > Content Handler

| Key Name | Value Type | Description |
| --- | --- | --- |
| map_service | String | Map Service `URL` |

## Portal Content

| Key Name | Value Type | Description |
| --- | --- | --- |
| portal_`{platformId}` | String | Portal Content |

- For example, the portal key name for the Desktop Web platform is `portal_2`
- Reference: [Platforms](dictionary/platforms.md)
