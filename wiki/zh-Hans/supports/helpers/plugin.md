# 插件 PluginHelper

`App\Helpers\PluginHelper`

## 获取插件地址

```php
PluginHelper::fresnsPluginUrlByUnikey($unikey);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| unikey | String | YES | 插件 unikey |

## 获取已替换自定义参数的插件地址

```php
PluginHelper::fresnsPluginUsageUrl($unikey, $pluginUseId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| unikey | String | YES | 插件 unikey |
| pluginUseId | Number | YES | [plugin_usages > id](../../database/plugins/plugin-usages.md) |

*已将插件地址中 `{parameter}` 变量名替换为 `plugin_usages > parameter` 字段值。*

## 获取插件版本号

```php
PluginHelper::fresnsPluginVersionByUnikey($unikey);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| unikey | String | YES | 插件 unikey |

## 获取插件升级码

```php
PluginHelper::fresnsPluginUpgradeCodeByUnikey($unikey);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| unikey | String | YES | 插件 unikey |
