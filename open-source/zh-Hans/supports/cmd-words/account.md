# 账号功能

## 创建账号

```php
\FresnsCmdWord::plugin('Fresns')->createAccount($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 账号类型：1.AID / 2.邮箱 / 3.手机号 / 4.互联平台 |
| account | String | NO/YES | 邮箱或手机号专用：邮箱地址 / 手机号码（`type=2 或 3` 时必填） |
| countryCode | Number | NO/YES | 手机号专用：国际区号（`type=3` 时必填） |
| connectInfo | Array | NO/YES | 互联平台专用：平台信息（`type=4` 时必填） |
| connectEmail | String | NO | 互联平台专用：平台邮箱（`type=4` 时选填） |
| connectPhone | Number | NO | 互联平台专用：平台手机号码（`type=4` 时选填） |
| connectCountryCode | Number | NO | 互联平台专用：平台手机号码国际区号（`type=4` 时选填） |
| password | String | NO | 登录密码 |
| birthday | String | NO | 生日，格式为 Y-m-d |
| createUser | Boolean | NO | 是否同步创建一个用户 |
| userInfo | Array | NO | 同步创建用户时的初始信息 |

::: details 结果示例
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

::: details 查看 connectInfo 参数介绍
- 支持多个，例如微信平台会同时有 UnionID 和 OpenID 两个参数。
- 必传参数 `connectPlatformId` `connectAccountId` `appFskey`
```json
[
    {
        "connectPlatformId": 8, //存储到 account_connects->connect_platform_id
        "connectAccountId": "unionid", //存储到 account_connects->connect_account_id
        "connectToken": null, //存储到 account_connects->connect_token
        "connectRefreshToken": null, //存储到 account_connects->connect_refresh_token
        "refreshTokenExpiredDatetime": null, //存储到 account_connects->refresh_token_expired_at // Y-m-d H:i:s
        "connectUsername": "账号名", //存储到 account_connects->connect_username
        "connectNickname": "昵称", //存储到 account_connects->connect_nickname
        "connectAvatar": "头像 URL", //存储到 account_connects->connect_avatar
        "appFskey": "请求者 fskey ", //存储到 account_connects->app_fskey
        "moreInfo": {}, //存储到 account_connects->more_info
    },
    {
        "connectPlatformId": 9,
        "connectAccountId": "openid",
        "connectToken": null,
        "connectRefreshToken": null,
        "refreshTokenExpiredDatetime": null,
        "connectUsername": "账号名",
        "connectNickname": "昵称",
        "connectAvatar": "头像 URL",
        "appFskey": "请求者 fskey ",
        "moreInfo": {},
    }
]
```
:::

::: details 查看 userInfo 参数介绍
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| username | String | NO | 用户名，关联字段 `users->username`<br>不传则随机生成一个 6~8 位字符，需要避免使用禁用名（键名 `user_ban_names` 禁用值） |
| nickname | String | NO | 昵称，关联字段 `users->nickname` |
| pin | String | NO | 登录密码，关联字段 `users->pin` |
| avatarFid | String | NO | 头像 fid，存储时转换成 `files->id`<br>关联字段 `users->avatar_file_id` |
| avatarUrl | String | NO | 头像 URL，关联字段 `users->avatar_file_url`<br>如果留空，则判断 `avatarFid` 是否也留空，如果有值，则凭 fid 获取 url 入库（忽略防盗链，仅拼接地址） |
| gender | Number | NO | 性别，关联字段 `users->gender` |
| genderPronoun | Number | NO | 性别代称，关联字段 `users->gender_pronoun` |
| genderCustom | String | NO | 性别自定义，关联字段 `users->gender_custom` |
:::

::: details 查看注册逻辑
- 注册时需要生成的数据清单
    - 账号主表 `accounts`
    - 账号钱包表 `account_wallets`
    - 其余传参有值时直接录入，无值时留空。
:::

## 校验账号

```php
\FresnsCmdWord::plugin('Fresns')->verifyAccount($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 账号类型：1.自动识别 / 2.AID / 3.邮箱 / 4.手机号 / 5.互联平台 |
| account | String | NO/YES | AID / 邮箱地址 / 手机号码（`type=1, 2, 3, 4` 时必填） |
| countryCode | Number | NO/YES | 手机号专用：国际区号（`type=4` 时必填） |
| password | String | NO | 以密码校验专用 |
| verifyCode | String | NO | 以验证码校验专用（命令字 [checkCode](basic.md#核对验证码) 查验） |
| connectPlatformId | Number | NO | 以互联平台校验专用 |
| connectAccountId | String | NO | 以互联平台校验专用 |

::: details 结果示例
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

## 设置账号互联

```php
\FresnsCmdWord::plugin('Fresns')->setAccountConnect($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| fskey | String | YES | `account_connects->app_fskey` |
| aid | Number | YES | `accounts->aid` |
| connectPlatformId | Number | YES | `account_connects->connect_platform_id` |
| connectAccountId | String | YES | `account_connects->connect_account_id` |
| connectToken | String | NO | `account_connects->connect_token` |
| connectRefreshToken | String | NO | `account_connects->connect_refresh_token` |
| refreshTokenExpiredDatetime | String | NO | `Y-m-d H:i:s` `account_connects->refresh_token_expired_at` |
| connectUsername | String | NO | `account_connects->connect_username` |
| connectNickname | String | NO | `account_connects->connect_nickname` |
| connectAvatar | String | NO | `account_connects->connect_avatar` |
| moreInfo | String | NO | `account_connects->more_info` |
| connectEmail | String | NO | 平台邮箱（账号表邮箱为空时将存入，有值则忽略） |
| connectPhone | Number | NO | 平台手机号码（账号表手机号为空时将存入，有值则忽略） |
| connectCountryCode | Number | NO | 平台手机号码国际区号（账号表手机号为空时将存入，有值则忽略） |

## 断开账号互联

```php
\FresnsCmdWord::plugin('Fresns')->disconnectAccountConnect($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | Number | YES | `accounts->aid` |
| connectPlatformId | Number | YES | `account_connects->connect_platform_id` |

## 创建账号凭证

```php
\FresnsCmdWord::plugin('Fresns')->createAccountToken($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| platformId | Number | YES | 平台编号（配置表 [platforms](../../configs/dictionary/platforms.md) 键名的键值） |
| version | String | YES | 语义化版本号 |
| appId | String | YES | App ID |
| aid | String | YES | 账号参数 `session_tokens->account_id`<br>存储时由 `aid` 转换成 `accounts->id` |
| deviceToken | String | NO | 交互设备 Token<br>例如 iOS Device Token 或 Android Device Token<br>可应用于推送消息 |
| expiredTime | Number | NO | 过期时间，单位：小时（为空代表永久有效） |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "aid": "accounts->aid",
        "aidToken": "session_tokens->token",
        "aidTokenId": "session_tokens->id",
        "expiredHours": "有效期小时数", // 没有则输出 null
        "expiredDays": "有效期天数", // 没有则输出 null
        "expiredDateTime": "session_tokens->expired_at 留空代表永久有效，格式为 Y-m-d H:i:s", // 没有则输出 null
    }
}
```
:::

## 校验账号凭证

```php
\FresnsCmdWord::plugin('Fresns')->verifyAccountToken($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| platformId | Number | YES | 平台编号（配置表 [platforms](../../configs/dictionary/platforms.md) 键名的键值） |
| aid | String | YES | 账号参数 `session_tokens->account_id`<br>查验时由 `aid` 转换成 `accounts->id` |
| aidToken | String | YES | 身份凭证（凭证表 `session_tokens->token` 字段） |

## 获取账号设备 Token

```php
\FresnsCmdWord::plugin('Fresns')->getAccountDeviceToken($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | String | YES |  |
| platformId | Number | NO | 平台编号（配置表 [platforms](../../configs/dictionary/platforms.md) 键名的键值）<br>留空则输出全部 |

- 结果为数组列表，根据创建时间倒序排列，最新创建的在前面。

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "platformId": 5,
            "uid": null, // 为空表示不属于任何用户
            "deviceToken": "",
            "datetime": ""
        }
    ]
}
```
:::

## 逻辑删除账号

```php
\FresnsCmdWord::plugin('Fresns')->logicalDeletionAccount($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | Number | YES | `accounts->aid` |

## 物理删除账号

```php
\FresnsCmdWord::plugin('Fresns')->physicalDeletionAccount($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | Number | YES | `accounts->aid` |

- 物理删除涉及内容很多，所以删除功能使用队列执行，请配置 [Fresns 队列](https://fresns.org/zh-Hans/guide/configuration.html#%E9%98%9F%E5%88%97)。
