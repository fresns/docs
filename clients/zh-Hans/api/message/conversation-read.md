# [对话]更新阅读状态

- 接口地址：`/api/fresns/v1/conversation/{uidOrUsername}/read-status`
- 请求方式：`PATCH`
- 传参方式：`Rest` + `application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |

## Path 变量

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uidOrUsername | Number / String | YES | 用户 `uid` 或者 `username` |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| cmids | String | NO | 多个 `cmid` 以英文逗号隔开 |

**接口使用说明**

- `cmids` 留空则整个对话标记为已读
- 使用 `cmids` 参数，批量设置指定 ID 的消息为已读。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
