# Create Draft

- Endpoint Path: `/api/fresns/v1/editor/{type}/draft`
- Method: `POST`
- Request: `Rest` + `application/json`

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

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| commentPid | String | *optional* | `Comment-Only` Comment on this post |
| commentCid | String | *optional* | `Comment-Only` Reply to this comment |
| quotePid | String | *optional* | `Post-Only` Quoted Post ID |
| gid | String | *optional* | `Post-Only` Group |
| title | String | *optional* | `Post-Only` Title |
| content | String | *optional* | Content<br>Insert the file in the content in the format `[file:{fid}]` |
| isMarkdown | Boolean | *optional* | Content in MD format |
| isAnonymous | Boolean | *optional* | Anonymous |
| commentPolicy | Number | *optional* | `Post-Only` Who can comment?<br>`1` Everyone `2` People you follow `3` People you follow or verified `4` No one is allowed `5` Only users you mention |
| commentPrivate | Boolean | *optional* | `Post` Are all comments private<br>`Comment` Is this comment private<br>Private is only visible to the author of the comment and the author of the post. |
| gtid | String | *optional* | Geotag ID |
| locationInfo | Object | *optional* | Location Info |
| archives | Array | *optional* | Archive Parameter |
| extends | Array | *optional* | Extend Content |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // Common Data Structure -> Draft Info
        },
        "controls": {
            "isEditDraft": "Boolean / Whether it is an editable draft",
            "editableStatus": "Boolean / Whether it can be edited",
            "editableTime": "String / Remaining editable time, for example 03:00 means 3 minutes left",
            "deadlineTime": "String / The specific date and time of the editable deadline, for example 2022-07-01 15:05:00"
        }
    }
}
```

- [Common Data Structure -> Draft Info](../../reference/data/draft.md)
