# Quick Publish

- Endpoint Path: `/api/fresns/v1/editor/{type}/publish`
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
| locationInfo | String | *optional* | Location Info `Object to String` |
| archives | String | *optional* | Archive Parameter `Array to String` |
| extends | String | *optional* | Extend Content `Array to String` |
| image | File | *optional* | Image file |

**Request Description**

- Skip the draft logic and publish content directly. Published content does not save drafts (histories).
- Support direct upload of a single image file through the interface.
- When published, the location information `locationInfo` is not used, even if it has a `gtid` value.
- `locationInfo`, `archives`, `extends` Reference [update draft API](draft-update.md)

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
