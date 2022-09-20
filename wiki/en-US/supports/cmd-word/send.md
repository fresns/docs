# Send Command Word

## sendEmail

```php
\FresnsCmdWord::plugin('Fresns')->sendEmail($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| email | String | **required** | 邮箱地址 |
| title | String | **required** | 标题 |
| content | String | **required** | 内容（支持 HTML 代码） |

## sendSms

```php
\FresnsCmdWord::plugin('Fresns')->sendSms($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| countryCode | Number | **required** | 国际区号 |
| phoneNumber | Number | **required** | 手机号 |
| signName | String | *optional* | 短信签名名称 |
| templateCode | String | **required** | 模板参数 |
| templateParam | Object | *optional* | 变量参数 |

::: details 查看变量参数 templateParam 格式
```json
// 变量名对应实际值
{
    "nickname": "Jarvis Tang",
    "variale1": "有人艾特你"
}
```
:::

## sendAppNotification

```php
\FresnsCmdWord::plugin('Fresns')->sendAppNotification($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uid | Number | **required** | 用户参数（用户主表 `users > uid` 字段） |
| channel | Number | *optional* | 渠道 1.iOS / 2.Android |
| template | String | *optional* | 模板参数 |
| coverUrl | String | *optional* | 封面图，以 Laravel Validation 验参为 url |
| title | String | *optional* | 标题 |
| content | String | *optional* | 内容 |
| time | String | *optional* | 时间，格式 Y-m-d H:i:s |
| linkType | Number | *optional* | 链接类型：1.用户 2.小组 3.话题 4.帖子 5.评论 |
| linkFsid | String | *optional* | 链接类型传参后，此参必传，类型的 fsid |
| linkUrl | String | *optional* | 链接地址，以 Laravel Validation 验参为 url |

::: details channel 参数说明
- 根据 channel 获取通知配置插件 `send_ios_service`、`send_android_service`
- 留空表示两者均要推送，分别请求两个配置的插件。
:::

## sendWechatMessage

```php
\FresnsCmdWord::plugin('Fresns')->sendWechatMessage($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uid | Number | **required** | 用户参数（用户主表 `users > uid` 字段） |
| channel | Number | **required** | 渠道 1.公众号 / 2.小程序 |
| template | String | *optional* | 模板参数 |
| coverUrl | String | *optional* | 封面图，以 Laravel Validation 验参为 url |
| title | String | *optional* | 标题 |
| content | String | *optional* | 内容 |
| time | String | *optional* | 时间，格式 Y-m-d H:i:s |
| linkType | Number | *optional* | 链接类型：1.用户 2.小组 3.话题 4.帖子 5.评论 |
| linkFsid | String | *optional* | 链接类型传参后，此参必传，类型的 fsid |
| linkUrl | String | *optional* | 链接地址，以 Laravel Validation 验参为 url |
