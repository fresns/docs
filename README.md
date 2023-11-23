<p align="center"><a href="https://fresns.org" target="_blank"><img src="https://files.fresns.org/images/logo.png" width="300"></a></p>

<p align="center">
<img src="https://img.shields.io/packagist/dependency-v/fresns/fresns/php" alt="PHP">
<img src="https://img.shields.io/github/v/release/fresns/fresns?color=orange" alt="Fresns">
<img src="https://img.shields.io/github/license/fresns/fresns" alt="License">
</p>

## Introduction

Fresns supports multiple languages at the data stream level, and various languages can be added at ease without modifying main programs, themes, plug-ins and clients. It supports 187 languages in 239 countries/regions around the world (the data strategy conforms to the laws and regulations of all regions in the world), and supports any language and time zone with a simple configuration in the background.

Although we support multiple languages, language packs still need to be translated. Feel free to use your language to support the development of Fresns ecosystem.

- English Docs Writing Guide: [https://fresns.org/contributing/writing-guide.html](https://fresns.org/contributing/writing-guide.html)


### 修改记录

除「政策条款」外，所有多语言配置项都并入语言包配置
语言标识名 `getLocationError` 修改为 `errorGetLocation`
配置键名以 `menu_` 开头的配置项，改为 `channel_` 开头
配置键名 `wallet_withdraw_verify` 修改为 `wallet_withdraw_check_kyc`
配置键名 `view_posts_by_follow_object` 修改为 `view_timeline_posts`
配置键名 `view_comments_by_follow_object` 修改为 `view_timeline_comments`
配置键名 `post_follow_service` 修改为 `post_timelines_service`
配置键名 `post_nearby_service` 修改为 `post_geotags_service`
配置键名 `comment_follow_service` 修改为 `comment_timelines_service`
配置键名 `comment_nearby_service` 修改为 `comment_geotags_service`
命令字 `getPostByAll` 修改为 `getPosts`
命令字 `getPostByFollow` 修改为 `getPostsByTimelines`
命令字 `getPostByNearby` 修改为 `getPostsByGeotags`
命令字 `getCommentByAll` 修改为 `getComments`
命令字 `getCommentByFollow` 修改为 `getCommentsByTimelines`
命令字 `getCommentByNearby` 修改为 `getCommentsByGeotags`