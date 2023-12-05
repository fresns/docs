# 退出登录

- 接口地址：`/api/fresns/v1/account/logout`
- 请求方式：`DELETE`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | NO | NO |
| X-Fresns-Uid-Token | NO | NO |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
