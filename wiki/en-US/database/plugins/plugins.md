# plugins

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| fskey | varchar(64) | Plugin identifier |  | NO | **Unique**, PascalCase format |
| type | tinyint *UNSIGNED* | Plugin type |  | NO | 1.Extension plugin / 2.Control panel / 3.Web engine / 4.Theme template / 5.Standalone deploy app |
| name | varchar(64) | Plugin Name |  | NO |  |
| description | varchar(255) | Plugin description |  | NO |  |
| version | varchar(16) | Semantic version number |  | NO | Display version number |
| author | varchar(64) | Developer name |  | NO |  |
| author_link | varchar(128) | Developer link |  | YES |  |
| scene | json | Application scenarios |  | YES | Supported application scenario parameters<br>Format: `["apiKey","register"]` |
| plugin_host | varchar(128) | Plugin custom domain |  | YES | Starts with `http://` or` https://`, without trailing / |
| access_path | varchar(128) | Plugin access path |  | YES | Relative path, supports variable names<br>When the `plugin_host` field is empty, it is concatenated with the "backend domain" to form a complete URL |
| settings_path | varchar(128) | Settings page |  | YES | Relative path, empty means no settings page |
| is_standalone | tinyint *UNSIGNED* | Standalone App | 0 | NO | 0.No / 1.Yes |
| is_upgrade | tinyint *UNSIGNED* | Is there an upgrade package | 0 | NO | 0.No / 1.Yes |
| upgrade_version | varchar(16) | New version number |  | YES |  |
| upgrade_code | varchar(32) | Upgrade code |  | YES | Official application market upgrade certificate |
| is_enabled | tinyint *UNSIGNED* | Is it enabled | 1 | NO | 0.Disabled / 1.Enabled |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO  |  |
| updated_at | timestamp | Update Time |  | NO  |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## URL Concatenation Description

- 1. The complete URL of the plugin is obtained by concatenating the domain field `plugin_host` with the path field `access_path`. When `plugin_host` is empty, it is concatenated with the backend address (config table key name `system_url`) to form a complete URL address.
- 2. If it is a related plugin in the "Plugin Usage Association Table", first concatenate the complete address according to the logic in the first item, and then replace `{parameter}` in the URL address with the value of the `plugin_usages->parameter` field, and output the URL after the replacement.
