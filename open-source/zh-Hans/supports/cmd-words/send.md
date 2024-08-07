# 发信功能

## 验证码

- [发送验证码](basic.md#发送验证码)
- [核对验证码](basic.md#核对验证码)

## 发信-邮件

```php
\FresnsCmdWord::plugin('Fresns')->sendEmail($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| email | String | YES | 邮箱地址 |
| title | String | YES | 标题 |
| content | String | YES | 内容（支持 HTML 代码） |
| langTag | String | NO | 语言标签，留空则使用默认语言标签<br>用于处理站点名称和时间格式等变量值 |

## 发信-短信

```php
\FresnsCmdWord::plugin('Fresns')->sendSms($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| countryCallingCode | Number | YES | 国际区号 |
| purePhone | Number | YES | 手机号 |
| signName | String | NO | 短信签名名称 |
| templateCode | String | YES | 模板参数 |
| templateParam | Object | NO | 变量参数 |

::: details 查看变量参数 templateParam 格式
```json
// 变量名对应实际值
{
    "nickname": "唐杰",
    "variale1": "有人艾特你"
}
```
:::

## 发信-系统通知

```php
\FresnsCmdWord::plugin('Fresns')->sendNotification($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uid | Number | YES | 用户参数（用户主表 `users->uid` 字段） |
| type | Number | YES | 1.系统 / 2.推荐 / 3.赞 / 4.踩 / 5.关注 / 6.屏蔽 / 7.提及 / 8.评论 / 9.引用 |
| content | Array | NO | 通知内容 |
| isMarkdown | Boolean | NO | 内容是否为 MD 格式 |
| isAccessApp | Boolean | NO | 是否访问应用页 |
| appFskey | String | NO | 关联应用 |
| actionUid | Number | NO | 触发者 |
| actionIsAnonymous | Boolean | NO | 是否匿名触发 |
| actionType | Number | NO | 触发行为类型 1.赞 2.踩 3.关注 4.屏蔽 5.发表 6.编辑 7.删除 8.置顶 9.设精 10.管理 |
| actionTarget | Number | NO | 触发目标 1.用户 2.小组 3.话题 4.帖子 5.评论 6.帖子日志 7.评论日志 8.扩展内容 |
| actionFsid | Number / String | NO | 触发目标 FsID |
| contentFsid | String | NO | 内容事件 pid 或 cid<br>发表的内容本身，由该内容触发的目标 |

::: details content 内容参数说明
```php
[
    '语言标签' => '内容',
    'en' => '通知内容',
]
```
:::

## 发信-App 通知

```php
\FresnsCmdWord::plugin('Fresns')->sendAppNotification($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uid | Number | YES | 用户参数（用户主表 `users->uid` 字段） |
| channel | Number | YES | 渠道 1.iOS / 2.Android / 3.Desktop |
| template | String | NO | 模板参数 |
| coverUrl | String | NO | 封面图 |
| title | String | NO | 标题 |
| content | String | NO | 内容 |
| time | String | NO | 时间，格式 Y-m-d H:i:s |
| linkType | Number | NO | 链接类型：1.用户 2.小组 3.话题 4.帖子 5.评论 |
| linkFsid | Number / String | NO | 链接类型传参后，此参必传，类型的 fsid |
| linkUrl | String | NO | 链接地址 |

::: details channel 参数说明
- 根据 channel 获取通知配置插件 `send_ios_service`、`send_android_service`
- 留空表示两者均要推送，分别请求两个配置的插件。
:::
