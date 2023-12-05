# [对话]删除对话

- 接口地址：`/api/fresns/v1/conversation/delete`
- 请求方式：`DELETE`
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
- `type = conversation` 使用 `cvid` 参数，将当前对话框设置为删除，并将对话下属于当前用户的消息全部删除。
- `type = message` 使用 `cmids` 参数，批量删除指定 ID 的消息。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
