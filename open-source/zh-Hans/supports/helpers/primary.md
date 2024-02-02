# 主键转换 PrimaryHelper

`App\Helpers\PrimaryHelper`

## 获取数据模型

```php
PrimaryHelper::fresnsModelByFsid($modelName, $fsid);

PrimaryHelper::fresnsModelById($modelName, $id);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| modelName | String | YES | 模型名 |
| fsid | Number / String | YES | 字段值，比如 aid 值 |

## 获取主键 ID

```php
PrimaryHelper::fresnsPrimaryId($type, $fsid);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | 类型 |
| fsid | String | NO | 字段值，比如 aid 值 |
