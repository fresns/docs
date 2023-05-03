# 数据表总览

## 系统

| 表名 | 描述 |
| --- | --- |
| **configs** | 全局配置表 |
| **code_messages** | 全局状态码信息表 |
| **languages** | 全局语言内容表 |
| **session_keys** | 交互密钥表 |
| **session_tokens** | 交互凭证表 |
| **session_logs** | 交互日志表 |
| **verify_codes** | 验证码表 |
| **files** | 文件主表 |
| **file_usages** | 文件-使用记录表 |
| **file_downloads** | 文件-下载记录表 |

## 插件

| 表名 | 描述 |
| --- | --- |
| **plugins** | 插件表 |
| **plugin_callbacks** | 插件回调使用表 |
| **plugin_usages** | 插件关联使用表 |
| **plugin_badges** | 插件徽标数据表 |

## 账号

| 表名 | 描述 |
| --- | --- |
| **accounts** | 账号主表 |
| **account_connects** | 账号互联凭证表 |
| **account_wallets** | 账号钱包表 |
| **account_wallet_logs** | 账号钱包交易日志表 |

## 用户

| 表名 | 描述 |
| --- | --- |
| **roles** | 角色表 |
| **users** | 用户主表 |
| **user_stats** | 用户数据统计表 |
| **user_extcredits_logs** | 用户扩展分值日志表 |
| **user_roles** | 用户角色关联表 |
| **user_likes** | 用户点赞记录表 |
| **user_follows** | 用户关注记录表 |
| **user_blocks** | 用户屏蔽记录表 |

## 互动

| 表名 | 描述 |
| --- | --- |
| **mentions** | 艾特记录表 |
| **notifications** | 通知信息表 |
| **conversations** | 对话表 |
| **conversation_messages** | 对话消息表 |

## 扩展

| 表名 | 描述 |
| --- | --- |
| **archives** | 扩展参数表 |
| **archive_usages** | 扩展参数使用表 |
| **operations** | 扩展资料表 |
| **operation_usages** | 扩展资料使用表 |
| **extends** | 扩展内容表 |
| **extend_usages** | 扩展内容使用表 |

## 内容信息

| 表名 | 描述 |
| --- | --- |
| **posts** | 帖子主表 |
| **post_appends** | 帖子-附属表 |
| **post_allows** | 帖子-权限记录表 |
| **post_users** | 帖子-特定用户表 |
| **post_logs** | 帖子日志表 |
| **comments** | 评论主表 |
| **comment_appends** | 评论-附属表 |
| **comment_logs** | 评论日志表 |

## 内容归类

| 表名 | 描述 |
| --- | --- |
| **groups** | 小组表 |
| **group_admins** | 小组管理员表 |
| **hashtags** | 话题表 |
| **hashtag_usages** | 话题使用记录表 |
| **domains** | 域名表 |
| **domain_links** | 域名链接表 |
| **domain_link_usages** | 链接使用记录表 |

## 内容配置

| 表名 | 描述 |
| --- | --- |
| **stickers** | 表情表 |
| **block_words** | 阻止词表 |
| **placements** | 植入信息表 |
| **seo** | 搜索引擎优化信息表 |