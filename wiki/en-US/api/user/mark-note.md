# User Mark Note

- Endpoint Path: `/api/v2/user/mark-note`
- Method: `PUT`
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
| interactionType | String | **required** | 标记行为 `follow`,`block` |
| markType | String | **required** | 标记类型 `user`,`group`,`hashtag`,`post`,`comment` |
| fsid | String | **required** | 目标 `FsID`<br>user 传参 uid 或 username<br>group 传参 gid<br>hashtag 传参 hid<br>post 传参 pid<br>comment 传参 cid |
| note | String | *optional* | 备注内容，留空表示清空备注 |

**Request Description**

- 对自己关注或屏蔽的对象进行备注。

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
