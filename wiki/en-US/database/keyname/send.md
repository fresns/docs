# Send

> Panel > Systems > Send

## Send Services

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| 邮件服务商 | send_email_service |  | **plugin** | 插件应用场景参数 `sendEmail` |
| 短信服务商 | send_sms_service |  | **plugin** | 插件应用场景参数 `sendSms` |
| 短信默认国际区号 | send_sms_default_code | 86 | number | 不带 + 号 |
| 短信国际区号列表 | send_sms_supported_codes | ["86"] | array | 不带 + 号 |

## Verify Code Templates

| 栏目标题 | 键名 | 发信编号 | 说明 |
| --- | --- | --- | --- |
| 通用验证码 | verifycode_template1 | 1 | 键值 JSON 格式见下方 |
| 注册新账号 | verifycode_template2 | 2 | 键值 JSON 格式见下方 |
| 修改账号资料 | verifycode_template3 | 3 | 键值 JSON 格式见下方 |
| 更换新绑定 | verifycode_template4 | 4 | 键值 JSON 格式见下方 |
| 重置登录密码 | verifycode_template5 | 5 | 键值 JSON 格式见下方 |
| 重置支付密码 | verifycode_template6 | 6 | 键值 JSON 格式见下方 |
| 使用验证码登录 | verifycode_template7 | 7 | 键值 JSON 格式见下方 |


```json
[
    {
        "type": "email",
        "isEnable": true,
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
        "isEnable": false,
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