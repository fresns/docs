# 用户功能

## 添加用户

```php
\FresnsCmdWord::plugin('Fresns')->addUser($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | String | YES | 关联字段 `accounts->aid` |
| aidToken | String | NO | 不传则不验证账号身份，直接为该账号添加用户 |
| platformId | Number | NO | 平台编号，传 `aidToken` 时必传 |
| version | String | NO | 语义化版本号，传 `aidToken` 时必传 |
| appId | String | NO | App ID，传 `aidToken` 时必传 |
| nickname | String | YES | 昵称，关联字段 `users->nickname` |
| username | String | NO | 用户名，关联字段 `users->username`<br>不传则随机生成一个 6~8 位字符，需要避免使用禁用名（键名 [ban_names](../../database/dictionary/ban-names.md) 禁用值） |
| password | String | NO | 登录密码，关联字段 `users->password` |
| avatarFid | String | NO | 头像 fid，存储时转换成 `files->id`<br>关联字段 `users->avatar_file_id` |
| avatarUrl | String | NO | 头像 URL，关联字段 `users->avatar_file_url`<br>如果留空，则判断 `avatarFid` 是否也留空，如果有值，则凭 fid 获取 url 入库（忽略防盗链，仅拼接地址） |
| gender | Number | NO | 性别，关联字段 `users->gender` |
| birthday | String | NO | 生日，关联字段 `users->birthday`，格式为 Y-m-d H:i:s |
| timezone | String | NO | 偏好时区，关联字段 `users->timezone` |
| language | String | NO | 偏好语言，关联字段 `users->language` |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "aid": "accounts->aid",
        "aidToken": "aidToken",
        "uid": "users->uid",
        "username": "users->username",
        "nickname": "users->nickname"
    }
}
```
:::

::: details 查看注册逻辑
- 注册时需要生成的数据清单
    - 用户主表 `users`
    - 用户数据统计表 `user_stats`
    - 用户角色关联表 `user_roles`：初始角色来自配置表 `default_role` 键值。
    - 其余传参有值时直接录入，无值时留空。
:::

## 校验用户

```php
\FresnsCmdWord::plugin('Fresns')->verifyUser($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| platformId | Number | YES | 平台编号（配置表 [platforms](../../database/dictionary/platforms.md) 键名的键值） |
| version | String | YES | 语义化版本号 |
| appId | String | YES | App ID |
| aid | String | YES | 账号 AID `accounts->aid` |
| aidToken | String | YES | 账号 Token |
| uid | Number | YES | 用户 UID `users->uid` |
| password | String | NO | 密码 `users->password` |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "aid": "accounts->aid",
        "aidToken": "aidToken",
        "uid": "users->uid",
    }
}
```
:::

## 创建用户凭证

```php
\FresnsCmdWord::plugin('Fresns')->createUserToken($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| platformId | Number | YES | 平台编号（配置表 [platforms](../../database/dictionary/platforms.md) 键名的键值） |
| version | String | YES | 语义化版本号 |
| appId | String | YES | App ID |
| aid | String | YES | 账号参数 `session_tokens->account_id`<br>存储时由 `aid` 转换成 `accounts->id` |
| aidToken | String | YES | 账号身份凭证（凭证表 `session_tokens->token` 字段） |
| uid | Number | YES | 用户参数 `session_tokens->user_id`<br>存储时由 `uid` 转换成 `users->id` |
| expiredTime | Number | NO | 过期时间，单位：小时（为空代表永久有效） |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "aid": "aid",
        "aidToken": "aidToken",
        "uid": "users->uid",
        "uidToken": "session_tokens->token",
        "uidTokenId": "session_tokens->id",
        "expiredHours": "有效期小时数", // 没有则输出 null
        "expiredDays": "有效期天数", // 没有则输出 null
        "expiredDateTime": "session_tokens->expired_at 留空代表永久有效，格式为 Y-m-d H:i:s", // 没有则输出 null
    }
}
```
:::

## 校验用户凭证

```php
\FresnsCmdWord::plugin('Fresns')->verifyUserToken($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| platformId | Number | YES | 平台编号（配置表 [platforms](../../database/dictionary/platforms.md) 键名的键值） |
| aid | String | YES | 账号参数 `session_tokens->account_id`<br>查验时由 `aid` 转换成 `accounts->id` |
| aidToken | String | YES | 账号身份凭证（凭证表 `session_tokens->token` 字段） |
| uid | Number | YES | 用户参数 `session_tokens->user_id`<br>查验时由 `uid` 转换成 `users->id` |
| uidToken | String | YES | 用户身份凭证（凭证表 `session_tokens->token` 字段） |

## 逻辑删除用户

```php
\FresnsCmdWord::plugin('Fresns')->logicalDeletionUser($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uid | Number | NO | 用户 UID `users->uid` |
