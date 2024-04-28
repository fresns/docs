# Configuration

## .env Config File

After successful installation, there will be an `.env` file in the root directory of the main program, which is used to store all the configuration information of Fresns. The details are as follows:

```ini
APP_ENV=production            #Operating environment, local for test use, production for official operation
APP_KEY=                      #Data encryption key, which can be regenerated with the command php artisan key:generate
APP_DEBUG=false               #Whether to output detailed error messages
APP_URL=                      #example https://discuss.fresns.org

APP_TIMEZONE=Asia/Singapore   #Database Timezone
APP_FOUNDER=1                 #Founder Account ID (accounts->id)
```

::: code-group
```ini [MySQL]
DB_CONNECTION=mysql               #Database Type: sqlite, mysql, mariadb, pgsql, sqlsrv
DB_HOST=127.0.0.1                 #Default is 127.0.0.1
DB_PORT=3306                      #Default is 3306
DB_DATABASE=fresns                #Database
DB_USERNAME=fresns                #Username
DB_PASSWORD=123456                #Password
DB_PREFIX=fs_                     #Default is fs_

DB_COLLATION=utf8mb4_0900_ai_ci   #Default is utf8mb4_unicode_520_ci
```

```ini [MariaDB]
DB_CONNECTION=mariadb
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=fresns
DB_USERNAME=fresns
DB_PASSWORD=123456
DB_PREFIX=fs_

DB_COLLATION=utf8mb4_unicode_520_ci   #Default is utf8mb4_unicode_520_ci
```

```ini [PostgreSQL]
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=54321
DB_DATABASE=fresns
DB_USERNAME=fresns
DB_PASSWORD=123456
DB_PREFIX=fs_
```

```ini [SQL Server]
DB_CONNECTION=sqlsrv
DB_HOST=127.0.0.1
DB_PORT=1433
DB_DATABASE=fresns
DB_USERNAME=fresns
DB_PASSWORD=123456
DB_PREFIX=fs_
```

```ini [SQLite]
DB_CONNECTION=sqlite
DB_DATABASE=/www/wwwroot/fresns/database/fresns.sqlite
DB_PREFIX=fs_
```
:::

> If the `.env` change does not take effect because the configuration value was cached by the system, please delete the cached file `/bootstrap/cache/config.php`.

## Trusted Proxies

If you are running as a proxy, you need to configure `.env` trusted IP information, multiple separated by English commas.

Let's take the Cloudflare proxy environment as an example and configure [IPv4](https://www.cloudflare.com/ips-v4) and [IPv6](https://www.cloudflare.com/ips-v6)

::: code-group
```ini [IPv4]
TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22
```

```ini [IPv6]
TRUSTED_PROXIES=2400:cb00::/32,2606:4700::/32,2803:f800::/32,2405:b500::/32,2405:8100::/32,2a06:98c0::/29,2c0f:f248::/32
```

```ini [All]
TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22,2400:cb00::/32,2606:4700::/32,2803:f800::/32,2405:b500::/32,2405:8100::/32,2a06:98c0::/29,2c0f:f248::/32
```
:::

## Cache Config

You may specify which cache driver you would like to be used by default throughout your application. Fresns supports popular caching backends like `Memcached`, `Redis`, `DynamoDB`, and relational databases out of the box. In addition, a file based cache driver is available, while `array` and `null` cache drivers provide convenient cache backends for your automated tests.

- The default caching system is `File`, if you want to change it, we recommend `Redis` or `Memcached` caching.
- Before you can change the cache configuration, you must install the appropriate PHP extension and then modify the `.env' file to include the cache configuration.

::: code-group
```ini [Redis]
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

CACHE_STORE=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
BROADCAST_CONNECTION=redis
```

```ini [Memcached]
MEMCACHED_HOST=127.0.0.1
MEMCACHED_PORT=11211
MEMCACHED_USERNAME=null
MEMCACHED_PASSWORD=null

CACHE_STORE=memcached
SESSION_DRIVER=memcached
```
:::

- `Redis`: In addition to cache, other driver systems that support Redis can also be configured to use it.
- `Memcached`: only supports drive cache and session.

::: details Configuration when deploying multiple Fresns projects on the same server
- Redis

```ini
REDIS_DB=2                          #Default is 0, only 2-15 can be selected
REDIS_CACHE_DB=3                    #Default is 1, only 2-15 can be selected, Must be different from REDIS_DB
REDIS_QUEUE=fresns2                 #The default is fresns. Just enter another one.
REDIS_PREFIX=fresns2_database_      #The default is fresns_database_. Just enter another one.
CACHE_PREFIX=fresns2_cache_         #The default is fresns_cache_. Just enter another one.
```

- Memcached

```ini
MEMCACHED_PERSISTENT_ID=fresns2     #The default is fresns. Just enter another one.
CACHE_PREFIX=fresns2_cache_         #The default is fresns_cache_. Just enter another one.
```
:::

## Task Scheduling

When running Fresns, you need a way to keep “scheduled tasks” running normally, and task scheduling of Laravel framework is a mechanism to ensure that main programs and plug-ins can use scheduled tasks. With task scheduling configured, the main program can regularly clean up and log off accounts and detect the expiration of user roles.

::: code-group
```sh [Intro]
# Task Config
* * * * * cd /your-project-path && php artisan schedule:run >> /dev/null 2>&1

# or
su -c "cd /your-project-path && php artisan schedule:run >> /dev/null 2>&1" -s /bin/sh owner
```

```sh [Example]
# Example
* * * * * cd /www/wwwroot/fresns && php artisan schedule:run >> /dev/null 2>&1

# or
su -c "cd /www/wwwroot/fresns && php artisan schedule:run >> /dev/null 2>&1" -s /bin/sh www
```
:::

## Queues

- If you have changed the queue connection method, e.g. `QUEUE_CONNECTION=redis`, please configure the Supervisor.
- You do not need to configure the Supervisor if it is not configured in `.env`, or if the default `sync` is used.
- Queue connection options:
    - `sync` Synchronously execute the queue, no additional configuration required
    - `redis` Use the PHP extension redis cache driver for the queue
    - `database` Use the database driver for the queue, no additional configuration required
    - `beanstalkd` Use a distributed memory queue system, suitable for large projects
    - `sqs` Use AWS sqs for the queue, requires AWS key configuration, suitable for large projects

It is recommended to use `redis` or `database`. The default is `sync` if not configured.

```ini
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

QUEUE_CONNECTION=redis
```

**Command to start the process**

```sh
php artisan queue:work
```

## Timezone Config

Fresns is a software that supports cross-time zone service. To ensure the consistency of time values, [UTC](https://docs.fresns.com/open-source/reference/timezone.md) time zone standard is adopted in the software.

**Input time**

- Considering the reason of the framework, the time zone option in the configuration file `.env APP_TIMEZONE` can only be based on [PHP time zone function](https://docs.fresns.com/open-source/reference/timezone.md#timezone-identifiers-to-utc), which is named after the region.
- The time entered the database from the framework will be processed into the time zone time configured by `.env APP_TIMEZONE`, that bypasses the framework will be processed into the database time zone by the database (the database time zone is usually the system time zone of the server where the database is located). Therefore, the time zone in the configuration file must be consistent with that in the database in order to ensure the accuracy of time.
- The installation function of Fresns will randomly pair a PHP time zone function according to the UTC time zone you selected. If it does not conform to your region, please modify it in the `.env` file yourself. For example, Beijing, Shanghai, Singapore and Western Australia are all UTC+8 time zones, and any one of them can meet the standard.
- In the background, you can check the UTC time zone of your database in the “Dashboard” system information.

**Output time**

- Fresns will automatically determine the [UTC](https://docs.fresns.com/open-source/reference/timezone.md) time zone of the database, and then output the time according to the client’s request.
