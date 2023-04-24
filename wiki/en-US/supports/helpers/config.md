# ConfigHelper

`App\Helpers\ConfigHelper`

## 根据 Key 获取配置值

```php
ConfigHelper::fresnsConfigByItemKey($itemKey, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| itemKey | String | **required** | [configs->item_key](../../database/systems/configs.md) |
| langTag | String | *optional* | Language tag(can be omitted), only effective for multi-language configurations.<br>If it is a multi-language configuration and not provided, the default language value will be output. |

## 根据一组 Key 获取配置值

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

## 根据 Tag 获取一组配置值

```php
ConfigHelper::fresnsConfigByItemTag($itemTag, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| itemTag | String | **required** | [configs->item_tag](../../database/systems/configs.md) |
| langTag | String | *optional* | Language tag(can be omitted), only effective for multi-language configurations.<br>If it is a multi-language configuration and not provided, the default language value will be output. |

::: details Return Example
```json
{
    "site_name": "Fresns",
    "site_desc": "Fresns is a free and open source social network service software, a general-purpose community product designed for cross-platform, and supports flexible and diverse content forms. It conforms to the trend of the times, satisfies a variety of operating scenarios, is more open and easier to re-development.",
    "site_icon": "https://files.fresns.org/images/icon.png",
    "site_logo": "https://files.fresns.org/images/logo.png",
    "site_copyright": "Fresns",
    "site_copyright_years": "2021-Present",
    "default_timezone": "+8",
    "site_mode": "public"
}
```
:::

## 根据 Key 判断文件配置类型

```php
ConfigHelper::fresnsConfigFileValueTypeByItemKey($itemKey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| itemKey | String | **required** | [configs->item_key](../../database/systems/configs.md) |

::: details 查看说明
- `ID` 值为文件 ID：键值是数字
- `URL` 值为文件 URL：键值是以 http:// 或 https:// 开头
:::

## 根据 key 获取文件地址

```php
ConfigHelper::fresnsConfigFileUrlByItemKey($itemKey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| itemKey | String | **required** | [configs->item_key](../../database/systems/configs.md) |

::: details 查看说明
- 图片输出为 `imageConfigUrl`
- 视频输出为 `videoUrl`
- 音频输出为 `audioUrl`
- 文档输出为 `documentPreviewUrl`
:::

## 根据 langTag 获取长度单位

```php
ConfigHelper::fresnsConfigLengthUnit($langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | **required** | Language Tag |

*查询 configs 表 language_menus 键名的键值，输出对应语言标签的 lengthUnits 参数。*

## 根据 langTag 获取日期格式

```php
ConfigHelper::fresnsConfigDateFormat($langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | **required** | Language Tag |

*查询 configs 表 language_menus 键名的键值，输出对应语言标签的 dateFormat 参数。*
