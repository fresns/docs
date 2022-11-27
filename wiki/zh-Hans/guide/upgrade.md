# 升级

::: danger 注意事项
升级前请先备份数据库，避免升级不当导致数据丢失。
:::

## 后台自动升级

当有新版后，控制面板仪表盘将有新版提示，在升级页点击「升级」按钮即可自动升级。

## 命令行自动升级

在主程序根目录，使用「终端」命令行执行 Fresns 升级指令。

```php
php artisan fresns:upgrade
```

升级过程中，需要确认执行的指令，输入 `yes` 即可继续执行。

## 手动物理升级

- 1、下载新版安装包，除了旧版的「扩展」和「配置信息」等文件，其余文件全部覆盖（覆盖前，请先复制一份旧版项目的备份，避免覆盖不当导致旧版信息丢失）。
    - 如果你使用的是本地存储插件，还需根据插件的文档提示，保留位于 `storage` 存储目录的文件。

```php
fresns/         // 主程序根目录
├── extensions/     // 扩展目录（插件和主题）
├── storage/        // 存储目录
│   └── app
│       └── public
├── .env            // 配置信息
├── fresns.json     // 主程序信息
└── install.lock    // 安装锁定文件（有该文件后，禁止再执行安装）
```

- 2、覆盖后，将 `fresns.json` 文件中 `plugins` 括号里所有插件停用（`true` 修改为 `false`，或者删除插件状态），其余配置项不动（物理升级后，系统会自动修正为最新版信息和恢复之前启用的插件）。

```json
{
    "name": "Fresns",
    "version": "2.0.0",
    "versionInt": 1, // 升级前请勿修改
    "plugins": {
        "FresnsEmail": false, // true 表示为开启，false 表示为停用
        "EasySms": false,
        "CmdWordTool": false,
        "HelperTool": false,
        "Placeholder": false
    }
}

// 或者删除插件状态

{
    "name": "Fresns",
    "version": "2.0.0",
    "versionInt": 1, // 升级前请勿修改
    "plugins": {}
}
```

- 3、执行物理升级
    - 方式 1: 登录后台（控制面板），在「仪表盘->更新」页面点击「物理升级」按钮确认升级。
    - 方式 2: 在主程序根目录，使用「终端」命令行执行指令 `php artisan fresns:physical-upgrade`

::: tip
- 系统将自动执行插件和主题的迁移安装；
- 完成后会自动更新 `fresns.json` 文件中的版本信息和恢复之前为启用状态的插件。
:::
