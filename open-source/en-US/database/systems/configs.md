---
aside: false
---

# configs

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| item_key | varchar(64) | Key Name | | NO | **Unique** |
| item_value | longtext | Key Value | | YES |  |
| item_type | varchar(16) | Key Type | string | NO |  |
| is_multilingual | tinyint *UNSIGNED* | Is Multilingual | 0 | NO | 0. No / 1. Yes |
| is_custom | tinyint *UNSIGNED* | Is Custom | 1 | NO | 0. No / 1. Yes<br>0 means system-built, 1 means added by app |
| is_api | tinyint *UNSIGNED* | Is API Output | 0 | NO | 0. Forbidden / 1. Allowed |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Key Type `item_type`

Based on **JSON** data type, extended with three types: `file`, `plugin`, and `plugins`.

`file` type: If the key value is a number, it represents the file ID, and the file URL is output with the ID. Otherwise, it represents the file URL and is output as is.

`plugin` type represents the plugin fskey value, and the plugin URL is output with the fskey.

`plugins` type represents multiple selected plugins, stored in Array format, replacing the fskey with the URL to output the plugin URL.

```json
// plugins format
[
    {
        "code": "code",
        "icon": "file id or file url",
        "name": {
            "en": "",
            "zh-Hans": ""
        },
        "fskey": "fskey",
        "order": 1
    }
]
```

plugins need to determine whether `apps->app_host` has a value; **if it has a value**, the app table's `app_host + access_path` fields are concatenated into a complete URL; **if it has no value**, the `.env APP_URL + apps->access_path` field are concatenated into a complete URL.

- number
- string
- boolean
- array
- object
- file
- plugin
- plugins

For `file`, `plugin`, and `plugins` types of key values, the corresponding URL needs to be output.
