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

- 1. If you download the new version of the installation package, all the other files except the “Extension” and “Configuration Information” of the old version will be overwritten (before overwriting, please make a copy of the old version of the project to avoid the loss of the information of the old version due to improper overwriting).
    - If you are using a local storage plugin, you should also keep the files located in the `storage` directory according to the plug-in documentation.

```php
fresns/         // Main Program Root Directory
├── extensions/     // Extension Directory(plugins and themes)
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
    "version": "2.0.0",
    "versionInt": 1, // Please do not modify before upgrading
    "plugins": {
        "FresnsEmail": false, // true means activate, false means deactivate
        "EasySms": false,
        "CmdWordTool": false,
        "HelperTool": false,
        "Placeholder": false
    }
}

// Or remove the plugin status

{
    "name": "Fresns",
    "version": "2.0.0",
    "versionInt": 1, // Please do not modify before upgrading
    "plugins": {}
}
```

- 3. Log in to the background (fresns panel) and click the `Manual Upgrade` button on the “Dashboard -> Update” page to confirm the upgrade.
    - The system will automatically perform migration and installation of plug-ins and themes.
    - Upon completion, the version information in `fresns.json` file will be updated and the plug-in that was enabled before will be restored.

## Version Info

| Version | Version Int | Release Date |
| --- | --- | --- |
| 2.7.1 | 20 | 2023-03-02 |
| 2.7.0 | 19 | 2023-02-26 |
| 2.6.1 | 18 | 2023-02-17 |
| 2.6.0 | 17 | 2023-02-16 |
| 2.5.0 | 16 | 2023-02-09 |
| 2.4.0 | 15 | 2023-02-01 |
| 2.3.1 | 14 | 2023-01-21 |
| 2.3.0 | 13 | 2023-01-21 |
| 2.2.0 | 12 | 2023-01-20 |
| 2.1.0 | 11 | 2023-01-18 |
| 2.0.1 | 10 | 2023-01-11 |
| 2.0.0 | 9 | 2023-01-09 |
| 2.0.0-beta.8 | 8 | 2022-12-24 |
| 2.0.0-beta.7 | 7 | 2022-12-13 |
| 2.0.0-beta.6 | 6 | 2022-12-12 |
| 2.0.0-beta.5 | 5 | 2022-12-08 |
| 2.0.0-beta.4 | 4 | 2022-12-01 |
| 2.0.0-beta.3 | 3 | 2022-11-28 |
| 2.0.0-beta.2 | 2 | 2022-11-23 |
| 2.0.0-beta.1 | 1 | 2022-11-22 |
