# ConfigHelper

`App\Helpers\ConfigHelper`

## Get Configuration Value by Key

```php
ConfigHelper::fresnsConfigByItemKey($itemKey, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| itemKey | String | **required** | [configs->item_key](../../database/systems/configs.md) |
| langTag | String | *optional* | Language tag(can be omitted), only effective for multi-language configurations.<br>If it is a multi-language configuration and not provided, the default language value will be output. |

## Get Configuration Values by Key Array

```php
ConfigHelper::fresnsConfigByItemKeys($itemKeys, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| itemKeys | Array | **required** | [configs->item_key](../../database/systems/configs.md) |
| langTag | String | *optional* | Language tag(can be omitted), only effective for multi-language configurations.<br>If it is a multi-language configuration and not provided, the default language value will be output. |

::: details Return Example
```json
{
    "site_name": "Fresns",
    "default_language": "en",
    "default_timezone": "+8"
}
```
:::

## Determine File Configuration Type by Key

```php
ConfigHelper::fresnsConfigFileValueTypeByItemKey($itemKey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| itemKey | String | **required** | [configs->item_key](../../database/systems/configs.md) |

::: details Description
- `ID` value is the file ID: the key is a number
- `URL` value is the file URL: the key starts with `http://` or `https://`
:::

## Get File Path by Key

```php
ConfigHelper::fresnsConfigFileUrlByItemKey($itemKey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| itemKey | String | **required** | [configs->item_key](../../database/systems/configs.md) |

::: details Description
- Image output as `imageConfigUrl`
- Video output as `videoUrl`
- Audio output as `audioUrl`
- Document output as `documentPreviewUrl`
:::

## Get Length Unit by langTag

```php
ConfigHelper::fresnsConfigLengthUnit($langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | **required** | Language Tag |

*Query the `language_menus` key value in the configs table and output the `lengthUnits` parameter for the corresponding language tag.*

## Get Date Format by langTag

```php
ConfigHelper::fresnsConfigDateFormat($langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | **required** | Language Tag |

*Query the `language_menus` key value in the configs table and output the `dateFormat` parameter for the corresponding language tag.*
