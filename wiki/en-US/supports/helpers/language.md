# LanguageHelper

`App\Helpers\LanguageHelper`

## 根据主键 ID 获取语言值

```php
LanguageHelper::fresnsLanguageByTableId($tableName, $tableColumn, $tableId, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| tableName | String | **required** | Table name |
| tableColumn | String | **required** | Column name |
| tableId | Number | **required** | Primary key ID |
| langTag | String | *optional* | Language tag, not required<br>If passed, output content for the specified language tag.<br>If not passed, output values for all languages, format as below. |

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
| tableKey | String | **required** | Configuration table Key |
| itemType | String | *optional* | Data type, default is string<br>number / string / boolean / array / object |
| langTag | String | *optional* | Language tag, not required<br>If passed, output content for the specified language tag.<br>If not passed, output values for all languages, format as above. |
