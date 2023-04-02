# GeneralUtility

`App\Utilities\GeneralUtility`

## 列表数据转换为树结构列表

```php
ExtendUtility::collectionToTree($data, $primary, $parent, $children);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| data | Array | NO | 列表数据 |
| primary | String | YES | 主键 Key |
| parent | String | YES | 父级主键 Key |
| children | String | YES | 树结构子级键 Key |

## 根据经纬度计算距离

```php
ExtendUtility::distanceOfLocation($langTag, $long, $lat, $userLong, $userLat, $mapId, $userMapId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| langTag | String | YES | 语言标签，获取该语言的距离单位 `km` 或 `mi` |
| long | String | YES | 经度 `longitude` |
| lat | String | YES | 纬度 `latitude` |
| userLong | String | YES | 用户的经度 |
| userLat | String | YES | 用户的纬度 |
| mapId | String | NO | 经纬度来自哪个[地图](../../database//dictionary/maps.md) |
| userMapId | String | NO | 用户的经纬度来自哪个[地图](../../database//dictionary/maps.md) |
