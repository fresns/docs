# PluginHelper

`App\Helpers\PluginHelper`

## Get Plugin Host

```php
PluginHelper::fresnsPluginHostByUnikey($unikey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| unikey | String | **required** | Plugin unikey |

## Get Plugin URL

```php
PluginHelper::fresnsPluginUrlByUnikey($unikey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| unikey | String | **required** | Plugin unikey |

## Get Plugin URL with Replaced Custom Parameter

```php
PluginHelper::fresnsPluginUsageUrl($unikey, $pluginUseId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| unikey | String | **required** | Plugin unikey |
| pluginUseId | Number | **required** | [plugin_usages->id](../../database/plugins/plugin-usages.md) |

*已将插件地址中 `{parameter}` 变量名替换为 `plugin_usages->parameter` 字段值。*

## Get Plugin Version

```php
PluginHelper::fresnsPluginVersionByUnikey($unikey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| unikey | String | **required** | Plugin unikey |

## Get Plugin Upgrade Code

```php
PluginHelper::fresnsPluginUpgradeCodeByUnikey($unikey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| unikey | String | **required** | Plugin unikey |
