# 升级

::: danger 注意事项
升级前请先备份数据库，避免升级不当导致数据丢失。
:::

## 自动升级 (可视化)

当有新版后，Fresns 后台仪表盘将有新版提示，在升级页点击「升级」按钮即可自动升级。

## 自动升级 (命令行)

在主程序根目录，使用「终端」命令行执行 Fresns 升级指令。

```sh
php artisan fresns:upgrade
```

升级过程中，需要确认执行的指令，输入 `yes` 即可继续执行。

## 手动升级

| 起始版本 | 最新版本 | 升级包 | 描述 |
| --- | --- | --- | --- |
| `3.0.0` | `3.4.0` | [下载升级包 .zip](https://assets.fresns.com/packages/fresns-upgrade-3.4.0.zip) | 从 3.0.0 任意版本升级到 3.4.0 |
| `3.4.0` | `3.7.0` | [下载升级包 .zip](https://assets.fresns.com/packages/fresns-upgrade-3.7.0.zip) | 从 3.4.0 任意版本升级到 3.7.0 |
| `3.7.0` | `3.8.0` | [下载升级包 .zip](https://assets.fresns.com/packages/fresns-upgrade-3.8.0.zip) | 从 3.7.0 任意版本升级到 3.8.0 |

- 1、下载升级包，解压并覆盖对应文件夹的文件（覆盖前，请先复制一份旧版项目的备份，避免覆盖不当导致旧版信息丢失）。

- 2、覆盖后，将 `fresns.json` 文件中 `plugins` 括号里所有插件停用（`true` 修改为 `false`，或者删除插件状态），其余配置项不动（手动升级后，系统会自动修正为最新版信息和恢复之前启用的插件）。

```json
{
    "name": "Fresns",
    "version": "3.0.0", // 升级前请勿修改
    "plugins": {
        "EasyManager": false, // true 表示为开启，false 表示为停用
        "FileStorage": false,
        "CmdWordTool": false,
        "HelperTool": false,
        "Placeholder": false
    }
}

// 或者删除插件状态

{
    "name": "Fresns",
    "version": "3.0.0", // 升级前请勿修改
    "plugins": {}
}
```

- 3、登录后台（控制面板），在「仪表盘->更新」页面点击「手动升级」按钮确认升级。
    - 系统将自动执行插件的迁移安装；完成后会自动更新 `fresns.json` 文件中的版本信息和恢复之前为启用状态的插件。
    - 如果后台无法访问，则在终端里执行升级指令。

```sh
php artisan fresns:manual-upgrade
```
