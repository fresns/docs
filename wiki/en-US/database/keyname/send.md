# Send

> Panel > Systems > Send

## Send Services

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Email Service Provider | send_email_service |  | **plugin** | Plugin application scenario parameter `sendEmail` |
| SMS Service Provider | send_sms_service |  | **plugin** | Plugin application scenario parameter `sendSms` |
| Default SMS Country Code | send_sms_default_code | 86 | number | No + sign |
| Supported SMS Country Codes | send_sms_supported_codes | ["86"] | array | No + sign |
| Desktop Notification Provider | desktop_notifications_service |  | **plugin** | Plugin application scenario parameter `appNotifications` |
| iOS Notification Provider | ios_notifications_service |  | **plugin** | Plugin application scenario parameter `appNotifications` |
| Android Notification Provider | android_notifications_service |  | **plugin** | Plugin application scenario parameter `appNotifications` |
| WeChat Notification Provider | wechat_notifications_service |  | **plugin** | Plugin application scenario parameter `appNotifications` |

## Verify Code Templates

| Column Title | Key Name | Sending Number | Description |
| --- | --- | --- | --- |
| General Verification Code | verifycode_template1 | 1 | Key value JSON format, see below |
| Register New Account | verifycode_template2 | 2 | Key value JSON format, see below |
| Modify Information Verification | verifycode_template3 | 3 | Key value JSON format, see below |
| Change New Binding | verifycode_template4 | 4 | Key value JSON format, see below |
| Reset Login Password | verifycode_template5 | 5 | Key value JSON format, see below |
| Reset Payment Password | verifycode_template6 | 6 | Key value JSON format, see below |
| Use Verification Code to Login | verifycode_template7 | 7 | Key value JSON format, see below |
| Use Verification Code to Logout Account | verifycode_template8 | 8 | Key value JSON format, see below |


```json
[
    {
        "type": "email",
        "isEnabled": true,
        "template":[
            {
                "langTag": "zh-Hans",
                "title": "Title (HTML supported)",
                "content": "Content (HTML support)"
            }
        ]
    },
    {
        "type": "sms",
        "isEnabled": false,
        "template":[
            {
                "langTag": "en",
                "signName": "Text Message Signature Name",
                "templateCode": "Template ID",
                "codeParam": "Verify code variable name"
            }
        ]
    }
]
```

Mail available variables (plugin parsing):
- `{sitename}` Website Name
- `{code}` Verify Code
- `{time}` Valid Time