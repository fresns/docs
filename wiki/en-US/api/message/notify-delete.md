# [Notify] Delete

- Endpoint Path: `/api/v2/notify/delete`
- Method: `DELETE`
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
| notifyType | Number | *optional* | 2.系统通知 / 3.推荐 / 4.关注 / 5.点赞 / 6.提及（艾特） / 7.评论 |
| notifyIds | String | *optional* | 消息 notifyId，多个以英文逗号隔开 |

**Request Description**

- `notifyType` 和 `notifyIds` 二选一传参，不可同时传参。
- `type = all` 使用 `notifyType` 参数，批量删除指定类型全部消息。
- `type = choose` 使用 `notifyIds` 参数，批量删除指定 ID 的消息。

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
