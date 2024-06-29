---
aside: false
---

# 迁移

## 数据库

- 备份数据库，导入到新的环境中。

## 文件

- 备份以下文件，覆盖到新的环境中。

```php
fresns/
├── plugins/                        // 插件文件
├── themes/                         // 主题文件
├── public/
│   ├── assets/                     // 插件和主题静态文件
│   ├── status.json                 // 客户端状态配置文件
│   └── apple-app-site-association  // 苹果应用配置文件
├── storage/
│   └── app/
│       └── public/                 // 本地存储文件
├── .env                            // 系统配置文件
└── install.lock                    // 安装锁定文件（有该文件后，禁止再执行安装）
```

- 插件和主题文件（如果没有插件和主题，可忽略）
    - `plugins/`
    - `themes/`
    - `public/assets/`
- 客户端配置文件（如果没有移动应用，可忽略）
    - `public/status.json`
    - `public/apple-app-site-association`
- 本地存储文件（必须，如本地附件和插件配置上传的文件）
    - `storage/app/public`
- 系统配置文件（必须）
    - `.env`
    - `install.lock`
