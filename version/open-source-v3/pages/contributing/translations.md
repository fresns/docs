# Contribute to the Docs

I'm glad that you are interested in contributing to Fresns document translation. Before making the contribution, please take a moment to read the following introduction:

## Introduction

Fresns supports multiple languages at the data stream level, and various languages can be added at ease without modifying main programs, plugins and clients. It supports 187 languages in 239 countries/regions around the world (the data strategy conforms to the laws and regulations of all regions in the world), and supports any language and time zone with a simple configuration in the background.

Although we support multiple languages, language packs still need to be translated. Feel free to use your language to support the development of Fresns ecosystem.

| Documentation Guidelines | Version | Source |
| --- | --- | --- |
| [English Docs Writing Guide](writing-guide.md) | 2021 | Vue.js |
| [Chinese Docs Writing Guide](https://tangjie.me/copywriting-style-guide) | 2021 | Jevan Tang |

## Fresns Open-Source Website

All the pages you see at present fall into the category of official website. They are written based on Markdown files and compiled by VitePress site generator.

- Code Repository: [https://github.com/fresns/docs/](https://github.com/fresns/docs/)
- Language Files Directory: [/version/open-source-v3/](https://github.com/fresns/docs/tree/main/version/open-source-v3)
    - `en-US` [https://fresns.org](https://fresns.org)
    - `zh-Hans` [https://fresns.org/zh-Hans/](https://fresns.org/zh-Hans/)

## Control Panel

The language pack of the main program (back-end) management center is the file of the main program code warehouse. By means of Pull Request, you can correct the errors of the existing language files or add new language files.

- Code Repository: [https://github.com/fresns/fresns](https://github.com/fresns/fresns)
- Language Files Directory: [app/Fresns/Panel/Resources/lang/](https://github.com/fresns/fresns/tree/2.x/app/Fresns/Panel/Resources/lang)

## Client Language Packages

Language pack with "Language Tag" as the key name is stored in the database configuration table, which is obtained by the client through the interface, and then parsed for local use by the client (see [multilingual setting](https://docs.fresns.com/open-source/reference/panel/languages.html) function). See the key value of configuration table [language_packs](https://docs.fresns.com/clients/reference/language-pack.html) for the language identification name, which is the basic language identification name of Fresns initialization. Operators can add custom language identification names according to the actual situation of the client.

| Lang Code | Area Code | Lang Name | Area Name | Lang Tag |
| --- | --- | --- | --- | --- |
| en |  | English |  | en |
| en | US | English | United States | en-US |
| en | GB | English | United Kingdom | en-GB |
| es |  | Spanish |  | es |
| fr |  | French |  | fr |
| de |  | German |  | de |
| ja |  | Japanese |  | ja |
| ko |  | Korean |  | ko |
| ru |  | Russian |  | ru |
| it |  | Italian |  | it |
| pt |  | Portuguese |  | pt |
| pt | BR | Portuguese | Brazil | pt-BR |
| id |  | Indonesian |  | id |
| hi |  | Hindi |  | hi |
| zh-Hans |  | Chinese (Simplified) |  | zh-Hans |
| zh-Hant |  | Chinese (Traditional) |  | zh-Hant |
