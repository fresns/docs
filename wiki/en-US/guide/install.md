# Installation

## Server Requirements

Before you install Fresns, it's important to check that your server meets the requirements. To run Fresns, you will need:

| Environment | Services |
| --- | --- |
| Web Server | Nginx or Apache or IIS or Caddy |
| Package Manager | Composer 2.5 or higher |
| Code Lang | PHP 8.1 or higher |
| Database | MySQL 5.7 or 8.x |

::: info PHP Config Requirements
- Extensions: `fileinfo` `exif`
- Functions: `putenv` `symlink` `readlink` `proc_open` `passthru`
:::

## Download

- Latest Version: v2.6.1 (2023-02-17)

::: tip Option 1: Download the full package manually
- [Click to download](https://app.fresns.org/latest.zip)
- *Website engine and theme templates already built in*
:::

::: tip Option 2: Download via Composer
- Download the program
```bash
composer create-project fresns/fresns
```

- Configuration Manager
```bash
php artisan vendor:publish --provider="Fresns\PluginManager\Providers\PluginServiceProvider"
php artisan vendor:publish --provider="Fresns\ThemeManager\Providers\ThemeServiceProvider"
php artisan vendor:publish --provider="Fresns\MarketManager\Providers\MarketServiceProvider"
```

- If you need a website, please go to the application market to select a website engine and theme template
:::

## Installing

### 1. Config the Web Server

- Point the website directory to `/public/`
- Add [URL Rewriting](#url-rewriting) to the configuration file
- Set directory [folder ownership](#folder-ownership)

> Note: As the “website root directory” is not the “main program root directory”, the website will request the main program root directory file upwards when running, so please do not turn on the function configuration of anti-cross-site attack (open_basedir).

### 2. Install Config

- Access `{website}/install`
- Check the environment and configure the database information according to the process
- Fill in the administrator information and register an administrator account
- Login Panel `{website}/fresns/admin`

## Config Intro

### Task Scheduling

When running Fresns, you need a way to keep “scheduled tasks” running normally, and task scheduling of Laravel framework is a mechanism to ensure that main programs and plug-ins can use scheduled tasks. With task scheduling configured, the main program can regularly clean up and log off accounts and detect the expiration of user roles.

```bash
# Task Config
* * * * * cd /your-project-path && php artisan schedule:run >> /dev/null 2>&1
# or
su -c "cd /your-project-path && php artisan schedule:run >> /dev/null 2>&1" -s /bin/sh owner



# Example
* * * * * cd /www/wwwroot/fresns && php artisan schedule:run >> /dev/null 2>&1
# or
su -c "cd /www/wwwroot/fresns && php artisan schedule:run >> /dev/null 2>&1" -s /bin/sh www
```

### .env Config File

After successful installation, there will be an `.env` file in the root directory of the main program, which is used to store all the configuration information of Fresns. The details are as follows:

```php
APP_ENV=production  // Operating environment, local for test use, production for official operation
APP_KEY=Encryption Key  // Data encryption key, which can be regenerated with the command php artisan key:generate
APP_DEBUG=false // Whether to output detailed error messages
APP_URL=Main Program URL  // example https://discuss.fresns.org
APP_FOUNDER=1 // Founder Account ID (accounts > id)

DB_CONNECTION=mysql  // Database Type
DB_HOST=  // Default is 127.0.0.1
DB_PORT=  // Default is 3306
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
DB_TIMEZONE=  // Database Time Zone
DB_PREFIX=  // Default is fs_
```

### Timezone Config

Fresns is a software that supports cross-time zone service. To ensure the consistency of time values, [UTC](../database/dictionary/utc.md) time zone standard is adopted in the software.

**Input time**

- Considering the reason of the framework, the time zone option in the configuration file `.env DB_TIMEZONE` can only be based on [PHP time zone function](../database/dictionary/utc.md#timezone-identifiers-to-utc), which is named after the region.
- The time entered the database from the framework will be processed into the time zone time configured by `.env DB_TIMEZONE`, that bypasses the framework will be processed into the database time zone by the database (the database time zone is usually the system time zone of the server where the database is located). Therefore, the time zone in the configuration file must be consistent with that in the database in order to ensure the accuracy of time.
- The installation function of Fresns will randomly pair a PHP time zone function according to the UTC time zone you selected. If it does not conform to your region, please modify it in the `.env` file yourself. For example, Beijing, Shanghai, Singapore and Western Australia are all UTC+8 time zones, and any one of them can meet the standard.
- In the background, you can check the UTC time zone of your database in the “Dashboard” system information.

**Output time**

- Fresns will automatically determine the [UTC](../database/dictionary/utc.md) time zone of the database, and then output the time according to the client’s request.
- When there is no request from the client, the “Default Time Zone” set in “Site Settings” will be output by default. For example, if the database time zone is UTC+8 and the default time zone set by the site is UTC-7, the database time will be converted to UTC-7 by default when the client does not file a request.
- Requirement logic for the client time zone: when logging in, the user-defined time zone is preferred; If not logged in or not set by the user, the system time zone of the user’s device (computer or mobile phone) is obtained. If no system time zone is obtained, it will be based on the default time zone set by the site.


## URL Rewriting

Make sure your Web server directs all requests to the `public/index.php` directory file, and never try to move the `index.php` file to the main program root directory. This is because running the program from the main program root directory will expose many sensitive files to the public Internet, which is a very unsafe way to run.

### Nginx

```nginx
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

### Apache

```apache
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

### IIS

```bash
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

### Caddy

```bash
rewrite {
    to {path} {path}/ /index.php?{query}
}
```

## Directory Structure

```php
fresns/         // Main Program Root Directory
├── app/            // Core Code Directory
├── bootstrap/      // Bootstrap Framework Directory
├── config/         // Configuration File Directory
├── database/       // Data File Directory
├── extensions/     // Plugins and Themes
├── public/         // Website Root Directory
│   ├── assets/         // Extension Static Files
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
