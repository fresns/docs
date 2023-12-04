# User Mark

- Endpoint Path: `/fresns-api/v1/user/mark`
- Method: `POST`
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
| interactionType | String | **required** | Mark action `like`,`dislike`,`follow`,`block` |
| markType | String | **required** | Mark type `user`,`group`,`hashtag`,`geotag`,`post`,`comment` |
| fsid | Number / String | **required** | Target `FsID`<br>For user, param `uid` or `username`<br>For group, param `gid`<br>For hashtag, param `hid`<br>For geotag, param `gtid`<br>For post, param `pid`<br>For comment, param `cid` |

**Request Description**

- The new creation (creation) and cancellation (deletion) of the mark use the same interface and the same parameters. If it is not marked, it is new; if it is marked, it is canceled.
- Whether you have the right to operate, configure portal `operation > interaction configuration > interaction behavior settings`. The configuration values are in the `interaction` parameters of the corresponding content interface.
- When operating the team attention tag, if the team parameter `followType=2`, attention cannot be established through this interface (it is taken over by the associated plug-in).
- `like` and `dislike` are mutually exclusive. If you have already clicked `like` and then `dislike`, you will cancel the `like` and create a new `dislike`, and vice versa.
- `follow` and `block` are mutually exclusive. If you have `followed` and then clicked the `block`, you will cancel the `follow` and create a new `block`, and vice versa.
- You cannot operate the `follow` and `block` tags on yourself.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```