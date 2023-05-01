# User

> Panel > Systems > User

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Third-party Connection Support | account_connect_services |  | **plugins** | Plugin application scenario parameter `connect`<br>Format as described below |
| Real Name Verification Support | account_real_name_service |  | **plugin** | Plugin application scenario parameter `realName` |
| Multi-user Mode | multi_user_status | false | boolean | true or false |
| Multi-user Feature Plugin | multi_user_service |  | **plugin** | Plugin application scenario parameter `multiple` |
| Authorized Roles | multi_user_roles |  | array |  |
| Default User Role | default_role | 4 | number | User role ID |
| Default User Avatar | default_avatar |  | **file** | Default avatar for users without an avatar |
| Anonymous User Avatar | anonymous_avatar |  | **file** | Avatar for anonymous users when post and comment anonymity is enabled |
| Deactivated User Avatar | deactivate_avatar |  | **file** | Avatar image for deactivated or disabled users |
| Password Minimum Length | password_length | 8 | number | Minimum password length for new user registration, 0 or empty for no restriction |
| Password Character Types | password_strength | ["number","lowercase"] | array | Password must contain selected character types, no restriction if not selected<br>`number` Digits<br>`lowercase` Lowercase letters<br>`uppercase` Uppercase letters<br>`symbols` Symbols (excluding space) |
| User Identifier Type | user_identifier | username | string | `uid` or `username` |
| User UID Starting Digits | user_uid_digit | 8 | number |  |
| Username Minimum Length | username_min | 5 | number |  |
| Username Maximum Length | username_max | 16 | number |  |
| Username Modification Interval (Days) | username_edit | 180 | number |  |
| Nickname Minimum Length | nickname_min | 2 | number |  |
| Nickname Maximum Length | nickname_max | 20 | number |  |
| Nickname Modification Interval (Days) | nickname_edit | 1 | number |  |
| Unique Nicknames | nickname_unique | false | boolean |  |
| User Bio Character Limit | bio_length | 128 | number | Character length |
| User Bio Supports Mentions | bio_support_mention | false | boolean | true or false |
| User Bio Supports Links | bio_support_link | false | boolean | true or false |
| User Bio Supports Hashtags | bio_support_hashtag | false | boolean | true or false |


## Third-party connect Format Introduction

```json
[
    {
        "code": "Connect platform number",
        "fskey": "Plugin Fskey"
    },
    {
        "code": "2",
        "fskey": "Placeholder"
    }
]
```

- [Connect platform number](../dictionary/connects.md)
- Since the format of the 'plugins' type is universal, the 'code' is a string, not a numeric format. However, the platform number is a numeric value, so it should be stored as a string when saving.