# [对话]删除对话

- 接口地址：`/api/fresns/v1/conversation/{uidOrUsername}/messages`
- 请求方式：`DELETE`
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
| cmids | String | YES | 多个 `cmid` 以英文逗号隔开 |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
