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
| pluginUseId | Number | **required** | [app_usages->id](../../database/apps/app-usages.md) |

*The plugin address `{parameter}` variable has been replaced with the `app_usages->parameter` field value.*

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
