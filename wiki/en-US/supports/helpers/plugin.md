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

*The plugin address `{parameter}` variable has been replaced with the `plugin_usages->parameter` field value.*

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
