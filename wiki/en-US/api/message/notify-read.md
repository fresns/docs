# [Notify] Mark As Read

- Endpoint Path: `/api/v2/notify/mark-as-read`
- Method: `PUT`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| uid | **required** | **required** |
| token | **required** | **required** |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | `all` 或 `choose` |
| notifyType | Number | *optional* | `1` 系统通知 `2` 推荐内容 `3` 点赞 `4` 踩 `5` 关注 `6` 屏蔽 `7` 提及 `8` 评论 |
| notifyIds | String | *optional* | 消息 notifyId，多个以英文逗号隔开 |

**Request Description**

- `notifyType` 和 `notifyIds` 二选一传参，不可同时传参。
- `type = all` 使用 `notifyType` 参数，批量设置指定类型全部为已读。
- `type = choose` 使用 `notifyIds` 参数，批量设置指定 ID 的消息为已读。

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
