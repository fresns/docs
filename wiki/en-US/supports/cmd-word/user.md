# User Command Word

## addUser

```php
\FresnsCmdWord::plugin('Fresns')->addUser($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | Related field `accounts->aid` |
| aidToken | String | *optional* | If not passed, the account identity will not be verified, and users will be added directly to the account |
| platformId | Number | *optional* | Platform ID, required when passing `aidToken` |
| version | String | *optional* | Semantic version number, required when passing `aidToken` |
| appId | String | *optional* | App ID, required when passing `aidToken` |
| nickname | String | **required** | Nickname, related field `users->nickname` |
| username | String | *optional* | Username, related field `users->username`<br>If not passed, a random 6-8 character string will be generated, avoiding the use of banned names (key name [ban_names](../../database/dictionary/ban-names.md) banned values) |
| password | String | *optional* | Login password, related field `users->password` |
| avatarFid | String | *optional* | Avatar file fid, converted to `files->id` when stored<br>Related field `users->avatar_file_id` |
| avatarUrl | String | *optional* | Avatar file URL, related field `users->avatar_file_url`<br>If left empty, check if `avatarFid` is also empty, if not, store the url obtained by fid in the database (ignoring anti-leech, only stitching the address) |
| gender | Number | *optional* | Gender, related field `users->gender` |
| birthday | String | *optional* | Birthday, related field `users->birthday`, format is Y-m-d H:i:s |
| timezone | String | *optional* | Preferred timezone, related field `users->timezone` |
| language | String | *optional* | Preferred language, related field `users->language` |

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "aid": "accounts->aid",
        "aidToken": "aidToken",
        "uid": "users->uid",
        "username": "users->username",
        "nickname": "users->nickname"
    }
}
```
:::

::: details View the add logic
- Data list to be generated during registration
    - Main user table `users`
    - User data statistics table `user_stats`
    - User role association table `user_roles`: The initial role comes from the `default_role` key in the configuration table.
    - For other parameters, if there's a value, record it directly; if not, leave it blank.
:::

## verifyUser

```php
\FresnsCmdWord::plugin('Fresns')->verifyUser($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| platformId | Number | **required** | Platform ID (key value of the key name in the configuration table [platforms](../../database/dictionary/platforms.md)) |
| version | String | **required** | Semantic version number |
| appId | String | **required** | App ID |
| aid | String | **required** | Account AID `accounts->aid` |
| aidToken | String | **required** | Account Token |
| uid | Number | **required** | User UID `users->uid` |
| password | String | *optional* | Password `users->password` |

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "aid": "accounts->aid",
        "aidToken": "aidToken",
        "uid": "users->uid",
    }
}
```
:::

## createUserToken

```php
\FresnsCmdWord::plugin('Fresns')->createUserToken($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| platformId | Number | **required** | Platform ID (key value of the key name in the configuration table [platforms](../../database/dictionary/platforms.md)) |
| version | String | **required** | Semantic version number |
| appId | String | **required** | App ID |
| aid | String | **required** | Account parameter `session_tokens->account_id`<br>Stored as `accounts->id` when converted from `aid` |
| aidToken | String | **required** | Account identity credential (credential table `session_tokens->token` field) |
| uid | Number | **required** | User parameter `session_tokens->user_id`<br>Stored as `users->id` when converted from `uid` |
| expiredTime | Number | *optional* | Expiration time, unit: hours (empty means valid forever) |

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "aid": "aid",
        "aidToken": "aidToken",
        "uid": "users->uid",
        "uidToken": "session_tokens->token",
        "uidTokenId": "session_tokens->id",
        "expiredHours": "Expiration hours", // If not available, output null
        "expiredDays": "Expiration days", // If not available, output null
        "expiredDateTime": "session_tokens->expired_at, leave empty for permanent validity, format: Y-m-d H:i:s", // If not available, output null
    }
}
```
:::

## verifyUserToken

```php
\FresnsCmdWord::plugin('Fresns')->verifyUserToken($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| platformId | Number | **required** | Platform ID (key value of the key name in the configuration table [platforms](../../database/dictionary/platforms.md)) |
| aid | String | **required** | Account parameter `session_tokens->account_id`<br>Checked by converting `aid` to `accounts->id` |
| aidToken | String | **required** | Account identity credential (credential table `session_tokens->token` field) |
| uid | Number | **required** | User parameter `session_tokens->user_id`<br>Checked by converting `uid` to `users->id` |
| uidToken | String | **required** | User identity credential (credential table `session_tokens->token` field) |

## logicalDeletionUser

```php
\FresnsCmdWord::plugin('Fresns')->logicalDeletionUser($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uid | Number | **required** | User UID `users->uid` |

## setUserExpiryDatetime

```php
\FresnsCmdWord::plugin('Fresns')->setUserExpiryDatetime($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uid | Number | **required** | User UID `users->uid` |
| datetime | String | *optional* | `Y-m-d H:i:s` Date and time value, timezone is the database timezone |
| clearDatetime | Boolean | *optional* | Whether to clear the user's validity period |

- Choose one between `datetime` and `clearDatetime` to pass as a parameter.
- This feature is only effective for site private mode.
- This feature is only effective for group private mode.
- If the user has not joined the group, they will automatically join the group and set the validity period.

## setUserGroupExpiryDatetime

```php
\FresnsCmdWord::plugin('Fresns')->setUserGroupExpiryDatetime($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uid | Number | **required** | User UID `users->uid` |
| gid | String | **required** | Group GID `groups->gid` |
| datetime | String | *optional* | `Y-m-d H:i:s` Date and time value, timezone is the database timezone |
| clearDatetime | Boolean | *optional* | Whether to clear the user's validity period |

- Choose one between `datetime` and `clearDatetime` to pass as a parameter.
- This feature is only effective for group private mode.
- If the user has not joined the group, they will automatically join the group and set the validity period.
