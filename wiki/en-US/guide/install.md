# Installation

## Server Requirements

Before you install Fresns, it's important to check that your server meets the requirements. To run Fresns, you will need:

| Environment | Services |
| --- | --- |
| Web Server<br>`Choose any one` | Nginx<br>Apache<br>Caddy<br>IIS |
| PHP Version | PHP 8.1 or greater |
| PHP Extensions | `fileinfo` |
| PHP Functions | `symlink`, `putenv`, `proc_open`, `shell_exec`, `passthru`<br>`pcntl_signal`, `pcntl_alarm`, `pcntl_async_signals` |
| Package Manager | Composer 2.5 or greater |
| Database and Version<br>`Choose any one` | MySQL `5.7 ~ 8.x`<br>MariaDB `10.3 ~ 11.x`<br>PostgreSQL `11.x ~ 15.x`<br>SQL Server `2016(13.x) ~ 2022(16.x)`<br>SQLite `3.9` or greater |

::: details Introduction to PHP Functions
| Function | Purpose | Disabled Operations |
| --- | --- | --- |
| `symlink` | Generates symbolic links for storage `storage:link` | Can be disabled after Fresns is installed |
| `exec` | Generates symbolic links for storage `storage:link`<br>Not in the server requirements breakdown, only for Windows systems | Can be disabled after Fresns is installed |
| `putenv` | Composer is used to set environment variables, used for upgrading Fresns or installing plugins | Can be disabled after upgrading Fresns or installing plugins |
| `proc_open` | Used by `symfony/process` for composer commands, used for upgrading Fresns or installing plugins | Can be disabled after upgrading Fresns or installing plugins |
| `shell_exec` | Used by `symfony/console` for composer commands, used for upgrading Fresns or installing plugins | Can be disabled after upgrading Fresns or installing plugins |
| `passthru` | Used for Fresns upgrades, executing upgrades with this function helps avoid timeouts | Can be disabled after Fresns is upgraded, or it is not needed if you are only [upgrade in terminal](upgrade.md#auto-upgrade-command). |
| `pcntl_signal` | `illuminate/queue` for Fresns queue tasks | This function is not required if you do not configure a queue or if you use the default `sync` queue. |
| `pcntl_alarm` | `illuminate/queue` for Fresns queue tasks | This function is not required if you do not configure a queue or if you use the default `sync` queue. |
| `pcntl_async_signals` | `illuminate/queue` for Fresns queue tasks | This function is not required if you do not configure a queue or if you use the default `sync` queue. |
:::

## Download

::: tip Option 1: Download via Package
- [Download Fresns v2.19.0](https://app.fresns.org/latest.zip)
:::

::: tip Option 2: Download via Composer
```sh
composer create-project fresns/fresns
```
:::

- Fresns is frontend and backend separated, the main program is only the server, if you need the client, please go to the [marketplace](https://marketplace.fresns.com/open-source/clients) to install it.

## Installing

::: tip Option 1: Installation in Web View
- Please configure the web server first
- Browser access `/install`
:::

::: tip Option 2: Installation in Terminal
```sh
# Go to the fresns project root
cd fresns

# Go to the installation process
php artisan fresns:install
```
:::

- Default Admin Panel Path: `/fresns/admin`

## Web Server Config

- Point the website directory to `/public/`
- Add [URL Rewriting](#url-rewriting) to the configuration file
- Set directory [folder ownership](#folder-ownership)

> Note: As the `website root directory` is not the `main program root directory`, the website will request the main program root directory file upwards when running, so please do not turn on the function configuration of anti-cross-site attack (`open_basedir`).

## Environment Config

### .env Config File

After successful installation, there will be an `.env` file in the root directory of the main program, which is used to store all the configuration information of Fresns. The details are as follows:

```sh
APP_ENV=production            #Operating environment, local for test use, production for official operation
APP_KEY=EncryptionKey         #Data encryption key, which can be regenerated with the command php artisan key:generate
APP_DEBUG=false               #Whether to output detailed error messages
APP_URL=MainProgramURL        #example https://discuss.fresns.com
APP_FOUNDER=1                 #Founder Account ID (accounts->id)
```

::: code-group
```sh [MySQL/MariaDB]
DB_CONNECTION=mysql               #Database Type: sqlite, mysql, pgsql, sqlsrv
DB_HOST=127.0.0.1                 #Default is 127.0.0.1
DB_PORT=3306                      #Default is 3306
DB_DATABASE=fresns                #Database
DB_USERNAME=fresns                #Username
DB_PASSWORD=123456                #Password
DB_TIMEZONE=Asia/Singapore        #Database Timezone
DB_PREFIX=fs_                     #Default is fs_

DB_COLLATION=utf8mb4_0900_ai_ci   #Default is utf8mb4_unicode_520_ci
```

```sh [PostgreSQL]
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=54321
DB_DATABASE=fresns
DB_USERNAME=fresns
DB_PASSWORD=123456
DB_TIMEZONE=Asia/Singapore
DB_PREFIX=fs_
```

```sh [SQL Server]
DB_CONNECTION=sqlsrv
DB_HOST=127.0.0.1
DB_PORT=1433
DB_DATABASE=fresns
DB_USERNAME=fresns
DB_PASSWORD=123456
DB_TIMEZONE=Asia/Singapore
DB_PREFIX=fs_
```

```sh [SQLite]
DB_CONNECTION=sqlite
DB_DATABASE=/www/wwwroot/fresns/database/fresns.sqlite
DB_TIMEZONE=Asia/Singapore
DB_PREFIX=fs_
```
:::

### Trusted Proxies

If you are running as a proxy, you need to configure `.env` trusted IP information, multiple separated by English commas.

Let's take the Cloudflare proxy environment as an example and configure [IPv4](https://www.cloudflare.com/ips-v4) and [IPv6](https://www.cloudflare.com/ips-v6)

::: code-group
```sh [IPv4]
TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22
```

```sh [IPv6]
TRUSTED_PROXIES=2400:cb00::/32,2606:4700::/32,2803:f800::/32,2405:b500::/32,2405:8100::/32,2a06:98c0::/29,2c0f:f248::/32
```

```sh [All]
TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22,2400:cb00::/32,2606:4700::/32,2803:f800::/32,2405:b500::/32,2405:8100::/32,2a06:98c0::/29,2c0f:f248::/32
```
:::

### Cache Config

You may specify which cache driver you would like to be used by default throughout your application. Fresns supports popular caching backends like `Memcached`, `Redis`, `DynamoDB`, and relational databases out of the box. In addition, a file based cache driver is available, while `array` and `null` cache drivers provide convenient cache backends for your automated tests.

- The default caching system is `File`, if you want to change it, we recommend `Redis` or `Memcached` caching.
- Before you can change the cache configuration, you must install the appropriate PHP extension and then modify the `.env' file to include the cache configuration.

::: code-group
```sh [Redis]
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

CACHE_DRIVER=redis
BROADCAST_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
```

```sh [Memcached]
MEMCACHED_HOST=127.0.0.1
MEMCACHED_PORT=11211
MEMCACHED_USERNAME=null
MEMCACHED_PASSWORD=null

CACHE_DRIVER=memcached
SESSION_DRIVER=memcached
```
:::

- `Redis`: In addition to cache, other driver systems that support Redis can also be configured to use it.
- `Memcached`: only supports drive cache and session.

::: details Configuration when deploying multiple Fresns projects on the same server
- Redis

```sh
REDIS_DB=2                          #Default is 0, only 2-15 can be selected
REDIS_CACHE_DB=3                    #Default is 1, only 2-15 can be selected
REDIS_QUEUE=fresns2                 #The default is fresns. Just enter another one.
REDIS_PREFIX=fresns2_database_      #The default is fresns_database_. Just enter another one.
CACHE_PREFIX=fresns2_cache_         #The default is fresns_cache_. Just enter another one.
```

- Memcached

```sh
MEMCACHED_PERSISTENT_ID=fresns2     #The default is fresns. Just enter another one.
CACHE_PREFIX=fresns2_cache_         #The default is fresns_cache_. Just enter another one.
```
:::

### Queues

- If you have changed the queue connection method, e.g. `QUEUE_CONNECTION=redis`, please configure the Supervisor.
- You do not need to configure the Supervisor if it is not configured in `.env`, or if the default `sync` is used.
- Queue connection options:
    - `sync` Synchronously execute the queue, no additional configuration required
    - `redis` Use the PHP extension redis cache driver for the queue
    - `database` Use the database driver for the queue, no additional configuration required
    - `beanstalkd` Use a distributed memory queue system, suitable for large projects
    - `sqs` Use AWS sqs for the queue, requires AWS key configuration, suitable for large projects

It is recommended to use `redis` or `database`. The default is `sync` if not configured.

```sh
# Command to start the process
php artisan queue:work
```

### Task Scheduling

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

### Timezone Config

Fresns is a software that supports cross-time zone service. To ensure the consistency of time values, [UTC](../database/dictionary/timezone.md) time zone standard is adopted in the software.

**Input time**

- Considering the reason of the framework, the time zone option in the configuration file `.env DB_TIMEZONE` can only be based on [PHP time zone function](../database/dictionary/timezone.md#timezone-identifiers-to-utc), which is named after the region.
- The time entered the database from the framework will be processed into the time zone time configured by `.env DB_TIMEZONE`, that bypasses the framework will be processed into the database time zone by the database (the database time zone is usually the system time zone of the server where the database is located). Therefore, the time zone in the configuration file must be consistent with that in the database in order to ensure the accuracy of time.
- The installation function of Fresns will randomly pair a PHP time zone function according to the UTC time zone you selected. If it does not conform to your region, please modify it in the `.env` file yourself. For example, Beijing, Shanghai, Singapore and Western Australia are all UTC+8 time zones, and any one of them can meet the standard.
- In the background, you can check the UTC time zone of your database in the “Dashboard” system information.

**Output time**

- Fresns will automatically determine the [UTC](../database/dictionary/timezone.md) time zone of the database, and then output the time according to the client’s request.


## URL Rewriting

Make sure your Web server directs all requests to the `public/index.php` directory file, and never try to move the `index.php` file to the main program root directory. This is because running the program from the main program root directory will expose many sensitive files to the public Internet, which is a very unsafe way to run.

::: code-group
```nginx [Nginx]
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

```apache [Apache]
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

```bash [IIS]
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Imported Rule 1" stopProcessing="true">
          <match url="^(.*)/$" ignoreCase="false" />
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" ignoreCase="false" negate="true" />
          </conditions>
          <action type="Redirect" redirectType="Permanent" url="/{R:1}" />
        </rule>
        <rule name="Imported Rule 2" stopProcessing="true">
          <match url="^" ignoreCase="false" />
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" ignoreCase="false" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsFile" ignoreCase="false" negate="true" />
          </conditions>
          <action type="Rewrite" url="index.php" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

```bash [Caddy]
rewrite {
    to {path} {path}/ /index.php?{query}
}
```
:::

## Directory Structure

```php
fresns/         // Main Program Root Directory
├── app/            // Core Code Directory
├── bootstrap/      // Bootstrap Framework Directory
├── config/         // Configuration File Directory
├── database/       // Data File Directory
├── plugins/        // Plugins Directory
├── public/         // Website Root Directory
│   ├── assets/         // Plugins Static Files
│   ├── static/         // Built-in Static Files
│   ├── index.php       // Website Entrance File
│   ├── favicon.ico     // Site ico Icon
│   └── robots.txt      // Search Engine Robots Protocol
├── resources/      // Framework Resource Directory
├── storage/        // Framework Storage Directory
├── vendor/         // Packages Directory
├── .env            // Configuration File (generated after installation is complete)
├── artisan         // Framework Command File
├── compose.json    // Package Config
├── compose.lock    // Package Installation Info
├── fresns.json     // Fresns Config
├── install.lock    // Installation Lock File (after having this file, it is forbidden to execute the installation again)
└── LICENSE         // Copyright Documents
```

## Folder Ownership

During installation, Fresns may request that you make certain directories writable. To allow write access to a directory on Linux, execute the following command:

```sh
chmod 755 /path/to/directory
```

If Fresns requests write access to both the directory and its contents, you need to add the `-R` flag so that the permissions are updated for all the files and folders within the directory:

```sh
chmod 755 -R /path/to/directory
```

If after completing these steps, Fresns continues to request that you change the permissions you may need to check that your files are owned by the correct group and user.

::: warning ENVIRONMENTS MAY VARY
Your environment may vary from the documentation provided, please consult your web server configuration or web hosting provider for the proper user and group that PHP and the web server operate under.
:::

::: danger NEVER USE PERMISSION 777
You should never set any folder or file to permission level `777`, as this permission level allows anyone to access the content of the folder and file regardless of user or group.
:::
