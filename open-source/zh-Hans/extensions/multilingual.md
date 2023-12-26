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

## 多语言数据格式

数据库多语言字段类型为 `json`

```json
{
    "语言标签": "语言内容",
    "en": "Content Information"
}
```
