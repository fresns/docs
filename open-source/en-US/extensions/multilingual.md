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

## Multilingual data format

Database multilingual column type is `json`

```json
{
    "{langTag}": "Language Content",
    "en": "Content Information"
}
```
