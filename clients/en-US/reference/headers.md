# Headers

## Parameters

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| X-Fresns-Sid | String | *optional* | Space ID, leave blank to indicate open source version |
| X-Fresns-App-Id | String | **required** | Key App ID |
| X-Fresns-Client-Platform-Id | Number | **required** | [Platform ID](dictionary/platforms.md), matching the "platform" of the key |
| X-Fresns-Client-Version | String | **required** | Your client version, semantic version is recommended |
| X-Fresns-Client-Device-Info | String | **required** | [Device Information JSON](#device-information-json) <br>The object information is first compressed and converted to a string, which is then Base64 encoded. |
| X-Fresns-Client-Timezone | String | *optional* | UTC time zone (for processing content time values)<br>Leave blank to use database time zone |
| X-Fresns-Client-Lang-Tag | String | *optional* | [langTag](configs.md#languages) (output default language if left empty) |
| X-Fresns-Client-Content-Format | String | *optional* | Rich text content format, leave blank to output as is.<br>Default rich text is `markdown`, support parameter `html` |
| X-Fresns-Aid | String |  | Account parameter (regarded as unlogged in account if left empty) |
| X-Fresns-Aid-Token | String |  | Account identity credential (If `aid` exists, it cannot be empty) |
| X-Fresns-Uid | Number |  | User parameter (regarded as unlogged in user if left empty) |
| X-Fresns-Uid-Token | String |  | User identity credential (If `uid` exists, it cannot be empty) |
| X-Fresns-Signature | String | **required** | [Signature generation rules](#signature-generation-rules) |
| X-Fresns-Signature-Timestamp | String | **required** | Signature generation time (Current UTC+0 Unix timestamp, in seconds or milliseconds) |

## Login Process

1. Start
    - Get the account centre link in the [global configuration](configs.md#path). account_center_service
    - Access the account login (or registration) page using the `WebView` and get the `loginToken` parameter in the callback `postMessage` message after login is complete.
    - Request the login interface [/api/fresns/v1/account/login](../api/account/login.md) with the loginToken parameter.
    - After successful login, get the account token
        - **aid**: `data.authToken.aid`
        - **aidToken**: `data.authToken.token`
2. Judge the number of users of the account `data.detail.users`
    - `1`
    - `2 or more` `Presenting the "Select User" view`
3. Determine if there is a pin `data.detail.users[x].hasPin`
    - No pin
    - With pin `Presenting the "Pin Entry Box" view`
4. Login User
    - [/api/fresns/v1/user/auth](../api/user/auth.md)
    - After the user login successfully, obtain the user credential.
        - **uid**: `data.authToken.uid`
        - **uidToken**: `data.authToken.token`
5. End
    - > When the account has only 1 user and no pin, it is recommended to let the user login directly without perception.

## Signature generation rules

```php
// Parameters participating in the singing process in headers
const SIGN_PARAM_ARR = [
    'X-Fresns-Sid',
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

**2. Sort the Keys from the smallest to the biggest according to the ASCII character (lexicographical order).**

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

**5. Perform `hash sha256` operation (64-digit lowercase) against the signed character signature to obtain the signature value.**

```
2174eaeab76fb6a3790ed4f7ebb2edfb2174eaeab76fb6a3790ed4f7ebb2edfb
```

## Device Information JSON

> `networkIpv4` and `networkIpv6` are required to fill in at least one, or both can be filled in. The rest can be left blank.

```json
{
    "agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.202 Safari/535.1",
    "type": "Desktop", // Desktop, Mobile, Tablet, Bot
    "mac": "2c:89:dc:71:b6:12",
    "brand": "Apple",
    "model": "Mac",
    "platformName": "Mac",
    "platformVersion": "10.15.7",
    "browserName": "Chrome",
    "browserVersion": "100.0.4896",
    "browserEngine": "Blink",
    "appImei": null,
    "appAndroidId": null,
    "appOaid": null,
    "appIdfa": null,
    "simImsi": null,
    "networkType": "wifi",
    "networkIpv4": "137.132.250.10",
    "networkIpv6": null,
    "networkPort": "8080",
    "networkTimezone": "Asia/Singapore",
    "networkOffset": 28800,
    "networkIsp": "National University of Singapore",
    "networkOrg": "National University of Singapore",
    "networkAs": "AS7472 NUS Information Technology",
    "networkAsName": "NUS-AS-AP",
    "networkReverse": null,
    "networkMobile": false,
    "networkProxy": false,
    "networkHosting": false,
    "mapId": 2, // Dictionary data: Map service provider number
    "latitude": 1.29758,
    "longitude": 103.773,
    "scale": null,
    "continent": "Asia",
    "continentCode": "AS",
    "country": "Singapore",
    "countryCode": "SG",
    "region": "Central Singapore",
    "regionCode": "01",
    "city": "Singapore",
    "cityCode": "SG",
    "district": "Queenstown",
    "address": null,
    "zip": "119259"
}
```
