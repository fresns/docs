# ArrUtility

`App\Utilities\ArrUtility`

## Get Specified Value

```php
ArrUtility::get($array, $key, $values, $asArray);
```
| Parameter Name | Type | Description |
| --- | --- | --- |
| array | Array | Example `[{"name":"language","canDelete":false},{"name":"errorUnknown","canDelete":false}]` |
| key | String | Example `name` |
| values | String|Array | Example `language` |
| asArray | Boolean | Whether or not to keep the result in array format when there is only one element left |

- From an array, get the array with the specified key name for the specified key value.
- Example output `{"name":"language","canDelete":false}`

## Remove Specified Value

```php
ArrUtility::forget($array, $key, $values, $asArray);
```
| Parameter Name | Type | Description |
| --- | --- | --- |
| array | Array | Example `[{"name":"language","canDelete":false},{"name":"errorUnknown","canDelete":false}]` |
| key | String | Example `name` |
| values | String|Array | Example `language` |
| asArray | Boolean | Whether or not to keep the result in array format when there is only one element left |

- From an array, removes the array with the specified key name for the specified key value.
- Example output `[{"name":"errorUnknown","canDelete":false}]`

## Return and Clear Specified Value

```php
ArrUtility::pull($array, $key, $values, $asArray);
```
| Parameter Name | Type | Description |
| --- | --- | --- |
| array | Array | Example `[{"name":"language","canDelete":false},{"name":"errorUnknown","canDelete":false}]` |
| key | String | Example `name` |
| values | String|Array | Example `language` |
| asArray | Boolean | Whether or not to keep the result in array format when there is only one element left |

- Returns the value of the specified key from the array and removes this key-value pair.
- Return `{"name":"language","canDelete":false}`
- The passed array only contains `[{"name":"errorUnknown","canDelete":false}]`

## Edit Object Key Name

```php
ArrUtility::editKey($object, $key, $newKey);
```
| Parameter Name | Type | Description |
| --- | --- | --- |
| object | Object | Example `{"language":"Language","errorUnknown":"Unknown error"}` |
| key | String | Example `language` |
| newKey | String | Example `lang` |

- Example after modification `{"lang":"Language","errorUnknown":"Unknown error"}`

## Edit Array Value

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
