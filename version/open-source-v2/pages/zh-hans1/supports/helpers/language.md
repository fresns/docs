# 语言 LanguageHelper

`App\Helpers\LanguageHelper`

## 根据主键 ID 获取语言值

```php
LanguageHelper::fresnsLanguageByTableId($tableName, $tableColumn, $tableId, $langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| tableName | String | YES | 表名 |
| tableColumn | String | YES | 字段名 |
| tableId | Number | YES | 主键 ID |
| langTag | String | NO | 语言标签，可不传<br>如果传参，则输出指定语言标签内容。<br>如果不传，则输出全部语言值，格式见下方。 |

::: details 查看输出示例
```json
[
    {
        "langTag": "语言标签",
        "langContent": "语言内容",
    },
    {
        "langTag": "语言标签",
        "langContent": "语言内容",
    }
]
```
:::

## 根据配置 Key 获取语言值

```php
LanguageHelper::fresnsLanguageByTableKey($tableKey, $itemType, $langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| tableKey | String | YES | 配置表 Key |
| itemType | String | NO | 数据类型，默认为 string<br>number / string / boolean / array / object |
| langTag | String | NO | 语言标签，可不传<br>如果传参，则输出指定语言标签内容。<br>如果不传，则输出全部语言值，格式同上。 |
