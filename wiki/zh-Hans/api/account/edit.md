# 修改账号资料

- 接口地址：`/api/v2/account/edit`
- 请求方式：`PUT`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | NO | NO |
| X-Fresns-Uid-Token | NO | NO |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| codeType | String | NO | 验证码类型：`email`,`sms` |
| verifyCode | String | NO | 验证码 |
| newVerifyCode | String | NO | 新账号验证码，修改邮箱和手机号专用 |
| editEmail | String | NO | 邮箱（留空代表不修改） |
| editPhone | Number | NO | 手机号码（留空代表不修改） |
| editCountryCode | Number | NO | 国际区号，修改手机号必传 |
| password | String | NO | 当前登录密码（以 Base64 传参） |
| editPassword | String | NO | 修改登录密码（留空代表不修改，以 Base64 传参） |
| editPasswordConfirm | String | NO | 再传一次新密码（留空代表不修改，以 Base64 传参） |
| walletPassword | String | NO | 当前钱包密码（以 Base64 传参） |
| editWalletPassword | String | NO | 修改钱包密码（留空代表不修改，以 Base64 传参） |
| editWalletPasswordConfirm | String | NO | 再传一次新钱包密码（留空代表不修改，以 Base64 传参） |
| editLastLoginTime | Boolean | NO | 最后一次登录时间（留空代表不修改）<br>`1` 更新 |
| deviceToken | String | NO | iOS 或 Android 设备 Token（留空代表不修改） |

**接口使用说明**

- `editLastLoginTime` 不需要验证码
- 一个验证码只能修改一次资料
- 设置邮箱（当前账号无邮箱）
    - `codeType`
    - `newVerifyCode` 验证码模板 ID 为 `4`
    - `editEmail`
- 修改邮箱
    - `codeType`
    - `verifyCode` 验证码模板 ID 为 `4`
    - `newVerifyCode` 验证码模板 ID 为 `3`
    - `editEmail`
- 设置手机号码（当前账号无手机号码）
    - `codeType`
    - `newVerifyCode` 验证码模板 ID 为 `4`
    - `editPhone`
    - `editCountryCode`
- 修改手机号码
    - `codeType`
    - `verifyCode` 验证码模板 ID 为 `4`
    - `newVerifyCode` 验证码模板 ID 为 `3`
    - `editPhone`
    - `editCountryCode`
- 修改登录密码：`verifyCode` 和 `password` 必传其一，或者全部传，全传则全验证
    - `verifyCode` 验证码模板 ID 为 `5`
    - `password`
    - `editPassword`
    - `editPasswordConfirm`
- 修改钱包密码：`verifyCode` 和 `walletPassword` 必传其一，或者全部传，全传则全验证
    - `verifyCode` 验证码模板 ID 为 `6`
    - `walletPassword`
    - `editWalletPassword`
    - `editWalletPasswordConfirm`

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

::: details 开发说明
- `editEmail` 修改邮箱，先验证 `accounts > email` 是否为空。
    - 为空：代表新绑定邮箱
        - 验证码参数仅 `newVerifyCode` 必传；
        - 以新邮箱 `editEmail` + `newVerifyCode` 验证，验证成功后，填充 `email` 字段。
    - 不为空：代表更换绑定
        - 两个验证码参数 `verifyCode` + `newVerifyCode` 必传，`verifyCode` 来自[身份验证](verify-identity.md)；
        - 先拿当前数据库 `accounts > email` + `verifyCode` 验证，验证通过后下一步；
        - 再以新邮箱 `editEmail` + `newVerifyCode` 验证，验证成功后，新邮箱替换当前存储的邮箱 `email` 字段。

- `editPhone` 修改手机号，联动参数 `editCountryCode` 必传，然后验证 `accounts > phone` 是否为空。
    - 为空：代表新绑定手机号
        - 验证码参数仅 `newVerifyCode` 必传；
        - 以新手机号 `editCountryCode . editPhone` + `newVerifyCode` 验证，验证成功后，填充手机号 `country_code` + `pure_phone` + `phone` 三个字段。
    - 不为空：代表更换绑定
        - 两个验证码参数 `verifyCode` + `newVerifyCode` 必传，`verifyCode` 来自[身份验证](verify-identity.md)；
        - 先拿当前数据库 `accounts > phone` + `verifyCode` 验证，验证通过后下一步；
        - 再以新手机号 `editPhone` + `newVerifyCode` 验证，验证成功后，新手机号替换当前存储的手机号，修改 `country_code` + `pure_phone` + `phone` 三个字段。

- `editPassword` 修改登录密码
    - 传了 `verifyCode` 和 `codeType` 参数，代表验证码修改，拿当前用账号表现存信息（邮箱或手机号）去匹配 `verifyCode` 验证。
    - 传了 `password` 参数，代表旧密码验证修改，验证旧密码是否正确。

- `editWalletPassword` 修改钱包密码
    - 传了 `verifyCode` 和 `codeType` 参数，代表验证码修改，拿当前账号表现存信息（邮箱或手机号）去匹配 `verifyCode` 验证。
    - 传了 `walletPassword` 参数，代表旧密码验证修改，验证旧密码是否正确。

- `deleteConnectInfo` 删除第三方互联信息，删除该账号互联凭证表 `connect_id` 这条记录（不是主键 ID）。

- `editLastLoginTime` 修改最后登录时间，不需要验证，登录状态下就可以修改，账号表 `accounts > last_login_at` 字段。
:::