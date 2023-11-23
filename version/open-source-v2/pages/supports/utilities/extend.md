# ExtendUtility

`App\Utilities\ExtendUtility`

## Get Plugin Extension

```php
ExtendUtility::getPluginExtends($type, $groupId, $scene, $userId, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | Usage type number |
| groupId | Number | *optional* | `type=5` Determine if the user is a group administrator<br>`type=6` Get the specified group's extension |
| scene | Number | *optional* | Usage scene number |
| userId | Number | *optional* | When there is no permission requirement, both passing and not passing can get the extension<br>If the extension has permission requirements, judge whether it has the right based on the passed parameter |
| langTag | String | *optional* | If empty, the default language is used. |

## Get Data Extension

```php
ExtendUtility::getDataExtend($contentType, $dataType);
```

## Get Icon Extension

```php
ExtendUtility::getIcons($type, $id, $langTag);
```

## Get Copywriting Extension

```php
ExtendUtility::getTips($type, $id, $langTag);
```

## Get Content Extension

```php
ExtendUtility::getExtends($type, $id, $langTag);
```
