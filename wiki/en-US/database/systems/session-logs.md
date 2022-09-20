# session_logs

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | 自动递赠 |
| plugin_unikey | varchar(64) | 关联插件名称 | Fresns | NO | 关联字段 [plugins->unikey](../plugins/plugins.md)<br>Fresns 代表是主程序的日志 |
| type | tinyint *UNSIGNED* | 日志类型 | 1 | NO | 见下方描述 |
| platform_id | tinyint *UNSIGNED* | 平台编号 |  | NO | 关联键名 [configs->item_key = platforms](../dictionary/platforms.md) |
| version | varchar(16) | 版本号 |  | NO | 语义化版本号 |
| lang_tag | char(16) | 客户端语言 |  | YES | 产生日志的语言，未开启多语言则留空 |
| object_name | varchar(128) | 记录目标名称 |  | NO | 功能模型名或者接口路径<br>例如模型名 App\Models\Post<br>例如接口路径：/api/v2/account/login |
| object_action | varchar(128) | 记录目标行为 |  | YES | 行为描述，自定义输入内容 |
| object_result | tinyint *UNSIGNED* | 记录行为结果 |  | NO | 1.未知或执行中 / 2.成功 / 3.失败 |
| object_order_id | bigint *UNSIGNED* | 记录目标 ID |  | YES | 例如发表行为，则代表发表内容的 ID<br>插件行为，凭此 ID 可查询对应插件那边记录的关联信息 |
| device_info | json | 设备信息 |  | YES |  |
| device_token | varchar(128) | 设备 Token |  | YES | 例如 iOS Device Token 或 Android Device Token<br>可应用于推送消息 |
| account_id | bigint *UNSIGNED* | 账号 ID |  | YES | 关联字段 [accounts->id](../accounts/accounts.md) |
| user_id | bigint *UNSIGNED* | 用户 ID |  | YES | 关联字段 [users->id](../users/users.md) |
| more_json | json | 备用字段 |  | YES | 例如存储操作行为快照 |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Log Type

- `1` 自定义
- `2` 插件业务
- `3` 登录控制面板
- `4` 账号-注册
- `5` 账号-登录
- `6` 账号-修改资料
- `7` 账号-设置或重置密码
- `8` 账号-注销(删除)
- `9` 用户-新增
- `10` 用户-登录
- `11` 用户-修改资料
- `12` 用户-设置或重置密码
- `13` 用户-删除
- `14` 钱包-交易收入
- `15` 钱包-交易支出
- `16` 钱包-设置或重置密码
- `17` 帖子-创建草稿
- `18` 帖子-提交审核
- `19` 帖子-发表
- `20` 帖子-删除
- `21` 帖子日志-删除
- `22` 评论-创建草稿
- `23` 评论-提交审核
- `24` 评论-发表
- `25` 评论-删除
- `26` 评论日志-删除
- `27` 操作喜欢
- `28` 操作不喜欢
- `29` 操作关注
- `30` 操作屏蔽
- `31` 上传文件
- `32` 会话消息

## Device Information JSON

```json
{
    "type": "Desktop", // Desktop, Mobile, Tablet, Bot
    "brand": "Apple",
    "model": "Mac",
    "platformName": "Mac",
    "platformVersion": "10.15.7",
    "browserName": "Chrome",
    "browserVersion": "100.0.4896",
    "browserEngine": "Blink",
    "networkType": "wifi",
    "networkIpv4": "127.0.0.1",
    "networkIpv6": "",
    "networkPort": "8080",
    "networkTimezone": "Asia/Shanghai",
    "networkOffset": 28800,
    "networkCurrency": "CNY",
    "networkIsp": "China Mobile communications corporation",
    "networkOrg": "China Mobile",
    "networkAs": "AS56046 China Mobile communications corporation",
    "networkAsName": "CMNET-Jiangsu-AP",
    "networkMobile": true,
    "networkProxy": false,
    "networkHosting": false,
    "mapId": 1, // 字典数据: 地图服务商编号
    "latitude": 113.324520,
    "longitude": 23.099994,
    "scale": "",
    "continent": "Asia",
    "continentCode": "AS",
    "country": "China",
    "countryCode": "CN",
    "region": "Jiangsu",
    "regionCode": "JS",
    "city": "Suzhou",
    "cityCode": "SZ",
    "district": "Taicang",
    "address": "",
    "zip": "215400",
}
```
