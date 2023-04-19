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
    "nickname": "Jevan Tang",
    "variale1": "有人艾特你"
}
```
:::

## sendNotification

```php
\FresnsCmdWord::plugin('Fresns')->sendNotification($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uid | Number | **required** | 用户参数（用户主表 `users->uid` 字段） |
| type | Number | **required** | 1.系统通知 / 2.推荐 / 3.点赞 / 4.踩 / 5.关注 / 6.屏蔽 / 7.提及（艾特） / 8.评论 |
| content | String | *optional* | 通知内容 |
| isMarkdown | Boolean | *optional* | 内容是否为 MD 格式 |
| isMultilingual | Boolean | *optional* | 内容是否为多语言 |
| isAccessPlugin | Boolean | *optional* | 是否访问插件页 |
| pluginUnikey | String | *optional* | 关联插件 |
| actionUid | Number | *optional* | 触发者 |
| actionType | Number | *optional* | 触发行为类型 1.点赞 2.点踩 3.关注 4.屏蔽 5.发表 6.编辑 7.删除 8.置顶 9.设精 10.管理 |
| actionObject | Number | *optional* | 触发目标 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment 6.Post Log 7.Comment Log 8.Extend Content |
| actionFsid | String | *optional* | 触发目标 FsID |
| actionCid | String | *optional* | 评论事件 cid |

::: details content 内容参数说明
如果 `isMultilingual` 参数为多语言，则 `content` 参数的内容是以字符串传参的 json 内容。
```json
[
    {
        "langTag": "语言标签",
        "content": "内容"
    }
]
```
:::

## sendAppNotification

```php
\FresnsCmdWord::plugin('Fresns')->sendAppNotification($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uid | Number | **required** | 用户参数（用户主表 `users->uid` 字段） |
| channel | Number | *optional* | 渠道 1.iOS / 2.Android |
| template | String | *optional* | 模板参数 |
| coverUrl | String | *optional* | 封面图，以 Laravel Validation 验参为 url |
| title | String | *optional* | 标题 |
| content | String | *optional* | 内容 |
| time | String | *optional* | 时间，格式 Y-m-d H:i:s |
| linkType | Number | *optional* | 链接类型：1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
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
| uid | Number | **required** | 用户参数（用户主表 `users->uid` 字段） |
| channel | Number | **required** | 渠道 1.公众号 / 2.小程序 |
| template | String | *optional* | 模板参数 |
| coverUrl | String | *optional* | 封面图，以 Laravel Validation 验参为 url |
| title | String | *optional* | 标题 |
| content | String | *optional* | 内容 |
| time | String | *optional* | 时间，格式 Y-m-d H:i:s |
| linkType | Number | *optional* | 链接类型：1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| linkFsid | String | *optional* | 链接类型传参后，此参必传，类型的 fsid |
| linkUrl | String | *optional* | 链接地址，以 Laravel Validation 验参为 url |
