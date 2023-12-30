# 账户设置

> 控制面板 > 系统 > 账户设置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 账户中心 | account_center_service |  | **plugin** | 用途场景 `accountCenter` |
| 账户中心路径 | account_center_path | account | string |  |
| 验证码方案 | account_center_captcha |  | string | `turnstile`<br>`reCAPTCHA`<br>`hCaptcha` |
| 验证码方案配置 | account_center_captcha_configs |  | object |  |
| 注册入口 | account_register_path | sign-up | string |  |
| 注册状态 | account_register_status | true | boolean |  |
| 注册服务 | account_register_service |  | **plugin** | 用途场景 `accountRegister` |
| 使用邮箱注册 | account_email_register | true | boolean |  |
| 使用手机号注册 | account_phone_register | false | boolean |  |
| 登录入口 | account_login_path | login | string |  |
| 使用邮箱登录 | account_email_login | true | boolean |  |
| 使用手机号登录 | account_phone_login | false | boolean |  |
| 使用验证码登录 | account_login_with_code | false | boolean |  |
| 登录时同步注册 | account_login_or_register | false | boolean | 验证码登录时，无账号则自动注册 |

- 验证码方案配置 `{"siteKey":"","secretKey":""}`

## 密码

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 密码最小长度 | password_length | 8 | number | 密码最小长度，0 或不填为不限制 |
| 密码字符类型 | password_strength | ["number","lowercase"] | array | 密码中必须存在所选字符类型，不选则为无限制<br>`number` 数字<br>`lowercase` 小写字母<br>`uppercase` 大写字母<br>`symbols` 符号(除空格) |

## 互联

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 第三方互联支持 | account_connect_services |  | **plugins** | 用途场景 `accountConnect`<br>格式见下方介绍 |

::: details 第三方互联格式介绍
```json
[
    {
        "order": "顺序",
        "code": "互联平台编号",
        "fskey": "插件 Fskey"
    },
    {
        "order": 2,
        "code": "2",
        "fskey": "Placeholder"
    }
]
```

- [互联平台编号](../dictionary/connects.md)
- 由于 apps 类型的格式是通用的，所以 code 是字符串，不是数字格式，但是平台编号是数字，所以存储时以字符串存。
:::

## 认证

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 实名认证支持 | account_kyc_service |  | **plugin** | 用途场景 `accountKyc` |