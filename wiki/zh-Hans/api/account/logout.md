# 退出登录

- 接口地址：`/api/v2/account/logout`
- 请求方式：`DELETE`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| aidToken | YES | YES |
| uid | NO | NO |
| uidToken | NO | NO |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

::: details 开发说明
- aid 必填，删除账号 `session_tokens > token`
- uid 选填，填写后，删除该用户 `session_tokens > token`
:::