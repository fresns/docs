# LanguageHelper

`App\Helpers\LanguageHelper`

## 根据主键 ID 获取语言值

```php
LanguageHelper::fresnsLanguageByTableId($tableName, $tableColumn, $tableId, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| tableName | String | **required** | 表名 |
| tableColumn | String | **required** | 字段名 |
| tableId | Number | **required** | 主键 ID |
| langTag | String | *optional* | 语言标签，可不传<br>如果传参，则输出指定语言标签内容。<br>如果不传，则输出全部语言值，格式见下方。 |

::: details Return Example
```json
[
    {
        "langTag": "Language Tag",
        "langContent": "Language Content",
    },
    {
        "langTag": "Language Tag",
        "langContent": "Language Content",
    }
]
```
:::

## 根据配置 Key 获取语言值

```php
LanguageHelper::fresnsLanguageByTableKey($tableKey, $itemType, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| tableKey | String | **required** | 配置表 Key |
| itemType | String | *optional* | 数据类型，默认为 string<br>number / string / boolean / array / object |
| langTag | String | *optional* | 语言标签，可不传<br>如果传参，则输出指定语言标签内容。<br>如果不传，则输出全部语言值，格式同上。 |
