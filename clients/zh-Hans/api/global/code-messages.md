# 状态码信息

- 接口地址：`/fresns-api/v1/global/code-messages`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | NO |
| X-Fresns-Aid-Token | NO | NO |
| X-Fresns-Uid | NO | NO |
| X-Fresns-Uid-Token | NO | NO |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| fskey | String | NO | 状态码 Fskey，留空将使用默认 Fresns |
| codes | String | NO | [状态码编号](../../reference/error-codes.md)，多个以英文逗号隔开，留空代表输出全部 |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "code": "message",
        "30000": "参数格式错误",
    }
}
```
