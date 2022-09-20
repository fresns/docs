# Headers

## Parameters

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| platformId | Number | **required** | Platform number, matching with the key, refer to [platforms](../database/dictionary/platforms.md) |
| version | String | **required** | Semantic Versioning |
| appId | String | **required** | App ID |
| timestamp | String | **required** | Signature generation time (current Unix time stamp, which can be accurate to second or millisecond) |
| sign | String | **required** | Request a signature |
| langTag | String | *optional* | Language Tag (output default language if left empty) |
| timezone | String | *optional* | UTC time zone (use default time zone if left empty) |
| aid | String |  | Account parameter (regarded as unlogged in account if left empty) |
| uid | Number |  | User parameter (regarded as unlogged in user if left empty) |
| token | String |  | Identity credential (If `aid` or `uid` exists, it cannot be empty) |
| deviceInfo | String | **required** | [Interaction Device Information](../database/systems/session-logs.md#device-information-json) `session_logs > device_info`<br>Compress Object information as character string parameter transfer |

## Introduction of operation mode

- [Configuration Table](../database/systems/configs.md) key name `site_mode`
    - Public mode, with the key value `public`
    - Private mode, with the key value `private`
- Get Method: `/api/v2/global/configs?keys=site_mode`

## Signature generation rules

```php
// Parameters participating in the singing process in headers
const SIGN_PARAM_ARR = [
    'platformId',
    'version',
    'appId',
    'timestamp',
    'aid',
    'uid',
    'token'
];
```

- Encapsulation method can be referred to in PHP `App\Helpers\SignHelper::makeSign($signMap, $appSecret)`
- As for other client ends, please refer to the following procedures:

**1. Extract the headers parameters participating in the signing process.**

```json
// No login
{
	"platformId": 1,
    "version": "2.0.0",
    "appId": "TDh15qYay3x0sARo",
    "timestamp": 1656653400000,
}

// Logged in account
{
	"platformId": 1,
    "version": "2.0.0",
    "appId": "TDh15qYay3x0sARo",
    "timestamp": 1656653400000,
    "aid": "wIfu6jaF",
    "token": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz"
}

// Logged in user
{
	"platformId": 1,
    "version": "2.0.0",
    "appId": "TDh15qYay3x0sARo",
    "timestamp": 1656653400000,
    "aid": "wIfu6jaF",
    "uid": 782622,
    "token": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz"
}
```

**2. Sort the parameter names from the smallest to the biggest according to the ASCII character (lexicographical order).**

```json
{
    "aid": "wIfu6jaF",
    "appId": "TDh15qYay3x0sARo",
	"platformId": 1,
    "timestamp": 1656653400000,
    "token": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz",
    "uid": 782622,
    "version": "2.0.0",
}
```

**3. Splice new parameters sorted into character strings with the right format of URL key value.**

```
aid=wIfu6jaF&appId=TDh15qYay3x0sARo&platformId=1&timestamp=1656653400000&token=uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz&uid=782622&version=2.0.0
```

**4. Splice `&key={app_secret}` to obtain the character string to be signed.**

```
aid=wIfu6jaF&appId=TDh15qYay3x0sARo&platformId=1&timestamp=1656653400000&token=uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz&uid=782622&version=2.0.0&key=qUiEaDNQh2IpvGHOKlTMx7ujn8t1CZWX
```

**5. Perform MD5 operation (32-digit lowercase) against the signed character signature to obtain the signature value.**

```
3443b2e74710a1293e4250c930e18c8f
```
