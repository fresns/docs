# Upgrade to v3

## Upgrade Process

1. Backup database to avoid data loss due to upgrade failure.
2. Admin Panel -> Dashboard -> Settings -> Version Type
    - Select `Beta`
    - As this cross-framework version upgrade can only be performed in the terminal, you will need to select "Beta" in the background to ensure you are ready, but the upgrade is the official version.
3. Delete the website client plug-in to avoid conflicts. Delete the folder directly.
    - `/plugins/Moments`
    - `/plugins/ThemeFrame`
    - `/plugins/WebFrame`
    - `/plugins/ForumQ`
    - `/plugins/ForumX`
    - `/plugins/ZhijieWeb`
4. Remove old expansion packs
    - Execute in the terminal `composer remove fresns/web-engine`
5. Execute the upgrade command
    - Execute in the terminal `php artisan fresns:upgrade`
    - If an error is reported, execute the upgrade command again. 2 to 3 upgrades are required due to changes in the framework.

**Notes:**

- Backend login portal, configuration items have changed, so reset to default path `/fresns/admin`
- `DB_TIMEZONE` is changed to `APP_TIMEZONE` in the `.env` configuration.
- For email settings, change the email template variable name from `{sitename}` to `{name}`.
