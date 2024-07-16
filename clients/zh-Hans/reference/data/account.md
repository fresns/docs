---
aside: false
---

# 账号信息

```json
{
    "aid": "String / 账号 ID",
    "hasEmail": "Boolean / 账号是否有邮箱",
    "hasPhone": "Boolean / 账号是否有手机号",
    "hasPassword": "Boolean / 账号是否有密码",
    "birthday": "String / 生日",
    "kycVerified": "Boolean / 实名认证状态",
    "status": "Boolean / 账号状态",
    "waitDelete": "Boolean / 是否待删除",
    "waitDeleteDateTime": "String / 准备删除时间",
    "wallet": {
        "status": "Boolean / 钱包是否有效",
        "hasPassword": "Boolean / 钱包是否有密码",
        "currencyCode": "String / 货币标识，例如 USD",
        "currencyName": "String / 货币自定义名称",
        "currencyUnit": "String / 货币单位自定义名称",
        "currencyPrecision": "Number / 货币精度",
        "balance": "String / 钱包金额",
        "freezeAmount": "String / 不可用金额"
    },
    "users": [
        {
            // 通用数据结构->用户信息
        }
    ]
}
```
