# Send

> Panel > Systems > Send

## Send Services

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Email Service Provider | send_email_service |  | **plugin** | panelUsages `sendEmail` |
| SMS Service Provider | send_sms_service |  | **plugin** | panelUsages `sendSms` |
| Default SMS Country Code | send_sms_default_code | 65 | number | No `+` |
| Supported SMS Country Codes | send_sms_supported_codes | ["65"] | array | No `+` |
| iOS Notification Provider | ios_notifications_service |  | **plugin** | panelUsages `appNotifications` |
| Android Notification Provider | android_notifications_service |  | **plugin** | panelUsages `appNotifications` |
| Desktop Notification Provider | desktop_notifications_service |  | **plugin** | panelUsages `appNotifications` |

## Verify Code Templates

| Column Title | Key Name | Sending Number | Description |
| --- | --- | --- | --- |
| General Verify Code | verifycode_template1 | 1 | Key value JSON format, see below |
| Register New Account | verifycode_template2 | 2 | Key value JSON format, see below |
| Modify Information Verify | verifycode_template3 | 3 | Key value JSON format, see below |
| Change New Binding | verifycode_template4 | 4 | Key value JSON format, see below |
| Reset Login Password | verifycode_template5 | 5 | Key value JSON format, see below |
| Reset Payment Password | verifycode_template6 | 6 | Key value JSON format, see below |
| Use Verify Code to Login | verifycode_template7 | 7 | Key value JSON format, see below |
| Use Verify Code to Delete Account | verifycode_template8 | 8 | Key value JSON format, see below |

```json
{
    "email": {
        "status": true,
        "templates": {
            "en": {
                "title": "Title (HTML supported)",
                "content": "Content (HTML support)"
            },
            "zh-Hans": {
                "title": "标题（支持 HTML）",
                "content": "内容（支持 HTML）"
            }
        }
    },
    "sms": {
        "status": true,
        "templates": {
            "en": {
                "signName": "Text Message Signature Name",
                "templateCode": "Template ID",
                "codeParam": "Verify code variable name"
            },
            "zh-Hans": {
                "signName": "短信签名名称",
                "templateCode": "模板 ID",
                "codeParam": "验证码变量名"
            }
        }
    }
}
```

Mail available variables (plugin parsing):
- {logo} Website LOGO
- {icon} Website ICON
- {name} Website Name
- {code} Verify Code
- {time} Valid Time
