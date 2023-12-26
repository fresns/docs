# Basic Command Word

## checkHeaders

```php
\FresnsCmdWord::plugin('Fresns')->checkHeaders();
```

- Parameter Value [API Request Headers](../../api/headers.md)

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
| platformId | Number | **required** | Platform ID (Key value of the [platforms](../../database/dictionary/platforms.md) key name in the configuration table) |
| version | String | **required** | Semantic version number |
| appId | String | **required** | App ID |
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
| accessToken | String | **required** | Reference: [Make URL Authorization](../../extensions/callback/url-authorization.md) |
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

## uploadSessionLog

```php
\FresnsCmdWord::plugin('Fresns')->uploadSessionLog($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | [Log Type](../../database/systems/session-logs.md#log-type) |
| platformId | Number | **required** | Platform ID (Key value of the [platforms](../../database/dictionary/platforms.md) key name in the configuration table) |
| version | String | **required** | Semantic version number, e.g., `2.0.0` |
| appId | String | *optional* | Secret App ID |
| langTag | String | *optional* | Language Tag |
| fskey | String | *optional* | Plugin Fskey |
| aid | String | *optional* | Account |
| uid | Number | *optional* | User |
| objectName | String | **required** | Function model name or interface path<br>For example, model name App\Models\Post<br>For example, interface path: /api/v2/account/login |
| objectAction | String | **required** | Action description, custom input content |
| objectResult | Number | **required** | 1. Unknown or in progress / 2. Success / 3. Failure |
| objectOrderId | String | *optional* | For example, if it is a publishing action, it represents the ID of the published content<br>Plugin behavior, this ID can query the corresponding plugin-side related information |
| deviceInfo | Object | *optional* | Interaction device information |
| deviceToken | String | *optional* | Interaction device Token<br>For example, iOS Device Token or Android Device Token<br>Can be used for push notifications |
| moreJson | Object | *optional* | Other custom information |

## sendCode

```php
\FresnsCmdWord::plugin('Fresns')->sendCode($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | Type: 1. Email verification code / 2. SMS verification code |
| account | String | **required** | Account (email or phone number) |
| countryCode | Number | *optional* | International area code (phone number specific) |
| templateId | Number | **required** | [Code Template ID](../../database/keyname/send.md#verify-code-templates) |
| langTag | String | **required** | Language Tag |

## checkCode

```php
\FresnsCmdWord::plugin('Fresns')->checkCode($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | Type: 1. Email verification code / 2. SMS verification code |
| account | String | **required** | Account (email or phone number) |
| countryCode | Number | *optional* | International area code (phone number specific) |
| verifyCode | String | **required** | Verify Code |
| templateId | Number | **required** | [Code Template ID](../../database/keyname/send.md#verify-code-templates) |

## ipInfo

```php
\FresnsCmdWord::plugin('Fresns')->ipInfo($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| ipv4 | String | **required** | IPv4 and IPv6 support |

- The output result is the same as the [IP Info Interface](../../api/common/ip-info.md)
