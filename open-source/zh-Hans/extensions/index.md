# 扩展 Fresns

Fresns 扩展是基于 [Plugin Manager](https://pm.fresns.org/zh-hans/) 扩展包，以模块化插件的方式增强并丰富 Fresns 主程序功能。

## 目录结构

```php
fresns/             //主程序根目录
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
| /plugins/`{fskey}`/Resources/assets/ | /public/assets/`{fskey}`/ |

## plugin.json 配置信息

```json
{
    "fskey": "DemoPlugin", // 唯一标识，大驼峰
    "name": "演示插件", // 名字
    "description": "这是演示插件", // 描述
    "author": "唐杰", // 开发者
    "website": "https://tangjie.me", // 开发者主页
    "version": "1.0.0", // 语义化版本号
    "providers": [
        "Plugins\\FresnsEmail\\Providers\\FresnsEmailServiceProvider",
        "Plugins\\FresnsEmail\\Providers\\CmdWordServiceProvider",
        "Plugins\\FresnsEmail\\Providers\\EventServiceProvider"
    ],
    "autoloadFiles": [
        // autoload files
    ],
    "aliases": {},
    "panelUsages": [
        // 插件用途场景
    ],
    "accessPath": "/mall", // 前端访客路由
    "settingsPath": "/mall/admin" // 后端设置页路由
}
```

- 插件用途场景 `panelUsages` 参数，用于管理后台筛选插件使用。

| 场景参数 | 介绍 | 操作界面位置 |
| --- | --- | ---|
| storage | 存储服务商 | 系统->存储设置 |
| documentPreview | 文档预览插件 | 系统->存储设置->文档 |
| join | “私有模式”加入通道支持插件 | 系统->站点设置 |
| sendEmail | 邮件服务商 | 系统->发信设置 |
| sendSms | 短信服务商 | 系统->发信设置 |
| appNotifications | 移动通知服务商 | 系统->发信设置 |
| accountCenter | 账号中心 | 系统->账号设置 |
| accountRegister | 账号注册支持 | 系统->账号设置 |
| accountLogin | 账号登录支持 | 系统->账号设置 |
| accountConnect | 第三方互联支持 | 系统->账号设置 |
| accountKyc | 实名认证支持 | 系统->账号设置 |
| accountUsers | 多用户管理 | 系统->账号设置 |
| walletRecharge | 充值服务商 | 系统->钱包设置 |
| walletWithdraw | 提现服务商 | 系统->钱包设置 |
| editor | 编辑器插件 | 运营->发表配置 |
| followGroup | 内容小组关注方式插件 | 运营->内容小组 |
| extendIp | IP 服务商 | 扩展->内容处理扩展（IP） |
| extendMap | 地图服务商 | 扩展->内容处理扩展（地图） |
| extendNotification | 通知服务商 | 扩展->内容处理扩展（消息通知） |
| extendReview | 审核服务商 | 扩展->内容处理扩展（审核） |
| extendData | 数据服务商 | 扩展->内容处理扩展（数据源） |
| extendSearch | 搜索服务商 | 扩展->内容处理扩展（搜索） |
| extendContentType | 内容类型扩展 | 扩展->内容类型扩展 |
| extendEditor | 编辑器扩展 | 扩展->编辑器扩展 |
| extendManage | 管理扩展 | 扩展->管理扩展 |
| extendGroup | 小组扩展 | 扩展->小组扩展 |
| extendUser | 用户功能扩展 | 扩展->用户功能扩展<br>扩展->用户资料扩展 |
| extendChannel | 频道扩展 | 扩展->频道扩展 |
| apiKey | 插件需要密钥服务 | 应用中心->应用密钥 |

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
