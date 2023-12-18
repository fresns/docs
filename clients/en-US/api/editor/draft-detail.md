# Draft Detail

- Endpoint Path: `/api/fresns/v1/editor/{type}/draft/{did}`
- Method: `GET`
- Request: `Rest`

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
| did | String | **required** | Draft ID |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // Common Data Structure -> History Post Info or History Comment Info
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

- [Common Data Structure -> Post -> History Post Info](../../reference/data/post.md#history-post-info)
- [Common Data Structure -> Comment -> History Comment Info](../../reference/data/comment.md#history-comment-info)
