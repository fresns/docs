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
| notificationType | Number | *optional* | `0` All（1~9)<br>`1` System `2` Recommend `3` Like `4` Dislike `5` Follow `6` Block `7` Mention `8` Comment (reply) `9` Quote |
| notificationIds | String | *optional* | `notificationId`, separated by English commas for multiple id |

**Request Description**

- Choose either `notificationType` or `notificationIds` to pass as a parameter, but not both.
- `type = all`: Use the `notificationType` parameter to set all messages of the specified type as read in bulk.
- `type = choose`: Use the `notificationIds` parameter to set specified ID messages as read in bulk.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
