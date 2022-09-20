# User

> Panel > Systems > User

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| 第三方互联支持 | account_connect_services |  | **plugins** | 插件应用场景参数 `connect`<br>格式见下方介绍 |
| 实名认证支持 | account_real_name_service |  | **plugin** | 插件应用场景参数 `realName` |
| 多用户模式 | multi_user_status | false | boolean | true 或 false |
| 多用户功能插件 | multi_user_service |  | **plugin** | 插件应用场景参数 `multiple` |
| 有权使用的角色 | multi_user_roles |  | array |  |
| 默认用户角色 | default_role | 4 | number | 用户角色 ID |
| 默认用户头像 | default_avatar |  | **file** | 用户无头像时的默认头像 |
| 匿名用户头像 | anonymous_avatar |  | **file** | 帖子和评论开启匿名功能后，匿名用户的头像。 |
| 已停用用户头像 | deactivate_avatar |  | **file** | 用户注销或停用后的头像图 |
| 密码最小长度 | password_length | 8 | number | 新用户注册时密码最小长度，0或不填为不限制 |
| 密码字符类型 | password_strength | ["number","lowercase"] | array | 密码中必须存在所选字符类型，不选则为无限制<br>`number` 数字<br>`lowercase` 小写字母<br>`uppercase` 大写字母<br>`symbols` 符号(除空格) |
| 用户标识类型 | user_identifier | username | string | `uid` 或者 `username` |
| 用户 UID 起始位数 | user_uid_digit | 8 | number |  |
| 用户名最小长度 | username_min | 5 | number |  |
| 用户名最大长度 | username_max | 16 | number |  |
| 用户名修改间隔天数 | username_edit | 180 | number |  |
| 昵称最小长度 | nickname_min | 2 | number |  |
| 昵称最大长度 | nickname_max | 20 | number |  |
| 昵称修改间隔天数 | nickname_edit | 1 | number |  |
| 用户简介字数限制 | bio_length | 128 | number | 字符数长度 |
| 用户简介支持艾特 | bio_support_mention | false | boolean | true 或 false |
| 用户简介支持链接 | bio_support_link | false | boolean | true 或 false |
| 用户简介支持话题 | bio_support_hashtag | false | boolean | true 或 false |

## 第三方互联格式介绍

```json
[
    {
        "code": "互联平台编号",
        "unikey": "插件 Unikey"
    },
    {
        "code": "2",
        "unikey": "Placeholder"
    }
]
```

- [互联平台编号](../dictionary/connects.md)
- 由于 plugins 类型的格式是通用的，所以 code 是字符串，不是数字格式，但是平台编号是数字，所以存储时以字符串存。