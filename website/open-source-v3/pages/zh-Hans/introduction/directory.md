# 目录结构

```php
fresns/         // 主程序根目录
├── app/            // 主程功能目录
├── bootstrap/      // 引导程序目录
├── config/         // 配置文件目录
├── database/       // 数据文件目录
├── plugins/        // 插件目录
├── themes/         // 主题目录
├── public/         // 网站根目录
│   ├── assets/         // 插件和主题静态文件
│   ├── static/         // 主程序内置静态文件
│   ├── index.php       // 网站入口文件
│   ├── status.json     // 客户端状态配置文件
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
