# DateHelper

`App\Helpers\DateHelper`

## Get Database Timezone

```php
DateHelper::fresnsDatabaseTimezone();
```
*Output the current database timezone in UTC standard*

## Get Database Datetime

```php
DateHelper::fresnsDatabaseCurrentDateTime();
```
*Output the current database date and time in the format `Y-m-d H:i:s`*

## Convert Datetime to Database Timezone

```php
DateHelper::fresnsDateTimeToDatabaseTimezone($datetime, $timezone, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| datetime | String | *optional* | `Y-m-d H:i:s` Datetime value |
| timezone | String | *optional* | This `timezone` is the [UTC timezone](../../database/dictionary/timezone.md) for the `datetime` parameter |
| langTag | String | *optional* | Outputs the time format in the specified language<br>`configs->item_key=language_menus` language tag's `dateFormat` parameter<br>If not provided, the default language format will be used |

*Convert the `datetime` in the `timezone` to the date and time in the current database timezone*

## Get Datetime by Specified Timezone

```php
DateHelper::fresnsDateTimeByTimezone($datetime, $timezone, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| datetime | String | *optional* | `Y-m-d H:i:s` time value defaults to database time |
| timezone | String | *optional* | Converts the time value of the `datetime` parameter into the `timezone` [UTC timezone](../../database/dictionary/timezone.md) |
| langTag | String | *optional* | Outputs the time format in the specified language<br>`configs->item_key=language_menus` language tag's `dateFormat` parameter<br>If not provided, the default language format will be used |

::: details Logic Notes
- 1. Get the current database timezone
    - 1.1. If the database timezone is the same as the passed `timezone`, terminate the process and output the `datetime` parameter as is.
    - 1.2. If the database timezone is different from the passed `timezone`, continue the process.
- 2. Convert the passed `datetime` to the time in the passed `timezone` based on the database timezone and output it.
- Output format: `Y-m-d H:i:s`
:::

## Get Time by Specified Timezone

```php
DateHelper::fresnsTimeByTimezone($time, $timezone);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| time | String | *optional* | `H:i` time value, default to database time |
| timezone | String | *optional* | Converts the time value of the `time` parameter into the `timezone` [UTC timezone](../../database/dictionary/timezone.md) |

## Format Time Output by Timezone and Language Tag

```php
DateHelper::fresnsFormatDateTime($datetime, $timezone, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| datetime | String | *optional* | `Y-m-d H:i:s` time value defaults to database time |
| timezone | String | *optional* | Converts the time value of the `datetime` parameter into the `timezone` [UTC timezone](../../database/dictionary/timezone.md) |
| langTag | String | *optional* | Outputs the time format in the specified language<br>`configs->item_key=language_menus` language tag's `dateFormat` parameter<br>If not provided, the default language format will be used |

::: details Logic Notes
- If the data's timezone time and the current `datetime` parameter are on the same day, output as `hh:mm`
- If not on the same day but in the same year, output in the corresponding language label format, such as `mm-dd hh:mm` or `mm/dd hh:mm`
- If not on the same day and not in the same year, output in the corresponding language label format, such as `yyyy-mm-dd hh:mm` or `mm/dd/yyyy hh:mm`
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

::: details Logic Notes
- Logic
    - 1. Get the current time of the database;
    - 2. Subtract the `datetime` parameter from the current database time to get the time difference;
    - 3. Convert the time difference into human-readable time output.
- Scenarios
    - Time is within 60 minutes (including seconds within 1 minute), output as "minutes" value, client usage scenario is `n minutes ago`
    - Time exceeds 60 minutes, but within 24 hours, output as "hours" value, client usage scenario is `n hours ago`
    - Time exceeds 24 hours, but within 30 days, output as "days" value, client usage scenario is `n days ago`
    - Time exceeds 30 days, but within 365 days, output as "months" value, client usage scenario is `n months ago`
:::
