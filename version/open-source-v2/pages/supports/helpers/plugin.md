# PluginHelper

`App\Helpers\PluginHelper`

## Get Plugin Host

```php
PluginHelper::fresnsPluginHostByFskey($fskey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fskey | String | **required** | Plugin fskey |

## Get Plugin URL

```php
PluginHelper::fresnsPluginUrlByFskey($fskey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fskey | String | **required** | Plugin fskey |

## Get Plugin URL with Replaced Custom Parameter

```php
PluginHelper::fresnsPluginUsageUrl($fskey, $pluginUseId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fskey | String | **required** | Plugin fskey |
| pluginUseId | Number | **required** | [plugin_usages->id](../../database/plugins/plugin-usages.md) |

*The plugin address `{parameter}` variable has been replaced with the `plugin_usages->parameter` field value.*

## Get Plugin Version

```php
PluginHelper::fresnsPluginVersionByFskey($fskey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fskey | String | **required** | Plugin fskey |

## Get Plugin Upgrade Code

```php
PluginHelper::fresnsPluginUpgradeCodeByFskey($fskey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fskey | String | **required** | Plugin fskey |
