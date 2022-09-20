# 撤销删除申请

- 接口地址：`/api/v2/account/revoke-delete`
- 请求方式：`POST`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| uid | NO | NO |
| token | YES | YES |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

::: details 开发说明
- 注销缓冲期之内，账号可以中途取消注销，恢复账号为正常状态。
- 账号表 `accounts > wait_delete` 修改为 0
- 账号表 `accounts > wait_delete_at` 清空
:::