# Extending Fresns

<p align="center"><img src="https://files.fresns.org/wiki/images/logo.png" width="300"></p>

<p align="center">
<img src="https://img.shields.io/badge/Laravel-10.x-blue" alt="Laravel" style="display:inline;">
<img src="https://img.shields.io/badge/Fresns-2.x-orange" alt="Fresns" style="display:inline;margin:0 8px;">
<img src="https://img.shields.io/badge/PluginManager-2.x-blueviolet" alt="PluginManager" style="display:inline;">
</p>

Fresns is minimalistic, but it's also highly extensible. In fact, most of the features that ship with Fresns are actually extensions!

This approach makes Fresns extremely customizable. A user can disable any features they don't use on their forum, and install other extensions to make a forum perfect for their community.

In order to achieve this extensibility, Fresns has been built with rich APIs and extension points. With some programming knowledge, you can leverage these APIs to add just about any feature you want. This section of the documentation aims to teach you how Fresns works, and how to use the APIs so that you can build your own extensions.


## Extending Type

**Function Plugins**: Enhance and enrich the extension of main program functions, such as extending a channel, customizing registration process or editor, and enhancing management functions, content security check, and control panel.

**Engine**: The website functions developed based on the main program [API](../api/) include integrated engine and independent engine respectively. An independent engine is similar to an independent website, which is deployed and run independently outside the main program, and is tantamount to a mobile application. Based on independent deployment, a set of data can be run in different functional forms, and the purpose of differentiated operation can be achieved.

**Theme**: The front-end interface attached to the website engine, and the UE&UI interface developed according to the template standard of the selected engine.

**App**: Mobile applications developed based on the main program [API](../api/) can be independent websites, APPs, WeChat mini programs, fast applications and other forms. If the API of the main program does not meet the requirements, you can install or develop extension plug-ins to add APIs, or manage the equivalent configuration of mobile applications. Therefore, mobile applications may develop a plug-in and install it on the “Mobile Applications” channel of the console to enhance the functions and management of the mobile terminal.

## Directory Structure

Fresns main program is a social network service software based on PHP Laravel framework and MySQL database.

```php
fresns/         // Main Program Root Directory
├── app/
│   ├── Console/
│   ├── Exceptions/
│   ├── Http/
│   ├── Models/
│   ├── Helpers/
│   ├── Utilities/
│   ├── Providers/
│   └── Fresns/
│       ├── Install/
│       ├── Panel/
│       ├── Words/
│       ├── Subscribe/
│       └── Api/
├── bootstrap/
├── config/
├── database/
├── extensions/
│   ├── plugins/
│   ├── themes/
│   └── backups/
├── public/
│   ├── assets/
│   │   ├── plugins/
│   │   └── themes/
│   ├── static/
│   ├── index.php
│   ├── favicon.Icon
│   └── robots.txt
├── resources/
│   ├── css/
│   ├── js/
│   ├── lang/
│   └── views/
├── storage/
├── tests/
├── .env.example
├── artisan
├── compose.json
├── fresns.json
├── install.lock
├── package.json
├── webpack.mix.js
├── phpunit.xml
└── LICENSE
```


## Composer Packages

Composer packages require for fresns.

| Package | Description |
| --- | --- |
| [DTO](https://github.com/fresns/dto) | Fresns data transfer object extension package for easy generation of data rules and inspection of transfer data. Works with Laravel projects. |
| [Cmd Word Manager](https://github.com/fresns/cmd-word-manager) | Command word manager helps plugins to communicate with each other easily. |
| [Plugin Manager](https://github.com/fresns/plugin-manager) | Development and operation of plugins: install, enable, disable, uninstall. |
| [Theme Manager](https://github.com/fresns/theme-manager) | Theme development and management: install, edit, uninstall. |
| [Market Manager](https://github.com/fresns/market-manager) | Download and upgrade apps from the app marketplace, manage app accessions and upgrade updates. |


## Contact Us

- Founder: [Jevan Tang](https://github.com/jevantang)
- Email: [support@fresns.org](mailto:support@fresns.org)
- Community: [https://discuss.fresns.com](https://discuss.fresns.com/)
