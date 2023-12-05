# [对话]更新阅读状态

- 接口地址：`/api/fresns/v1/conversation/mark-as-read`
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
| type | String | YES | `conversation` 或 `message` |
| cvid | String | NO |  |
| cmids | String | NO | 多个以英文逗号隔开 |

**接口使用说明**

- `cvid` 和 `cmids` 二选一传参，不可同时传参。
- `type = conversation` 使用 `cvid` 参数，将当前对话框设置为已读，不包括对话下的消息。
- `type = message` 使用 `cmids` 参数，批量设置指定 ID 的消息为已读。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
