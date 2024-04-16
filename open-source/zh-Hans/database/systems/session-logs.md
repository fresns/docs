---
aside: false
---

# session_logs *交互日志表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| app_fskey | varchar(64) | 关联应用 | Fresns | NO | 关联字段 [apps->fskey](../apps/apps.md)<br>Fresns 代表是主程序的日志 |
| type | tinyint *UNSIGNED* | 日志类型 | 1 | NO | 见下方描述 |
| platform_id | tinyint *UNSIGNED* | 平台编号 |  | NO | [platforms](../../configs/dictionary/platforms.md) |
| version | varchar(16) | 版本号 |  | NO | 语义化版本号 |
| app_id | char(8) | App ID |  | YES | [session_keys->app_id](session-keys.md) |
| lang_tag | char(16) | 客户端语言 |  | YES | 产生日志的语言，未开启多语言则留空 |
| action_name | varchar(128) | 记录目标名称 |  | NO | 功能模型名或者接口路径<br>例如模型名 App\Models\Post<br>例如接口路径：`/api/fresns/v1/account/auth-token` |
| action_desc | varchar(128) | 记录目标行为 |  | YES | 行为描述，自定义输入内容 |
| action_state | tinyint *UNSIGNED* | 记录行为结果 |  | NO | 1.未知或执行中 / 2.成功 / 3.失败 |
| action_id | bigint *UNSIGNED* | 记录目标 ID |  | YES | 例如发表行为，则代表发表内容的 ID<br>插件行为，凭此 ID 可查询对应插件那边记录的关联信息 |
| account_id | bigint *UNSIGNED* | 账号 ID |  | YES | 关联字段 [accounts->id](../accounts/accounts.md) |
| user_id | bigint *UNSIGNED* | 用户 ID |  | YES | 关联字段 [users->id](../users/users.md) |
| device_info | json | 设备信息 |  | YES |  |
| device_token | varchar(128) | 设备 Token |  | YES | 例如 iOS Device Token 或 Android Device Token<br>可应用于推送消息 |
| login_token | varchar(64) | 登录令牌 |  | YES |  |
| more_info | json | 备用字段 |  | YES | 例如存储操作行为快照 |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## 日志类型 type

| 类型编号 | 常量名 | 描述 |
| --- | --- | --- |
| 1 | TYPE_UNKNOWN | 未知 |
| 2 | TYPE_PLUGIN | 插件业务 |
| 3 | TYPE_LOGIN_PANEL | 登录控制面板 |
| 4 | TYPE_ACCOUNT_REGISTER | 账号-注册 |
| 5 | TYPE_ACCOUNT_LOGIN | 账号-登录 `action_id = session_tokens->id` |
| 6 | TYPE_ACCOUNT_UPDATE_DATA | 账号-修改资料 |
| 7 | TYPE_ACCOUNT_UPDATE_PASSWORD | 账号-设置或重置密码 |
| 8 | TYPE_ACCOUNT_DELETE | 账号-注销(删除) |
| 9 | TYPE_USER_ADD | 用户-新增 |
| 10 | TYPE_USER_LOGIN | 用户-登录 `action_id = session_tokens->id` |
| 11 | TYPE_USER_UPDATE_PROFILE | 用户-修改资料 |
| 12 | TYPE_USER_UPDATE_SETTING | 用户-更新设置 |
| 13 | TYPE_USER_UPDATE_PIN | 用户-设置或重置密码 |
| 14 | TYPE_USER_DELETE | 用户-删除 |
| 15 | TYPE_WALLET_INCREASE | 钱包-交易收入 |
| 16 | TYPE_WALLET_DECREASE | 钱包-交易支出 |
| 17 | TYPE_WALLET_UPDATE_PASSWORD | 钱包-设置或重置密码 |
| 18 | TYPE_POST_CREATE_DRAFT | 帖子-创建草稿 |
| 19 | TYPE_POST_REVIEW | 帖子-提交审核 |
| 20 | TYPE_POST_PUBLISH | 帖子-发表 |
| 21 | TYPE_POST_DELETE | 帖子-删除 |
| 22 | TYPE_POST_LOG_DELETE | 帖子日志-删除 |
| 23 | TYPE_COMMENT_CREATE_DRAFT | 评论-创建草稿 |
| 24 | TYPE_COMMENT_REVIEW | 评论-提交审核 |
| 25 | TYPE_COMMENT_PUBLISH | 评论-发表 |
| 26 | TYPE_COMMENT_DELETE | 评论-删除 |
| 27 | TYPE_COMMENT_LOG_DELETE | 评论日志-删除 |
| 28 | TYPE_MARK_LIKE | 操作喜欢 |
| 29 | TYPE_MARK_DISLIKE | 操作不喜欢 |
| 30 | TYPE_MARK_FOLLOW | 操作关注 |
| 31 | TYPE_MARK_BLOCK | 操作屏蔽 |
| 32 | TYPE_UPLOAD_FILE | 上传文件 |
| 33 | TYPE_CONVERSATION_MESSAGE | 对话消息 |

## 设备信息 JSON

> `networkIpv4` 和 `networkIpv6` 必填一项，或者两项都填写。其余项可留空。

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
    "appImei": null, // 国际移动设备识别码
    "appAndroidId": null, // 安卓设备的唯一标识符
    "appOaid": null, // 开放匿名设备标识符
    "appIdfa": null, // 苹果设备广告标识符
    "simImsi": null, // 国际移动用户识别码
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
    "mapId": 2, // 字典数据: 地图服务商编号
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
