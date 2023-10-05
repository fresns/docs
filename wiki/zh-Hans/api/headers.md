# 请求标头

## Headers 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| X-Fresns-App-Id | String | YES | 密钥 App ID<br>密钥位置：`控制面板->应用中心->应用密钥`|
| X-Fresns-Client-Platform-Id | Number | YES | 平台编号，与密钥的「平台」匹配<br>密钥位置：`控制面板->应用中心->应用密钥`<br>[查看平台对应的 ID 编号](../database/dictionary/platforms.md) |
| X-Fresns-Client-Version | String | YES | 你的客户端版本号，推荐使用语义化版本号 |
| X-Fresns-Client-Device-Info | String | YES | [交互设备信息](../database/systems/session-logs.md#设备信息-json) `session_logs->device_info`<br>先压缩 Object 信息并转换为字符串，再将字符串以 Base64 编码 |
| X-Fresns-Client-Timezone | String | NO | UTC 时区（用于处理内容时间值）<br>留空则使用数据库时区 |
| X-Fresns-Client-Lang-Tag | String | NO | 客户端的语言标签（留空则输出默认语言）<br>配置位置：`控制面板->系统->语言设置` |
| X-Fresns-Client-Content-Format | String | NO | 内容格式（帖子和评论的列表与详情），留空则原样输出。<br>传参 `html` 将内容转换为 html 格式（文本内容的 `\n` 转换为 `<br>`，Markdown 内容转换为 `HTML`） |
| X-Fresns-Aid | String | YES/NO | 账号参数（留空则视为未登录账号） |
| X-Fresns-Aid-Token | String | YES/NO | 账号身份凭证（传参 `aid` 时必传） |
| X-Fresns-Uid | Number | YES/NO | 用户参数（留空则视为未登录用户） |
| X-Fresns-Uid-Token | String | YES/NO | 用户身份凭证（传参 `uid` 时必传） |
| X-Fresns-Signature | String | YES | [查看签名生成规则](#签名生成规则) |
| X-Fresns-Signature-Timestamp | String | YES | 签名生成时间（当前 UTC+0 Unix 时间戳，秒或者毫秒） |

## 注册和登录流程

1. 开始
    - 注册 [/api/v2/account/register](account/register.md)
    - 登录 [/api/v2/account/login](account/login.md)
    - 注册或登录成功后，获取账号凭证
        - **aid**: `data.sessionToken.aid`
        - **aidToken**: `data.sessionToken.token`
2. 判断账号名下用户数 `data.detail.users`
    - `1` 个
    - `2` 个及以上 `呈现「选择用户」视图`
3. 判断是否有密码 `data.detail.users[x].hasPassword`
    - 无密码
    - 有密码 `呈现「密码输入框」视图`
4. 登录用户
    - [/api/v2/user/auth](user/auth.md)
    - 用户登录成功后，获取用户凭证
        - **uid**: `data.sessionToken.uid`
        - **uidToken**: `data.sessionToken.token`
5. 结束
    - > 当账号名下只有 1 个用户，并且无密码，建议直接让用户无感知的登录成功。

## 运行模式介绍

- [配置表](../database/systems/configs.md)键名 `site_mode`
    - 公开模式，键值为 `public`
    - 私有模式，键值为 `private`
- 获取方法 `/api/v2/global/configs?keys=site_mode`
- 每个接口的介绍页都有两种模式的账号和用户参数是否必传说明。
    - `aid` 必传，表示必须登录`账号`才能请求该接口，此时 `token` 参数为账号的 `token`
    - `uid` 必传时，`aid` 也必传，表示必须登录「账号的用户」才能请求该接口，此时 `token` 参数为用户的 `token`

## 签名生成规则

```php
// headers 中参与签名的参数
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

- PHP 可引用封装方法 `App\Helpers\SignHelper::makeSign($signMap, $appSecret)`
- 其他客户端请参考下方流程：

**1、提取参与签名的 headers 参数**

```json
// 未登录
{
    "X-Fresns-App-Id": "yh1OJ7WL",
    "X-Fresns-Client-Platform-Id": 2,
    "X-Fresns-Client-Version": "2.0.0",
    "X-Fresns-Signature-Timestamp": 1674161913192
}

// 已登录账号
{
    "X-Fresns-App-Id": "yh1OJ7WL",
    "X-Fresns-Client-Platform-Id": 2,
    "X-Fresns-Client-Version": "2.0.0",
    "X-Fresns-Aid": "wIfu6jaF",
    "X-Fresns-Aid-Token": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz",
    "X-Fresns-Signature-Timestamp": 1674161913192
}

// 已登录用户
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

**2、以参数名按照 ASCII 码从小到大排序（字典序）**

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

**3、对排序后的新参数使用 URL 键值对的格式拼接成字符串。**

```
X-Fresns-Aid=wIfu6jaF&X-Fresns-Aid-Token=uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz&X-Fresns-App-Id=yh1OJ7WL&X-Fresns-Client-Platform-Id=2&X-Fresns-Client-Version=2.0.0&X-Fresns-Signature-Timestamp=1674161913192&X-Fresns-Uid=782622&X-Fresns-Uid-Token=PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c
```

**4、再拼接上** `&AppSecret={app_secret}` **得到待签名字符串。**

```
X-Fresns-Aid=wIfu6jaF&X-Fresns-Aid-Token=uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz&X-Fresns-App-Id=yh1OJ7WL&X-Fresns-Client-Platform-Id=2&X-Fresns-Client-Version=2.0.0&X-Fresns-Signature-Timestamp=1674161913192&X-Fresns-Uid=782622&X-Fresns-Uid-Token=PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c&AppSecret=qUiEaDNQh2IpvGHOKlTMx7ujn8t1CZWX
```

**5、对签名字符串进行 MD5 运算（32 位小写），得到签名值**

```
2174eaeab76fb6a3790ed4f7ebb2edfb
```

## 缓存介绍

- 我们开发的客户端都采用了全局函数封装，方便全局调用各种配置数据，可参见 [web-engine](https://github.com/fresns/web-engine) 扩展包。
    - `fs_api_config('配置键名')` 调用 [/api/v2/global/configs](global/configs.md) 接口的参数
    - `fs_lang('语言键名')` 调用 `fs_api_config('language_pack_contents')` 参数
    - `fs_code_message('编号')` 调用 [/api/v2/global/code-messages](global/code-messages.md) 接口的参数
    - `fs_account('参数名')` 调用 [/api/v2/account/detail](account/detail.md) 接口的 `data` 参数
    - `fs_user('参数名')` 调用 [/api/v2/user/{uidOrUsername}/detail](user/detail.md) 接口的 `data` 参数
    - `fs_user_panel('key')` 调用 [/api/v2/user/panel](user/panel.md) 接口的 `data` 参数
    - 其他...
- 由于全局数据每页都可能用到，为了避免频繁请求接口影响加载速度，所以我们在客户端采用了缓存。
- **配置项**：我们使用 `/api/v2/global/configs?keys=cache_datetime,cache_minutes` 检测缓存有效期，过期将自动重新缓存。
    - `cache_datetime` 服务端最后一次配置的时间。
    - `cache_minutes` 建议客户端缓存保存最长分钟数，为空 `null` 表示不限制。不限制则建议定期请求接口只获取 `cache_datetime,cache_minutes` 配置，对比有效期是否和本地一致，不一致则表示服务端已经更新配置，请重新缓存。
- **用户资料**：我们建议用户登录后缓存，当用户操作了互动功能，比如点赞、发表、修改资料等操作后，重新再获取用户资料再缓存。
