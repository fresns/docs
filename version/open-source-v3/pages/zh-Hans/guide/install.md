# 安装

## 环境要求

Fresns 是一款基于 PHP 编程语言和关系型数据库开发的社交社区网络服务软件。

| 配置项 | 要求 |
| --- | --- |
| Web 服务器<br>`任选一种` | Nginx<br>Apache<br>Caddy<br>IIS |
| PHP 版本 | 8.1 或更高版本 |
| PHP 扩展支持 | `fileinfo`, `opcache` |
| PHP 函数启用 | `symlink`, `putenv`, `proc_open`, `shell_exec`, `passthru`<br>`pcntl_signal`, `pcntl_alarm`, `pcntl_async_signals` |
| 软件包管理器 | Composer 2.5 或更高版本 |
| 数据库和版本<br>`任选一种` | MySQL `5.7 ~ latest`<br>MariaDB `10.3 ~ latest`<br>PostgreSQL `11.x ~ latest`<br>SQL Server `2016(13.x) ~ latest`<br>SQLite `3.9 ~ latest` |

::: details PHP 函数用途介绍
| 函数 | 用途 | 禁用操作 |
| --- | --- | --- |
| `symlink` | 生成存储目录软链接使用 `storage:link` | 安装完 Fresns 后可以禁用 |
| `exec` | 生成存储目录软链接使用 `storage:link`<br>不在环境要求的明细中，仅 Windows 系统使用 | 安装完 Fresns 后可以禁用 |
| `putenv` | composer 用于设置环境变量，升级 Fresns 或安装插件时使用 | 升级完 Fresns 后和安装完插件后可以禁用 |
| `proc_open` | symfony/process 用于 composer 命令，升级 Fresns 或安装插件时使用 | 升级完 Fresns 后和安装完插件后可以禁用 |
| `shell_exec` | symfony/console 用于 composer 命令，升级 Fresns 或安装插件时使用 | 升级完 Fresns 后和安装完插件后可以禁用 |
| `passthru` | Fresns 升级使用，使用该函数执行升级可以避免执行超时 | 升级完 Fresns 后可以禁用，或者只在[终端中执行升级](upgrade.md#自动升级-命令行)，则不需要该函数 |
| `pcntl_signal` | illuminate/queue 用于 Fresns 队列任务 | 不配置队列，或者使用默认 `sync` 队列，则不需要该函数 |
| `pcntl_alarm` | illuminate/queue 用于 Fresns 队列任务 | 不配置队列，或者使用默认 `sync` 队列，则不需要该函数 |
| `pcntl_async_signals` | illuminate/queue 用于 Fresns 队列任务 | 不配置队列，或者使用默认 `sync` 队列，则不需要该函数 |
:::

## Web 服务器配置

- 将网站运行目录指向 `/public`
- 在配置文件中添加 [URL 重写规则](#url-重写)
- 设置[目录所有权](#目录所有权)

## 执行安装

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
- Fresns 是前后端分离，主程序只是服务端，如需客户端，请至[应用市场](https://marketplace.fresns.com/zh-Hans/clients)挑选安装。

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
