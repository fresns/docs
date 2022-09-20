# Apply Delete

- Endpoint Path: `/api/v2/account/apply-delete`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| uid | *optional* | *optional* |
| token | **required** | **required** |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| password | String | *optional* | 登录密码（以 Base64 传参） |
| verifyCode | String | *optional* | 验证码 |
| codeType | String | *optional* | 验证码类型：`email`,`sms` |

**Request Description**

- password 和 verifyCode 二选一传参。
- verifyCode 传参时，codeType 参数必传。

## Return

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
