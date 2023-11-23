# Updating

::: danger Warning
Please back up the database before upgrading to avoid data loss caused by improper upgrading.
:::

## Auto Upgrade (Panel)

When a new version is available, there will be a new version prompt on the dashboard of the fresns panel. Click the `Upgrade` button on the upgrade page to upgrade automatically.

## Auto Upgrade (Command)

In the root directory of the main program, use the `terminal` command line to execute the Fresns upgrade command.

```php
php artisan fresns:upgrade
```

If you need to confirm the executed command during the upgrade, enter `yes` to continue.

## Manual Upgrade

- 1. If you download the new version of the installation package, all the other files except the “Plugin Directory” and “Configuration File” of the old version will be overwritten (before overwriting, please make a copy of the old version of the project to avoid the loss of the information of the old version due to improper overwriting).
    - If you are using a local storage plugin, you should also keep the files located in the `storage` directory according to the plug-in documentation.

```php
fresns/         // Main Program Root Directory
├── plugins/        // Plugin Directory
├── storage/        // Storage Directory
│   └── app
│       └── public
├── .env            // Configuration File
├── fresns.json     // Fresns Config
└── install.lock    // Installation Lock File (after having this file, it is forbidden to execute the installation again)
```

- 2. After overwriting, all plug-ins in `plugins` brackets in `fresns.json` file will be deactivated (`true` will be changed to `false`), with the remaining configuration items unchanged (after manual upgrade, the system will automatically correct to the latest version information and restore the previously enabled plug-ins).

```json
{
    "name": "Fresns",
    "version": "3.0.0", // Please do not modify before upgrading
    "plugins": {
        "EasyManager": false, // true means activate, false means deactivate
        "FileStorage": false,
        "CmdWordTool": false,
        "HelperTool": false,
        "Placeholder": false
    }
}

// Or remove the plugin status

{
    "name": "Fresns",
    "version": "3.0.0", // Please do not modify before upgrading
    "plugins": {}
}
```

- 3. Log in to the background (fresns panel) and click the `Manual Upgrade` button on the “Dashboard -> Update” page to confirm the upgrade.
    - The system will automatically perform migration and installation of plugins.
    - Upon completion, the version information in `fresns.json` file will be updated and the plug-in that was enabled before will be restored.
