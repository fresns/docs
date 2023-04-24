# Headers

## Parameters

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| X-Fresns-App-Id | String | **required** | Key App ID<br>Path: `Panel->AppCenter->Keys`|
| X-Fresns-Client-Platform-Id | Number | **required** | Platform ID, matching the "platform" of the key<br>Path: `Panel->AppCenter->Keys`<br>[Check the ID number corresponding to the platform](../database/dictionary/platforms.md) |
| X-Fresns-Client-Version | String | **required** | Your client version, semantic version is recommended |
| X-Fresns-Client-Device-Info | String | **required** | [Interaction Device Information](../database/systems/session-logs.md#device-information-json) `session_logs->device_info`<br>Compress Object information as character string parameter transfer |
| X-Fresns-Client-Lang-Tag | String | *optional* | Language Tag (output default language if left empty)<br>Path: `Panel->Systems->Languages` |
| X-Fresns-Client-Timezone | String | *optional* | UTC time zone (use default time zone if left empty)<br>Path: `Panel->Systems->General`<br>After the user logs in, if left blank, the server automatically processes the time format in the time zone configured by the user |
| X-Fresns-Client-Content-Format | String | *optional* | Content format (list and detail of posts and comments), leave blank then output as is.<br>Pass the `html` reference to convert content to html format (`\n` for text content to `<br>`, Markdown content to `HTML`) |
| X-Fresns-Aid | String |  | Account parameter (regarded as unlogged in account if left empty) |
| X-Fresns-Aid-Token | String |  | Account identity credential (If `aid` exists, it cannot be empty) |
| X-Fresns-Uid | Number |  | User parameter (regarded as unlogged in user if left empty) |
| X-Fresns-Uid-Token | String |  | User identity credential (If `uid` exists, it cannot be empty) |
| X-Fresns-Signature | String | **required** | [Signature generation rules](#signature-generation-rules) |
| X-Fresns-Signature-Timestamp | String | **required** | Signature generation time (current Unix time stamp, which can be accurate to second or millisecond) |

## Register and Login Process

1. Start
    - Register [/api/v2/account/register](account/register.md)
    - Login [/api/v2/account/login](account/login.md)
    - After successful registration or login, obtain the account voucher.
        - **aid**: `data.detail.aid`
        - **aidToken**: `data.sessionToken.token`
2. Judge the number of users of the account `data.detail.users`
    - `1`
    - `2 or more` `Presenting the "Select User" view`
3. Determine if there is a password `data.detail.users.hasPassword`
    - No password
    - With password `Presenting the "Password Entry Box" view`
4. Login User
    - [/api/v2/user/auth](user/auth.md)
    - After the user login successfully, obtain the user credential.
        - **uid**: `data.detail.uid`
        - **uidToken**: `data.sessionToken.token`
5. End
    - > When the account has only 1 user and no password, it is recommended to let the user login directly without perception.

## Introduction of operation mode

- [Configuration Table](../database/systems/configs.md) key name `site_mode`
    - Public mode, with the key value `public`
    - Private mode, with the key value `private`
- Get Method: `/api/v2/global/configs?keys=site_mode`
- The introduction page of each interface has two modes of account and user parameters that must be transferred.
    - `aid` must be passed, which means that you must login to the account to request the interface. At this time, the token parameter is the `token` of the account
    - When `uid` must be passed, `aid` must also be passed.which means that the user must log in to the "account user" to request the interface. At this time, `token` parameter is the user's `token`

## Signature generation rules

```php
// Parameters participating in the singing process in headers
const SIGN_PARAM_ARR = [
    'X-Fresns-App-Id',
    'X-Fresns-Client-Platform-Id',
    'X-Fresns-Client-Version',
    'X-Fresns-Aid',
    'X-Fresns-Aid-Token',
    'X-Fresns-Uid',
    'X-Fresns-Uid-Token',
    'X-Fresns-Signature-Timestamp',
];
```

- Encapsulation method can be referred to in PHP `App\Helpers\SignHelper::makeSign($signMap, $appSecret)`
- As for other client ends, please refer to the following procedures:

**1. Extract the headers parameters participating in the signing process.**

```json
// No login
{
    "X-Fresns-App-Id": "yh1OJ7WL",
    "X-Fresns-Client-Platform-Id": 2,
    "X-Fresns-Client-Version": "2.0.0",
    "X-Fresns-Signature-Timestamp": 1674161913192
}

// Logged in account
{
    "X-Fresns-App-Id": "yh1OJ7WL",
    "X-Fresns-Client-Platform-Id": 2,
    "X-Fresns-Client-Version": "2.0.0",
    "X-Fresns-Aid": "wIfu6jaF",
    "X-Fresns-Aid-Token": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz",
    "X-Fresns-Signature-Timestamp": 1674161913192
}

// Logged in user
{
    "X-Fresns-App-Id": "yh1OJ7WL",
    "X-Fresns-Client-Platform-Id": 2,
    "X-Fresns-Client-Version": "2.0.0",
    "X-Fresns-Aid": "wIfu6jaF",
    "X-Fresns-Aid-Token": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz",
    "X-Fresns-Uid": 782622,
    "X-Fresns-Uid-Token": "PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c",
    "X-Fresns-Signature-Timestamp": 1674161913192
}
```

**2. Sort the parameter names from the smallest to the biggest according to the ASCII character (lexicographical order).**

```json
{
    "X-Fresns-App-Id": "yh1OJ7WL",
    "X-Fresns-Client-Platform-Id": 2,
    "X-Fresns-Client-Version": "2.0.0",
    "X-Fresns-Aid": "wIfu6jaF",
    "X-Fresns-Aid-Token": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz",
    "X-Fresns-Uid": 782622,
    "X-Fresns-Uid-Token": "PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c",
    "X-Fresns-Signature-Timestamp": 1674161913192
}
```

**3. Splice new parameters sorted into character strings with the right format of URL key value.**

```
X-Fresns-Aid=wIfu6jaF&X-Fresns-Aid-Token=uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz&X-Fresns-App-Id=yh1OJ7WL&X-Fresns-Client-Platform-Id=2&X-Fresns-Client-Version=2.0.0&X-Fresns-Signature-Timestamp=1674161913192&X-Fresns-Uid=782622&X-Fresns-Uid-Token=PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c
```

**4. Splice `&AppSecret={app_secret}` to obtain the character string to be signed.**

```
X-Fresns-Aid=wIfu6jaF&X-Fresns-Aid-Token=uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz&X-Fresns-App-Id=yh1OJ7WL&X-Fresns-Client-Platform-Id=2&X-Fresns-Client-Version=2.0.0&X-Fresns-Signature-Timestamp=1674161913192&X-Fresns-Uid=782622&X-Fresns-Uid-Token=PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c&AppSecret=qUiEaDNQh2IpvGHOKlTMx7ujn8t1CZWX
```

**5. Perform MD5 operation (32-digit lowercase) against the signed character signature to obtain the signature value.**

```
2174eaeab76fb6a3790ed4f7ebb2edfb
```

## Cache Introduction

- To facilitate global calls to various configuration data, we have developed clients that use global function wrappers. See the [theme template tags](../extensions/theme/tags.md).
    - `fs_api_config('item_key')` Call the parameters of the [/api/v2/global/configs](global/configs.md) interface
    - `fs_lang('KeyName')` Call the `fs_api_config('language_pack_contents')` parameter
    - `fs_code_message('code')` Call the parameters of the [/api/v2/global/code-messages](global/code-messages.md) interface
    - `fs_account('key')` Call the `data` parameter of the [/api/v2/account/detail](account/detail.md) interface
    - `fs_user('key')` Call the `data` parameter of the [/api/v2/user/{uidOrUsername}/detail](user/detail.md) interface
    - `fs_user_panel('key')` Call the `data` parameter of the [/api/v2/user/panel](user/panel.md) interface
    - Other...
- Since global data may be used on every page, we use caching on the client side in order to avoid frequent requests to the interface affecting the loading speed.
- **Configuration Items**: We use `/api/v2/global/configs?keys=cache_datetime,cache_minutes` to detect cache expiration, so that cache expiration will be automatically re-cached.
    - `cache_datetime` Datetime of last server-side configuration.
    - `cache_minutes` Recommend that the client caches be saved for a maximum number of minutes, with a value of `null` indicating no limit. If there is no limit, it is suggested to periodically request the interface and only obtain the `cache_datetime,cache_minutes` configuration, compare the validity period with that of the local one. If they are inconsistent, it means that the server has updated the configuration, so please re-cache it.
- **User Profile**: We recommend caching user data after login. When the user interacts with features such as like, publish, or modifying their profile, we suggest retrieving the user data again and recaching it.
