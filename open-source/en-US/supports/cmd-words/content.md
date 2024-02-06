# Content Command Word

## createDraft

```php
\FresnsCmdWord::plugin('Fresns')->createDraft($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uid | Number | **required** | User UID |
| type | Number | **required** | `1` Post `2` Comment |
| createType | Number | **required** | Creation type `1` Quick create `2` Editor create |
| editorFskey | String | *optional* | Is it a plugin editor, empty means no |
| commentPid | String | *optional* | Comment-Only: Comment on which post, required |
| commentCid | String | *optional* | Comment-Only: Empty means comment on post<br>Value means reply to this comment |
| quotePid | String | *optional* | Post-Only: Quoted Post ID |
| gid | String | *optional* | Post-Only: Group |
| title | String | *optional* | Post-Only: Title |
| content | String | *optional* | Content<br>Insert the file in the content in the format `[file:{fid}]` |
| isMarkdown | Boolean | *optional* | Content in MD format |
| isAnonymous | Boolean | *optional* | Anonymous |
| commentPolicy | Number | *optional* | Post-Only: Who can comment?<br>`1` Everyone `2` People you follow `3` People you follow or verified `4` No one is allowed `5` Only users you mention |
| commentPrivate | Boolean | *optional* | `Post` Are all comments private<br>`Comment` Is this comment private<br>Private is only visible to the author of the comment and the author of the post. |
| gtid | String | *optional* | Geotag ID |
| locationInfo | Object | *optional* | Location Info |
| archives | Array | *optional* | Archive Parameter |
| extends | Array | *optional* | Extend Content |

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
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uid | Number | **required** | User UID |
| type | Number | **required** | `1` Post `2` Comment |
| commentPid | String | *optional* | Comment-Only: Comment on which post, required |
| commentCid | String | *optional* | Comment-Only: Empty means comment on post<br>Value means reply to this comment |
| quotePid | String | *optional* | Post-Only: Quoted Post ID |
| gid | String | *optional* | Post-Only: Group |
| title | String | *optional* | Post-Only: Title |
| content | String | *optional* | Content<br>Insert the file in the content in the format `[file:{fid}]` |
| isMarkdown | Boolean | *optional* | Content in MD format |
| isAnonymous | Boolean | *optional* | Anonymous |
| commentPolicy | Number | *optional* | Post-Only: Who can comment?<br>`1` Everyone `2` People you follow `3` People you follow or verified `4` No one is allowed `5` Only users you mention |
| commentPrivate | Boolean | *optional* | `Post` Are all comments private<br>`Comment` Is this comment private<br>Private is only visible to the author of the comment and the author of the post. |
| gtid | String | *optional* | Geotag ID |
| locationInfo | String | *optional* | Location Info `Object to String` |
| archives | String | *optional* | Archive Parameter `Array to String` |
| extends | String | *optional* | Extend Content `Array to String` |
| requireReview | Boolean | *optional* | Whether review is required<br>Default to `false`, meaning no review is needed |

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
