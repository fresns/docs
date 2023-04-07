# 多语言说明

## 多语言唯一性逻辑

**以英文举例**

- 语言代码：en
- 地区代码：US
- 地区代码：GB

| 记录 | 语言代码 | 地区代码 | W3C Language tags |
| --- | --- | --- | --- |
| 1 | en |  | en |
| 2 | en | US | en-US |
| 3 | en | GB | en-GB |

以上三条记录，均不算重复，重复标准以 [W3C Language tags](https://www.w3.org/International/articles/language-tags/) 为依据。

## 多语言配置

| 键名 | 数据类型 | 说明 |
| --- | --- | --- |
| language_status | boolean |  是否开启多语言 |
| language_menus | array | 多语言配置列表 |
| default_language | string | 默认语言 |

```php
ConfigHelper::fresnsConfigByItemKey('键名');
```

## 逻辑流程图

该逻辑流程为控制面板语言设置逻辑。

> 控制面板 > 系统设置 > 语言设置

![Fresns 多语言唯一性逻辑](https://files.fresns.org/wiki/flowchart/languages.jpg)

以下所列内容不存储在多语言表，也未在流程图当中，如果多语言标签发生变化，建议一并修改。

| 表名 | 字段名/键名 |
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
| configs | verifycode_template8 |
