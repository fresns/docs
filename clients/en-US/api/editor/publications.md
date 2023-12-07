# Quick Publish

- Endpoint Path: `/api/fresns/v1/editor/{type}/publications`
- Method: `POST`
- Request: `multipart/form-data`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Path Variables

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | `post` or `comment` |

## Body Params

| Key | Type | Required | **Post** Description | **Comment** Description |
| --- | --- | --- | --- | --- |
| postQuotePid | String | *optional* | Quoted Post ID<br>Not required | *Post-specific* |
| postGid | String | *optional* | Group<br>`editor.features.group.required`<br>If required by configuration, this parameter must also be provided | *Post-specific* |
| postTitle | String | *optional* | Title<br>`editor.toolbar.title.required`<br>If required by configuration, this parameter must also be provided | *Post-specific* |
| postCommentDisabled | Boolean | NO | Whether comments are disabled | *Post-specific* |
| postCommentPrivate  | Boolean | NO | Whether the comment is private<br>Visible only to the comment author and post author | *Post-specific* |
| commentPid | String | *optional* | *Comment-specific* | Comment on which post, required |
| commentCid | String | *optional* | *Comment-specific* | Empty means comment on post<br>Value means reply to this comment |
| content | String | *optional* | Content<br>Insert the file in the content in the format `[file:{fid}]` |  |
| isMarkdown | Boolean | *optional* | Is content in MD format |  |
| isAnonymous | Boolean | *optional* | Is it anonymous |  |
| map | String | *optional* | Location information: compress Object information into a string parameter |  |
| archives | String | *optional* | Extended parameters: compress Array information into a string parameter |  |
| extends | String | *optional* | Extended content: compress Array information into a string parameter |  |
| image | File | *optional* | Image file | Image file |

**Request Description**

- Skip the draft logic and publish content directly. Published content does not save drafts (histories).
- Support direct upload of a single image file through the interface.
- `map`, `extends`, `archives` Reference [update draft API](draft-update.md)

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": "String / post or comment",
        "did": "String / Draft ID", // If not a draft, then null
        "fsid": "String / Official content's pid or cid" // If not official content, then null
    }
}
```
