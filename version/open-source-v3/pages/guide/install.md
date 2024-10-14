# Installation

## Server Requirements

Before you install Fresns, it's important to check that your server meets the requirements. To run Fresns, you will need:

| Environment | Services |
| --- | --- |
| Web Server<br>`Choose any one` | Nginx<br>Apache<br>Caddy<br>IIS |
| PHP Version | PHP 8.2 or greater |
| PHP Extensions | `mbstring`, `fileinfo`, `opcache` |
| PHP Functions | `symlink`, `putenv`, `proc_open`, `shell_exec`, `passthru`<br>`pcntl_signal`, `pcntl_alarm`, `pcntl_async_signals` |
| Package Manager | Composer 2.5 or greater |
| Database and Version<br>`Choose any one` | MySQL `5.7 ~ latest`<br>MariaDB `10.3 ~ latest`<br>PostgreSQL `11.x ~ latest`<br>SQL Server `2017(14.x) ~ latest`<br>SQLite `3.35 ~ latest` |

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

## Web Server Config

- Point the website directory to `/public`
- Add [URL Rewriting](#url-rewriting) to the configuration file
- Set directory [folder ownership](#folder-ownership)

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
- Fresns is frontend and backend separated, the main program is only the server, if you need the client, please go to the [marketplace](https://marketplace.fresns.com/clients) to install it.

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

```xml [IIS]
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
