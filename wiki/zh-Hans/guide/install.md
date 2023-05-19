# 安装

## 环境要求

Fresns 是一款基于 PHP 编程语言和关系型数据库开发的社交社区网络服务软件。

| 配置项 | 要求 |
| --- | --- |
| Web 服务器<br>`任选一种` | Nginx<br>Apache<br>Caddy<br>IIS |
| PHP 版本 | 8.1 或更高版本 |
| PHP 扩展支持 | `fileinfo` |
| PHP 函数启用 | `putenv`, `symlink`, `proc_open`, `passthru`, `shell_exec` |
| 软件包管理器 | Composer 2.5 或更高版本 |
| 数据库和版本<br>`任选一种` | MySQL `5.7 ~ 8.x`<br>MariaDB `10.3 ~ 11.x`<br>PostgreSQL `11.x ~ 15.x`<br>SQL Server `2016(13.x) ~ 2022(16.x)`<br>SQLite `3.9` 或更高版本 |

## 下载安装包

::: tip 方式 1: 手动下载完整包（已内置网站引擎和主题模板）
- [下载 Fresns v2.12.0](https://app.fresns.org/latest.zip)
:::

::: tip 方式 2: 基于 Composer 下载
- 下载程序
```sh
composer create-project fresns/fresns
```

- 配置管理器
```sh
php artisan vendor:publish --provider="Fresns\PluginManager\Providers\PluginServiceProvider"
php artisan vendor:publish --provider="Fresns\ThemeManager\Providers\ThemeServiceProvider"
php artisan vendor:publish --provider="Fresns\MarketManager\Providers\MarketServiceProvider"
```

- 如果需要网站端，请至应用市场挑选[网站引擎](https://marketplace.fresns.com/zh-Hans/open-source/engines)和[主题模板](https://marketplace.fresns.com/zh-Hans/open-source/themes)
:::

## 主程序安装

::: tip 方式 1: 可视化安装
- 请先配置好 Web 服务器
- 浏览器访问 `网址/install`
:::

::: tip 方式 2: 终端中安装
```sh
# 进入 fresns 项目根目录
cd fresns

# 进入安装流程
php artisan fresns:install
```
:::

- 默认后台路径 `网址/fresns/admin`

## Web 服务器配置

- 将网站运行目录指向 `/public/`
- 在配置文件中添加 [URL 重写规则](#url-重写)
- 设置[目录所有权](#目录所有权)

> 备注：由于“网站根目录”不是“主程序根目录”，网站运行时会向上请求主程序根目录文件，所以请勿开启 `防跨站攻击(open_basedir)` 的功能配置。

## 高级配置

### .env 配置文件

安装成功后，主程序根目录会有一个 `.env` 文件，该文件用于存储 Fresns 所有配置信息，具体介绍如下：

```sh
APP_ENV=production        #运营环境，测试使用为 local，正式运营为 production
APP_KEY=                  #数据加密 key，可重新生成，指令为 php artisan key:generate
APP_DEBUG=false           #是否输出详细报错信息，调试时改为 true
APP_URL=                  #你的系统网址，例如 https://discuss.fresns.com
APP_FOUNDER=1             #创始人账号 ID (accounts->id)
```

::: code-group
```sh [MySQL/MariaDB]
DB_CONNECTION=mysql               #数据库类型  sqlite, mysql, pgsql, sqlsrv
DB_HOST=127.0.0.1                 #数据库主机  默认为 127.0.0.1
DB_PORT=3306                      #数据库主机端口 默认为 3306
DB_DATABASE=fresns                #数据库名
DB_USERNAME=fresns                #数据库用户名
DB_PASSWORD=123456                #数据库密码
DB_TIMEZONE=Asia/Shanghai         #数据库时区
DB_PREFIX=fs_                     #表前缀 默认为 fs_

DB_COLLATION=utf8mb4_0900_ai_ci   #默认为 utf8mb4_unicode_520_ci
```

```sh [PostgreSQL]
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=54321
DB_DATABASE=fresns
DB_USERNAME=fresns
DB_PASSWORD=123456
DB_TIMEZONE=Asia/Shanghai
DB_PREFIX=fs_
```

```sh [SQL Server]
DB_CONNECTION=sqlsrv
DB_HOST=127.0.0.1
DB_PORT=1433
DB_DATABASE=fresns
DB_USERNAME=fresns
DB_PASSWORD=123456
DB_TIMEZONE=Asia/Shanghai
DB_PREFIX=fs_
```

```sh [SQLite]
DB_CONNECTION=sqlite
DB_DATABASE=/www/wwwroot/fresns/database/fresns.sqlite
DB_TIMEZONE=Asia/Shanghai
DB_PREFIX=fs_
```
:::

### 代理环境配置

如果你的运行环境为代理，需要配置 `.env` 可信任的 IP 信息，多个以英文逗号隔开。

我们以 Cloudflare 代理环境为例，配置 [IPv4](https://www.cloudflare.com/ips-v4) 和 [IPv6](https://www.cloudflare.com/ips-v6)

::: code-group
```sh [IPv4]
TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22
```

```sh [IPv6]
TRUSTED_PROXIES=2400:cb00::/32,2606:4700::/32,2803:f800::/32,2405:b500::/32,2405:8100::/32,2a06:98c0::/29,2c0f:f248::/32
```

```sh [全部]
TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22,2400:cb00::/32,2606:4700::/32,2803:f800::/32,2405:b500::/32,2405:8100::/32,2a06:98c0::/29,2c0f:f248::/32
```
:::

### 缓存配置

你可以指定应用默认使用哪个缓存驱动。Fresns 支持的缓存后端包括 `Memcached`、`Redis`、`DynamoDB`，以及现成的关系型数据库。此外，还支持基于文件的缓存驱动，以及方便自动化测试的缓存驱动 `array` 和 `null`。

- 默认缓存系统为 `File`，如需更改，我们推荐 `Redis` 或 `Memcached` 缓存。
- 修改缓存配置前，你需要安装对应的 PHP 扩展，然后修改 `.env` 文件，加上缓存配置。

::: code-group
```sh [Redis]
REDIS_HOST=127.0.0.1      #Host
REDIS_PASSWORD=null       #密码
REDIS_PORT=6379           #端口

CACHE_DRIVER=redis        #缓存驱动
BROADCAST_DRIVER=redis    #广播驱动
SESSION_DRIVER=redis      #会话驱动
QUEUE_CONNECTION=redis    #队列驱动
```

```sh [Memcached]
MEMCACHED_HOST=127.0.0.1    #Host
MEMCACHED_PORT=11211        #端口
MEMCACHED_USERNAME=null     #用户名
MEMCACHED_PASSWORD=null     #密码

CACHE_DRIVER=memcached      #缓存驱动
SESSION_DRIVER=memcached    #会话驱动
```
:::

- `Redis`: 除了缓存，其他驱动系统支持 Redis 的也可以配置使用。
- `Memcached`: 仅支持驱动缓存和会话。

### 任务调度

在运营 Fresns 时，您需要一种方法来保持「定时任务」正常运行，而 Laravel 框架的任务调度就是一个保证主程序和插件能够使用定时任务的机制。配置了任务调度，主程序就可以定时清理注销账号和检测用户角色过期等任务。

::: code-group
```sh [说明]
# 任务配置
* * * * * cd /你的项目路径 && php artisan schedule:run >> /dev/null 2>&1

# 或
su -c "cd /你的项目路径 && php artisan schedule:run >> /dev/null 2>&1" -s /bin/sh 所有者
```

```sh [示例]
# 示例
* * * * * cd /www/wwwroot/fresns && php artisan schedule:run >> /dev/null 2>&1

# 或
su -c "cd /www/wwwroot/fresns && php artisan schedule:run >> /dev/null 2>&1" -s /bin/sh www
```
:::

### 队列

- 队列连接方式：
    - `sync` 同步执行队列，无需额外配置
    - `redis` 使用 PHP 扩展 redis 缓存器驱动队列
    - `database` 使用数据库驱动队列，无需额外配置
    - `beanstalkd` 使用分布式内存队列系统，适用于大型项目
    - `sqs` 使用 AWS sqs 驱动队列，需配置 AWS 密钥，适用于大型项目

推荐 `redis` 或 `database`，不配置则默认为 `sync`

```sh
# 进程启动命令
php artisan queue:work
```

### 时区配置介绍

Fresns 是一款支持跨时区服务的软件，为了保证时间值的一致性，软件中采用 [UTC](../database/dictionary/timezone.md) 时区标准。

**录入时间**

- 由于框架的原因，配置文件 `.env DB_TIMEZONE` 时区选项只能以 [PHP 时区函数](../database/dictionary/timezone.md#时区地名-utc-映射关系) 为准，时区函数是地区命名。
- 由框架入库的时间，会处理成 `.env DB_TIMEZONE` 配置的时区时间；绕过框架入库的时间，会由数据库处理成数据库时区时间（数据库时区通常是数据库所在服务器的系统时区）；所以为了保证时间的准确性，配置文件中时区一定要和数据库保持一致。
- Fresns 安装功能会根据你选择的 UTC 时区随机配对一个 PHP 时区函数，如果不符合你所在地区，请自行在 `.env` 文件中修改。比如北京、上海、新加坡、西澳大利亚，都是 UTC+8 时区，配置其中随意一个地区都符合标准。
- 登录后台，可以在「仪表盘」系统信息中查看你的数据库所属 UTC 时区。

**输出时间**

- Fresns 会自动判断数据库的 [UTC](../database/dictionary/timezone.md) 时区，然后根据客户端要求输出时间。
- 客户端无要求时，会默认输出「站点设置」中设置的「默认时区」。比如数据库时区是 UTC+8，站点设置的默认时区是 UTC-7，那么当客户端没有要求时，默认会转换数据库时间为 UTC-7 的时间。
- 客户端时区要求逻辑：登录状态时，优先用户自定义设置的时区；未登录或者用户未设置，则获取用户设备（电脑或手机）的系统时区，如果获取不到，则基于站点设置的默认时区。


## URL 重写

请确保你的 Web 服务器将所有请求定向到 `public/index.php` 目录文件，永远不要尝试将 `index.php` 文件移动到主程序根目录，因为从主程序根目录运行程序会将许多敏感文件暴露在公共互联网上，这是非常不安全的运行方式。

::: code-group
```nginx [Nginx]
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

```apache [Apache]
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

```bash [IIS]
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Imported Rule 1" stopProcessing="true">
          <match url="^(.*)/$" ignoreCase="false" />
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" ignoreCase="false" negate="true" />
          </conditions>
          <action type="Redirect" redirectType="Permanent" url="/{R:1}" />
        </rule>
        <rule name="Imported Rule 2" stopProcessing="true">
          <match url="^" ignoreCase="false" />
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" ignoreCase="false" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsFile" ignoreCase="false" negate="true" />
          </conditions>
          <action type="Rewrite" url="index.php" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

```bash [Caddy]
rewrite {
    to {path} {path}/ /index.php?{query}
}
```
:::

## 目录结构

```php
fresns/         // 主程序根目录
├── app/            // 主程功能目录
├── bootstrap/      // 引导程序目录
├── config/         // 配置文件目录
├── database/       // 数据文件目录
├── extensions/     // 扩展目录
│   ├── plugins/        // 功能插件
│   ├── themes/         // 主题模板
│   └── backups/        // 扩展备份目录
├── public/         // 网站根目录
│   ├── assets/         // 扩展静态文件
│   ├── static/         // 内置静态文件
│   ├── index.php       // 网站入口文件
│   ├── favicon.ico     // 站点 ico 图标
│   └── robots.txt      // 搜索引擎 Robots 协议
├── resources/      // 框架资源目录
├── storage/        // 框架存储目录
├── vendor/         // 扩展依赖项目录
├── .env            // 配置文件（安装完成后生成）
├── artisan         // 框架命令行接口
├── compose.json    // 依赖项配置信息
├── compose.lock    // 依赖项安装信息
├── fresns.json     // 主程序信息
├── install.lock    // 安装锁定文件（有该文件后，禁止再执行安装）
└── LICENSE         // 版权文件
```

## 目录所有权

在安装过程中，Fresns 可能会要求您将某些目录设置为可写。要使 Linux 上的某个目录可写，可以执行以下命令：

```sh
chmod 755 /path/to/directory
```

如果 Fresns 对某个目录及其子目录请求写权限，请添加 `-R` 选项，以递归更新该目录和其内的文件及子目录权限：

```sh
chmod 755 -R /path/to/directory
```

如果在完成以上操作后，Fresns 仍要求您改变权限，请先尝试将 755 权限改为 775 试一遍，依然不行的话，您可能需要检查文件（夹）的所有者和所属组群是否正确。

::: warning 环境有别
您的服务器环境可能会与本文示例不同，请查看您的 Web 服务器配置或咨询 Web 托管提供商，以了解 PHP 和 Web 服务器默认运行在哪个用户或组下。
:::

::: danger 权限禁忌 777
绝不要将任何文件夹或文件的权限设置为 `777` 级别，这个权限允许任何人（无论用户还是组）随意访问文件夹和文件的内容，严重威胁安全。
:::
