# Send Command Word

## sendEmail

```php
\FresnsCmdWord::plugin('Fresns')->sendEmail($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| email | String | **required** | email |
| title | String | **required** | title |
| content | String | **required** | content (HTML code support) |

## sendSms

```php
\FresnsCmdWord::plugin('Fresns')->sendSms($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| countryCode | Number | **required** | International area code |
| phoneNumber | Number | **required** | Phone number |
| signName | String | *optional* | SMS signature name |
| templateCode | String | **required** | Template parameter |
| templateParam | Object | *optional* | Variable parameters |

::: details 查看变量参数 templateParam 格式
```json
// 变量名对应实际值
{
    "nickname": "Jevan Tang",
    "variale1": "Someone mention you"
}
```
:::

## sendNotification

```php
\FresnsCmdWord::plugin('Fresns')->sendNotification($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uid | Number | **required** | User parameter (main user table `users->uid` field) |
| type | Number | **required** | 1. System / 2. Recommend / 3. Like / 4. Dislike / 5. Follow / 6. Block / 7. Mention / 8. Comment |
| content | String | *optional* | Notification content |
| isMarkdown | Boolean | *optional* | Is the content in MD format? |
| isMultilingual | Boolean | *optional* | Is the content multilingual? |
| isAccessPlugin | Boolean | *optional* | Access plugin page? |
| pluginUnikey | String | *optional* | Associated plugin |
| actionUid | Number | *optional* | Trigger initiator |
| actionType | Number | *optional* | Trigger action type 1.Like 2.Dislike 3.Follow 4.Block 5.Publish 6.Edit 7.Delete 8.Sticky 9.Digest 10.Manage |
| actionObject | Number | *optional* | Trigger target 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment 6.Post Log 7.Comment Log 8.Extend Content |
| actionFsid | String | *optional* | Trigger target FsID |
| actionCid | String | *optional* | Comment event cid |

::: details content 内容参数说明
如果 `isMultilingual` 参数为多语言，则 `content` 参数的内容是以字符串传参的 json 内容。
```json
[
    {
        "langTag": "en",
        "content": "Content of notice"
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
| uid | Number | **required** | User parameter (main user table `users->uid` field) |
| channel | Number | *optional* | Channel 1.iOS / 2.Android |
| template | String | *optional* | Template parameter |
| coverUrl | String | *optional* | Cover image URL |
| title | String | *optional* | Title |
| content | String | *optional* | Content |
| time | String | *optional* | Time, format Y-m-d H:i:s |
| linkType | Number | *optional* | Link type: 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| linkFsid | String | *optional* | After passing the link type parameter, this parameter is required, the fsid of the type |
| linkUrl | String | *optional* | Link URL |

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
| uid | Number | **required** | User parameter (main user table `users->uid` field) |
| channel | Number | **required** | Channel 1.Official Account / 2.Mini Programs |
| template | String | *optional* | Template parameter |
| coverUrl | String | *optional* | Cover image URL |
| title | String | *optional* | Title |
| content | String | *optional* | Content |
| time | String | *optional* | Time, format Y-m-d H:i:s |
| linkType | Number | *optional* | Link type: 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| linkFsid | String | *optional* | After passing the link type parameter, this parameter is required, the fsid of the type |
| linkUrl | String | *optional* | Link URL |
