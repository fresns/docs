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
| action_name | varchar(128) | Record Target Name |  | NO | Function model name or interface path<br>For example, model name App\Models\Post<br>For example, interface path: `/api/fresns/v1/account/auth-token` |
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

| Number | Const Name | Description |
| --- | --- | --- |
| 1 | TYPE_UNKNOWN | Unknown |
| 2 | TYPE_PLUGIN | Plugin |
| 3 | TYPE_LOGIN_PANEL | Login Admin Panel |
| 4 | TYPE_ACCOUNT_REGISTER | Account - Register |
| 5 | TYPE_ACCOUNT_LOGIN | Account - Login `action_id = session_tokens->id` |
| 6 | TYPE_ACCOUNT_UPDATE_DATA | Account - Update Profile |
| 7 | TYPE_ACCOUNT_UPDATE_PASSWORD | Account - Set or Reset Password |
| 8 | TYPE_ACCOUNT_DELETE | Account - Delete Account |
| 9 | TYPE_USER_ADD | User - Create |
| 10 | TYPE_USER_LOGIN | User - Login `action_id = session_tokens->id` |
| 11 | TYPE_USER_UPDATE_PROFILE | User - Update Profile |
| 12 | TYPE_USER_UPDATE_SETTING | User - Update Setting |
| 13 | TYPE_USER_UPDATE_PIN | User - Set or Reset PIN |
| 14 | TYPE_USER_DELETE | User - Delete User |
| 15 | TYPE_WALLET_INCREASE | Wallet - Transaction Income |
| 16 | TYPE_WALLET_DECREASE | Wallet - Transaction Expense |
| 17 | TYPE_WALLET_UPDATE_PASSWORD | Wallet - Set or Reset Password |
| 18 | TYPE_POST_CREATE_DRAFT | Post - Create Draft |
| 19 | TYPE_POST_REVIEW | Post - Submit for Review |
| 20 | TYPE_POST_PUBLISH | Post - Publish |
| 21 | TYPE_POST_DELETE | Post - Delete |
| 22 | TYPE_POST_LOG_DELETE | Post Log - Delete |
| 23 | TYPE_COMMENT_CREATE_DRAFT | Comment - Create Draft |
| 24 | TYPE_COMMENT_REVIEW | Comment - Submit for Review |
| 25 | TYPE_COMMENT_PUBLISH | Comment - Publish |
| 26 | TYPE_COMMENT_DELETE | Comment - Delete |
| 27 | TYPE_COMMENT_LOG_DELETE | Comment Log-Delete |
| 28 | TYPE_MARK_LIKE | Action Like |
| 29 | TYPE_MARK_DISLIKE | Action Dislike |
| 30 | TYPE_MARK_FOLLOW | Action Follow |
| 31 | TYPE_MARK_BLOCK | Action Block |
| 32 | TYPE_UPLOAD_FILE | Upload File |
| 33 | TYPE_CONVERSATION_MESSAGE | Conversation Message |

## Device Information JSON

> `networkIpv4` and `networkIpv6` are required to fill in at least one, or both can be filled in. The rest can be left blank.

```json
{
    "agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "type": "Desktop", // Desktop, Mobile, Tablet, Bot
    "platformName": "Mac 10.15.7",
    "platformFamily": "Mac",
    "platformVersion": "10.15.7",
    "browserName": "Chrome 126",
    "browserFamily": "Chrome",
    "browserVersion": "126",
    "browserEngine": "Blink",
    "deviceFamily": "Apple",
    "deviceModel": "Mac",
    "deviceMac": "2c:89:dc:71:b6:12",
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
