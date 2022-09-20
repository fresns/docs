# Crontab and Subscribe

If the plug-in has scheduled tasks or subscription requirements, the command word can be added to the main program when the plug-in is installed, and the cancel command word can be executed when it is uninstalled.

## Crontab

```php
// Create
\FresnsCmdWord::plugin('Fresns')->addCrontabItem($wordBody)

// Cancel
\FresnsCmdWord::plugin('Fresns')->deleteCrontabItem($wordBody)
```

| Parameter | Description |
| --- | --- |
| unikey | Crontab Plugin |
| cmdWord | Crontab Command Word |
| taskPeriod | Task Execution Period(Laravel Cron Expression) |

- The main program requests the command word of the plug-in circularly according to the task cycle. 

## Subscribe Database Table Activity

Subscribe to plugin data table dynamics (all data tables can be subscribed).

Tell the main program which table to subscribe to, and which command word of itself or the proxy plug-in to execute when dynamic happens; when a "new" record occurs in the subscribed data table, the main program executes the command word specified by the plug-in.

```php
// Create
\FresnsCmdWord::plugin('Fresns')->addSubscribeItem($wordBody)

// Cancel
\FresnsCmdWord::plugin('Fresns')->deleteSubscribeItem($wordBody)
```

| Parameter | Description |
| --- | --- |
| type | Subscription Type `type = 1` |
| unikey | Subscriber(plugin) |
| cmdWord | Command word for subscriber |
| subTableName | Which table to subscribe to |

- When a new record is added to the data table, the information of `tableName` and `primaryId` will be passed to the command word `cmdWord` of the subscriber.
    - `tableName` = `Database Table Name`
    - `primaryId` = `Primary Key ID`
- Only `created` and `deleted` activity types are supported.

```php
// Example of subscription notification
\FresnsCmdWord::plugin('YourUniKey')->yourCmdWord([
    "tableName" => "Database Table Name",
    "primaryId" => "Primary Key ID",
    "changeType" => "Activity Type" // created or deleted
]);
```


## Subscribe Account Activity

The plug-in subscribes to the account and the user requests in headers information. Inform the main program which command word would be executed after the subscribed event occurs; after the API of the main program requests that the headers information contain account or user information, the main program executes the command word specified by the plug-in.

```php
// Create
\FresnsCmdWord::plugin('Fresns')->addSubscribeItem($wordBody)

// Cancel
\FresnsCmdWord::plugin('Fresns')->deleteSubscribeItem($wordBody)
```

| Parameter | Description |
| --- | --- |
| type | Subscription Type `type = 2` |
| unikey | Subscriber(plugin) |
| cmdWord | Command word for subscriber |

```php
// Example of subscription notification
$wordBody = [
    "uri" => 'Route when generating notifications',
    "headers" => \request()->headers->all(),
    "body" => $dtoRequest->toArray(),
];

\FresnsCmdWord::plugin('YourUniKey')->yourCmdWord($wordBody);
```
