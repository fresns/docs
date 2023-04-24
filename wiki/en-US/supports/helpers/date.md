# DateHelper

`App\Helpers\DateHelper`

## Get Database Timezone

```php
DateHelper::fresnsDatabaseTimezone();
```
*输出当前数据库的时区，UTC 标准*

## Get Database Datetime

```php
DateHelper::fresnsDatabaseCurrentDateTime();
```
*输出当前数据库的日期时间，格式 Y-m-d H:i:s*

## Convert Datetime to Database Timezone

```php
DateHelper::fresnsDateTimeToDatabaseTimezone($datetime, $timezone, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| datetime | String | **required** | `Y-m-d H:i:s` Datetime value |
| timezone | String | **required** | This `timezone` is the [UTC timezone](../../database/dictionary/timezone.md) for the `datetime` parameter |
| langTag | String | *optional* | Outputs the time format in the specified language<br>`configs->item_key=language_menus` language tag's `dateFormat` parameter<br>If not provided, the default language format will be used |

*将 timezone 时区的 datetime 时间转换为当前数据库时区的日期时间*

## Get Datetime by Specified Timezone

```php
DateHelper::fresnsDateTimeByTimezone($datetime, $timezone, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| datetime | String | **required** | `Y-m-d H:i:s` time value defaults to database time |
| timezone | String | **required** | Converts the time value of the `datetime` parameter into the `timezone` [UTC timezone](../../database/dictionary/timezone.md) |
| langTag | String | *optional* | Outputs the time format in the specified language<br>`configs->item_key=language_menus` language tag's `dateFormat` parameter<br>If not provided, the default language format will be used |

::: details 功能逻辑
- 1、获取当前数据库时区
    - 1.1、如果数据库时区和传参 timezone 时区一致，则流程终止，原样 datetime 参数输出。
    - 1.2、如果数据库时区和传参 timezone 时区不一致，则流程继续。
- 2、将传参 datetime 时间以数据库时区为准，转换为传参 timezone 时区的时间并输出。
- 输出格式：Y-m-d H:i:s
:::

## Get Time by Specified Timezone

```php
DateHelper::fresnsTimeByTimezone($time, $timezone);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| time | String | **required** | `H:i` time value, default to database time |
| timezone | String | **required** | Converts the time value of the `time` parameter into the `timezone` [UTC timezone](../../database/dictionary/timezone.md) |

## Format Time Output by Timezone and Language Tag

```php
DateHelper::fresnsFormatDateTime($datetime, $timezone, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| datetime | String | **required** | `Y-m-d H:i:s` time value defaults to database time |
| timezone | String | **required** | Converts the time value of the `datetime` parameter into the `timezone` [UTC timezone](../../database/dictionary/timezone.md) |
| langTag | String | *optional* | Outputs the time format in the specified language<br>`configs->item_key=language_menus` language tag's `dateFormat` parameter<br>If not provided, the default language format will be used |

::: details 功能逻辑
- 数据的时区时间和当前 datetime 参数，属于同一天，输出为 `hh:mm`
- 不是同一天，但是同一年，输出对应语言标签的格式，例如 `mm-dd hh:mm` 或 `mm/dd hh:mm`
- 不是同一天，也不是同一年，输出对应语言标签的格式，例如 `yyyy-mm-dd hh:mm` 或 `mm/dd/yyyy hh:mm`
:::

## Convert Time Format by Language Tag

```php
DateHelper::fresnsFormatConversion($datetime, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| datetime | String | *optional* | `Y-m-d H:i:s` |
| langTag | String | *optional* | Outputs the time format in the specified language<br>`configs->item_key=language_menus` language tag's `dateFormat` parameter<br>If not provided, the default language format will be used |

## Humanize Time Output by Language Tag

```php
DateHelper::fresnsHumanReadableTime($datetime, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| datetime | String | **required** | `Y-m-d H:i:s` time value defaults to database time |
| langTag | String | *optional* | Corresponds to configs table language_menus key name key value timeFormat* configuration.<br>- timeFormatMinute<br>- timeFormatHour<br>- timeFormatDay<br>- timeFormatMonth<br>If not provided, the default language format will be used |

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
