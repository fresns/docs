---
aside: false
---

# session_logs

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| app_fskey | varchar(64) | Associated Plugin Fskey | Fresns | NO | Related field [apps->fskey](../apps/apps.md)<br>Fresns represents the main program logs |
| type | tinyint *UNSIGNED* | Log Type | 1 | NO | See description below |
| platform_id | tinyint *UNSIGNED* | Platform ID |  | NO | [platforms](../../configs/dictionary/platforms.md) |
| version | varchar(16) | Version Number |  | NO | Semantic versioning |
| app_id | char(8) | App ID |  | YES | [session_keys->app_id](session-keys.md) |
| lang_tag | char(16) | Client Language |  | YES | The language of the generated log, leave empty if multilingual is not enabled |
| action_name | varchar(128) | Record Target Name |  | NO | Function model name or interface path<br>For example, model name App\Models\Post<br>For example, interface path: /api/v2/account/login |
| action_desc | varchar(128) | Record Target Action |  | YES | Action description, custom input content |
| action_state | tinyint *UNSIGNED* | Record Action State |  | NO | 1. Unknown or in progress / 2. Success / 3. Failure |
| action_id | bigint *UNSIGNED* | Record Target ID |  | YES | For example, in case of a publish action, it represents the ID of the posted content<br>For plugin actions, this ID can be used to query the associated information recorded on the plugin side |
| account_id | bigint *UNSIGNED* | Account ID |  | YES | Related field [accounts->id](../accounts/accounts.md) |
| user_id | bigint *UNSIGNED* | User ID |  | YES | Related field [users->id](../users/users.md) |
| device_info | json | Device Information |  | YES |  |
| device_token | varchar(128) | Device Token |  | YES | For example, iOS Device Token or Android Device Token<br>Can be used for push notifications |
| login_token | varchar(64) | Login Token |  | YES |  |
| more_info | json | Backup Field |  | YES | For example, storing operation action snapshots |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Log Type

- `1` Custom
- `2` Plugin Business
- `3` Login Control Panel
- `4` Account - Register
- `5` Account - Login `action_id = session_tokens->id`
- `6` Account - Update Profile
- `7` Account - Set or Reset Password
- `8` Account - Delete Account
- `9` User - Create
- `10` User - Login `action_id = session_tokens->id`
- `11` User - Update Profile
- `12` User - Set or Reset Password
- `13` User - Delete
- `14` Wallet - Transaction Income
- `15` Wallet - Transaction Expense
- `16` Wallet - Set or Reset Password
- `17` Post - Create Draft
- `18` Post - Submit for Review
- `19` Post - Publish
- `20` Post - Delete
- `21` Post Log - Delete
- `22` Comment - Create Draft
- `23` Comment - Submit for Review
- `24` Comment - Publish
- `25` Comment - Delete
- `26` Comment Log - Delete
- `27` Action Like
- `28` Action Dislike
- `29` Action Follow
- `30` Action Block
- `31` Upload File
- `32` Conversation Message

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
