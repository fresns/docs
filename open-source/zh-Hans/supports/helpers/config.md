# 配置 ConfigHelper

`App\Helpers\ConfigHelper`

## 根据 key 获取配置值

```php
ConfigHelper::fresnsConfigByItemKey($itemKey, $langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| itemKey | String | YES | [configs->item_key](../../database/systems/configs.md) |
| langTag | String | NO | 语言标签，可不传，仅对多语言配置有效。<br>如果是多语言配置，不传则输出默认语言值。 |

## 根据一组 key 获取配置值

```php
ConfigHelper::fresnsConfigByItemKeys($itemKeys, $langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| itemKeys | Array | YES | [configs->item_key](../../database/systems/configs.md) |
| langTag | String | NO | 语言标签，可不传，仅对多语言配置有效。<br>如果是多语言配置，不传则输出默认语言值。 |

::: details 查看输出示例
```json
{
    "site_name": "Fresns",
    "default_language": "en",
    "default_timezone": "+8"
}
```
:::

## 根据 key 判断文件配置类型

```php
ConfigHelper::fresnsConfigFileValueTypeByItemKey($itemKey);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| itemKey | String | YES | [configs->item_key](../../database/systems/configs.md) |

::: details 查看说明
- `ID` 值为文件 ID：键值是数字
- `URL` 值为文件 URL：键值是以 http:// 或 https:// 开头
:::

## 根据 key 获取文件地址

```php
ConfigHelper::fresnsConfigFileUrlByItemKey($itemKey);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| itemKey | String | YES | [configs->item_key](../../database/systems/configs.md) |

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
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| langTag | String | YES | 语言标签 |

*查询 configs 表 language_menus 键名的键值，输出对应语言标签的 lengthUnits 参数。*

## 根据 langTag 获取日期格式

```php
ConfigHelper::fresnsConfigDateFormat($langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| langTag | String | YES | 语言标签 |

*查询 configs 表 language_menus 键名的键值，输出对应语言标签的 dateFormat 参数。*
