# LanguageHelper

`App\Helpers\LanguageHelper`

## Get Language Value by Primary ID

```php
LanguageHelper::fresnsLanguageByTableId($tableName, $tableColumn, $tableId, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| tableName | String | **required** | Table name |
| tableColumn | String | **required** | Column name |
| tableId | Number | **required** | Primary ID |
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

## Get Language Value by Configuration Key

```php
LanguageHelper::fresnsLanguageByTableKey($tableKey, $itemType, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| tableKey | String | **required** | Configuration table Key |
| itemType | String | *optional* | Data type, default is string<br>number / string / boolean / array / object |
| langTag | String | *optional* | Language tag, not required<br>If passed, output content for the specified language tag.<br>If not passed, output values for all languages, format as above. |
