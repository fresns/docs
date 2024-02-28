# Extending Fresns

The Fresns extension is based on the [Plugin Manager](https://pm.fresns.org/) package and extends and enriches the main Fresns application with modular plugins.

## Directory Structure

```php
fresns/             // Main program root directory
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
| /plugins/`{fskey}`/Resources/assets/ | /public/assets/`{fskey}`/ |
| Other File | No Publish |

## plugin.json Config File

```json
{
    "fskey": "DemoPlugin", // The only key, upper camel case
    "name": "Demo Plugin",
    "description": "This is the demo plugin",
    "author": "Jevan Tang",
    "authorLink": "https://github.com/jevantang",
    "version": "1.0.0",
    "panelUsages": [
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

- Plugin usage scenario `panelUsages` parameters

| Usage Key | Description | Control Panel Location |
| --- | --- | ---|
| storage | Storage Service Provider | Panel->Systems->Storage |
| join | Configuration of the "private mode" registration function | Panel->Systems->General |
| sendEmail | Email Service Provider | Panel->Systems->Send |
| sendSms | SMS Service Provider | Panel->Systems->Send |
| appNotifications | Mobile Notification Service Provider | Panel->Systems->Send |
| wechatNotifications | WeChat Notification Service Provider | Panel->Systems->Send |
| accountCenter | Account Center Support | Panel->Systems->Account |
| accountRegister | Account Register Support | Panel->Systems->Account |
| accountLogin | Account Register Support | Panel->Systems->Account |
| accountConnect | Account Connect Support | Panel->Systems->Account |
| accountKyc | Real Name Authentication Support | Panel->Systems->Account |
| accountUsers | Multi-User Manage Services | Panel->Systems->Account |
| walletRecharge | Wallet Recharge Service Provider | Panel->Systems->Wallet |
| walletWithdraw | Wallet Withdrawal Service Provider | Panel->Systems->Wallet |
| editor | Editor Plugin | Panel->Operations->Publish |
| followGroup | Group Follow Mode Support | Panel->Operations->Groups |
| extendIp | IP Service Providers | Panel->Extends->Content Handler |
| extendMap | Map Service Providers | Panel->Extends->Content Handler |
| extendNotification | Notification Provider | Panel->Extends->Content Handler |
| extendReview | Review Service Provider | Panel->Extends->Content Handler |
| extendData | Data Service Provider | Panel->Extends->Content Handler |
| extendSearch | Search Service Providers | Panel->Extends->Content Handler |
| extendContentType | Content Type Extensions | Panel->Extends->Content Type |
| extendEditor | Editor Extensions | Panel->Extends->Editor |
| extendManage | Management Extensions | Panel->Extends->Manage |
| extendGroup | Group Extensions | Panel->Extends->Group |
| extendUser | User Function Extensions | Panel->Extends->User Feature<br>Panel->Extends->User Profile |
| extendChannel | Channel Extensions | Panel->Extends->Channel |
| apiKey | Plugin requires key service | Panel->App Center->App Keys |

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
