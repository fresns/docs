# 主题开发

集成在 Fresns 中运行的 Web 客户端采用 [Laravel Blade](https://laravel.com/docs/11.x/blade) 模板引擎，遵循 Blade 功能和视图文件。

## 代码仓库

- [https://github.com/fresns/client-website-themes](https://github.com/fresns/client-website-themes)

## 文件目录结构

```php
ThemeDemo/          // 主题模板文件夹（以 fskey 命名）
├── assets/             // 主题特有的资源文件
│   ├── fresns.png          // 主题封面图（正方形），必须存在且位置固定
│   ├── js/
│   │   └── app.js
│   └── css/
│       └── style.css
├── portal/             // 门户视图文件夹
├── users/              // 用户视图文件夹
├── groups/             // 小组视图文件夹
├── hashtags/           // 话题视图文件夹
├── geotags/            // 地理视图文件夹
├── posts/              // 帖子视图文件夹
├── comments/           // 评论视图文件夹
├── timelines/          // 时间线视图文件夹
├── nearby/             // 附近视图文件夹
├── me/                 // 个人中心视图文件夹
├── messages/           // 消息视图文件夹
├── profile/            // 用户主页视图文件夹
├── search/             // 搜索视图文件夹
├── editor/             // 编辑器视图文件夹
├── functions.blade.php // 主题设置页
├── error.blade.php     // 错误提示页
├── 404.blade.php       // 404 提示页
└── theme.json          // 主题配置文件，负责定义主题的基础属性
```

## 文件分发介绍

主题安装发布时，将静态资源分发到 public 目录。

| 主题文件夹 | 分发到站点资源目录 |
| --- | --- |
| /themes/`{fskey}`/assets/ | /public/assets/`{fskey}`/ |
| 其余文件 | 不分发 |

## theme.json 配置文件

- 由于主题模板也是入库管理的模式，所以「安装」使用了插件的配置文件来处理主题模板的信息入库。

```json
{
    "fskey": "ThemeDemo",
    "name": "演示主题",
    "description": "这是演示主题",
    "author": "唐杰",
    "website": "https://tangjie.me",
    "version": "1.0.0",
    "functions": true, // 是否有设置功能
    "functionItems": [
        // 设置功能的配置键名，与 functions.blade.php 配合使用。
        {
            "itemKey": "theme_menu_name",
            "itemType": "object", // 多语言必须为 object 类型
            "isMultilingual": true
        },
        {
            "itemKey": "themeSet",
            "itemType": "string",
            "isMultilingual": false
        },
        {
            "itemKey": "themeSelect",
            "itemType": "string",
            "isMultilingual": false
        }
    ],
    "functionLang": {
        "en": {
            "name": "Fresns Theme Frame",
            "description": "Fresns theme framework to showcase web-side functionality and interaction flow."
        },
        "zh-Hans": {
            "name": "Fresns 主题框架",
            "description": "Fresns 官方开发的主题框架，展示网站端功能和交互流程。"
        }
    }
}
```
