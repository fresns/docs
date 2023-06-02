# Account Command Word

## createAccount

```php
\FresnsCmdWord::plugin('Fresns')->createAccount($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | Account type: 1. Email / 2. Phone number / 3. Connect platform |
| account | String | *optional* | Email or phone number specific: Email address / Phone number (required when `type=1 or 2`) |
| countryCode | Number | *optional* | Phone number specific: International area code (required when `type=2`) |
| connectInfo | Array | *optional* | Connect platform specific: Platform information (required when `type=3`) |
| connectEmail | String | *optional* | Connect platform specific: platform email (optional when `type=3`) |
| connectPhone | Number | *optional* | Connect platform specific: platform phone number (optional when `type=3`) |
| connectCountryCode | Number | *optional* | Connect platform specific: phone international area code (optional when `type=3`) |
| password | String | *optional* | Login password |
| createUser | Boolean | *optional* | Whether to create a user synchronously |
| userInfo | Array | *optional* | Synchronisation of initial information at user creation |

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": "accounts->type",
        "aid": "accounts->aid",
        "uid": "users->uid",
        "username": "users->username",
        "nickname": "users->nickname"
    }
}
```
:::

::: details Check `connectInfo` parameter introduction
- Supports multiple, for example, the WeChat platform will have both UnionID and OpenID parameters.
- Required parameters: `connectPlatformId`, `connectAccountId`, `pluginFskey`
```json
[
    {
        "connectPlatformId": 8, //Store to account_connects->connect_platform_id
        "connectAccountId": "unionid", //Store to account_connects->connect_account_id
        "connectToken": null, //Store to account_connects->connect_token
        "connectRefreshToken": null, //Store to account_connects->connect_refresh_token
        "refreshTokenExpiredDatetime": null, //Store to account_connects->refresh_token_expired_at // Y-m-d H:i:s
        "connectUsername": "Account name", //Store to account_connects->connect_username
        "connectNickname": "Nickname", //Store to account_connects->connect_nickname
        "connectAvatar": "Avatar URL", //Store to account_connects->connect_avatar
        "pluginFskey": "Requester's fskey", //Store to account_connects->plugin_fskey
        "moreJson": {}, //Store to account_connects->more_json
    },
    {
        "connectPlatformId": 9,
        "connectAccountId": "openid",
        "connectToken": null,
        "connectRefreshToken": null,
        "refreshTokenExpiredDatetime": null,
        "connectUsername": "Account name",
        "connectNickname": "Nickname",
        "connectAvatar": "Avatar URL",
        "pluginFskey": "Requester's fskey",
        "moreJson": {},
    }
]
```
:::

::: details Check `userInfo` parameter introduction
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| username | String | *optional* | Username, related field `users->username`<br>If not passed, a random 6-8 character string will be generated, avoiding the use of banned names (key name [ban_names](../../database/dictionary/ban-names.md) banned values) |
| nickname | String | *optional* | Nickname, related field `users->nickname` |
| password | String | *optional* | Login password, related field `users->password` |
| avatarFid | String | *optional* | Avatar file fid, converted to `files->id` when stored<br>Related field `users->avatar_file_id` |
| avatarUrl | String | *optional* | Avatar file URL, related field `users->avatar_file_url`<br>If left empty, check if `avatarFid` is also empty, if not, store the url obtained by fid in the database (ignoring anti-leech, only stitching the address) |
| gender | Number | *optional* | Gender, related field `users->gender` |
| birthday | String | *optional* | Birthday, related field `users->birthday`, format is Y-m-d H:i:s |
| timezone | String | *optional* | Preferred timezone, related field `users->timezone` |
| language | String | *optional* | Preferred language, related field `users->language` |
:::

::: details Check registration logic
- List of data to be generated during registration
    - Main account table `accounts`
    - Account wallet table `account_wallets`
    - Record other parameters directly if they have a value, otherwise leave them empty.
:::

## verifyAccount

```php
\FresnsCmdWord::plugin('Fresns')->verifyAccount($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | Account type: 1. Email / 2. Phone number / 3. Connect platform |
| account | String | *optional* | Email address or Phone number |
| countryCode | Number | *optional* | Phone number specific: International area code (required when `type=2`) |
| password | String | *optional* | For password verification specific |
| verifyCode | String | *optional* | For verification code specific (check using [checkCode](basic.md#checkcode) command) |
| connectPlatformId | Number | *optional* | For connect platform specific |
| connectAccountId | String | *optional* | For connect platform specific |

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": "accounts->type",
        "aid": "accounts->aid",
    }
}
```
:::

## setAccountConnect

```php
\FresnsCmdWord::plugin('Fresns')->setAccountConnect($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fskey | String | **required**  | `account_connects->plugin_fskey` |
| aid | Number | **required**  | `accounts->aid` |
| connectPlatformId | Number | **required**  | `account_connects->connect_platform_id` |
| connectAccountId | String | **required**  | `account_connects->connect_account_id` |
| connectToken | String | *optional*  | `account_connects->connect_token` |
| connectRefreshToken | String | *optional* | `account_connects->connect_refresh_token` |
| refreshTokenExpiredDatetime | String | *optional* | `Y-m-d H:i:s` `account_connects->refresh_token_expired_at` |
| connectUsername | String | *optional* | `account_connects->connect_username` |
| connectNickname | String | *optional*  | `account_connects->connect_nickname` |
| connectAvatar | String | *optional* | `account_connects->connect_avatar` |
| moreJson | String | *optional* | `account_connects->more_json` |
| connectEmail | String | *optional* | Platform email (will be stored when the account table email is empty, ignored if there is a value) |
| connectPhone | Number | *optional* | Platform phone number (will be stored when the account table phone number is empty, ignored if there is a value) |
| connectCountryCode | Number | *optional* | International area code for platform phone number (will be stored when the account table phone number is empty, ignored if there is a value) |

## disconnectAccountConnect

```php
\FresnsCmdWord::plugin('Fresns')->disconnectAccountConnect($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | Number | **required**  | `accounts->aid` |
| connectPlatformId | Number | **required**  | `account_connects->connect_platform_id` |

## createAccountToken

```php
\FresnsCmdWord::plugin('Fresns')->createAccountToken($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| platformId | Number | **required** | Platform ID (Key value of the [platforms](../../database/dictionary/platforms.md) key name in the configuration table) |
| version | String | **required** | Semantic version number |
| appId | String | **required** | App ID |
| aid | String | **required** | Account parameter `session_tokens->account_id`<br>Stored as `accounts->id` after converting from `aid` |
| expiredTime | Number | *optional* | Expiration time, in hours (empty means valid forever) |

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "aid": "accounts->aid",
        "aidToken": "session_tokens->token",
        "aidTokenId": "session_tokens->id",
        "expiredHours": "Expiration hours, null indicates permanent validity",
        "expiredDays": "Expiration days, null indicates permanent validity",
        "expiredDateTime": "session_tokens->expired_at / Token expiration time, null indicates permanent validity, format is Y-m-d H:i:s",
    }
}
```
:::

## verifyAccountToken

```php
\FresnsCmdWord::plugin('Fresns')->verifyAccountToken($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| platformId | Number | **required** | Platform ID (Key value of the [platforms](../../database/dictionary/platforms.md) key name in the configuration table) |
| aid | String | **required** | Account parameter `session_tokens->account_id`<br>Checked by converting `aid` to `accounts->id` |
| aidToken | String | **required** | Identity credential (Credential table `session_tokens->token` field) |

## logicalDeletionAccount

```php
\FresnsCmdWord::plugin('Fresns')->logicalDeletionAccount($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | Number | **required** | `accounts->aid` |
