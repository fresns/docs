# User

> Panel > Operations > User

## Name Config

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Custom Identity Name | user_name |  | object | `User` **Multilingual** |
| Custom ID Name | user_uid_name |  | object | `UID` **Multilingual** |
| Custom Display Name | user_username_name |  | object | `Username` **Multilingual** |
| Custom Nickname Name | user_nickname_name |  | object | `Nickname` **Multilingual** |
| Custom Role Name | user_role_name |  | object | `User Role` **Multilingual** |
| Custom Bio Name | user_bio_name |  | object | `User Bio` **Multilingual** |

## Default Config

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Default Role | default_role | 4 | number | User role ID |
| Default Avatar | default_avatar |  | **file** | Default avatar for users without an avatar |
| Anonymous Avatar | anonymous_avatar |  | **file** | Avatar for anonymous users when post and comment anonymity is enabled |
| Deactivate Avatar | deactivate_avatar |  | **file** | Avatar image for deactivated or disabled users |
| User Identifier | user_identifier | username | string | `uid` or `username` |
| User UID Starting digit | user_uid_digit | 8 | number |  |
| Default content list for user homepage | profile_default_homepage | posts | string | Default content list when visiting user home page |

::: details `profile_default_homepage` Options
- posts
- comments
- **likers** `Users who liked they`
- **dislikers** `Users who disliked him`
- **followers** `Users who followed him`
- **blockers** `Users who blocked him`
- like_users
- like_groups
- like_hashtags
- like_geotags
- like_posts
- like_comments
- dislike_users
- dislike_groups
- dislike_hashtags
- dislike_geotags
- dislike_posts
- dislike_comments
- follow_users
- follow_groups
- follow_hashtags
- follow_geotags
- follow_posts
- follow_comments
- block_users
- block_groups
- block_hashtags
- block_geotags
- block_posts
- block_comments
:::

## Edit Config

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Username Minimum Length | username_min | 5 | number |  |
| Username Maximum Length | username_max | 16 | number |  |
| Username Modification Interval (Days) | username_edit | 180 | number |  |
| Nickname Minimum Length | nickname_min | 2 | number |  |
| Nickname Maximum Length | nickname_max | 20 | number |  |
| Nickname Modification Interval (Days) | nickname_edit | 1 | number |  |
| Unique Nicknames | nickname_unique | false | boolean |  |
| Ban Names | user_ban_names | ["fresns","admin"] | array | One name per line. Use of these usernames and nicknames is ban. |
| User Bio Character Limit | bio_length | 128 | number | Character count length |
| User Bio Supports Mentions | bio_support_mention | false | boolean | `true` or `false` |
| User Bio Supports Links | bio_support_link | false | boolean | `true` or `false` |
| User Bio Supports Hashtags | bio_support_hashtag | false | boolean | `true` or `false` |

## Extcredits Config

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Extension 1 Name | extcredits1_name |  | object | **Multilingual** |
| Extension 1 Unit | extcredits1_unit |  | object | **Multilingual** |
| Extension 1 State | extcredits1_state | 1 | number | `1` Disabled<br>`2` Private<br>`3` Public |
| Extension 2 Name | extcredits2_name |  | object | **Multilingual** |
| Extension 2 Unit | extcredits2_unit |  | object | **Multilingual** |
| Extension 2 State | extcredits2_state | 1 | number | `1` Disabled<br>`2` Private<br>`3` Public |
| Extension 3 Name | extcredits3_name |  | object | **Multilingual** |
| Extension 3 Unit | extcredits3_unit |  | object | **Multilingual** |
| Extension 3 State | extcredits3_state | 1 | number | `1` Disabled<br>`2` Private<br>`3` Public |
| Extension 4 Name | extcredits4_name |  | object | **Multilingual** |
| Extension 4 Unit | extcredits4_unit |  | object | **Multilingual** |
| Extension 4 State | extcredits4_state | 1 | number | `1` Disabled<br>`2` Private<br>`3` Public |
| Extension 5 Name | extcredits5_name |  | object | **Multilingual** |
| Extension 5 Unit | extcredits5_unit |  | object | **Multilingual** |
| Extension 5 State | extcredits5_state | 1 | number | `1` Disabled<br>`2` Private<br>`3` Public |

## Conversation Config

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Conversation Feature | conversation_status | false | boolean |  |
| Conversation Files | conversation_files | `["image"]` | array | `image`<br>`video`<br>`audio`<br>`document` |
| File Upload Type | conversation_file_upload_type |  | object | Options: `api`, `page`, `sdk` |

- File Upload Type `{"image":"api","video":"sdk","audio":"sdk","document":"sdk"}`
