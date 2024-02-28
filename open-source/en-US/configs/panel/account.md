# Account

> Panel > Systems > Account

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Account Center Service | account_center_service |  | **plugin** | panelUsages `accountCenter` |
| Account CAPTCHA | account_center_captcha |  | object |  |
| Register Service | account_register_service |  | **plugin** | panelUsages `accountRegister` |
| Register Status | account_register_status | true | boolean |  |
| Register Support: Email | account_email_register | true | boolean |  |
| Register Support: Phone Number | account_phone_register | false | boolean |  |
| Login Service | account_login_service |  | **plugin** | panelUsages `accountLogin` |
| Login Support: Email | account_email_login | true | boolean |  |
| Login Support: Phone Number | account_phone_login | false | boolean |  |
| Login using the Verify code | account_login_with_code | false | boolean |  |
| Login Sync Register | account_login_or_register | false | boolean | Auto-registration if no account is available for Verify Code login |
| Multi-User Manage Services | account_users_service |  | **plugin** | panelUsages `accountUsers` |

- CAPTCHA Configuration `{"type":"","siteKey":"","secretKey":""}`
- CAPTCHA Type: `turnstile`, `reCAPTCHA`, `hCaptcha`

## Password

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Password Minimum Length | password_length | 8 | number | Minimum password length for new user registration, `0` or `empty` for no restriction |
| Password Character Types | password_strength | ["number","lowercase"] | array | Password must contain selected character types, no restriction if not selected<br>`number` Digits<br>`lowercase` Lowercase letters<br>`uppercase` Uppercase letters<br>`symbols` Symbols (excluding space) |

## Connect

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Third-party Connection Support | account_connect_services |  | **plugins** | panelUsages `accountConnect` |

::: details Third-party connect Format Introduction
```json
[
    {
        "order": "Sort Order",
        "code": "Connect platform number",
        "fskey": "Plugin Fskey"
    },
    {
        "order": 2,
        "code": "2",
        "fskey": "Placeholder"
    }
]
```

- [Connect platform number](../dictionary/connects.md)
- Since the format of the `plugins` type is universal, the `code` is a string, not a numeric format. However, the platform number is a numeric value, so it should be stored as a string when saving.
:::

## KYC

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Real Name Verification Support | account_kyc_service |  | **plugin** | panelUsages `accountKyc` |
