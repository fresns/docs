# 配置

## .env 配置文件

安装成功后，主程序根目录会有一个 `.env` 文件，该文件用于存储 Fresns 所有配置信息，具体介绍如下：

```ini
APP_ENV=production          #运营环境，测试使用为 local，正式运营为 production
APP_KEY=                    #数据加密 key，可重新生成，指令为 php artisan key:generate
APP_DEBUG=false             #是否输出详细报错信息，调试时改为 true
APP_URL=                    #你的系统网址，例如 https://discuss.fresns.org

APP_TIMEZONE=Asia/Shanghai  #数据库时区
APP_FOUNDER=1               #创始人账号 ID (accounts->id 或者 accounts->aid)
```

::: code-group
```ini [MySQL]
DB_CONNECTION=mysql               #数据库类型  sqlite, mysql, mariadb, pgsql, sqlsrv
DB_HOST=127.0.0.1                 #数据库主机  默认为 127.0.0.1
DB_PORT=3306                      #数据库主机端口 默认为 3306
DB_DATABASE=fresns                #数据库名
DB_USERNAME=fresns                #数据库用户名
DB_PASSWORD=123456                #数据库密码
DB_PREFIX=fs_                     #表前缀 默认为 fs_

DB_COLLATION=utf8mb4_0900_ai_ci   #默认为 utf8mb4_unicode_520_ci
```

```ini [MariaDB]
DB_CONNECTION=mariadb
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=fresns
DB_USERNAME=fresns
DB_PASSWORD=123456
DB_PREFIX=fs_

DB_COLLATION=utf8mb4_unicode_520_ci   #默认为 utf8mb4_unicode_520_ci
```

```ini [PostgreSQL]
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=54321
DB_DATABASE=fresns
DB_USERNAME=fresns
DB_PASSWORD=123456
DB_PREFIX=fs_
```

```ini [SQL Server]
DB_CONNECTION=sqlsrv
DB_HOST=127.0.0.1
DB_PORT=1433
DB_DATABASE=fresns
DB_USERNAME=fresns
DB_PASSWORD=123456
DB_PREFIX=fs_
```

```ini [SQLite]
DB_CONNECTION=sqlite
DB_DATABASE=/www/wwwroot/fresns/database/fresns.sqlite
DB_PREFIX=fs_
```
:::

> 如果 `.env` 修改后不生效，因为配置值已经被系统缓存，`/bootstrap/cache/config.php` 请删除该缓存文件即可。

## 中国加速配置

如果你的服务器在中国境内，可以在 `.env` 配置里添加代理加速，为你升级或安装扩展依赖提速。如果服务器在中国境外，无需额外配置。

```ini
HTTP_PROXY=http://market.fresns.cn:1024
```

> 配置后，请勿使用 composer 镜像源，只能用 composer 官方源。

## 代理环境配置

如果你的运行环境为代理，需要配置 `.env` 可信任的 IP 信息，多个以英文逗号隔开。

我们以 Cloudflare 代理环境为例，配置 [IPv4](https://www.cloudflare.com/ips-v4) 和 [IPv6](https://www.cloudflare.com/ips-v6)

::: code-group
```ini [IPv4]
TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22
```

```ini [IPv6]
TRUSTED_PROXIES=2400:cb00::/32,2606:4700::/32,2803:f800::/32,2405:b500::/32,2405:8100::/32,2a06:98c0::/29,2c0f:f248::/32
```

```ini [全部]
TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22,2400:cb00::/32,2606:4700::/32,2803:f800::/32,2405:b500::/32,2405:8100::/32,2a06:98c0::/29,2c0f:f248::/32
```
:::

## 缓存配置

你可以指定应用默认使用哪个缓存驱动。Fresns 支持的缓存后端包括 `Memcached`、`Redis`、`DynamoDB`，以及现成的关系型数据库。此外，还支持基于文件的缓存驱动，以及方便自动化测试的缓存驱动 `array` 和 `null`。

- 默认缓存系统为 `File`，如需更改，我们推荐 `Redis` 或 `Memcached` 缓存。
- 修改缓存配置前，你需要安装对应的 PHP 扩展，然后修改 `.env` 文件，加上缓存配置。

::: code-group
```ini [Redis]
REDIS_HOST=127.0.0.1        #Host
REDIS_PASSWORD=null         #密码
REDIS_PORT=6379             #端口

CACHE_STORE=redis           #缓存驱动
SESSION_DRIVER=redis        #会话驱动
QUEUE_CONNECTION=redis      #队列驱动
BROADCAST_CONNECTION=redis  #广播驱动
```

```ini [Memcached]
MEMCACHED_HOST=127.0.0.1    #Host
MEMCACHED_PORT=11211        #端口
MEMCACHED_USERNAME=null     #用户名
MEMCACHED_PASSWORD=null     #密码

CACHE_STORE=memcached       #缓存驱动
SESSION_DRIVER=memcached    #会话驱动
```
:::

- `Redis`: 除了缓存，其他驱动系统支持 Redis 的也可以配置使用。
- `Memcached`: 仅支持驱动缓存和会话。

::: details 同一台服务器部署多个 Fresns 项目时配置
- Redis

```ini
REDIS_DB=2                          #默认是 0，只可选 2-15
REDIS_CACHE_DB=3                    #默认是 1，只可选 2-15，需要与 REDIS_DB 不同
REDIS_QUEUE=fresns2                 #默认是 fresns 填写一个不一样的即可
REDIS_PREFIX=fresns2_database_      #默认是 fresns_database_ 填写一个不一样的即可
CACHE_PREFIX=fresns2_cache_         #默认是 fresns_cache_ 填写一个不一样的即可
```

- Memcached

```ini
MEMCACHED_PERSISTENT_ID=fresns2     #默认是 fresns 填写一个不一样的即可
CACHE_PREFIX=fresns2_cache_         #默认是 fresns_cache_ 填写一个不一样的即可
```
:::

## 任务调度

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

## 队列

- 如果修改了队列连接方式，比如 `QUEUE_CONNECTION=redis`，请配置进程守护。
- 队列连接方式：
    - `sync` 同步执行队列，无需配置进程守护
    - `redis` 使用 PHP 扩展 redis 缓存器驱动队列
    - `database` 使用数据库驱动队列，框架的默认配置
    - `beanstalkd` 使用分布式内存队列系统，适用于大型项目
    - `sqs` 使用 AWS sqs 驱动队列，需配置 AWS 密钥，适用于大型项目

推荐 `redis`，不配置则默认为 `database`

```ini
REDIS_HOST=127.0.0.1      #Host
REDIS_PASSWORD=null       #密码
REDIS_PORT=6379           #端口

QUEUE_CONNECTION=redis    #队列驱动
```

**进程启动命令**

```sh
php artisan queue:work
```

## 时区配置介绍

Fresns 是一款支持跨时区服务的软件，为了保证时间值的一致性，软件中采用 [UTC](https://docs.fresns.com/zh-Hans/open-source/reference/timezone.md) 时区标准。

### 录入时间

- 由于框架的原因，配置文件 `.env APP_TIMEZONE` 时区选项只能以 [PHP 时区函数](https://docs.fresns.com/zh-Hans/open-source/reference/timezone.md#时区地名-utc-映射关系) 为准，时区函数是地区命名。
- 由框架入库的时间，会处理成 `.env APP_TIMEZONE` 配置的时区时间；绕过框架入库的时间，会由数据库处理成数据库时区时间（数据库时区通常是数据库所在服务器的系统时区）；所以为了保证时间的准确性，配置文件中时区一定要和数据库保持一致。
- Fresns 安装功能会根据你选择的 UTC 时区随机配对一个 PHP 时区函数，如果不符合你所在地区，请自行在 `.env` 文件中修改。比如北京、上海、新加坡、西澳大利亚，都是 UTC+8 时区，配置其中随意一个地区都符合标准。
- 登录后台，可以在「仪表盘」系统信息中查看你的数据库所属 UTC 时区。

### 输出时间

- Fresns 会自动判断数据库的 [UTC](https://docs.fresns.com/zh-Hans/open-source/reference/timezone.md) 时区，然后根据客户端要求输出时间。
