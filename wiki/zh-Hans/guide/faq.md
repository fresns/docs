# 常见问题

## 无法访问主程序

- 请阅读[目录所有权](install.md#目录所有权)
- 通常是目录权限和所有者设置问题导致的无权请求，例如无法写入或读取缓存。
- **提示**：命令行（终端）和后台混合使用，容易造成权限问题。由于命令行的执行用户是 `root` 用户，后台是基于站点用户 `www` 操作，站点使用也是基于 `www` 用户，当使用命令行操作后，涉及到的文件夹会被覆盖为 `root` 所有者，因此会导致站点使用时无权请求。

**授权指定用户继承权限**

```sh
# 以宝塔面板举例，在终端中执行
# 设置 ACL 权限，授予 www 用户对 /www/wwwroot 目录的相关权限
# 授权后，该目录新增文件夹和文件，无论所有者是谁，该用户自动享有相关权限

sudo apt install acl
sudo setfacl -R -m g:www:r-x -m u:www:rwx /www/wwwroot
sudo setfacl -Rd -m g:www:r-x -m u:www:rwx /www/wwwroot
```

## 安装插件后所有页面报错

- 在项目根目录 `fresns.json` 文件中可以关闭插件，将 `true` 修改为 `false`，关闭后重新再安装插件。

```json
{
    "name": "Fresns",
    "version": "2.0.0",
    "versionInt": 1,
    "plugins": {
        "FresnsEmail": false, // true 表示为开启，false 表示为停用
        "EasySms": false
    }
}
```

- 重新安装前，你需要先确认以下几个事项：
    - PHP 是否为 8.0.2 以上版本
    - PHP 命令行版本是否为 8.0.2 以上版本
    - Composer 是否为 2.4 以上版本
    - Composer 是否使用的是官方源
- 以上信息可以在后台仪表盘查看并确认。

## cURL error 52 错误

- 常见情况是服务器开启了宝塔防火墙中「禁国外」功能。如果你的服务器是境外，或者宝塔认为你是境外服务器，请勿开启该功能。

## file_put_contents 错误

- 由于权限所有者问题导致系统无法读取文件，请[重置权限](install.md#目录所有权)，宝塔面板查看[目录权限](install/baota.md#目录权限)教程。
