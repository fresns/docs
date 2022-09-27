# [会话]更新阅读状态

- 接口地址：`/api/v2/dialog/mark-as-read`
- 请求方式：`PUT`
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
| type | String | YES | `dialog` 或 `message` |
| dialogId | Number | NO |  |
| messageIds | String | NO | 多个以英文逗号隔开 |

**接口使用说明**

- `dialogId` 和 `messageIds` 二选一传参，不可同时传参。
- `type = dialog` 使用 `dialogId` 参数，将当前会话框设置为已读，不包括会话下的消息。
- `type = message` 使用 `messageIds` 参数，批量设置指定 ID 的消息为已读。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```