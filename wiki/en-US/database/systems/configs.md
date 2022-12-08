# configs

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| item_key | varchar(64) | 键名 | | NO | **Unique** |
| item_value | longtext | 键值 | | YES |  |
| item_type | varchar(16) | 键类型 | string | NO |  |
| item_tag | varchar(32) | 键标签 |  | NO |  |
| is_multilingual | tinyint *UNSIGNED* | 是否多语言 | 0 | NO | 0.否 / 1.是 |
| is_custom | tinyint *UNSIGNED* | 是否为自定义 | 1 | NO | 0.否 / 1.是<br>0 表示为系统自带，1 表示为插件新增 |
| is_api | tinyint *UNSIGNED* | 是否接口输出 | 0 | NO | 0.禁止 / 1.允许 |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## 键类型 item_type

以 **JSON** 数据类型为基础，延伸有 `file`、`plugin`、`plugins` 三个类型。

`file` 类型，如果键值数字，则代表是文件 ID，凭 ID 输出文件 URL，除此之外表示为文件 URL，原样输出。

`plugin` 类型代表是插件 unikey 值，凭 unikey 输出插件 URL。

`plugins` 类型代表是多选插件，以 Array 格式存储，将 unikey 替换为 url 输出插件 URL。

```json
// plugins 格式
[
    {
        "code": "code",
        "unikey": "unikey"
    }
]
```

插件需要判断 plugins > plugin_host 是否有值；**有值**则是插件表 plugin_host + access_path 字段内容拼接成完整 URL；**无值**则是拿配置表 system_url 键值 + 插件表 access_path 字段拼接成完整 URL。

- number
- string
- boolean
- array
- object
- file
- plugin
- plugins

**`file`、`plugin`、`plugins` 类型的键值，需输出对应的 URL**
