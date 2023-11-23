# User Mark Note

- Endpoint Path: `/api/v2/user/mark-note`
- Method: `PUT`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| interactionType | String | **required** | Mark action `follow`,`block` |
| markType | String | **required** | Mark type `user`,`group`,`hashtag`,`post`,`comment` |
| fsid | Number / String | **required** | Target `FsID`<br>For user, pass `uid` or `username`<br>For group, pass `gid`<br>For hashtag, pass `hid`<br>For post, pass `pid`<br>For comment, pass `cid` |
| note | String | *optional* | Note content, leave empty to clear the note |

**Request Description**

- Make a note of the people you follow or block.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
