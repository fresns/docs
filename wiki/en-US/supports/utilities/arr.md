# ArrUtility

`App\Utilities\ArrUtility`

## 获取指定数值

```php
ArrUtility::get($array, $key, $values);
```
| Parameter Name | Type | Description |
| --- | --- | --- |
| array | Array | Example `[{"name":"language","canDelete":false},{"name":"errorUnknown","canDelete":false}]` |
| key | String | Example `name` |
| values | String|Array | Example `language` |

- From an array, get the array with the specified key name for the specified key value.
- Example output `{"name":"language","canDelete":false}`

## 移除指定数值

```php
ArrUtility::forget($array, $key, $values);
```
| Parameter Name | Type | Description |
| --- | --- | --- |
| array | Array | Example `[{"name":"language","canDelete":false},{"name":"errorUnknown","canDelete":false}]` |
| key | String | Example `name` |
| values | String|Array | Example `language` |

- From an array, removes the array with the specified key name for the specified key value.
- Example output `[{"name":"errorUnknown","canDelete":false}]`

## 返回并清理指定值

```php
ArrUtility::pull($array, $key, $values);
```
| Parameter Name | Type | Description |
| --- | --- | --- |
| array | Array | Example `[{"name":"language","canDelete":false},{"name":"errorUnknown","canDelete":false}]` |
| key | String | Example `name` |
| values | String|Array | Example `language` |

- Returns the value of the specified key from the array and removes this key-value pair.
- Return `{"name":"language","canDelete":false}`
- 传参的数组只剩下 `[{"name":"errorUnknown","canDelete":false}]`

## 编辑数组值

```php
ArrUtility::editValue($array, $key, $value, $newValue);
```
| Parameter Name | Type | Description |
| --- | --- | --- |
| array | Array | Example `[{"name":"language","canDelete":false},{"name":"errorUnknown","canDelete":false}]` |
| key | String | Example `name` |
| value | String | Example `language` |
| newValue | String | Example `lang` |

- Example after modification `[{"name":"lang","canDelete":false},{"name":"errorUnknown","canDelete":false}]`

## 编辑对象键名

```php
ArrUtility::editKey($object, $key, $newKey);
```
| Parameter Name | Type | Description |
| --- | --- | --- |
| object | Object | Example `{"language":"Language","errorUnknown":"Unknown error"}` |
| key | String | Example `language` |
| newKey | String | Example `lang` |

- Example after modification `{"lang":"Language","errorUnknown":"Unknown error"}`
