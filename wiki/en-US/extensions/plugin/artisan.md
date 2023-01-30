# Plugin Artisan

## Overview

```php
php artisan fresns                  // Enter Plugin Development Mode

fresns plugin                       // View All Commands
fresns plugin:list                  // View All Installed Plugins
fresns new                          // Generate A New Plugin
fresns enter                        // Go to plugin directory
fresns back                         // Back to the fresns root directory

// Development
fresns make:command                 // Generate Plugin Command
fresns make:migration               // Generate Plugin Migration
fresns make:seed                    // Generate Plugin Seed
fresns make:factory                 // Generate Plugin Factory
fresns make:provider                // Generate Plugin Provider
fresns make:controller              // Generate Plugin Controller
fresns make:model                   // Generate Plugin Model
fresns make:middleware              // Generate Plugin Middleware
fresns make:dto                     // Generate Plugin DTO (fresns/dto)
fresns make:mail                    // Generate Plugin Mail
fresns make:notification            // Generate Plugin Notification
fresns make:listener                // Generate Plugin Listener
fresns make:request                 // Generate Plugin Request
fresns make:event                   // Generate Plugin Event
fresns make:job                     // Generate Plugin Job
fresns make:policy                  // Generate Plugin Policy
fresns make:rule                    // Generate Plugin Rule
fresns make:resource                // Generate Plugin Resource
fresns make:test                    // Generate Plugin Test
fresns make:schedule-provider       // Generate Plugin Schedule Provider
fresns make:cmd-word-provider       // Generate Plugin Command Word Provider (fresns/cmd-word-manager)
fresns make:event-provider          // Generate Plugin Event Provider

// Control
fresns plugin:unzip                 // Unzip the plugin package to the plugin directory: /extensions/plugins/{unikey}/
fresns plugin:publish               // Publish Plugin (static resources): /public/assets/plugins/{unikey}/
fresns plugin:unpublish             // Unpublish (remove static resources)
fresns plugin:composer-update       // Update Plugin Composer Package
fresns plugin:migrate               // Run Plugin Migrate
fresns plugin:migrate-rollback      // Rollback Plugin Migrate
fresns plugin:migrate-refresh       // Refresh Plugin Migrate
fresns plugin:migrate-reset         // Reset Plugin Migrate
fresns plugin:seed                  // Run Plugin Seed
fresns plugin:install               // Install Plugin (Run the unzip/publish/composer-update/migrate command in sequence)
fresns plugin:uninstall             // Uninstall Plugin

// Management
fresns plugin:activate              // Activate Plugin
fresns plugin:deactivate            // Deactivate Plugin
```

Plugin control and management commands are also supported in the Artisan way.

```php
// Artisan Control
php artisan plugin:unzip            // Unzip the plugin package to the plugin directory: /extensions/plugins/{unikey}/
php artisan plugin:publish          // Publish Plugin (static resources): /public/assets/plugins/{unikey}/
php artisan plugin:unpublish        // Unpublish (remove static resources)
php artisan plugin:composer-update  // Update Plugin Composer Package
php artisan plugin:migrate          // Run Plugin Migrate
php artisan plugin:migrate-rollback // Rollback Plugin Migrate
php artisan plugin:migrate-refresh  // Refresh Plugin Migrate
php artisan plugin:migrate-reset    // Reset Plugin Migrate
php artisan plugin:seed             // Run Plugin Seed
php artisan plugin:install          // Install Plugin (Run the unzip/publish/composer-update/migrate command in sequence)
php artisan plugin:uninstall        // Uninstall Plugin

// Artisan Management
php artisan plugin:activate         // Activate Plugin
php artisan plugin:deactivate       // Deactivate Plugin
```


## Command Usage Flow

When using plug-in instructions, you need to enable the development mode first, then enter the plug-in directory, and directly use the instructions in the plug-in directory.

- 1. Enable development mode
```php
php artisan fresns
```

- 2. Introduce the project path (auto-identify, just enter)
```php
export /path/to/project/vendor/bin
```

- 3. Go to the plugin directory
```php
fresns new DemoPlugin       // Create a plugin called DemoPlugin

fresns enter DemoPlugin     // Go to the Plugin DemoPlugin directory

fresns back                 // Back to the fresns root directory
```

- 4. Execute development, management, and control commands in the plugin directory

## Generate

Generate a new plugin.

```php
fresns plugin:make DemoPlugin
# or
fresns new DemoPlugin
```

## Development

### Generate Plugin Command

Generate the given console command for the specified plugin.

```php
fresns make:command CreateDemoCommand
```

### Generate Plugin Migration

Generate a migration for specified plugin.

```php
fresns make:migration create_demos_table
```

### Generate Plugin Seed

Generate the given seed name for the specified plugin.

```php
fresns make:seed seed_fake_demos
```

### Generate Plugin Factory

Generate the given database factory for the specified plugin.

```php
fresns make:factory FactoryName
```

### Generate Plugin Provider

Generate the given service provider name for the specified plugin.

```php
fresns make:provider DemoServiceProvider
```

### Generate Plugin Controller

Generate a controller for the specified plugin.

```php
fresns make:controller PostsController
```

### Generate Plugin Model

Generate the given model for the specified plugin.

```php
fresns make:model Post
```

Optional options:

- `--fillable=field1,field2`: set the fillable fields on the generated model
- `--migration`, `-m`: create the migration file for the given model

### Generate Plugin Middleware

Generate the given middleware name for the specified plugin.

```php
fresns make:middleware CanReadPostsMiddleware
```

### Generate Plugin DTO

Generate a [DTO(data transfer object)](https://github.com/fresns/dto) for specified plugin.

```php
fresns make:dto VerifySignDTO
```

### Generate Plugin Mail

Generate the given mail class for the specified plugin.

```php
fresns make:mail SendWeeklyPostsEmail
```

### Generate Plugin Notification

Generate the given notification class name for the specified plugin.

```php
fresns make:notification NotificationAdminOfNewComment
```

### Generate Plugin Listener

Generate the given listener for the specified plugin. Optionally you can specify which event class it should listen to. It also accepts a `--queued` flag allowed queued event listeners.

```php
fresns make:listener NotificationUsersOfANewPost

fresns make:listener NotificationUsersOfANewPost --event=PostWasCreated

fresns make:listener NotificationUsersOfANewPost --event=PostWasCreated --queued
```

### Generate Plugin Request

Generate the given request for the specified plugin.

```php
fresns make:request CreatePostRequest
```

### Generate Plugin Event

Generate the given event for the specified plugin.

```php
fresns make:event BlogPostWasUpdated
```

### Generate Plugin Job

Generate the given job for the specified plugin.

```php
fresns make:job JobName

//A synchronous job class
fresns make:job JobName --sync
```

### Generate Plugin Policy

Generate the given policy class for the specified plugin.

The `Policies` is not generated by default when creating a new plugin. Change the value of `paths.generator.policies` in `plugins.php` to your desired location.

```php
fresns make:policy PolicyName
```

### Generate Plugin Rule

Generate the given validation rule class for the specified plugin.

The `Rules` folder is not generated by default when creating a new plugin. Change the value of `paths.generator.rules` in `plugins.php` to your desired location.

```php
fresns make:rule ValidationRule
```

### Generate Plugin Resource

Generate the given resource class for the specified plugin. It can have an optional --collection argument to generate a resource collection.

The `Transformers` folder is not generated by default when creating a new plugin. Change the value of `paths.generator.resource` in `plugins.php` to your desired location.

```php
fresns make:resource PostResource

fresns make:resource PostResource --collection
```

### Generate Plugin Test

Generate the given test class for the specified plugin.

```php
fresns make:test EloquentPostRepositoryTest
```

### Generate Plugin Schedule Provider

Generate a console service provider for specified plugin.

```php
fresns make:console-provider
```

### Generate Plugin Command Word Provider

Generate a [cmd word service provider](https://github.com/fresns/cmd-word-manager) for specified plugin.

```php
fresns make:cmd-word-provider
```

- You need to add it yourself to the `providers` parameter of `plugin.json`.

### Generate Plugin Event Provider

Generate a event provider for specified plugin.

```php
fresns make:event-provider
```

- You need to add it yourself to the `providers` parameter of `plugin.json`.


## Control

### Unzip The Plugin Package

Unzip the plugin files into the `/plugins/` directory, the final directory will be `/plugins/{unikey}/`.

```php
fresns plugin:unzip /www/wwwroot/fresns/storage/plugins/123e4567-e89b-12d3-a456-426614174000.zip

// or

php artisan plugin:unzip /www/wwwroot/fresns/storage/plugins/123e4567-e89b-12d3-a456-426614174000.zip
```

### Publish Plugin

Publish static resources for the plugin `DemoPlugin`.

```php
fresns plugin:publish

// or

php artisan plugin:publish DemoPlugin
```

- `/plugins/DemoPlugin/Resources/assets/` Distribute to web directories `/public/assets/plugins/DemoPlugin/`

### Unpublish

Unpublish static resources for the plugin `DemoPlugin`.

```php
fresns plugin:unpublish

// or

php artisan plugin:unpublish DemoPlugin
```

- `/plugins/DemoPlugin/Resources/assets/` Distribute to web directories `/public/assets/plugins/DemoPlugin/`

### Update Plugin Composer Package

Composer all plugins.

```php
fresns plugin:composer-update

// or

php artisan plugin:composer-update
```

### Run Plugin Migrate

Migrate the given plugin, or without a plugin an argument, migrate all plugins.

```php
fresns plugin:migrate

// or

php artisan plugin:migrate DemoPlugin
```

### Rollback Plugin Migrate

Rollback the given plugin, or without an argument, rollback all plugins.

```php
fresns plugin:migrate-rollback

// or

php artisan plugin:migrate-rollback DemoPlugin
```

### Refresh Plugin Migrate

Refresh the migration for the given plugin, or without a specified plugin refresh all plugins migrations.

```php
fresns plugin:migrate-refresh

// or

php artisan plugin:migrate-refresh DemoPlugin
```

### Reset Plugin Migrate

Reset the migration for the given plugin, or without a specified plugin reset all plugins migrations.

```php
fresns plugin:migrate-reset

// or

php artisan plugin:migrate-reset DemoPlugin
```

### Run Plugin Seed

Seed the given plugin, or without an argument, seed all plugins.

```php
fresns plugin:seed

// or

php artisan plugin:seed DemoPlugin
```

### Install Plugin

Execute the `plugin:unzip`、`plugin:composer-update`、`plugin:migrate`、`plugin:publish` commands in that order.

```php
fresns plugin:install /www/wwwroot/fresns/storage/plugins/123e4567-e89b-12d3-a456-426614174000.zip

// or

php artisan plugin:install /www/wwwroot/fresns/storage/plugins/123e4567-e89b-12d3-a456-426614174000.zip
```

### Uninstall Plugin

Uninstall the plugin and select whether you want to clean the data of the plugin.

```php
fresns plugin:uninstall --cleandata=true
fresns plugin:uninstall --cleandata=false

// or

php artisan plugin:uninstall DemoPlugin --cleandata=true
php artisan plugin:uninstall DemoPlugin --cleandata=false
```

- `/plugins/DemoPlugin/` Physically deletion the folder.
- `/public/assets/plugins/DemoPlugin/` Physically deletion the folder.
- Remove the plugin composer dependency package (skip if the main application or another plugin is in use)
- Logically deletion the value of the record where the `unikey` column of the `plugins` table is `DemoPlugin`.


## Management

### Activate Plugin

```php
fresns plugin:activate

// or

php artisan plugin:activate DemoPlugin
```

### Deactivate Plugin

```php
fresns plugin:deactivate

// or

php artisan plugin:deactivate DemoPlugin
```
