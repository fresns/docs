# 发送验证码

- 接口地址：`/api/v2/common/send-verify-code`
- 请求方式：`POST`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | NO |
| X-Fresns-Aid-Token | NO | NO |
| X-Fresns-Uid | NO | NO |
| X-Fresns-Uid-Token | NO | NO |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | 发送类型：`email`,`sms` |
| useType | Number | YES | 用途类型：1.新账号验证 / 2.已存账号验证 / 3.填空验证 / 4.身份验证 / 5.其他 |
| templateId | Number | YES | [模板编号](../../database/keyname/send.md#验证码模板设置) |
| account | String | YES | 邮箱或者手机号（用途为 4 时，填写任意内容，不作使用） |
| countryCode | Number | NO | 手机号码专用，专用时必填，国际区号 |

**接口使用说明**

- useType 用途类型
    - `1` 新账号验证: 未登录时也可请求，但是账号必须在数据库中不存在。例如，新注册、更换绑定等。
    - `2` 已存账号验证: 未登录时也可请求，但是账号必须在数据库中存在。例如，验证码登录等。
    - `3` 填空验证: 登录时才可请求，并且账号的对应的邮箱或手机号必须为空。例如，设置账号邮箱或手机号绑定等。
    - `4` 身份验证: 登录时才可请求，`account` 任意传参，接口会忽略该参数，使用当前登记账号的绑定邮箱或手机号发送验证码。例如，修改重要资料的前置验证等。
    - `5` 按传参账号直接发送。
- 接口限制，1 分钟内容仅可发送 1 条验证码，10 分钟内 5 条。接口之外，如果另外限制，则由关联的插件决定。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

::: details 开发说明
- 凭 useType 参数判断当前请求是否有权发送验证码。
- 有权发送后，调用命令字发送 `sendCode`
:::