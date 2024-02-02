# PrimaryHelper

`App\Helpers\PrimaryHelper`

## Get Data Model

```php
PrimaryHelper::fresnsModelByFsid($modelName, $fsid);

PrimaryHelper::fresnsModelById($modelName, $id);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| modelName | String | **required** | Model name |
| fsid | Number / String | **required** | Field value, e.g. aid value |

## Get Primary ID

```php
PrimaryHelper::fresnsPrimaryId($type, $fsid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | Type |
| fsid | String | *optional* | fsid<br>For example, the aid value |
