# 内容功能

## 创建草稿

```php
\FresnsCmdWord::plugin('Fresns')->createDraft($wordBody)
```

| 参数名 | 类型 | 是否必传 | **帖子**说明 | **评论**说明 |
| --- | --- | --- | --- | --- |
| uid | Number | YES | 用户 UID |  |
| type | Number | YES | `1` 帖子 | `2` 评论 |
| createType | Number | YES | 创建类型 1.快捷创建 2.编辑器创建 |  |
| editorUnikey | String | NO | 是否插件编辑器，留空为否 |  |
| postGid | String | NO | 小组，默认选中了小组 | *帖子专用* |
| postTitle | String | NO | 标题，默认自带标题 | *帖子专用* |
| postIsComment | Boolean | NO | 默认配置：是否可以评论帖子 | *帖子专用* |
| postIsCommentPublic | Boolean | NO | 默认配置：是否公开评论<br>不公开则仅帖子作者可见 | *帖子专用* |
| commentPid | String | NO | *评论专用* | 评论哪个帖子，必传 |
| commentCid | String | NO | *评论专用* | 留空表示评论帖子<br>有值表示回复这条评论 |
| content | String | NO | 正文内容，默认自带内容 |  |
| isMarkdown | Boolean | NO | 默认配置：内容是否为 MD 格式 |  |
| isAnonymous | Boolean | NO | 默认配置：是否匿名 |  |
| mapJson | Object | NO | 默认配置：位置信息 |  |
| eid | String | NO | 默认配置：扩展内容 |  |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": 1, // 1.帖子 2.评论
        "logId": "post_logs > id" // 或者 comment_logs > id
    }
}
```
:::

## 生成草稿

```php
\FresnsCmdWord::plugin('Fresns')->generateDraft($wordBody)
```

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 类型 1.帖子 2.评论 |
| fsid | String | NO | 帖子 `posts > pid`<br>评论 `comments > cid` |

- 将已发表的正式内容，还原生成编辑草稿。
- 评论不支持子孙级评论，仅限一级评论可生成草稿。

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": 1, // 1.帖子 2.评论
        "logId": "post_logs > id", // 或者 comment_logs > id
        "editableStatus": true, // 是否可编辑
        "editableTime": "03:00", // 剩余可编辑时长，剩余 3 分钟
        "deadlineTime": "2022-07-01 15:05:00" // 剩余可编辑截止具体日期时间
    }
}
```
:::

## 由草稿发布内容

```php
\FresnsCmdWord::plugin('Fresns')->contentPublishByDraft($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 类型 1.帖子 2.评论 |
| logId | Number | YES | 帖子 `post_logs > id`<br>评论 `comment_logs > id` |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": 1, // 1.帖子 2.评论
        "logId": "post_logs > id", // 或者 comment_logs > id
        "id": "posts > id", // 或者 comments > id
        "fsid": "posts > pid" // 或者 comments > cid
    }
}
```
:::

## 快速发表内容

```php
\FresnsCmdWord::plugin('Fresns')->contentQuickPublish($wordBody)
```
| 参数名 | 类型 | 是否必传 | **帖子**说明 | **评论**说明 |
| --- | --- | --- | --- | --- |
| uid | Number | YES | 用户 UID |  |
| type | Number | YES | `1` 帖子 | `2` 评论 |
| postGid | String | NO | 小组，默认选中了小组 | *帖子专用* |
| postTitle | String | NO | 标题，默认自带标题 | *帖子专用* |
| postIsComment | Boolean | NO | 默认配置：是否可以评论帖子 | *帖子专用* |
| postIsCommentPublic | Boolean | NO | 默认配置：是否公开评论<br>不公开则仅帖子作者可见 | *帖子专用* |
| commentPid | String | NO | *评论专用* | 评论哪个帖子，必传 |
| commentCid | String | NO | *评论专用* | 留空表示评论帖子<br>有值表示回复这条评论 |
| content | String | NO | 正文内容，默认自带内容 |  |
| isMarkdown | Boolean | NO | 默认配置：内容是否为 MD 格式 |  |
| isAnonymous | Boolean | NO | 默认配置：是否匿名 |  |
| mapJson | Object | NO | 默认配置：位置信息 |  |
| eid | String | NO | 默认配置：扩展内容 |  |
| requireReview | Boolean | NO | 是否需要审核<br>默认为 `false` 不需要审核 | 是否需要审核<br>默认为 `false` 不需要审核 |

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": 1, // 1.帖子 2.评论
        "id": "posts > id", // 或者 comments > id
        "fsid": "posts > pid" // 或者 comments > cid
    }
}
```
:::

## 逻辑删除内容

```php
\FresnsCmdWord::plugin('Fresns')->logicalDeletionContent($wordBody)
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
\FresnsCmdWord::plugin('Fresns')->physicalDeletionContent($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 类型 1.帖子 2.评论 |
| contentType | Number | YES | 类型 1.主表内容 2.日志表内容 |
| contentFsid | String | NO | `contentType=1` 专用：帖子 `pid`，评论 `cid` |
| contentLogId | Number | NO | `contentType=2` 专用：日志表主键 id |
