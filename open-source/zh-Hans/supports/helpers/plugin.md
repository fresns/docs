# 插件 PluginHelper

`App\Helpers\PluginHelper`

## 获取插件 Host

```php
PluginHelper::fresnsPluginHostByFskey($fskey);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| fskey | String | YES | 插件 fskey |

## 获取插件 URL

```php
PluginHelper::fresnsPluginUrlByFskey($fskey);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| fskey | String | YES | 插件 fskey |

## 获取已替换自定义参数的插件地址

```php
PluginHelper::fresnsPluginUsageUrl($fskey, $pluginUseId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| fskey | String | YES | 插件 fskey |
| pluginUseId | Number | YES | [app_usages->id](../../database/apps/app-usages.md) |

*已将插件地址中 `{parameter}` 变量名替换为 `app_usages->parameter` 字段值。*

## 获取插件版本号

```php
PluginHelper::fresnsPluginVersionByFskey($fskey);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| fskey | String | YES | 插件 fskey |

## 获取插件升级码

```php
PluginHelper::fresnsPluginUpgradeCodeByFskey($fskey);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| fskey | String | YES | 插件 fskey |
