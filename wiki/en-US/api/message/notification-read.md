# [Notification] Mark As Read

- Endpoint Path: `/api/v2/notification/mark-as-read`
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
| type | String | **required** | `all` or `choose` |
| notificationType | Number | *optional* | `0` All（1~8)<br>`1` System `2` Recommend `3` Like `4` Dislike `5` Follow `6` Block `7` Mention `8` Comment (reply) |
| notificationIds | String | *optional* | `notificationId`, separated by English commas for multiple id |

**Request Description**

- `notificationType` 和 `notificationIds` 二选一传参，不可同时传参。
- `type = all` 使用 `notificationType` 参数，批量设置指定类型全部为已读。
- `type = choose` 使用 `notificationIds` 参数，批量设置指定 ID 的消息为已读。

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
