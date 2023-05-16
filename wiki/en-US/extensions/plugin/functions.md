# Crontab and Subscribe

If the plug-in has scheduled tasks or subscription requirements, the command word can be added to the main program when the plug-in is installed, and the cancel command word can be executed when it is uninstalled.

## Crontab

```php
// Create
\FresnsCmdWord::plugin('Fresns')->addCrontabItem($wordBody);

// Cancel
\FresnsCmdWord::plugin('Fresns')->removeCrontabItem($wordBody);
```

| Parameter | Description |
| --- | --- |
| fskey | Crontab Plugin |
| cmdWord | Crontab Command Word |
| taskPeriod | Task Execution Period(Laravel Cron Expression) |

- The main program requests the command word of the plug-in circularly according to the task cycle. 

## Subscribe Data Table Change

Subscribe to plugin data table dynamics (all data tables can be subscribed).

Tell the main program which table to subscribe to, and which command word of itself or the proxy plug-in to execute when dynamic happens; when a "new" record occurs in the subscribed data table, the main program executes the command word specified by the plug-in.

```php
// Create
\FresnsCmdWord::plugin('Fresns')->addSubscribeItem($wordBody);

// Cancel
\FresnsCmdWord::plugin('Fresns')->removeSubscribeItem($wordBody);
```

| Parameter | Description |
| --- | --- |
| type | Subscription Type `type = 1` |
| fskey | Subscriber(plugin) |
| cmdWord | Command word for subscriber |
| subTableName | Which table to subscribe to |

- When a new record is added to the data table, the information of `tableName` and `primaryId` will be passed to the command word `cmdWord` of the subscriber.
    - `tableName` = `Database Table Name`
    - `primaryId` = `Primary ID`
- Activity type support `created`, `updated`, `deleted`

```php
// Example of subscription notification
\FresnsCmdWord::plugin('YourFskey')->yourCmdWord([
    'tableName' => 'Database Table Name',
    'primaryId' => 'Primary ID',
    'changeType' => 'Activity Type'
]);
```

```php
use App\Fresns\Subscribe\Subscribe;

// Activity Type
Subscribe::CHANGE_TYPE_CREATED;
Subscribe::CHANGE_TYPE_UPDATED;
Subscribe::CHANGE_TYPE_DELETED;
```

## Subscribe User Activity

The plug-in subscribes to the user requests in headers information. Inform the main program which command word would be executed after the subscribed event occurs; after the API of the main program requests that the headers information contain user information, the main program executes the command word specified by the plug-in.

```php
// Create
\FresnsCmdWord::plugin('Fresns')->addSubscribeItem($wordBody);

// Cancel
\FresnsCmdWord::plugin('Fresns')->removeSubscribeItem($wordBody);
```

| Parameter | Description |
| --- | --- |
| type | Subscription Type `type = 2` |
| fskey | Subscriber(plugin) |
| cmdWord | Command word for subscriber |

```php
// Example of subscription notification
$wordBody = [
    'route' => 'Route name when generating notifications',
    'uri' => 'URI when generating notifications',
    'headers' => \request()->headers->all(),
    'body' => $dtoRequest->toArray(),
];

\FresnsCmdWord::plugin('YourFskey')->yourCmdWord($wordBody);
```

## Subscribe Account and User Login

Notify subscribers of command words when an account or user is logged in.

```php
// Create
\FresnsCmdWord::plugin('Fresns')->addSubscribeItem($wordBody);

// Cancel
\FresnsCmdWord::plugin('Fresns')->removeSubscribeItem($wordBody);
```

| Parameter | Description |
| --- | --- |
| type | Subscription Type `type = 3` |
| fskey | Subscriber(plugin) |
| cmdWord | Command word for subscriber |

```php
// Example of subscription notification
$wordBody = [
    'primaryId' => [
        'accountId' =>  'Account Primary ID',
        'userId' => 'User Primary ID',
    ],
    'accountToken' => [
        "aid": "String / Account ID",
        'token' => 'String / Account Token',
        'expiredHours' => 'Number / Expiration hours, null for permanent',
        'expiredDays' => 'Number / Expiration days, null for permanent',
        'expiredDateTime' => 'String / The token expiration date, null for permanent, in the format Y-m-d H:i:s'
    ],
    'accountDetail' => [
        // Common Data Structure -> Account Info
    ],
    'userToken' => [
        "uid": "String / User ID",
        'token' => 'String / User Token',
        'expiredHours' => 'Number / Expiration hours, null for permanent',
        'expiredDays' => 'Number / Expiration days, null for permanent',
        'expiredDateTime' => 'String / The token expiration date, null for permanent, in the format Y-m-d H:i:s'
    ],
    'userDetail' => [
        // Common Data Structure -> User Info
    ],
];

\FresnsCmdWord::plugin('YourFskey')->yourCmdWord($wordBody);
```
