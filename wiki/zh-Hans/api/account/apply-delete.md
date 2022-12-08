# 申请删除账号

- 接口地址：`/api/v2/account/apply-delete`
- 请求方式：`POST`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| aidToken | YES | YES |
| uid | NO | NO |
| uidToken | NO | NO |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| password | String | NO | 登录密码（以 Base64 传参） |
| verifyCode | String | NO | 验证码 |
| codeType | String | NO | 验证码类型：`email`,`sms` |

**接口使用说明**

- password 和 verifyCode 二选一传参。
- verifyCode 传参时，codeType 参数必传。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "day": "Number / 注销缓冲期，多少天后正式执行删除流程",
        "dateTime": "String / 具体日期时间",
    }
}
```

::: details 开发说明
- 账号表 `accounts > wait_delete` 修改为 1
- 账号表 `accounts > wait_delete_at` 填上 +`delete_account_todo` 天数的时间
:::