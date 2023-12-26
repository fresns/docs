# General

> Panel > Systems > General

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Site URL | site_url |  | string | Used for content Web URL concatenation |
| Site Name | site_name |  | string | **Multilingual** |
| Site Description | site_desc |  | string | **Multilingual** |
| Site Introduction | site_intro |  | string | **Multilingual** |
| Site ICON | site_icon |  | **file** | Outputs image URL when used |
| Site LOGO | site_logo |  | **file** | Outputs image URL when used |
| Copyright Owner Name | site_copyright_name | Fresns | string |  |
| Copyright Year | site_copyright_years | 2021-Present | string |  |
| Admin Email | site_email |  | string | Displayed to users when an error occurs, for users to report issues. |
| Operating Mode | site_mode | public | string | Public mode `public`<br>Private mode `private` |

**Private Mode**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Open Status | site_private_status | false | boolean |  |
| Supported Plugins | site_private_service |  | **plugin** | panelUsages `join` |
| State After Expiration | site_private_end_after | 1 | number | `1` All site content is invisible<br>`2` Content before expiration is visible, new content is invisible |
| Whitelist Roles | site_private_whitelist_roles |  | array | Role ID |
