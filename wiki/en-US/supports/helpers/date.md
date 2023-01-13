# DateHelper

`App\Helpers\DateHelper`

## 获取数据库时区

```php
DateHelper::fresnsDatabaseTimezone();
```
*输出当前数据库的时区，UTC 标准*

## 获取数据库日期时间

```php
DateHelper::fresnsDatabaseCurrentDateTime();
```
*输出当前数据库的日期时间，格式 Y-m-d H:i:s*

## 将日期时间转换为数据库时区时间

```php
DateHelper::fresnsDateTimeToDatabaseTimezone($datetime, $timezone, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| datetime | String | **required** | `Y-m-d H:i:s` 日期时间值 |
| timezone | String | **required** | 该 `timezone` 为 `datetime` 参数的 [UTC 时区](../../database/dictionary/utc.md) |
| langTag | String | *optional* | 输出为该语言的时间格式<br>`configs > language_menus` 语言标签的 `dateFormat` 参数<br>不传则使用默认语言的格式 |

*将 timezone 时区的 datetime 时间转换为当前数据库时区的日期时间*

## 按指定时区输出日期时间

```php
DateHelper::fresnsDateTimeByTimezone($datetime, $timezone, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| datetime | String | **required** | `Y-m-d H:i:s` 时间值默认为数据库时间 |
| timezone | String | **required** | 将 `datetime` 参数的时间值，转换为 `timezone` [UTC 时区](../../database/dictionary/utc.md)的时间 |
| langTag | String | *optional* | 输出为该语言的时间格式<br>`configs > language_menus` 语言标签的 `dateFormat` 参数<br>不传则使用默认语言的格式 |

::: details 功能逻辑
- 1、获取当前数据库时区
    - 1.1、如果数据库时区和传参 timezone 时区一致，则流程终止，原样 datetime 参数输出。
    - 1.2、如果数据库时区和传参 timezone 时区不一致，则流程继续。
- 2、将传参 datetime 时间以数据库时区为准，转换为传参 timezone 时区的时间并输出。
- 输出格式：Y-m-d H:i:s
:::

## 按指定时区输出时间

```php
DateHelper::fresnsTimeByTimezone($time, $timezone);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| time | String | **required** | `H:i` 时间值，默认为数据库时间 |
| timezone | String | **required** | 将 `time` 参数的时间值，转换为 `timezone` [UTC 时区](../../database/dictionary/utc.md)的时间 |

## 按时区和语言标签格式化时间输出

```php
DateHelper::fresnsFormatDateTime($datetime, $timezone, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| datetime | String | **required** | `Y-m-d H:i:s` 时间值默认为数据库时间 |
| timezone | String | **required** | 将 `datetime` 参数的时间值，转换为 `timezone` [UTC 时区](../../database/dictionary/utc.md)的时间 |
| langTag | String | *optional* | 输出为该语言的时间格式<br>`configs > language_menus` 语言标签的 `dateFormat` 参数<br>不传则使用默认语言的格式 |

::: details 功能逻辑
- 数据的时区时间和当前 datetime 参数，属于同一天，输出为 `hh:mm`
- 不是同一天，但是同一年，输出对应语言标签的格式，例如 `mm-dd hh:mm` 或 `mm/dd hh:mm`
- 不是同一天，也不是同一年，输出对应语言标签的格式，例如 `yyyy-mm-dd hh:mm` 或 `mm/dd/yyyy hh:mm`
:::

## 按语言人性化格式时间输出

```php
DateHelper::fresnsFormatTime($datetime, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| datetime | String | **required** | `Y-m-d H:i:s` 时间值默认为数据库时间 |
| langTag | String | *optional* | 对应 configs 表 language_menus 键名的键值 timeFormat* 配置。<br>- timeFormatMinute<br>- timeFormatHour<br>- timeFormatDay<br>- timeFormatMonth<br>不传则使用默认语言的格式 |

::: details 功能逻辑
- 逻辑
    - 1、获取数据库当前时间；
    - 2、以数据库当前时间减 datetime 参数的时间，得出时间差；
    - 3、将时间差转换成人性化时间输出。
- 场景
    - 时间在 60 分钟以内（包括 1 分钟以内的秒），输出为“分钟”值，客户端使用场景为「n 分钟前」
    - 时间超过 60 分钟，但在 24 小时以内，输出为“小时”值，客户端使用场景为「n 小时前」
    - 时间超过 24 小时，但在 30 天以内，输出为“天”值，客户端使用场景为「n 天前」
    - 时间超过 30 天，但在 365 天以内，输出为“月”值，客户端使用场景为「n 个月前」
:::

## 按语言标签转换时间格式

```php
DateHelper::fresnsFormatConversion($datetime, $langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| datetime | String | NO | `Y-m-d H:i:s` |
| langTag | String | NO | 输出为该语言的时间格式<br>`configs > language_menus` 语言标签的 `dateFormat` 参数<br>不传则使用默认语言的格式 |
