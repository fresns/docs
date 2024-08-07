---
aside: false
---

# Migration

- [Download a new installation package](index.md)
- Set up the web environment.
- There is no need to perform installation; simply migrate the database and configuration files.

## Database

- Backup the database and import it into a new environment.

## Files

- Backup the following files and overwrite them in the new environment.

```php
fresns/
├── plugins/                        // Plugin files
├── themes/                         // Theme files
├── public/
│   ├── assets/                     // Static files for plugins and themes
│   ├── status.json                 // Client status configuration file
│   └── apple-app-site-association  // Apple application configuration file
├── storage/
│   └── app/
│       └── public/                 // Local storage files
├── .env                            // System configuration file
└── install.lock                    // Installation lock file
```

- Plugin and theme files (if there are no plugins and themes, these can be ignored)
    - `plugins/`
    - `themes/`
    - `public/assets/`
- Client configuration files (if there is no app, these can be ignored)
    - `public/status.json`
    - `public/apple-app-site-association`
- Local storage files (mandatory, such as local attachments and plugin configuration upload files)
    - `storage/app/public`
    - `storage/app/public/temp-files` The directory is for temporary files and does not need to be migrated; it can be deleted directly.
- System configuration files (mandatory)
    - `.env`
    - `install.lock`

## Symbolic Links

- Files stored locally are placed in the `/storage/app/public` directory, which is not accessible via the website directory. Therefore, a symbolic link needs to be created in the `/public` directory to enable site access to these resources.
- Enter the Fresns root directory in the terminal and execute the following command to create a storage symbolic link.

```sh
php artisan storage:link
```
