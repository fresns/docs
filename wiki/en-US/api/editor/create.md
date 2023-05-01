# Create Draft

- Endpoint Path: `/api/v2/editor/{type}/create`
- Method: `POST`
- Request: `Rest` + `application/json`

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
| createType | Number | **required** | Creation type 1. Quick create 2. Editor create |  |
| postQuotePid | String | *optional* | Quoted post PID<br>Not required | *Post-specific* |
| editorFskey | String | *optional* | Is it a plugin editor, empty means no |  |
| postGid | String | *optional* | Group, default selected group | *Post-specific* |
| postTitle | String | *optional* | Title, default with title | *Post-specific* |
| postIsComment | Boolean | *optional* | Default configuration: whether the post can be commented | *Post-specific* |
| postIsCommentPublic | Boolean | *optional* | Default configuration: whether comments are public<br>If not public, only the post author can view | *Post-specific* |
| commentPid | String | *optional* | *Comment-specific* | Comment on which post, required |
| commentCid | String | *optional* | *Comment-specific* | Empty means comment on post<br>Value means reply to this comment |
| content | String | *optional* | Main content, default with content |  |
| isMarkdown | Boolean | *optional* | Default configuration: is content in MD format |  |
| isAnonymous | Boolean | *optional* | Default configuration: is it anonymous |  |
| map | Object | *optional* | Default configuration: location information |  |
| extends | Array | *optional* | Default configuration: extended content |  |
| archives | Array | *optional* | Default configuration: extended parameters |

**Request Description**

- When creating a draft, if there is already a draft with `createType=1` in the database and it is empty (no content, no files, no extended content), this creation will directly return that draft.
- `createType=2` indicates a draft actively created by the user.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // Common Data Structure -> Post Log Info or Comment Log Info
        },
        "editControls": {
            "isEditDraft": "Boolean / Whether it is an editable draft",
            "editableStatus": "Boolean / Whether it can be edited",
            "editableTime": "String / Remaining editable time, for example 03:00 means 3 minutes left",
            "deadlineTime": "String / The specific date and time of the editable deadline, for example 2022-07-01 15:05:00"
        }
    }
}
```
