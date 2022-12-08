# User Mark

- Endpoint Path: `/api/v2/user/mark`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| aidToken | **required** | **required** |
| uid | **required** | **required** |
| uidToken | **required** | **required** |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| interactionType | String | **required** | 标记行为 `like`,`dislike`,`follow`,`block` |
| markType | String | **required** | 标记类型 `user`,`group`,`hashtag`,`post`,`comment` |
| fsid | String | **required** | 目标 `FsID`<br>user 传参 uid 或 username<br>group 传参 gid<br>hashtag 传参 hid<br>post 传参 pid<br>comment 传参 cid |

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
