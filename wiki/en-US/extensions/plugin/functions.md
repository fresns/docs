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
| subject | Which table to subscribe to |

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
use App\Utilities\SubscribeUtility;

// Activity Type
SubscribeUtility::CHANGE_TYPE_CREATED;
SubscribeUtility::CHANGE_TYPE_UPDATED;
SubscribeUtility::CHANGE_TYPE_DELETED;
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
    'ip' => request()->ip(),
    'port' => $_SERVER['REMOTE_PORT'],
    'uri' => request()->getRequestUri(),
    'routeName' => request()->route()->getName(),
    'headers' => AppHelper::getHeaders(),
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

## Subscribe View

Trigger subscription notifications when viewing users, groups, topics, posts, comments.

```php
// Create
\FresnsCmdWord::plugin('Fresns')->addSubscribeItem($wordBody);

// Cancel
\FresnsCmdWord::plugin('Fresns')->removeSubscribeItem($wordBody);
```

| Parameter | Description |
| --- | --- |
| type | Subscription Type `type = 4` |
| fskey | Subscriber(plugin) |
| cmdWord | Command word for subscriber |
| subject | Which view type to subscribe to |

```php
use App\Utilities\SubscribeUtility;

// View Type
SubscribeUtility::VIEW_TYPE_USER;
SubscribeUtility::VIEW_TYPE_GROUP;
SubscribeUtility::VIEW_TYPE_HASHTAG;
SubscribeUtility::VIEW_TYPE_POST;
SubscribeUtility::VIEW_TYPE_COMMENT;
```

```php
// Example of subscription notification
$wordBody = [
    'ip' => request()->ip(),
    'port' => $_SERVER['REMOTE_PORT'],
    'uri' => request()->getRequestUri(),
    'routeName' => request()->route()->getName(),
    'headers' => AppHelper::getHeaders(),
    'type' => $type, // user, group, hashtag, post, comment
    'fsid' => $fsid,
    'viewType' => $viewType, // list or detail
    'authUserId' => $authUserId,
];

\FresnsCmdWord::plugin('YourFskey')->yourCmdWord($wordBody);
```
