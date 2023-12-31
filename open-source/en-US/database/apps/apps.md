---
aside: false
---

# apps

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| type | tinyint *UNSIGNED* | Type |  | NO | 1.Plugin<br>2.Theme<br>3.App (remote)<br>4.App (download) |
| fskey | varchar(64) | App identifier |  | NO | **Unique**, PascalCase format |
| name | varchar(64) | Name |  | NO |  |
| description | varchar(255) | description |  | NO |  |
| version | varchar(16) | Semantic version number |  | NO | Display version number |
| author | varchar(64) | Developer name |  | NO |  |
| author_link | varchar(128) | Developer link |  | YES |  |
| panel_usages | json | Panel use scenarios |  | YES | Supported application scenario parameters<br>Format: `["apiKey","register"]` |
| app_host | varchar(128) | custom domain |  | YES | Starts with `http://` or` https://`, without trailing / |
| access_path | varchar(128) | access path |  | YES | Relative path, supports variable names<br>When the `app_host` field is empty, it is concatenated with the "backend domain" to form a complete URL |
| settings_path | varchar(128) | Settings page |  | YES | Relative path, empty means no settings page |
| is_upgrade | tinyint *UNSIGNED* | Is there an upgrade package | 0 | NO | 0.No / 1.Yes |
| upgrade_version | varchar(16) | New version number |  | YES |  |
| upgrade_code | varchar(32) | Upgrade code |  | YES | Official application market upgrade certificate |
| is_enabled | tinyint *UNSIGNED* | Is it enabled | 1 | NO | 0.Disabled / 1.Enabled |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | NO  |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## URL Concatenation Description

- 1. The complete URL of the plugin is obtained by concatenating the domain field `app_host` with the path field `access_path`. When `app_host` is empty, it is concatenated with the backend address (config table key name `system_url`) to form a complete URL address.
- 2. If it is a related plugin in the "Plugin Usage Association Table", first concatenate the complete address according to the logic in the first item, and then replace `{parameter}` in the URL address with the value of the `plugin_usages->parameter` field, and output the URL after the replacement.
