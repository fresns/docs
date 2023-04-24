# Account Command Word

## addAccount

```php
\FresnsCmdWord::plugin('Fresns')->addAccount($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | Account type: 1. Email / 2. Mobile number / 3. Connected platform |
| account | String | **optional** | Email or mobile number specific: Email address / Mobile number (required when `type=1 or 2`) |
| countryCode | Number | **optional** | Mobile number specific: International area code (required when `type=2`) |
| connectInfo | Array | **optional** | Connected platform specific: Platform information (required when `type=3`) |
| password | String | *optional* | Login password |

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": "accounts->type",
        "aid": "accounts->aid"
    }
}
```
:::

::: details Check `connectInfo` parameter introduction
- Supports multiple, for example, the WeChat platform will have both UnionID and OpenID parameters.
- Required parameters: `connectId`, `connectToken`, `connectNickname`, `pluginUnikey`
```json
[
    {
        "connectId": 8, //Store to account_connects->connect_id
        "connectToken": "unionid", //Store to account_connects->connect_token
        "connectRefreshToken": null, //Store to account_connects->connect_refresh_token
        "connectUsername": "Account name", //Store to account_connects->connect_username
        "connectNickname": "Nickname", //Store to account_connects->connect_nickname
        "connectAvatar": "Avatar URL", //Store to account_connects->connect_avatar
        "pluginUnikey": "Requester's unikey", //Store to account_connects->plugin_unikey
        "moreJson": {}, //Store to account_connects->more_json
    },
    {
        "connectId": 9,
        "connectToken": "openid",
        "connectRefreshToken": null,
        "connectUsername": "Account name",
        "connectNickname": "Nickname",
        "connectAvatar": "Avatar URL",
        "pluginUnikey": "Requester's unikey",
        "moreJson": {},
    }
]
```
:::

::: details Check registration logic
- List of data to be generated during registration
    - Main account table `accounts`
    - Account wallet table `account_wallets`
    - Record other parameters directly if they have a value, otherwise leave them empty.
:::

## verifyAccount

```php
\FresnsCmdWord::plugin('Fresns')->verifyAccount($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | Account type: 1. Email / 2. Mobile number |
| account | String | **required** | Email address<br>Mobile number |
| countryCode | Number | *optional* | Mobile number specific: International area code (required when `type=2`) |
| password | String | *optional* | For password verification specific |
| verifyCode | String | *optional* | For verification code specific (check using [checkCode](basic.md#checkcode) command) |

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

## createAccountToken

```php
\FresnsCmdWord::plugin('Fresns')->createAccountToken($wordBody)
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
\FresnsCmdWord::plugin('Fresns')->verifyAccountToken($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| platformId | Number | **required** | Platform ID (Key value of the [platforms](../../database/dictionary/platforms.md) key name in the configuration table) |
| aid | String | **required** | Account parameter `session_tokens->account_id`<br>Checked by converting `aid` to `accounts->id` |
| aidToken | String | **required** | Identity credential (Credential table `session_tokens->token` field) |

## logicalDeletionAccount

```php
\FresnsCmdWord::plugin('Fresns')->logicalDeletionAccount($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | Number | **required** | `accounts->aid` |
