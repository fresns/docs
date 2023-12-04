# User Mark Note

- Endpoint Path: `/fresns-api/v1/user/mark-note`
- Method: `PUT`
- Request: `application/json`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Body Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| interactionType | String | **required** | Mark action `follow`,`block` |
| markType | String | **required** | Mark type `user`,`group`,`hashtag`,`geotag`,`post`,`comment` |
| fsid | Number / String | **required** | Target `FsID`<br>For user, param `uid` or `username`<br>For group, param `gid`<br>For hashtag, param `hid`<br>For geotag, param `gtid`<br>For post, param `pid`<br>For comment, param `cid` |
| note | String | *optional* | Note content, Empty to clear the note |

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