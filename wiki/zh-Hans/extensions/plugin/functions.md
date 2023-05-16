# 定时任务和订阅

插件如果有定时任务或者订阅需求，可在插件安装时执行命令字添加至主程序中，卸载时执行取消命令字。

## 定时任务

```php
//建立定时任务
\FresnsCmdWord::plugin('Fresns')->addCrontabItem($wordBody);

//取消定时任务
\FresnsCmdWord::plugin('Fresns')->removeCrontabItem($wordBody);
```

| 参数 | 说明 |
| --- | --- |
| fskey | 定时任务插件 |
| cmdWord | 定时任务插件命令字 |
| taskPeriod | 定时任务执行周期（Laravel 定时任务表达式） |

- 主程序根据任务周期，循环请求插件的命令字。

::: details Laravel 定时任务表达式
`*(0~59 分)` `*(0～23 小时)` `*(1～31 号)` `*(1-12 月)` `*(0-7 星期，0 和 7 都代表星期日)`

- `* (星号)`：代表任何时刻都接受的意思。例：`0 10 * * *` command 日、月、周都是 *，就代表着不论何月、何日的星期几的 `10:00` 都执行后续命令的意思。
- `, (逗号)`：代表分隔时段的意思。例：要执行的工作是 `2:00` 与 `3:00` 时，就会是：`0 2,3 * * *` command时间还是有五列，不过第二列是 `2,3` ，代表 2 与 3 都适用。
- `- (减号)`：代表一段时间范围内，例：8 点到 11 点之间的每小时的 18 分都进行一项工作：`18 8-11 * * *` command 仔细看到第二列变成 8-11，代表 `8,9,10,11,12` 都适用的。
- `/n (斜线)`：那个 n 代表数字，即是每隔 n 单位间隔的意思，例：每五分钟进行一次，则：`*/5 * * * *`。
:::

## 订阅数据表数据活动

插件订阅数据表动态（所有数据表均可订阅）。告之主程序订阅哪张表，以及发生动态时，执行自己或者代理插件的哪个命令字；当订阅的数据表发生「新增」记录时，主程序执行插件指定的命令字。

```php
//建立订阅
\FresnsCmdWord::plugin('Fresns')->addSubscribeItem($wordBody);

//取消订阅
\FresnsCmdWord::plugin('Fresns')->removeSubscribeItem($wordBody);
```

| 参数 | 说明 |
| --- | --- |
| type | 订阅类型 `type = 1` |
| fskey | 订阅者（插件） |
| cmdWord | 订阅者的命令字 |
| subTableName | 订阅哪张表 |

- 当数据表发生新增记录时，会将 `tableName` 和 `primaryId` 信息传参给订阅者的命令字 `cmdWord`。
    - `tableName` = `表名`
    - `primaryId` = `主键 ID`
- 活动类型支持 `created`, `updated`, `deleted`

```php
//订阅通知示例
\FresnsCmdWord::plugin('YourFskey')->yourCmdWord([
    'tableName' => '表名',
    'primaryId' => '主键 ID',
    'changeType' => '活动类型',
]);
```

```php
use App\Fresns\Subscribe\Subscribe;

// 活动类型
Subscribe::CHANGE_TYPE_CREATED;
Subscribe::CHANGE_TYPE_UPDATED;
Subscribe::CHANGE_TYPE_DELETED;
```

## 订阅用户活跃状态

插件订阅 headers 信息中用户请求。告之主程序订阅事件发生后执行自己的哪个命令字；当主程序 API 请求 headers 信息中含有用户信息后，主程序执行插件指定的命令字。

```php
//建立订阅
\FresnsCmdWord::plugin('Fresns')->addSubscribeItem($wordBody);

//取消订阅
\FresnsCmdWord::plugin('Fresns')->removeSubscribeItem($wordBody);
```

| 参数 | 说明 |
| --- | --- |
| type | 订阅类型 `type = 2` |
| fskey | 订阅者（插件） |
| cmdWord | 订阅者的命令字 |

```php
//订阅通知示例
$wordBody = [
    'route' => '产生通知时操作的路由',
    'uri' => '产生通知时操作的路径',
    'headers' => \request()->headers->all(),
    'body' => $dtoRequest->toArray(),
];

\FresnsCmdWord::plugin('YourFskey')->yourCmdWord($wordBody);
```

## 订阅登录通知

当账号或用户登录后，通知订阅者命令字。

```php
//建立订阅
\FresnsCmdWord::plugin('Fresns')->addSubscribeItem($wordBody);

//取消订阅
\FresnsCmdWord::plugin('Fresns')->removeSubscribeItem($wordBody);
```

| 参数 | 说明 |
| --- | --- |
| type | 订阅类型 `type = 3` |
| fskey | 订阅者（插件） |
| cmdWord | 订阅者的命令字 |

```php
//订阅通知示例
$wordBody = [
    'primaryId' => [
        'accountId' =>  '账号数据表主键 ID',
        'userId' => '用户数据表主键 ID',
    ],
    'accountToken' => [
        "aid": "String / 账号 ID",
        'token' => 'String / 账号登录凭证',
        'expiredHours' => 'Number / 有效期小时数，null 代表永久有效',
        'expiredDays' => 'Number / 有效期天数，null 代表永久有效',
        'expiredDateTime' => 'String / 凭证有效时间，null 代表永久有效，格式为 Y-m-d H:i:s'
    ],
    'accountDetail' => [
        // 通用数据结构->账号信息
    ],
    'userToken' => [
        "uid": "String / 用户 UID",
        'token' => 'String / 账号登录凭证',
        'expiredHours' => 'Number / 有效期小时数，null 代表永久有效',
        'expiredDays' => 'Number / 有效期天数，null 代表永久有效',
        'expiredDateTime' => 'String / 凭证有效时间，null 代表永久有效，格式为 Y-m-d H:i:s'
    ],
    'userDetail' => [
        // 通用数据结构->用户信息
    ],
];

\FresnsCmdWord::plugin('YourFskey')->yourCmdWord($wordBody);
```
