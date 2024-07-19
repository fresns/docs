# 1Panel 配置教程

## 环境安装

> 1Panel -> 应用商店 -> Web 服务器

> 1Panel -> 应用商店 -> 运行环境

> 1Panel -> 应用商店 -> 数据库

### 软件版本

- 安装了 OpenResty 或者 OpenLiteSpeed
- 安装了 PHP-8.2 或者 PHP-8.3
- 安装了 MySQL 5.7 或者 MySQL 8.x

### 推荐方案

- Web 环境推荐 `OpenResty`
- PHP 推荐 `8.3`
- MySQL 推荐 `8.4`

## PHP 配置

> 1Panel -> 应用商店 -> 运行环境

> 1Panel -> 网站 -> 运行环境

### PHP 扩展

- PHP 扩展选择 `opcache`, `redis`, `mysqli`, `pdo_mysql`, `gd`, `imagick`, `zip`

![PHP 扩展](https://assets.fresns.com/images/wikis/guides/1panel-php-extensions.png)

### PHP 超时限制

- 为了避免插件依赖下载超时，或者前端大文件上传等使用场景，需加大 PHP 超时限制。
- 创建网站后配置

![PHP 超时限制](https://assets.fresns.com/images/wikis/guides/1panel-php-timeout.png)

## 网站配置

> 1Panel -> 网站

### 创建网站

- 选择「运行环境」创建网站

![public](https://assets.fresns.com/images/wikis/guides/1panel-create-website.png)

### 网站目录

- 运行目录指定为 `/public`

![public](https://assets.fresns.com/images/wikis/guides/1panel-website-directory.png)

### URL 重写

- 在 1Panel 中叫「伪静态」
- [查看 Fresns URL 重写介绍](../guide/install.md#url-重写)

![URL](https://assets.fresns.com/images/wikis/guides/1panel-url-rewriting.png)

## 数据库配置

### 字符集

- 必须为 `utf8mb4`

![MySQL Character Set](https://assets.fresns.com/images/wikis/guides/1panel-mysql-character-set.png)

### 排序规则

- MySQL 5.7 推荐 `utf8mb4_unicode_520_ci`
- MySQL 8.0 推荐 `utf8mb4_0900_ai_ci`

为了兼顾 MySQL 5.7 版本，所以主程序中默认为 `utf8mb4_unicode_520_ci` 排序规则，当 `.env` 文件中未配置排序规则时，主程序使用默认项；如果你使用 `utf8mb4_0900_ai_ci` 或者其他排序规则，请在 `.env` 文件中新增配置项定义新规则。

*Fresns 安装成功后才会生成 `.env` 文件，所以未安装前，项目根目录没有这个文件。*

```php
# 数据库排序规则
DB_COLLATION=utf8mb4_0900_ai_ci
```

![MySQL Collation](https://assets.fresns.com/images/wikis/guides/mysql-collation.png)

## 目录权限

> 1Panel -> 主机 -> 文件

- 确认站点 `index` 所有子目录均是 `1000` 用户和用户组
- 如果你不确定，或者一个一个目录的查看比较费时，那么可以选择**批量修改用户**
- 1Panel 面板中 `1000` 用户和用户组不是固定的，取决于你的服务器环境，比如我的服务器是 `ecs-user`，常见的是 `root`

![Folder Ownership](https://assets.fresns.com/images/wikis/guides/1panel-folder-ownership.png)

## 定时任务

> 1Panel -> 计划任务

![Crontab](https://assets.fresns.com/images/wikis/guides/1panel-crontab.png)

- 如果想了解任务用途，请[点击这里](../guide/configs.md#任务调度)阅读介绍

```sh
# 任务配置
su -c "cd /你的项目路径 && php artisan schedule:run >> /dev/null 2>&1" -s /bin/sh 所有者

# 示例
su -c "cd sites/community/index && php artisan schedule:run >> /dev/null 2>&1" -s /bin/sh www-data
```

## 队列

> 1Panel 运行环境采用容器，暂不支持 PHP 容器中运行进程守护，待支持后我们再更新教程。
