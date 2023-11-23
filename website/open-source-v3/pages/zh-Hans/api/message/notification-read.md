# [通知]更新阅读状态

- 接口地址：`/api/v2/notification/mark-as-read`
- 请求方式：`PUT`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | `all` 或 `choose` |
| notificationType | Number | NO | `0` 全部类型设为已读（1~9)<br>`1` 系统通知 `2` 推荐内容 `3` 点赞 `4` 踩 `5` 关注 `6` 屏蔽 `7` 提及 `8` 评论 `9` 引用 |
| notificationIds | String | NO | 消息 notifications->id，多个以英文逗号隔开 |

**接口使用说明**

- `notificationType` 和 `notificationIds` 二选一传参，不可同时传参。
- `type = all` 使用 `notificationType` 参数，批量设置指定类型全部为已读。
- `type = choose` 使用 `notificationIds` 参数，批量设置指定 ID 的消息为已读。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
