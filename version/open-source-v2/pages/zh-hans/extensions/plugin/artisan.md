# 插件指令

## 总览

```php
php artisan fresns                  // 进入插件开发模式

fresns plugin                       // 查看所有可用指令
fresns plugin:list                  // 查看所有已安装插件
fresns new                          // 创建新插件
fresns enter                        // 进入指定插件目录
fresns back                         // 回到项目根目录

// 开发指令
fresns make:command                 // 生成插件 Command
fresns make:migration               // 生成插件 Migration
fresns make:seed                    // 生成插件 Seed
fresns make:factory                 // 生成插件 Factory
fresns make:provider                // 生成插件 Provider
fresns make:controller              // 生成插件 Controller
fresns make:model                   // 生成插件 Model
fresns make:middleware              // 生成插件 Middleware
fresns make:dto                     // 生成插件 DTO (fresns/dto)
fresns make:mail                    // 生成插件 Mail
fresns make:notification            // 生成插件 Notification
fresns make:listener                // 生成插件 Listener
fresns make:request                 // 生成插件 Request
fresns make:event                   // 生成插件 Event
fresns make:job                     // 生成插件 Job
fresns make:policy                  // 生成插件 Policy
fresns make:rule                    // 生成插件 Rule
fresns make:resource                // 生成插件 Resource
fresns make:test                    // 生成插件 Test
fresns make:schedule-provider       // 生成插件任务调度提供者
fresns make:event-provider          // 生成插件事件服务提供者
fresns make:sql-provider            // 生成 SQL 服务提供者
fresns make:cmdword-provider        // 生成插件命令字提供者 (fresns/cmd-word-manager)

// 控制指令
fresns plugin:unzip                 // 解压插件包到插件目录 /extensions/plugins/{fskey}/
fresns plugin:publish               // 发布插件（分发静态资源） /public/assets/plugins/{fskey}/
fresns plugin:unpublish             // 撤销发布（删除静态资源）
fresns plugin:composer-update       // 更新插件 Composer 依赖包
fresns plugin:migrate               // 执行插件 Migrate
fresns plugin:migrate-rollback      // 回滚插件 Migrate
fresns plugin:migrate-refresh       // 刷新插件 Migrate
fresns plugin:migrate-reset         // 重置插件 Migrate
fresns plugin:seed                  // 执行插件 Seed
fresns plugin:install               // 安装插件（逐个执行 unzip/publish/composer-update/migrate 指令）
fresns plugin:uninstall             // 卸载插件

// 管理指令
fresns plugin:activate              // 启用插件
fresns plugin:deactivate            // 停用插件
```

插件控制和管理指令也支持 Artisan 方式。

```php
// Artisan 控制指令
php artisan plugin:unzip            // 解压插件包到插件目录 /extensions/plugins/{fskey}/
php artisan plugin:publish          // 发布插件（分发静态资源） /public/assets/plugins/{fskey}/
php artisan plugin:unpublish        // 撤销发布（删除静态资源）
php artisan plugin:composer-update  // 更新插件 Composer 依赖包
php artisan plugin:migrate          // 执行插件 Migrate
php artisan plugin:migrate-rollback // 回滚插件 Migrate
php artisan plugin:migrate-refresh  // 刷新插件 Migrate
php artisan plugin:migrate-reset    // 重置插件 Migrate
php artisan plugin:seed             // 执行插件 Seed
php artisan plugin:install          // 安装插件（逐个执行 unzip/publish/composer-update/migrate 指令）
php artisan plugin:uninstall        // 卸载插件

// Artisan 管理指令
php artisan plugin:activate         // 启用插件
php artisan plugin:deactivate       // 停用插件
```


## 指令使用流程

使用插件指令时，需先启用开发模式，然后进插件目录，在插件目录直接使用指令。

- 1、启用开发模式
```php
php artisan fresns
```

- 2、引入项目路径（自动识别，回车即可）
```php
export /path/to/project/vendor/bin
```

- 3、进入插件目录
```php
fresns new DemoPlugin       // 创建名为 DemoPlugin 的插件

fresns enter DemoPlugin     // 进入插件 DemoPlugin 目录

fresns back                 // 退出插件目录，回到项目根目录
```

- 4、在插件目录执行开发、管理、控制指令

## 创建新插件

Generate a new plugin.

```php
fresns plugin:make DemoPlugin
# or
fresns new DemoPlugin
```

## 开发指令

### 生成插件 Command

Generate the given console command for the specified plugin.

```php
fresns make:command CreateDemoCommand
```

### 生成插件 Migration

Generate a migration for specified plugin.

```php
fresns make:migration create_demos_table
```

### 生成插件 Seed

Generate the given seed name for the specified plugin.

```php
fresns make:seed seed_fake_demos
```

### 生成插件 Factory

Generate the given database factory for the specified plugin.

```php
fresns make:factory FactoryName
```

### 生成插件 Provider

Generate the given service provider name for the specified plugin.

```php
fresns make:provider DemoServiceProvider
```

### 生成插件 Controller

Generate a controller for the specified plugin.

```php
fresns make:controller PostsController
```

### 生成插件 Model

Generate the given model for the specified plugin.

```php
fresns make:model Post
```

Optional options:

- `--fillable=field1,field2`: set the fillable fields on the generated model
- `--migration`, `-m`: create the migration file for the given model

### 生成插件 Middleware

Generate the given middleware name for the specified plugin.

```php
fresns make:middleware CanReadPostsMiddleware
```

### 生成插件 DTO

Generate a [DTO(data transfer object)](https://pm.fresns.org/zh-hans/dto/) for specified plugin.

```php
fresns make:dto VerifySignDTO
```

### 生成插件 Mail

Generate the given mail class for the specified plugin.

```php
fresns make:mail SendWeeklyPostsEmail
```

### 生成插件 Notification

Generate the given notification class name for the specified plugin.

```php
fresns make:notification NotificationAdminOfNewComment
```

### 生成插件 Listener

Generate the given listener for the specified plugin. Optionally you can specify which event class it should listen to. It also accepts a `--queued` flag allowed queued event listeners.

```php
fresns make:listener NotificationUsersOfANewPost

fresns make:listener NotificationUsersOfANewPost --event=PostWasCreated

fresns make:listener NotificationUsersOfANewPost --event=PostWasCreated --queued
```

### 生成插件 Request

Generate the given request for the specified plugin.

```php
fresns make:request CreatePostRequest
```

### 生成插件 Event

Generate the given event for the specified plugin.

```php
fresns make:event BlogPostWasUpdated
```

### 生成插件 Job

Generate the given job for the specified plugin.

```php
fresns make:job JobName

//A synchronous job class
fresns make:job JobName --sync
```

### 生成插件 Policy

Generate the given policy class for the specified plugin.

The `Policies` is not generated by default when creating a new plugin. Change the value of `paths.generator.policies` in `plugins.php` to your desired location.

```php
fresns make:policy PolicyName
```

### 生成插件 Rule

Generate the given validation rule class for the specified plugin.

The `Rules` folder is not generated by default when creating a new plugin. Change the value of `paths.generator.rules` in `plugins.php` to your desired location.

```php
fresns make:rule ValidationRule
```

### 生成插件 Resource

Generate the given resource class for the specified plugin. It can have an optional --collection argument to generate a resource collection.

The `Transformers` folder is not generated by default when creating a new plugin. Change the value of `paths.generator.resource` in `plugins.php` to your desired location.

```php
fresns make:resource PostResource

fresns make:resource PostResource --collection
```

### 生成插件 Test

Generate the given test class for the specified plugin.

```php
fresns make:test EloquentPostRepositoryTest
```

### 生成插件任务调度提供者

Generate a console service provider for specified plugin.

```php
fresns make:console-provider
```

### 生成插件事件服务提供者

Generate a event provider for specified plugin.

```php
fresns make:event-provider
```

- You need to add it yourself to the `providers` parameter of `plugin.json`.

### 生成插件 SQL 提供者

Generate a sql provider for specified plugin.

```php
fresns make:sql-provider
```

### 生成插件命令字提供者

Generate a [cmd word service provider](https://pm.fresns.org/zh-hans/command-word/) for specified plugin.

```php
fresns make:cmdword-provider
```

- You need to add it yourself to the `providers` parameter of `plugin.json`.


## 控制指令

### 解压插件包

Unzip the plugin files into the `/plugins/` directory, the final directory will be `/plugins/{fskey}/`.

```php
fresns plugin:unzip /www/wwwroot/fresns/storage/plugins/123e4567-e89b-12d3-a456-426614174000.zip

// or

php artisan plugin:unzip /www/wwwroot/fresns/storage/plugins/123e4567-e89b-12d3-a456-426614174000.zip
```

### 发布插件

Publish static resources for the plugin `DemoPlugin`.

```php
fresns plugin:publish

// or

php artisan plugin:publish DemoPlugin
```

- `/plugins/DemoPlugin/Resources/assets/` Distribute to web directories `/public/assets/plugins/DemoPlugin/`

### 撤销插件

Unpublish static resources for the plugin `DemoPlugin`.

```php
fresns plugin:unpublish

// or

php artisan plugin:unpublish DemoPlugin
```

- `/plugins/DemoPlugin/Resources/assets/` Distribute to web directories `/public/assets/plugins/DemoPlugin/`

### 更新插件 Composer 依赖

Composer all plugins.

```php
fresns plugin:composer-update

// or

php artisan plugin:composer-update
```

### 执行插件 Migrate

Migrate the given plugin, or without a plugin an argument, migrate all plugins.

```php
fresns plugin:migrate

// or

php artisan plugin:migrate DemoPlugin
```

### 回滚插件 Migrate

Rollback the given plugin, or without an argument, rollback all plugins.

```php
fresns plugin:migrate-rollback

// or

php artisan plugin:migrate-rollback DemoPlugin
```

### 刷新插件 Migrate

Refresh the migration for the given plugin, or without a specified plugin refresh all plugins migrations.

```php
fresns plugin:migrate-refresh

// or

php artisan plugin:migrate-refresh DemoPlugin
```

### 重置插件 Migrate

Reset the migration for the given plugin, or without a specified plugin reset all plugins migrations.

```php
fresns plugin:migrate-reset

// or

php artisan plugin:migrate-reset DemoPlugin
```

### 执行插件 Seed

Seed the given plugin, or without an argument, seed all plugins.

```php
fresns plugin:seed

// or

php artisan plugin:seed DemoPlugin
```

### 安装插件

Execute the `plugin:unzip`、`plugin:composer-update`、`plugin:migrate`、`plugin:publish` commands in that order.

```php
fresns plugin:install /www/wwwroot/fresns/storage/plugins/123e4567-e89b-12d3-a456-426614174000.zip

// or

php artisan plugin:install /www/wwwroot/fresns/storage/plugins/123e4567-e89b-12d3-a456-426614174000.zip
```

`plugin:publish` 文件分发和入库在最后执行，如果为升级插件，可在入库前，获取数据库旧信息判断插件是否存在以及旧版本号。如果插件有跨版本特殊安装处理，可凭此判断新版和旧版之间的差距。

### 卸载插件

Uninstall the plugin and select whether you want to clean the data of the plugin.

```php
fresns plugin:uninstall --cleardata=true
fresns plugin:uninstall --cleardata=false

// or

php artisan plugin:uninstall DemoPlugin --cleardata=true
php artisan plugin:uninstall DemoPlugin --cleardata=false
```

- `/plugins/DemoPlugin/` Physically deletion the folder.
- `/public/assets/plugins/DemoPlugin/` Physically deletion the folder.
- Remove the plugin composer dependency package (skip if the main application or another plugin is in use)
- Logically deletion the value of the record where the `fskey` column of the `plugins` table is `DemoPlugin`.


## 管理指令

### 启用插件

```php
fresns plugin:activate

// or

php artisan plugin:activate DemoPlugin
```

### 停用插件

```php
fresns plugin:deactivate

// or

php artisan plugin:deactivate DemoPlugin
```
