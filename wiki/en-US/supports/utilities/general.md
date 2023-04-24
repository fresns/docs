# GeneralUtility

`App\Utilities\GeneralUtility`

## 列表数据转换为树结构列表

```php
ExtendUtility::collectionToTree($data, $primary, $parent, $children);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| data | Array | *optional* | List data |
| primary | String | **required** | Primary Key |
| parent | String | **required** | Parent Primary Key |
| children | String | **required** | Tree structure child Key |

## 根据经纬度计算距离

```php
ExtendUtility::distanceOfLocation($langTag, $long, $lat, $userLong, $userLat, $mapId, $userMapId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | **required** | Language tag, get the distance unit `km` or `mi` for this language |
| long | String | **required** | Longitude `longitude` |
| lat | String | **required** | Latitude `latitude` |
| userLong | String | **required** | User's longitude |
| userLat | String | **required** | User's latitude |
| mapId | String | *optional* | Longitude and latitude from which [map](../../database//dictionary/maps.md) |
| userMapId | String | *optional* | User's longitude and latitude from which [map](../../database//dictionary/maps.md) |
