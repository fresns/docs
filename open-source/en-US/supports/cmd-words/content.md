# Content Command Word

## createDraft

```php
\FresnsCmdWord::plugin('Fresns')->createDraft($wordBody);
```
| Parameter Name | Type | Required | **Post** Description | **Comment** Description |
| --- | --- | --- | --- | --- |
| uid | Number | **required** | User UID |  |
| type | Number | **required** | `1` Post | `2` Comment |
| createType | Number | **required** | Creation Type 1. Quick Create 2. Editor Create |  |
| editorFskey | String | *optional* | Is it a plugin editor? Empty means no |  |
| postGid | String | *optional* | Group, default selected group | *Post specific* |
| postTitle | String | *optional* | Title, default with title | *Post specific* |
| postIsCommentDisabled | Boolean | NO | Whether comments are disabled | *Post-specific* |
| postIsCommentPrivate  | Boolean | NO | Whether the comment is private<br>Visible only to the comment author and post author | *Post-specific* |
| postQuotePid | String | *optional* | Quoted post PID<br>Not required | *Post specific* |
| commentPid | String | *optional* | *Comment specific* | Which post to comment, required |
| commentCid | String | *optional* | *Comment specific* | Leave empty to comment on the post<br>If there is a value, it means to reply to this comment |
| content | String | *optional* | Main content, default with content |  |
| isMarkdown | Boolean | *optional* | Is the content in MD format? |  |
| isAnonymous | Boolean | *optional* | Is it anonymous? |  |
| map | Object | *optional* | Location information |  |
| extends | Array | *optional* | Extended content |  |
| archives | Array | *optional* | Extended parameters |  |

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
\FresnsCmdWord::plugin('Fresns')->generateDraft($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Post 2.Comment |
| fsid | String | *optional* | Post `posts->pid`<br>Comment `comments->cid` |

- Revert published formal content to an editable draft.
- Comments do not support descendant-level comments, only first-level comments can generate drafts.

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
\FresnsCmdWord::plugin('Fresns')->contentPublishByDraft($wordBody);
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
\FresnsCmdWord::plugin('Fresns')->contentQuickPublish($wordBody);
```
| Parameter Name | Type | Required | **Post** Description | **Comment** Description |
| --- | --- | --- | --- | --- |
| uid | Number | **required** | User UID |  |
| type | Number | **required** | `1` Post | `2` Comment |
| postGid | String | *optional* | Group, default selected group | *Post specific* |
| postTitle | String | *optional* | Title, default with title | *Post specific* |
| postIsCommentDisabled | Boolean | NO | Whether comments are disabled | *Post-specific* |
| postIsCommentPrivate  | Boolean | NO | Whether the comment is private<br>Visible only to the comment author and post author | *Post-specific* |
| postQuotePid | String | *optional* | Quoted post PID<br>Not required | *Post specific* |
| commentPid | String | *optional* | *Comment specific* | Which post to comment, required |
| commentCid | String | *optional* | *Comment specific* | Leave empty to comment on the post<br>If there is a value, it means to reply to this comment |
| content | String | *optional* | Main content, default with content |  |
| isMarkdown | Boolean | *optional* | Is the content in MD format? |  |
| isAnonymous | Boolean | *optional* | Is it anonymous? |  |
| map | Object | *optional* | Location information |  |
| extends | Array | *optional* | Extended content |  |
| archives | Array | *optional* | Extended parameters |  |
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
\FresnsCmdWord::plugin('Fresns')->logicalDeletionContent($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Post 2.Comment |
| contentType | Number | **required** | 1.Main table content 2.Log table contents |
| contentFsid | String | *optional* | `contentType=1` specific: Post `pid`Comment `cid` |
| contentLogId | Number | *optional* | `contentType=2` specific: Log table primary id |

*This command word is a full logical deletion. If the business scenario involves a withdrawal function, do not use it to avoid processing too much data during recovery.*

## physicalDeletionContent

```php
\FresnsCmdWord::plugin('Fresns')->physicalDeletionContent($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Post 2.Comment |
| contentType | Number | **required** | 1.Main table content 2.Log table contents |
| contentFsid | String | *optional* | `contentType=1` specific: Post `pid`Comment `cid` |
| contentLogId | Number | *optional* | `contentType=2` specific: Log table primary id |

## addContentMoreInfo

```php
\FresnsCmdWord::plugin('Fresns')->addContentMoreInfo($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Post 2.Comment |
| fsid | String | **required** | `pid` or `cid` |
| key | String | **required** | moreInfo key |
| value | String/Number/Array | **required** | moreInfo value |

::: details View Examples
```php
$wordBody = [
    'type' => 1,
    'fsid' => 'fresns-post',
    'key' => 'ipLocation',
    'value' => 'Singapore',
];

$wordBody = [
    'type' => 1,
    'fsid' => 'fresns-post',
    'key' => 'deviceName',
    'value' => 'iPhone',
];
```
:::

## setContentSticky

```php
\FresnsCmdWord::plugin('Fresns')->setContentSticky($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Post 2.Comment |
| fsid | String | **required** | `pid` or `cid` |
| state | Number | **required** | Post: 1.No / 2.Group Sticky / 3.Global Sticky<br>Comment: 1.No / 2.Sticky |

## setContentDigest

```php
\FresnsCmdWord::plugin('Fresns')->setContentDigest($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Post 2.Comment |
| fsid | String | **required** | `pid` or `cid` |
| state | Number | **required** | 1.No / 2.General Digest / 3.Premium Digest |

## setContentCloseDelete

```php
\FresnsCmdWord::plugin('Fresns')->setContentCloseDelete($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.Post 2.Comment |
| fsid | String | **required** | `pid` or `cid` |
| canDelete | Boolean | **required** | 0.Cannot be deleted 1.Can be deleted |

## setPostAuth

```php
\FresnsCmdWord::plugin('Fresns')->setPostAuth($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| pid | String | **required** |  |
| type | String | **required** | `add` or `remove` |
| uid | Number | *optional* | Specify user |
| rid | Number | *optional* | Specify role |

- Choose one between `uid` and `rid` to pass as a parameter

## setPostAffiliateUser

```php
\FresnsCmdWord::plugin('Fresns')->setPostAffiliateUser($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| pid | String | **required** |  |
| type | String | **required** | `add` or `remove` |
| uid | Number | **required** | Specify user |
| fskey | String | **required** | Plugin Fskey |
| moreInfo | Json | *optional* | Additional record information (Json) |

## setCommentExtendButton

```php
\FresnsCmdWord::plugin('Fresns')->setCommentExtendButton($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| cid | String | **required** |  |
| close | Boolean | *optional* | `false` disables extension button<br>`true` enables extension button |
| change | String | *optional* | `default` Default<br>`active` Two-state |
| activeNameKey | String | *optional* | For change=active only, leave blank for no change<br>Passing configuration table [configs->item_key](../../database/systems/configs.md) can adapt to multiple languages |
| activeStyle | String | *optional* | For change=active only, leave blank for no change<br>`primary`, `secondary`, `success`, `danger`, `warning`, `info` |

- Choose one between `close` and `change` to pass as a parameter
