# 发信设置

> 控制面板 > 系统 > 发信设置

## 发信服务商

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 邮件服务商 | send_email_service |  | **plugin** | 插件应用场景参数 `sendEmail` |
| 短信服务商 | send_sms_service |  | **plugin** | 插件应用场景参数 `sendSms` |
| 短信默认国际区号 | send_sms_default_code | 86 | number | 不带 + 号 |
| 短信国际区号列表 | send_sms_supported_codes | ["86"] | array | 不带 + 号 |
| 桌面推送服务商 | desktop_notifications_service |  | **plugin** | 插件应用场景参数 `appNotifications` |
| iOS 推送服务商 | ios_notifications_service |  | **plugin** | 插件应用场景参数 `appNotifications` |
| Android 推送服务商 | android_notifications_service |  | **plugin** | 插件应用场景参数 `appNotifications` |
| 微信推送服务商 | wechat_notifications_service |  | **plugin** | 插件应用场景参数 `appNotifications` |

## 验证码模板设置

| 栏目标题 | 键名 | 发信编号 | 说明 |
| --- | --- | --- | --- |
| 通用验证码 | verifycode_template1 | 1 | 键值 JSON 格式见下方 |
| 注册新账号 | verifycode_template2 | 2 | 键值 JSON 格式见下方 |
| 修改资料验证 | verifycode_template3 | 3 | 键值 JSON 格式见下方 |
| 更换新绑定 | verifycode_template4 | 4 | 键值 JSON 格式见下方 |
| 重置登录密码 | verifycode_template5 | 5 | 键值 JSON 格式见下方 |
| 重置支付密码 | verifycode_template6 | 6 | 键值 JSON 格式见下方 |
| 使用验证码登录 | verifycode_template7 | 7 | 键值 JSON 格式见下方 |
| 使用验证码注销账号 | verifycode_template8 | 8 | 键值 JSON 格式见下方 |


```json
[
    {
        "type": "email",
        "isEnabled": true,
        "template":[
            {
                "langTag": "zh-Hans",
                "title": "标题（支持 HTML）",
                "content": "内容（支持 HTML）"
            }
        ]
    },
    {
        "type": "sms",
        "isEnabled": false,
        "template":[
            {
                "langTag": "zh-Hans",
                "signName": "短信签名名称",
                "templateCode": "模板 ID",
                "codeParam": "验证码变量名"
            }
        ]
    }
]
```

邮件可用变量（插件解析）：
- {sitename} 站点名称
- {code} 验证码
- {time} 有效时间