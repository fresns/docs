# Plugin Development

From the framework level, the three channels of "extension plug-in", "control panel" and "website engine" in the "management background" are plug-ins. Though their business directions are different, their development is essentially the same.

## Directory Structure

```php
fresns/             // Main program root directory
└── extensions/         // Extensions directory (plugins and themes)
    └── plugins/            // Plugins directory
        └── DemoPlugin/         // Example plugin
            ├── app/
            ├── config/
            ├── database/
            ├── resources/
            │   ├── assets/
            │   │   ├── fresns.png  // Plugin cover image (square), must be present and fixed in position
            │   │   ├── js/
            │   │   │   └── app.js
            │   │   └── sass/
            │   │       └── app.scss
            │   ├── lang/
            │   └── views/
            ├── routes/
            ├── tests/
            ├── plugin.json
            └── composer.json
```

## File Publish

When the plugin is installed and published, static resources are distributed to the `public` directory.

| Plugin Folder | Publish to the site resource directory |
| --- | --- |
| /extensions/plugins/`{unikey}`/Resources/assets/ | /public/assets/plugins/`{unikey}`/ |
| Other File | No Publish |

## plugin.json Config File

```json
{
    "unikey": "DemoPlugin", // The only key, upper camel case
    "type": 1, // Type: 1.Extension plugin 2.Control Panel 3.Website Engine 4.Theme Template
    "name": "Demo Plugin",
    "description": "This is the demo plugin",
    "author": "Jevan Tang",
    "authorLink": "https://github.com/jevantang",
    "version": "1.0.0",
    "scene": [
        // Plugin usage scenarios
    ],
    "accessPath": "/mall", // Front-end visitor page path
    "settingsPath": "/mall/admin", // Back-end settings page path
    "providers": [
        "Plugins\\FresnsEmail\\Providers\\FresnsEmailServiceProvider",
        "Plugins\\FresnsEmail\\Providers\\CmdWordServiceProvider",
        "Plugins\\FresnsEmail\\Providers\\EventServiceProvider"
    ],
    "autoloadFiles": [
        // autoload files
    ],
    "aliases": {}
}
```

- Plugin usage scenario `scene` parameters

| Scene Parameters | Description | Control Panel Location |
| --- | --- | ---|
| apiKey | Plugin requires key service | Panel > App Center > App Keys |
| register | Configuration of the "public mode" registration function | Panel > Systems > General |
| join | Configuration of the "private mode" registration function | Panel > Systems > General |
| sendEmail | Email Service Provider | Panel > Systems > Send |
| sendSms | SMS Service Provider | Panel > Systems > Send |
| connect | Account Connect Support | Panel > Systems > User |
| realName | Real Name Authentication Support | Panel > Systems > User |
| multiUser | Multi-User Mode Support | Panel > Systems > User |
| recharge | Wallet Recharge Service Provider | Panel > Systems > Wallet |
| withdraw | Wallet Withdrawal Service Provider | Panel > Systems > Wallet |
| storage | Storage Service Provider | Panel > Systems > Storage |
| map | Map Service Provider | Panel > Systems > Maps |
| editor | Editor Plugin | Panel > Operations > Publish |
| followGroup | Group Follow Mode Support | Panel > Operations > Groups |
| extendEditor | Editor Extensions | Panel > Extends > Editor |
| extendContentType | Content Type Extensions | Panel > Extends > Content Type |
| extendIp | IP Service Providers | Panel > Extends > Content Handler |
| extendNotification | Notification Provider | Panel > Extends > Content Handler |
| extendReview | Review Service Provider | Panel > Extends > Content Handler |
| extendData | Data Service Provider | Panel > Extends > Content Handler |
| extendSearch | Search Service Providers | Panel > Extends > Content Handler |
| extendManage | Management Extensions | Panel > Extends > Manage |
| extendGroup | Group Extensions | Panel > Extends > Group |
| extendUser | User Function Extensions | Panel > Extends > User Feature<br>Panel > Extends > User Profile |
| engine | Web Engine | Panel > Clients > Website |
| appNotification | Mobile Notification Service Provider | Panel > Clients > App |

## composer.json Config File

```json
{
    "name": "fresns/fresns-email",
    "license": "Apache-2.0",
    "require": {
        "laravel/email": "^2.0"
    },
    "autoload": {
        "psr-4": {
            "Plugins\\FresnsEmail\\": "./"
        }
    }
}
```
