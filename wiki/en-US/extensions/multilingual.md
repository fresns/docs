# Multilingual

## Composition of language tags

**Example in English**

- Lang Code: en
- Area Code: US
- Area Code: GB

| Rows | Lang Code | Area Code | W3C Language tags |
| --- | --- | --- | --- |
| 1 | en |  | en |
| 2 | en | US | en-US |
| 3 | en | GB | en-GB |

The above three records are not considered duplicates, and the duplication criteria are based on the [W3C Language tags](https://www.w3.org/International/articles/language-tags/).

## Multi-language configuration

| Key Name | Data Type | Description |
| --- | --- | --- |
| language_status | boolean |  Whether to enable multilingualism |
| language_menus | array | Multilingual configuration list |
| default_language | string | Default Language |

```php
ConfigHelper::fresnsConfigByItemKey('Key Name');
```

## Logic Flow Chart

The logic flow is the control panel language setup logic.

> Panel > Systems > Languages

![Fresns Multi-language](/assets/flowchart/languages.jpg)

The contents listed below are not stored in the multilingual table or in the flow chart. If the multilingual labels change, it is recommended to modify them together.

| Table Name | Column or Key Name |
| --- | --- |
| code_messages | lang_tag |
| post_logs | allow_json |
| post_logs | user_list_json |
| post_logs | comment_btn_json |
| plugin_usages | data_sources |
| seo | lang_tag |
| configs | verifycode_template1 |
| configs | verifycode_template2 |
| configs | verifycode_template3 |
| configs | verifycode_template4 |
| configs | verifycode_template5 |
| configs | verifycode_template6 |
| configs | verifycode_template7 |