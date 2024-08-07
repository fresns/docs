# Account Command Word

## createAccount

```php
\FresnsCmdWord::plugin('Fresns')->createAccount($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | Account type: 1.AID / 2.Email / 3.Phone number / 4.Connect platform |
| account | String | *optional* | Email or pure phone number specific: Email address / Phone number (required when `type=2 or 3`) |
| countryCallingCode | Number | *optional* | Phone number specific: International area code (required when `type=3`) |
| connectInfo | Array | *optional* | Connect platform specific: Platform information (required when `type=4`) |
| connectEmail | String | *optional* | Connect platform specific: platform email (optional when `type=4`) |
| connectPurePhone | Number | *optional* | Connect platform specific: platform phone number (optional when `type=4`) |
| connectCountryCallingCode | Number | *optional* | Connect platform specific: phone international area code (optional when `type=4`) |
| password | String | *optional* | Login password |
| birthday | String | *optional* | Birthday, format is Y-m-d |
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
- Required parameters: `connectPlatformId`, `connectAccountId`, `appFskey`
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
        "appFskey": "Requester's fskey", //Store to account_connects->app_fskey
        "moreInfo": {}, //Store to account_connects->more_info
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
        "appFskey": "Requester's fskey",
        "moreInfo": {},
    }
]
```
:::

::: details Check `userInfo` parameter introduction
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| username | String | *optional* | Username, related field `users->username`<br>If not passed, a random 6-8 character string will be generated, avoiding the use of banned names (key name `user_ban_names` banned values) |
| nickname | String | *optional* | Nickname, related field `users->nickname` |
| pin | String | *optional* | Login pin, related field `users->pin` |
| avatarFid | String | *optional* | Avatar file fid, converted to `files->id` when stored<br>Related field `users->avatar_file_id` |
| avatarUrl | String | *optional* | Avatar file URL, related field `users->avatar_file_url`<br>If left empty, check if `avatarFid` is also empty, if not, store the url obtained by fid in the database (ignoring temporary url, only stitching the address) |
| gender | Number | *optional* | Gender, related field `users->gender` |
| genderPronoun | Number | *optional* | Gender Pronoun, related field `users->gender_pronoun` |
| genderCustom | String | *optional* | Gender Custom, related field `users->gender_custom` |
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
| type | Number | **required** | Account type: 1.Auto 2.AID / 3.Email / 4.Phone number / 5.Connect platform |
| account | String | *optional* | AID / Email address / Pure Phone number |
| countryCallingCode | Number | *optional* | Phone number specific: International area code (required when `type=4`) |
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
| fskey | String | **required** | `account_connects->app_fskey` |
| aid | Number | **required** | `accounts->aid` |
| connectPlatformId | Number | **required** | `account_connects->connect_platform_id` |
| connectAccountId | String | **required** | `account_connects->connect_account_id` |
| connectToken | String | *optional*  | `account_connects->connect_token` |
| connectRefreshToken | String | *optional* | `account_connects->connect_refresh_token` |
| refreshTokenExpiredDatetime | String | *optional* | `Y-m-d H:i:s` `account_connects->refresh_token_expired_at` |
| connectUsername | String | *optional* | `account_connects->connect_username` |
| connectNickname | String | *optional*  | `account_connects->connect_nickname` |
| connectAvatar | String | *optional* | `account_connects->connect_avatar` |
| moreInfo | String | *optional* | `account_connects->more_info` |
| connectEmail | String | *optional* | Platform email (will be stored when the account table email is empty, ignored if there is a value) |
| connectPurePhone | Number | *optional* | Platform phone number (will be stored when the account table phone number is empty, ignored if there is a value) |
| connectCountryCallingCode | Number | *optional* | International area code for platform phone number (will be stored when the account table phone number is empty, ignored if there is a value) |

## disconnectAccountConnect

```php
\FresnsCmdWord::plugin('Fresns')->disconnectAccountConnect($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | Number | **required** | `accounts->aid` |
| connectPlatformId | Number | **required** | `account_connects->connect_platform_id` |

## createAccountToken

```php
\FresnsCmdWord::plugin('Fresns')->createAccountToken($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| appId | String | **required** | App ID |
| platformId | Number | **required** | Platform ID (Key value of the [platforms](../../configs/dictionary/platforms.md) key name in the configuration table) |
| version | String | **required** | Semantic version number |
| aid | String | **required** | Account parameter `session_tokens->account_id`<br>Stored as `accounts->id` after converting from `aid` |
| deviceToken | String | *optional* | Interaction device Token<br>For example, iOS Device Token or Android Device Token<br>Can be used for push notifications |
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
| platformId | Number | **required** | Platform ID (Key value of the [platforms](../../configs/dictionary/platforms.md) key name in the configuration table) |
| aid | String | **required** | Account parameter `session_tokens->account_id`<br>Checked by converting `aid` to `accounts->id` |
| aidToken | String | **required** | Identity credential (Credential table `session_tokens->token` field) |

## getAccountDeviceToken

```php
\FresnsCmdWord::plugin('Fresns')->getAccountDeviceToken($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** |  |
| platformId | Number | *optional* | Platform ID (Key value of the [platforms](../../configs/dictionary/platforms.md) key name in the configuration table)<br>No value then output all |

- The result is an array sorted in reverse chronological order by creation time, with the most recent creation on top.

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "platformId": 5,
            "uid": null, // Empty means not belonging to any user
            "deviceToken": "",
            "datetime": ""
        }
    ]
}
```
:::

## logicalDeletionAccount

```php
\FresnsCmdWord::plugin('Fresns')->logicalDeletionAccount($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | Number | **required** | `accounts->aid` |

## physicalDeletionAccount

```php
\FresnsCmdWord::plugin('Fresns')->physicalDeletionAccount($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | Number | **required** | `accounts->aid` |

- Physical deletion involves a lot of content, so the deletion function is performed using a queue, so configure [the Fresns queues](https://fresns.org/guide/configuration.html#queues).
