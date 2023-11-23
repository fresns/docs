# 扩展工具 ExtendUtility

`App\Utilities\ExtendUtility`

## 获取插件扩展

```php
ExtendUtility::getPluginExtends($type, $groupId, $scene, $userId, $langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 使用类型编号 |
| groupId | Number | NO | `type=5` 判断用户是否为小组管理员<br>`type=6` 获取指定小组的扩展 |
| scene | Number | NO | 使用场景编号 |
| userId | Number | NO | 没有权限要求时，传与不传都可获得扩展<br>如果扩展有权限要求，则根据传参判断是否有权 |
| langTag | String | NO | 语言标签，可不传，不传则使用默认语言 |

## 获取数据扩展

```php
ExtendUtility::getDataExtend($contentType, $dataType);
```

## 获取图标扩展

```php
ExtendUtility::getIcons($type, $id, $langTag);
```

## 获取文案扩展

```php
ExtendUtility::getTips($type, $id, $langTag);
```

## 获取内容扩展

```php
ExtendUtility::getExtends($type, $id, $langTag);
```
