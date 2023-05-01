# configs *全局配置表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | 主键 ID | | NO | 自动递赠 |
| item_key | varchar(64) | 键名 | | NO | **唯一值** |
| item_value | longtext | 键值 | | YES |  |
| item_type | varchar(16) | 键类型 | string | NO |  |
| item_tag | varchar(32) | 键标签 |  | NO |  |
| is_multilingual | tinyint *UNSIGNED* | 是否多语言 | 0 | NO | 0.否 / 1.是 |
| is_custom | tinyint *UNSIGNED* | 是否为自定义 | 1 | NO | 0.否 / 1.是<br>0 表示为系统自带，1 表示为插件新增 |
| is_api | tinyint *UNSIGNED* | 是否接口输出 | 0 | NO | 0.禁止 / 1.允许 |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## 键类型 item_type

以 **JSON** 数据类型为基础，延伸有 `file`、`plugin`、`plugins` 三个类型。

`file` 类型，如果键值数字，则代表是文件 ID，凭 ID 输出文件 URL，除此之外表示为文件 URL，原样输出。

`plugin` 类型代表是插件 fskey 值，凭 fskey 输出插件 URL。

`plugins` 类型代表是多选插件，以 Array 格式存储，将 fskey 替换为 url 输出插件 URL。

```json
// plugins 格式
[
    {
        "code": "code",
        "fskey": "fskey"
    }
]
```

插件需要判断 `plugins->plugin_host` 是否有值；**有值**则是插件表 `plugin_host + access_path` 字段内容拼接成完整 URL；**无值**则是拿 .env 配置文件 APP_URL + 插件表 access_path 字段拼接成完整 URL。

- number
- string
- boolean
- array
- object
- file
- plugin
- plugins

**`file`、`plugin`、`plugins` 类型的键值，需输出对应的 URL**
