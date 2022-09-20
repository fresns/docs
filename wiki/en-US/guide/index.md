# Introduction

<p align="center"><img src="/assets/images/logo.png" width="300"></p>

<p align="center">
<img src="https://img.shields.io/badge/PHP-%5E8.0-green" alt="PHP" style="display:inline">
<img src="https://img.shields.io/badge/MySQL-%5E5.7%7C%5E8.0-orange" alt="MySQL" style="display:inline;margin:0 8px">
<img src="https://img.shields.io/badge/License-Apache--2.0-blue" alt="License" style="display:inline">
</p>

Fresns is a free and open source social network service software, a general-purpose community product designed for cross-platform, and supports flexible and diverse content forms. It conforms to the trend of the times, satisfies a variety of operating scenarios, is more open and easier to re-development.

::: tip
- Users should read the [installation](install.md) and [operating](operating.md) documentation.
- Extensions developers should read the [extension documentation](../extensions/) and [database structure](../database/).
- For client developers (web or app), please read the [API](../api/) documentation.
:::

## Program Structure

- Front-end and back-end separation
- Separation of dynamic and static
- Functional modularity

## Standard Name

| Name | Introduction |
| --- | --- |
| Main Program | Fresns core program with admin panel, API, wrapper functions, manager dependency packages, etc. |
| Plugin | Mounted programs that extend and enhance the functionality of the main program, including plug-ins for site engine, control panel, mobile application management, etc. |
| Engine | Website features developed based on the main program API, with separate integrated and standalone engines<br>**Integration Engine**: Website engine running as a plugin in the main application<br>**Independent Engine**: Websites that are deployed and run independently of the main program, similar to mobile applications (apps) |
| Theme | Appearance style (UE & UI interface) based on website engine development |
| App | Mobile apps that run independently on iOS and Android, etc. |

## License

Released under the [Apache-2.0](https://github.com/fresns/fresns/blob/main/LICENSE) License

To run the program for any purpose.
To study how the program works and change it to make it do what you wish.
To redistribute.
To distribute copies of your modified versions to others.

## Contact Us

- Founder: [Jarvis Tang](https://github.com/jarvis-tang/about)
- Email: [support@fresns.org](mailto:support@fresns.org)
