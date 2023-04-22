# General

> Panel > Systems > General

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | site_url |  | string | Used for content Web URL concatenation |
| Site Name | site_name |  | string | **Multilingual** |
| Site Description | site_desc |  | string | **Multilingual** |
| Site ICON | site_icon |  | **file** | Outputs image URL when used |
| Site LOGO | site_logo |  | **file** | Outputs image URL when used |
| Copyright Owner Name | site_copyright | Fresns | string |  |
| Copyright Year | site_copyright_years | 2021-Present | string |  |
| Default Timezone | default_timezone | +8 | string | UTC value, see [Timezone Options](../dictionary/timezone.md)<br>Client default timezone, used for time parameters when API timezone is not provided.<br>API timezone order: User Config -> System Timezone -> Default Timezone |
| Operating Mode | site_mode | public | string | Public mode public<br>Private mode private |
| Public Mode: Registration Status | site_public_status | true | boolean |  |
| Public Mode: Registration Feature | site_public_service |  | **plugin** | Plugin application scenario parameter `register` |
| Public Mode: Email Registration Feature | site_email_register | true | boolean |  |
| Public Mode: Phone Number Registration Feature | site_phone_register | false | boolean |  |
| Public Mode: Login Sync Registration | site_login_or_register | false | boolean |  |
| Private Mode: Open Status | site_private_status | false | boolean |  |
| Private Mode: Supported Plugins | site_private_service |  | **plugin** | Plugin application scenario parameter `join` |
| Private Mode: State After Expiration | site_private_end_after | 1 | number | `1` All site content is invisible<br>`2` Content before expiration is visible, new content is invisible |
| Login Support: Email | site_email_login | true | boolean |  |
| Login Support: Phone Number | site_phone_login | false | boolean |  |
| Admin Email | site_email |  | string | Displayed to users when an error occurs, for users to report issues. |
