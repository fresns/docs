# 内容功能

## 创建草稿

```php
\FresnsCmdWord::plugin('Fresns')->createDraft($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uid | Number | YES | 用户 UID |
| type | Number | YES | `1` 帖子 `2` 评论 |
| createType | Number | YES | 创建类型 `1` 快捷创建 `2` 编辑器创建 |
| editorFskey | String | NO | 是否为编辑器插件<br>传参 `Fresns` 则重置为默认编辑器 |
| commentPid | String | NO | 评论专用: 评论哪个帖子，必传 |
| commentCid | String | NO | 评论专用: 回复哪条评论<br>留空表示评论帖子 |
| quotePid | String | NO | 帖子专用: 引用的帖子 PID |
| gid | String | NO | 帖子专用: 小组 |
| title | String | NO | 帖子专用: 标题 |
| content | String | NO | 正文内容<br>内容中插入文件，格式为 `[file:{fid}]` |
| isMarkdown | Boolean | NO | 内容是否为 MD 格式 |
| isAnonymous | Boolean | NO | 是否匿名 |
| commentPolicy | Number | NO | 帖子专用: 谁可以评论<br>`1` 所有人 `2` 你关注的人 `3` 你关注的人和已认证的人 `4` 不允许所有人 `5` 仅限你提及到的用户 |
| commentPrivate | Boolean | NO | `帖子使用` 所有评论是否为私有<br>`评论使用` 本条评论是否为私有<br>私有则仅评论作者和帖子作者可见 |
| gtid | String | NO | 地理位置 ID |
| locationInfo | Object | NO | 地理位置信息 |
| archives | Array | NO | 扩展参数 |
| extends | Array | NO | 扩展内容 |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": 1, // 1.帖子 2.评论
        "logId": "post_logs->id" // 或者 comment_logs->id
    }
}
```
:::

## 生成草稿

```php
\FresnsCmdWord::plugin('Fresns')->generateDraft($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 类型 1.帖子 2.评论 |
| fsid | String | NO | 帖子 `posts->pid`<br>评论 `comments->cid` |

- 将已发表的正式内容，还原生成编辑草稿。
- 评论不支持子孙级评论，仅限一级评论可生成草稿。

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": 1, // 1.帖子 2.评论
        "logId": "post_logs->id", // 或者 comment_logs->id
        "editableStatus": true, // 是否可编辑
        "editableTime": "03:00", // 剩余可编辑时长，剩余 3 分钟
        "deadlineTime": "2022-07-01 15:05:00" // 剩余可编辑截止具体日期时间
    }
}
```
:::

## 由草稿发布内容

```php
\FresnsCmdWord::plugin('Fresns')->contentPublishByDraft($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 类型 1.帖子 2.评论 |
| logId | Number | YES | 帖子 `post_logs->id`<br>评论 `comment_logs->id` |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": 1, // 1.帖子 2.评论
        "logId": "post_logs->id", // 或者 comment_logs->id
        "id": "posts->id", // 或者 comments->id
        "fsid": "posts->pid" // 或者 comments->cid
    }
}
```
:::

## 快速发表内容

```php
\FresnsCmdWord::plugin('Fresns')->contentQuickPublish($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uid | Number | YES | 用户 UID |
| type | Number | YES | `1` 帖子 `2` 评论 |
| commentPid | String | NO | 评论专用: 评论哪个帖子，必传 |
| commentCid | String | NO | 评论专用: 回复哪条评论<br>留空表示评论帖子 |
| quotePid | String | NO | 帖子专用: 引用的帖子 PID |
| gid | String | NO | 帖子专用: 小组 |
| title | String | NO | 帖子专用: 标题 |
| content | String | NO | 正文内容<br>内容中插入文件，格式为 `[file:{fid}]` |
| isMarkdown | Boolean | NO | 内容是否为 MD 格式 |
| isAnonymous | Boolean | NO | 是否匿名 |
| commentPolicy | Number | NO | 帖子专用: 谁可以评论<br>`1` 所有人 `2` 你关注的人 `3` 你关注的人和已认证的人 `4` 不允许所有人 `5` 仅限你提及到的用户 |
| commentPrivate | Boolean | NO | `帖子使用` 所有评论是否为私有<br>`评论使用` 本条评论是否为私有<br>私有则仅评论作者和帖子作者可见 |
| gtid | String | NO | 地理位置 ID |
| locationInfo | String | NO | 位置信息: 压缩 Object 信息为字符串传参 |
| archives | String | NO | 扩展参数: 压缩 Array 信息为字符串传参 |
| extends | String | NO | 扩展内容: 压缩 Array 信息为字符串传参 |
| requireReview | Boolean | NO | 是否需要审核<br>默认为 `false` 不需要审核 |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": 1, // 1.帖子 2.评论
        "id": "posts->id", // 或者 comments->id
        "fsid": "posts->pid" // 或者 comments->cid
    }
}
```
:::

## 逻辑删除内容

```php
\FresnsCmdWord::plugin('Fresns')->logicalDeletionContent($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 类型 1.帖子 2.评论 |
| contentType | Number | YES | 类型 1.主表内容 2.日志表内容 |
| contentFsid | String | NO | `contentType=1` 专用：帖子 `pid`，评论 `cid` |
| contentLogId | Number | NO | `contentType=2` 专用：日志表主键 id |

*本命令字是全量逻辑删除，如果业务场景涉及撤回功能，请勿使用，避免恢复时处理数据较多。*

## 物理删除内容

```php
\FresnsCmdWord::plugin('Fresns')->physicalDeletionContent($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 类型 1.帖子 2.评论 |
| contentType | Number | YES | 类型 1.主表内容 2.日志表内容 |
| contentFsid | String | NO | `contentType=1` 专用：帖子 `pid`，评论 `cid` |
| contentLogId | Number | NO | `contentType=2` 专用：日志表主键 id |

## 添加内容更多信息

```php
\FresnsCmdWord::plugin('Fresns')->addContentMoreInfo($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 类型 1.帖子 2.评论 |
| fsid | String | YES | `pid` 或者 `cid` |
| key | String | YES | 信息键名 |
| value | String/Number/Array | YES | 信息键值 |

::: details 查看示例
```php
$wordBody = [
    'type' => 1,
    'fsid' => 'fresns-post',
    'key' => 'ipLocation',
    'value' => '江苏',
];

$wordBody = [
    'type' => 1,
    'fsid' => 'fresns-post',
    'key' => 'deviceName',
    'value' => 'iPhone',
];
```
:::

## 设置内容置顶

```php
\FresnsCmdWord::plugin('Fresns')->setContentSticky($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 类型 1.帖子 2.评论 |
| fsid | String | YES | `pid` 或者 `cid` |
| state | Number | YES | 帖子: 1.否 / 2.小组页置顶 / 3.全局置顶<br>评论: 1.否 / 2.置顶 |

## 设置内容精华

```php
\FresnsCmdWord::plugin('Fresns')->setContentDigest($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 类型 1.帖子 2.评论 |
| fsid | String | YES | `pid` 或者 `cid` |
| state | Number | YES | 1.否 / 2.普通精华 / 3.高级精华 |

## 设置内容关闭删除功能

```php
\FresnsCmdWord::plugin('Fresns')->setContentCloseDelete($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 类型 1.帖子 2.评论 |
| fsid | String | YES | `pid` 或者 `cid` |
| canDelete | Boolean | YES | 0.不可以删除 1.可以删除 |

## 设置帖子授权

```php
\FresnsCmdWord::plugin('Fresns')->setPostAuth($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| pid | String | YES |  |
| type | String | YES | 类型 `add` 或 `remove` |
| uid | Number | NO | 指定用户 |
| rid | Number | NO | 指定角色 |

- `uid` 和 `rid` 二选一传参

## 设置帖子附属用户

```php
\FresnsCmdWord::plugin('Fresns')->setPostAffiliateUser($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| pid | String | YES |  |
| type | String | YES | 类型 `add` 或 `remove` |
| uid | Number | YES | 指定用户 |
| fskey | String | YES | 插件 Fskey |
| moreInfo | Json | NO | 额外记录信息（Json） |
