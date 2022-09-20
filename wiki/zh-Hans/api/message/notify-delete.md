# [通知]删除消息

- 接口地址：`/api/v2/notify/delete`
- 请求方式：`DELETE`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| uid | YES | YES |
| token | YES | YES |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | `all` 或 `choose` |
| notifyType | Number | NO | 2.系统通知 / 3.推荐 / 4.关注 / 5.点赞 / 6.提及（艾特） / 7.评论 |
| notifyIds | String | NO | 消息 notifyId，多个以英文逗号隔开 |

**接口使用说明**

- `notifyType` 和 `notifyIds` 二选一传参，不可同时传参。
- `type = all` 使用 `notifyType` 参数，批量删除指定类型全部消息。
- `type = choose` 使用 `notifyIds` 参数，批量删除指定 ID 的消息。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
