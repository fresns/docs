# Updating

::: danger Warning
Please back up the database before upgrading to avoid data loss caused by improper upgrading.
:::

## Auto Upgrade (Panel)

When a new version is available, there will be a new version prompt on the dashboard of the fresns panel. Click the `Upgrade` button on the upgrade page to upgrade automatically.

## Auto Upgrade (Command)

In the root directory of the main program, use the `terminal` command line to execute the Fresns upgrade command.

```sh
php artisan fresns:upgrade
```

If you need to confirm the executed command during the upgrade, enter `yes` to continue.

## Manual Upgrade

| Start Version | Latest Version | Upgrade Files | Description |
| --- | --- | --- | --- |
| `3.0.0` | `3.4.0` | [Download upgrade files](https://assets.fresns.com/packages/fresns-upgrade-3.4.0.zip) | Upgrade from any 3.0.0 version to 3.4.0 |
| `3.4.0` | `3.6.2` | [Download upgrade files](https://assets.fresns.com/packages/fresns-upgrade-3.6.2.zip) | Upgrade from any 3.4.0 version to 3.6.2 |

- 1. Download the upgrade file, unzip it, and overwrite the files in the corresponding folder (before overwriting, please make a copy of the backup of the old version of the project to avoid losing the old version information due to improper overwriting).

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

- 3. Login to the admin panel and click the `Manual Upgrade` button on the `Dashboard -> Upgrades` page to confirm the upgrade.
    - The system will automatically perform migration and installation of plugins. Upon completion, the version information in `fresns.json` file will be updated and the plug-in that was enabled before will be restored.
    - If the admin panel is not accessible, run the upgrade command in the terminal.

```sh
php artisan fresns:manual-upgrade
```
