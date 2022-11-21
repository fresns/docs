# 插件开发

从框架结构上理解，在「管理后台」中的“扩展插件”、“控制面板”、“网站引擎”这三个频道均是插件，只不过业务方向有所不同，开发本质上没有区别。

## 目录结构

```php
fresns/             //主程序根目录
└── extensions/         //扩展目录（插件和主题）
    └── plugins/            //插件目录
        └── DemoPlugin/         //示例插件
            ├── app/
            ├── config/
            ├── database/
            ├── resources/
            │   ├── assets/
            │   │   ├── fresns.png  //插件封面图（正方形），必须存在且位置固定
            │   │   ├── js/
            │   │   │   └── app.js
            │   │   └── sass/
            │   │       └── app.scss
            │   ├── lang/
            │   └── views/
            ├── routes/
            ├── tests/
            ├── plugin.json
            └── composer.json
```


## 文件分发介绍

插件安装发布时，将静态资源分发到 public 目录。

| 插件文件夹 | 分发到站点资源目录 |
| --- | --- |
| /extensions/plugins/`{unikey}`/Resources/assets/ | /public/assets/plugins/`{unikey}`/ |

## plugin.json 配置信息

```json
{
    "unikey": "DemoPlugin", // 唯一标识，大驼峰
    "type": 1, // 类型: 1.扩展插件 2.控制面板 3.网站引擎 4.主题模板
    "name": "演示插件", // 名字
    "description": "这是演示插件", // 描述
    "author": "唐杰", // 开发者
    "authorLink": "https://tangjie.me", // 开发者主页
    "version": "1.0.0", // 语义化版本号
    "scene": [
        // 插件用途场景
    ],
    "accessPath": "/mall", // 前端访客路由
    "settingPath": "/mall/admin", // 后端设置页路由
    "providers": [
        "Plugins\\FresnsEmail\\Providers\\FresnsEmailServiceProvider",
        "Plugins\\FresnsEmail\\Providers\\CmdWordServiceProvider",
        "Plugins\\FresnsEmail\\Providers\\EventServiceProvider"
    ],
    "autoloadFiles": [
        // autoload files
    ],
    "aliases": {}
}
```

- 插件用途场景 `scene` 参数

| 场景参数 | 介绍 | 操作界面位置 |
| --- | --- | ---|
| apiKey | 插件需要密钥服务 | 应用中心 > 应用密钥 |
| register | “公开模式”注册功能配置 | 系统设置 > 站点设置 |
| join | “私有模式”加入通道支持插件 | 系统设置 > 站点设置 |
| sendEmail | 邮件服务商 | 系统设置 > 发信设置 |
| sendSms | 短信服务商 | 系统设置 > 发信设置 |
| connect | 第三方互联支持 | 系统设置 > 用户配置 |
| realName | 实名认证支持 | 系统设置 > 用户配置 |
| multiUser | 多用户模式支持 | 系统设置 > 用户配置 |
| recharge | 充值服务商 | 系统设置 > 钱包设置 |
| withdraw | 提现服务商 | 系统设置 > 钱包设置 |
| storage | 存储服务商 | 系统设置 > 存储设置 |
| map | 地图服务商 | 系统设置 > 地图设置 |
| editor | 编辑器插件 | 运营配置 > 发表配置 |
| followGroup | 内容小组关注方式插件 | 运营配置 > 内容小组 |
| extendEditor | 编辑器扩展 | 扩展管理 > 编辑器扩展 |
| extendContentType | 内容类型扩展 | 扩展管理 > 内容类型扩展 |
| extendIp | IP 服务商 | 扩展管理 > 内容处理扩展（IP） |
| extendNotification | 数据服务商 | 扩展管理 > 内容处理扩展（消息通知） |
| extendReview | 审核服务商 | 扩展管理 > 内容处理扩展（审核） |
| extendData | 数据服务商 | 扩展管理 > 内容处理扩展（数据源） |
| extendSearch | 搜索服务商 | 扩展管理 > 内容处理扩展（搜索） |
| extendManage | 管理扩展 | 扩展管理 > 管理扩展 |
| extendGroup | 小组扩展 | 扩展管理 > 小组扩展 |
| extendUser | 用户功能扩展 | 扩展管理 > 用户功能扩展<br>扩展管理 > 用户资料扩展 |
| engine | 网页引擎 | 客户端 > 网站网页 |
| appNotification | 移动通知服务商 | 客户端 > 移动应用 |

## composer.json 配置信息

```json
{
    "name": "fresns/fresns-email",
    "license": "Apache-2.0",
    "require": {
        "laravel/email": "^2.0"
    },
    "autoload": {
        "psr-4": {
            "Plugins\\FresnsEmail\\": "./"
        }
    }
}
```
