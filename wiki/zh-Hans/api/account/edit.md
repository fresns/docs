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
| newEmail | String | NO | 邮箱（留空代表不修改） |
| newPhone | Number | NO | 手机号码（留空代表不修改） |
| newCountryCode | Number | NO | 国际区号，修改手机号必传 |
| newVerifyCode | String | NO | 新账号（邮箱和手机号）验证码 |
| currentPassword | String | NO | 当前登录密码（以 Base64 传参） |
| newPassword | String | NO | 修改登录密码（留空代表不修改，以 Base64 传参） |
| currentWalletPassword | String | NO | 当前钱包密码（以 Base64 传参） |
| newWalletPassword | String | NO | 修改钱包密码（留空代表不修改，以 Base64 传参） |
| lastLoginTime | Boolean | NO | 最后一次登录时间（留空代表不修改）<br>`1` 更新 |
| disconnectPlatformId | Number | NO | 解除指定[互联平台](../../database/dictionary/connects.md)的绑定 |
| deviceToken | String | NO | iOS 或 Android 设备 Token（留空代表不修改） |

**接口使用说明**

- 一个验证码只能修改一次资料
- 修改 `lastLoginTime`, `disconnectPlatformId`, `deviceToken` 不需要验证码
- 设置邮箱（当前账号无邮箱）
    - `newEmail`
    - `newVerifyCode` 验证码模板 ID 为 `4`
- 修改邮箱
    - `codeType = email`
    - `verifyCode` 当前邮箱验证码，验证码模板 ID 为 `4`
    - `newEmail`
    - `newVerifyCode` 验证码模板 ID 为 `3`
- 设置手机号码（当前账号无手机号码）
    - `newPhone`
    - `newCountryCode`
    - `newVerifyCode` 验证码模板 ID 为 `4`
- 修改手机号码
    - `codeType = sms`
    - `verifyCode` 当前手机验证码，验证码模板 ID 为 `4`
    - `newPhone`
    - `newCountryCode`
    - `newVerifyCode` 验证码模板 ID 为 `3`
- 修改登录密码：`verifyCode` 和 `currentPassword` 必传其一，或者全部传，全传则全验证
    - `codeType` 验证码类型
    - `verifyCode` 当前账号验证码，验证码模板 ID 为 `5`
    - `currentPassword`
    - `newPassword`
- 修改钱包密码：`verifyCode` 和 `currentWalletPassword` 必传其一，或者全部传，全传则全验证
    - `codeType` 验证码类型
    - `verifyCode` 当前账号验证码，验证码模板 ID 为 `6`
    - `currentWalletPassword`
    - `newWalletPassword`

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
