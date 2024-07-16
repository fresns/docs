# Basic Command Word

## checkHeaders

```php
\FresnsCmdWord::plugin('Fresns')->checkHeaders();
```

- Parameter Value [API Request Headers](https://docs.fresns.com/clients/reference/headers.html)

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "appId": "qe12345",
        "platformId": 4,
        "version": "2.0.0",
        "deviceInfo": "",
        "langTag": "zh-Hans",
        "timezone": "+8",
        "contentFormat": "",
        "aid": "6a3bb3bc",
        "aidToken": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz",
        "uid": 782622,
        "uidToken": "PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c",
        "signature": "d5db4371a0c2d7e17009dea8d53ecf15a7ec07b9",
        "timestamp": 1626426833
    }
}
```
:::

## verifySign

```php
\FresnsCmdWord::plugin('Fresns')->verifySign($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| appId | String | **required** | App ID |
| platformId | Number | **required** | Platform ID (Key value of the [platforms](../../configs/dictionary/platforms.md) key name in the configuration table) |
| version | String | **required** | Semantic version number |
| timestamp | Number | **required** | Signature generation time (current Unix timestamp, accurate to seconds or milliseconds) |
| signature | String | **required** | Request signature |
| aid | String | **optional** | Account parameter (Account main table `accounts->aid` field) |
| aidToken | String | **optional** | Account identity credential |
| uid | Number | **optional** | User parameter (User main table `users->uid` field) |
| uidToken | String | **optional** | User identity credential |
| verifyType | Number | *optional* | Verify [session_keys->type](../../database/systems/session-keys.md), default to 1 if empty |
| verifyFskey | String | *optional* | Dedicated for type 3, verify associated plugin |

## verifyAccessToken

```php
\FresnsCmdWord::plugin('Fresns')->verifyAccessToken($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| accessToken | String | **required** | Reference: [Make Access Token](https://docs.fresns.com/clients/reference/callback/access-token.html) |
| accountLogin | Boolean | *optional* | Whether a login is required, if left empty, no login is required |
| userLogin | Boolean | *optional* | Whether a user login is required, if left empty, no login is required |

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "appId": "qe12345",
        "platformId": 4,
        "version": "2.0.0",
        "deviceInfo": "",
        "langTag": "zh-Hans",
        "timezone": "+8",
        "contentFormat": "",
        "aid": "6a3bb3bc",
        "aidToken": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz",
        "uid": 782622,
        "uidToken": "PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c",
        "signature": "d5db4371a0c2d7e17009dea8d53ecf15a7ec07b9",
        "timestamp": 1626426833
    }
}
```
:::

## ipInfo

```php
\FresnsCmdWord::plugin('Fresns')->ipInfo($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| ipv4 | String | **required** | IPv4 and IPv6 support |

- The output result is the same as the [IP Info Interface](https://docs.fresns.com/clients/api/common/ip-info.html)

## createSessionLog

```php
\FresnsCmdWord::plugin('Fresns')->createSessionLog($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | [Log Type](../../database/systems/session-logs.md#log-type) |
| appId | String | *optional* | Key App ID |
| platformId | Number | **required** | Platform ID (Key value of the [platforms](../../configs/dictionary/platforms.md) key name in the configuration table) |
| version | String | **required** | Semantic version number, e.g., `2.0.0` |
| langTag | String | *optional* | Language Tag |
| fskey | String | *optional* | Plugin Fskey |
| actionName | String | **required** | Function model name or interface path<br>For example, model name App\Models\Post<br>For example, interface path: `/api/fresns/v1/account/auth-token` |
| actionDesc | String | **required** | Action description, custom input content |
| actionState | Number | **required** | 1. Unknown or in progress / 2. Success / 3. Failure |
| actionId | String | *optional* | For example, if it is a publishing action, it represents the ID of the published content<br>Plugin behavior, this ID can query the corresponding plugin-side related information |
| aid | String | *optional* | Account ID |
| uid | Number | *optional* | User ID |
| deviceInfo | Object | *optional* | Interaction device information |
| deviceToken | String | *optional* | Interaction device Token<br>For example, iOS Device Token or Android Device Token<br>Can be used for push notifications |
| loginToken | String | *optional* | Login Token |
| moreInfo | Object | *optional* | Other custom information |

## checkLoginToken

```php
\FresnsCmdWord::plugin('Fresns')->checkLoginToken($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| appId | String | **required** | App ID |
| platformId | Number | **required** | Platform ID (Key value of the [platforms](../../configs/dictionary/platforms.md) key name in the configuration table) |
| version | String | **required** | Semantic version number |
| loginToken | String | **required** | Login Token |

- The login token is created by the `createSessionLog` command.

## updateLoginToken

```php
\FresnsCmdWord::plugin('Fresns')->updateLoginToken($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| loginToken | String | **required** | Login Token |
| uid | Number | **required** | User ID |
| pin | String | *optional* | User PIN<br>Personal Identification Number |

- If the result status of the `checkLoginToken` command is `31604` or `31508`, use
    - `31604` Users must enter a PIN
    - `31508` There are multiple users under account, you need to select one.
- If you do not use this command word to update the token information, the token will not be effective.

## sendCode

```php
\FresnsCmdWord::plugin('Fresns')->sendCode($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | Type: 1. Email verification code / 2. SMS verification code |
| templateId | Number | **required** | [Code Template ID](../../configs/panel/send.md#verify-code-templates) |
| langTag | String | *optional* | Language tag, empty to use the default language tag |
| account | String | **required** | Account (email or phone number) |
| countryCallingCode | Number | *optional* | International area code (phone number specific) |

## checkCode

```php
\FresnsCmdWord::plugin('Fresns')->checkCode($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | Type: 1. Email verification code / 2. SMS verification code |
| templateId | Number | **required** | [Code Template ID](../../configs/panel/send.md#verify-code-templates) |
| account | String | **required** | Account (email or phone number) |
| countryCallingCode | Number | *optional* | International area code (phone number specific) |
| verifyCode | String | **required** | Verify Code |

## updateOrCreateCallbackContent

```php
\FresnsCmdWord::plugin('Fresns')->updateOrCreateCallbackContent($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fskey | String | **required** | Plugin Fskey |
| callbackKey | String | **required** | Callback Key |
| callbackType | Number | *optional* | [Reference](../../database/temporary/callback-contents.md#type) |
| callbackContent | Array | *optional* |  |
| retentionDays | Number | *optional* | default `1` |

## getCallbackContent

```php
\FresnsCmdWord::plugin('Fresns')->getCallbackContent($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fskey | String | **required** | Plugin Fskey |
| callbackKey | String | **required** | Callback Key |
| callbackType | Number | *optional* | Callback Type |
| timeout | Number | *optional* | Unit: minutes<br>Get data in how many minutes |
| markAsUsed | Boolean | *optional* | default `false` |
