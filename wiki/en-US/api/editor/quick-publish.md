# Quick Publish

- Endpoint Path: `/api/v2/editor/{type}/quick-publish`
- Method: `POST`
- Request: `multipart/form-data`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | `post` or `comment` |

## Body Params

| Parameter Name | Type | Required | **Post** Description | **Comment** Description |
| --- | --- | --- | --- | --- |
| postQuotePid | String | *optional* | Quoted post PID<br>Not required | *Post-specific* |
| postGid | String | *optional* | Group<br>[post_editor_group_required](../../database/keyname/publish.md)<br>If required by configuration, this parameter must also be provided | *Post-specific* |
| postTitle | String | *optional* | Title<br>[post_editor_title_required](../../database/keyname/publish.md)<br>If required by configuration, this parameter must also be provided | *Post-specific* |
| postIsComment | Boolean | *optional* | Whether the post can be commented | *Post-specific* |
| postIsCommentPublic | Boolean | *optional* | Whether comments are public<br>If not public, only the post author can view | *Post-specific* |
| commentPid | String | *optional* | *Comment-specific* | Comment on which post, required |
| commentCid | String | *optional* | *Comment-specific* | Empty means comment on post<br>Value means reply to this comment |
| content | String | *optional* | Main content |  |
| isMarkdown | Boolean | *optional* | Is content in MD format |  |
| isAnonymous | Boolean | *optional* | Is it anonymous |  |
| map | String | *optional* | Location information: compress Object information into a string parameter |  |
| extends | String | *optional* | Extended content: compress Array information into a string parameter |  |
| archives | String | *optional* | Extended parameters: compress Array information into a string parameter |  |
| image | File | *optional* | Image file | Image file |

**Request Description**

- Skip the draft logic and publish content directly. Published content does not save drafts (logs).
- Support direct upload of a single image file through the interface.
- `map`, `extends`, `archives` Reference [update draft API](update.md)

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": "String / post or comment",
        "draftId": "Number / Draft ID", // If not a draft, then null
        "fsid": "String / Official content's pid or cid" // If not official content, then null
    }
}
```
