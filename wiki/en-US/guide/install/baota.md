# Baota Panel Configuration

A server operation and maintenance panel for Chinese users

## 环境安装

> 宝塔面板 -> 软件商城 -> 运行环境

### 软件版本

- 安装了 Nginx 或者 Apache
- 安装了 PHP-8.1 或者 PHP-8.2
- 安装了 MySQL 5.7 或者 MySQL 8.0

### 推荐方案

- Web 环境推荐 `Nginx`
- PHP 推荐 `8.1`
- MySQL 推荐 `8.0`
- 安装方式推荐**极速安装**

## PHP 配置

> 宝塔面板 -> 软件商城 -> 运行环境

### PHP 扩展

- PHP 扩展安装了 `fileinfo` 和 `exif`

![PHP 扩展](https://cdn.fresns.cn/guide/baota-php-extensions.png)

### PHP 函数

- PHP 函数启用了 `putenv` `symlink` `readlink` `proc_open` `passthru`

![PHP 函数](https://cdn.fresns.cn/guide/baota-php-functions.png)

### PHP 超时限制

- 为了避免插件依赖下载超时，或者前端大文件上传等使用场景，需加大 PHP 超时限制。

![PHP 超时限制](https://cdn.fresns.cn/guide/baota-php-timeout.png)

## 网站配置

> 宝塔面板 -> 网站

### 网站目录

- 未开启：防跨站攻击(open_basedir)
- 运行目录指定为 `public`

![public](https://cdn.fresns.cn/guide/baota-website-path.png)

### URL 重写

- 在宝塔中叫「伪静态」
- [查看 Fresns URL 重写介绍](../install.md#url-重写)

![URL](https://cdn.fresns.cn/guide/baota-url-rewriting.png)

### PHP 版本

- 不低于 PHP 8.1

![PHP](https://cdn.fresns.cn/guide/baota-php-version.png)

### Composer 版本

- 不低于 Composer 2.5

![Composer](https://cdn.fresns.cn/guide/baota-composer-version.png)

### PHP 命令行版本

- 选择 `PHP-80` 或者 `PHP-81`

![PHP Cli](https://cdn.fresns.cn/guide/baota-php-cli.png)

## 数据库配置

### 字符集

- 必须为 `utf8mb4`

![MySQL Character Set](https://cdn.fresns.cn/guide/baota-mysql-character-set.png)

### 排序规则

- MySQL 5.7 推荐 `utf8mb4_unicode_520_ci`
- MySQL 8.0 推荐 `utf8mb4_0900_ai_ci`

为了兼顾 MySQL 5.7 版本，所以主程序中默认为 `utf8mb4_unicode_520_ci` 排序规则，当 `.env` 文件中未配置排序规则时，主程序使用默认项；如果你使用 `utf8mb4_0900_ai_ci` 或者其他排序规则，请在 `.env` 文件中新增配置项定义新规则。

*Fresns 安装成功后才会生成 `.env` 文件，所以未安装前，项目根目录没有这个文件。*

```php
# 数据库排序规则
DB_COLLATION=utf8mb4_0900_ai_ci
```

![MySQL Collation](https://cdn.fresns.cn/guide/baota-mysql-collation.png)

## 目录权限

> 宝塔面板 -> 文件

- 确认 Fresns 项目所有子目录均是 `775` 或者 `755` 权限
- 确认所有子目录权限所有者均是 `www` 权限
- 如果你不确定，或者一个一个目录的查看比较费时，那么可以选择**批量重置权限**

![Folder Ownership](https://cdn.fresns.cn/guide/baota-folder-ownership.png)

## 定时任务

> 宝塔面板 -> 计划任务

![Crontab](https://cdn.fresns.cn/guide/baota-crontab.png)

- 如果想了解任务用途，请[点击这里](../install.md#任务调度)阅读介绍

```sh
# 任务配置
su -c "cd /你的项目路径 && php artisan schedule:run >> /dev/null 2>&1" -s /bin/sh 所有者

# 示例
su -c "cd /www/wwwroot/fresns && php artisan schedule:run >> /dev/null 2>&1" -s /bin/sh www
```

## 队列

::: tip 配置说明
- 如果你安装的插件需要「队列」功能`（详情请咨询插件开发者）`，可参考以下教程为主程序配置队列功能。
- 没有特别说明的插件，默认就是用不到队列功能；如果用到，插件开发者一定会说明。
- 如果用不到，可以忽略不用配置。
:::

### 1、新增 .env 配置项

- Fresns 安装成功后才会生成 `.env` 文件，所以未安装前，项目根目录没有这个文件。
- `.env` 配置文件新增队列配置

```php
# 队列连接方式
QUEUE_CONNECTION=database

# redis 配置
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
REDIS_QUEUE=fresns
```

- 队列连接方式：
    - `sync` 同步执行队列，无需额外配置
    - `database` 使用数据库驱动队列，无需额外配置
    - `redis` 使用 PHP 扩展 redis 缓存器驱动队列
    - `beanstalkd` 使用分布式内存队列系统，适用于大型项目
    - `sqs` 使用 AWS sqs 驱动队列，需配置 AWS 密钥，适用于大型项目

推荐 `database` 或 `redis`，不配置则默认为 `sync`

![env](https://cdn.fresns.cn/guide/baota-queue-env.png)

![redis](https://cdn.fresns.cn/guide/baota-queue-redis.png)

### 2、安装队列管理工具 Supervisor

![Supervisor](https://cdn.fresns.cn/guide/baota-supervisor.png)

### 3、配置队列进程

![Supervisor](https://cdn.fresns.cn/guide/baota-queue-process.png)

```sh
# 进程启动命令
php artisan queue:work
```

### 进程重启说明

- 如果插件升级后需要重置队列进程，打开 Supervisor 管理器，找到 Fresns 队列进程，操作「重启」即可。
- 详情请查看插件升级说明，如果升级有要求则操作重启，没要求可忽略。
