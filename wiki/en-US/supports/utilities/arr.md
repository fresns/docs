# ArrUtility

`App\Utilities\ArrUtility`

## 获取指定数值

```php
ArrUtility::get($array, $key, $values);
```
| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| array | Array | Example `[{"name":"language","canDelete":false},{"name":"errorUnknown","canDelete":false}]` |
| key | String | Example `name` |
| values | String|Array | Example `language` |

- 从数组中，获取指定键名为指定键值的数组。
- 输出示例 `{"name":"language","canDelete":false}`

## 移除指定数值

```php
ArrUtility::forget($array, $key, $values);
```
| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| array | Array | Example `[{"name":"language","canDelete":false},{"name":"errorUnknown","canDelete":false}]` |
| key | String | Example `name` |
| values | String|Array | Example `language` |

- 从数组中，移除指定键名为指定键值的数组。
- 输出示例 `[{"name":"errorUnknown","canDelete":false}]`

## 返回并清理指定值

```php
ArrUtility::pull($array, $key, $values);
```
| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| array | Array | Example `[{"name":"language","canDelete":false},{"name":"errorUnknown","canDelete":false}]` |
| key | String | Example `name` |
| values | String|Array | Example `language` |

- 从数组中返回指定键的值并删除此键值对。
- 返回 `{"name":"language","canDelete":false}`
- 传参的数组只剩下 `[{"name":"errorUnknown","canDelete":false}]`

## 编辑数组值

```php
ArrUtility::editValue($array, $key, $value, $newValue);
```
| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| array | Array | Example `[{"name":"language","canDelete":false},{"name":"errorUnknown","canDelete":false}]` |
| key | String | Example `name` |
| value | String | Example `language` |
| newValue | String | Example `lang` |

- 修改之后示例 `[{"name":"lang","canDelete":false},{"name":"errorUnknown","canDelete":false}]`

## 编辑对象键名

```php
ArrUtility::editKey($object, $key, $newKey);
```
| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| object | Object | Example `{"language":"Language","errorUnknown":"Unknown error"}` |
| key | String | Example `language` |
| newKey | String | Example `lang` |

- 修改之后示例 `{"lang":"Language","errorUnknown":"Unknown error"}`
