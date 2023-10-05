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

**Engine**: Website drivers integrated to run in the fresns, providing a runtime environment for Web clients (themes) such as channel extensions, desktop sites, mobile sites, responsive sites.

**Theme**: It is called a [client](https://marketplace.fresns.com/open-source/clients) in the application marketplace and supports the use of PHP code and Fresns encapsulated functions in the view. The development core is essentially client-side, except that it runs on the web engine.

**Client**: Application developed based on the main program [API](../api/) can be independent websites, APPs, WeChat mini programs, fast applications and other forms. If the API of the main program does not meet the requirements, you can install or develop extension plug-ins to add APIs, or manage the equivalent configuration of client applications.


## Directory Structure

Fresns main program is a social network service software based on PHP Laravel framework and relational database.

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
├── plugins/
├── public/
│   ├── assets/
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
├── vite.config.js
├── phpunit.xml
└── LICENSE
```


## Composer Packages

Composer packages require for fresns.

| Package | Description |
| --- | --- |
| [DTO](https://pm.fresns.org/dto/) | Fresns data transfer object extension package for easy generation of data rules and inspection of transfer data. Works with Laravel projects. |
| [Cmd Word Manager](https://pm.fresns.org/command-word/) | Command word manager helps plugins to communicate with each other easily. |
| [Plugin Manager](https://pm.fresns.org/) | Development and operation of plugins: install, enable, disable, uninstall. |


## Contact Us

- Founder: [Jevan Tang](https://github.com/jevantang)
- Email: [support@fresns.org](mailto:support@fresns.org)
- Community: [https://discuss.fresns.com](https://discuss.fresns.com/)
