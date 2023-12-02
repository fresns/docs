---
aside: false
---

# 账号信息

```json
{
    "aid": "String / 账号 ID",
    "countryCode": "Number / 手机国际区号",
    "purePhone": "String / 加密的手机号",
    "phone": "String / 加密的带国际区号的手机号",
    "email": "String / 加密的邮箱",
    "hasPassword": "Boolean / 账号是否有密码",
    "verifyStatus": "Boolean / 是否实名认证",
    "verifyRealName": "String / 加密的姓名",
    "verifyGender": "Number / 性别 1.未知 2.男 3.女",
    "verifyCertType": "String / 证件类型 idcard 身份证 passport 护照 driving 驾驶证 business 营业执照",
    "verifyCertNumber": "String / 加密的证件号码",
    "verifyIdentityType": "Number / 认证类型 1.未知 2.个人 3.企业",
    "verifyDateTime": "String / 认证时间",
    "registerDateTime": "String / 账号注册时间",
    "status": "Boolean / 账号状态",
    "waitDelete": "Boolean / 是否待删除",
    "waitDeleteDateTime": "String / 准备删除时间",
    "connects": [
        {
            "connectPlatformId": "Number / 互联平台编号",
            "connectName": "String / 互联平台名称",
            "connected": "Boolean / 是否已经绑定",
            "service": "String / 互联平台服务 URL",
            "username": "String / 互联用户名",
            "nickname": "String / 互联昵称",
            "avatar": "String / 互联头像",
            "status": "Boolean / 互联是否有效"
        }
    ],
    "wallet": {
        "status": "Boolean / 钱包是否有效",
        "hasPassword": "Boolean / 钱包是否有密码",
        "currencyCode": "String / 货币标识，例如 USD",
        "currencyName": "String / 货币自定义名称",
        "currencyUnit": "String / 货币单位自定义名称",
        "currencyPrecision": "Number / 货币精度",
        "balance": "String / 钱包金额",
        "freezeAmount": "String / 不可用金额",
        "bankName": "String / 银行名称",
        "swiftCode": "String / SWIFT 代码",
        "bankAddress": "String / 银行地址",
        "bankAccount": "String / 加密的银行账号",
        "bankStatus": "Boolean / 银行验证状态"
    },
    "users": [
        {
            // 通用数据结构->用户信息
        }
    ]
}
```
