# Content Command Word

## createDraft

```php
\FresnsCmdWord::plugin('Fresns')->createDraft($wordBody)
```
| Parameter Name | Type | Required | **Post** Description | **Comment** Description |
| --- | --- | --- | --- | --- |
| uid | Number | **required** | User UID |  |
| type | Number | **required** | `1` Post | `2` Comment |
| createType | Number | **required** | Creation Type 1. Quick Create 2. Editor Create |  |
| editorUnikey | String | *optional* | Is it a plugin editor? Empty means no |  |
| postGid | String | *optional* | Group, default selected group | *Post specific* |
| postTitle | String | *optional* | Title, default with title | *Post specific* |
| postIsComment | Boolean | *optional* | Default configuration: Can the post be commented on? | *Post specific* |
| postIsCommentPublic | Boolean | *optional* | Default configuration: Are comments public?<br>If not public, only the post author can see | *Post specific* |
| postQuotePid | String | *optional* | Quoted post PID<br>Not required | *Post specific* |
| commentPid | String | *optional* | *Comment specific* | Which post to comment, required |
| commentCid | String | *optional* | *Comment specific* | Leave empty to comment on the post<br>If there is a value, it means to reply to this comment |
| content | String | *optional* | Main content, default with content |  |
| isMarkdown | Boolean | *optional* | Default configuration: Is the content in MD format? |  |
| isAnonymous | Boolean | *optional* | Default configuration: Is it anonymous? |  |
| map | Object | *optional* | Default configuration: Location information |  |
| extends | Array | *optional* | Default configuration: Extended content |  |
| archives | Array | *optional* | Default configuration: Extended parameters |  |

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": 1, // 1.Post 2.Comment
        "logId": "post_logs->id" // or comment_logs->id
    }
}
```
:::

## generateDraft

```php
\FresnsCmdWord::plugin('Fresns')->generateDraft($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Post 2.Comment |
| fsid | String | *optional* | Post `posts->pid`<br>Comment `comments->cid` |

- 将已发表的正式内容，还原生成编辑草稿。
- 评论不支持子孙级评论，仅限一级评论可生成草稿。

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": 1, // 1.Post 2.Comment
        "logId": "post_logs->id", // or comment_logs->id
        "editableStatus": true, // Whether it is editable
        "editableTime": "03:00", // Remaining editable duration, 3 minutes left
        "deadlineTime": "2022-07-01 15:05:00" // The specific date and time remaining for editing
    }
}
```
:::

## contentPublishByDraft

```php
\FresnsCmdWord::plugin('Fresns')->contentPublishByDraft($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Post 2.Comment |
| logId | Number | **required** | Post `post_logs->id`<br>Comment `comment_logs->id` |

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": 1, // 1.Post 2.Comment
        "id": "posts->id", // or comments->id
        "fsid": "posts->pid" // or comments->cid
    }
}
```
:::

## contentQuickPublish

```php
\FresnsCmdWord::plugin('Fresns')->contentQuickPublish($wordBody)
```
| Parameter Name | Type | Required | **Post** Description | **Comment** Description |
| --- | --- | --- | --- | --- |
| uid | Number | **required** | User UID |  |
| type | Number | **required** | `1` Post | `2` Comment |
| postGid | String | *optional* | Group, default selected group | *Post specific* |
| postTitle | String | *optional* | Title, default with title | *Post specific* |
| postIsComment | Boolean | *optional* | Default configuration: Can the post be commented on? | *Post specific* |
| postIsCommentPublic | Boolean | *optional* | Default configuration: Are comments public?<br>If not public, only the post author can see | *Post specific* |
| postQuotePid | String | *optional* | Quoted post PID<br>Not required | *Post specific* |
| commentPid | String | *optional* | *Comment specific* | Which post to comment, required |
| commentCid | String | *optional* | *Comment specific* | Leave empty to comment on the post<br>If there is a value, it means to reply to this comment |
| content | String | *optional* | Main content, default with content |  |
| isMarkdown | Boolean | *optional* | Default configuration: Is the content in MD format? |  |
| isAnonymous | Boolean | *optional* | Default configuration: Is it anonymous? |  |
| map | Object | *optional* | Default configuration: Location information |  |
| extends | Array | *optional* | Default configuration: Extended content |  |
| archives | Array | *optional* | Default configuration: Extended parameters |  |
| requireReview | Boolean | optional | Whether review is required<br>Default to `false`, meaning no review is needed | Whether review is required<br>Default to `false`, meaning no review is needed |

::: details Return Example
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": 1, // 1.Post 2.Comment
        "logId": "post_logs->id", // or comment_logs->id
        "id": "posts->id", // or comments->id
        "fsid": "posts->pid" // or comments->cid
    }
}
```
:::

## logicalDeletionContent

```php
\FresnsCmdWord::plugin('Fresns')->logicalDeletionContent($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Post 2.Comment |
| contentType | Number | **required** | 1.Main table content 2.Log table contents |
| contentFsid | String | *optional* | `contentType=1` specific: Post `pid`Comment `cid` |
| contentLogId | Number | *optional* | `contentType=2` specific: Log table primary key ID |

*本命令字是全量逻辑删除，如果业务场景涉及撤回功能，请勿使用，避免恢复时处理数据较多。*

## physicalDeletionContent

```php
\FresnsCmdWord::plugin('Fresns')->physicalDeletionContent($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Post 2.Comment |
| contentType | Number | **required** | 1.Main table content 2.Log table contents |
| contentFsid | String | *optional* | `contentType=1` specific: Post `pid`Comment `cid` |
| contentLogId | Number | *optional* | `contentType=2` specific: Log table primary key ID |
