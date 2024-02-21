# 全局配置

- 接口地址：[/api/fresns/v1/global/configs](/api/global/configs.md)

## 语言设置

> 控制面板 > 系统 > 语言设置

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| language_status | Boolean | 是否开启多语言 |
| language_menus | Array | 多语言配置列表 |
| default_language | String | 默认语言标签 `langTag` |

::: details 多语言配置列表
```json
[
    {
        "order": "顺序",
        "langCode": "语言代码",
        "langName": "语言名称（从字典中读取存入）",
        "continentId": "洲 ID",
        "areaStatus": "地区启用状态，true 或者 false",
        "areaCode": "地区代码（可留空）",
        "areaName": "地区名称（可留空，从字典中读取存入）",
        "langTag": "语言标签（语言名称和地区代码组合）",
        "writingDirection": "语言写作方向（从字典中读取存入）",
        "lengthUnit": "长度单位",
        "dateFormat": "日期格式",
        "timeFormatMinute": "分钟时间格式命名",
        "timeFormatHour": "小时时间格式命名",
        "timeFormatDay": "天时间格式命名",
        "timeFormatMonth": "月时间格式命名",
        "timeFormatYear": "年时间格式命名",
        "isEnabled": "true 或者 false"
    },
    {
        "order": 1,
        "langCode": "zh-Hans",
        "langName": "简体中文",
        "continentId": 1,
        "areaStatus": true,
        "areaCode": "SG",
        "areaName": "新加坡",
        "langTag": "zh-Hans-SG",
        "writingDirection": "ltr",
        "lengthUnit": "km",
        "dateFormat": "yyyy-mm-dd",
        "timeFormatMinute": "{n} 分钟前",
        "timeFormatHour": "{n} 小时前",
        "timeFormatDay": "{n} 天前",
        "timeFormatMonth": "{n} 个月前",
        "timeFormatYear": "{n} 个年前",
        "isEnabled": true
    }
]
```
:::

## 站点设置

> 控制面板 > 系统 > 站点设置

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| site_url | String | 站点地址 `URL` |
| site_name | String | 站点名称 |
| site_desc | String | 站点描述 |
| site_intro | String | 站点介绍 `Markdown` |
| site_icon | String | 站点 ICON `URL` |
| site_logo | String | 站点 LOGO `URL` |
| site_copyright_name | String | 版权所有名称 |
| site_copyright_years | String | 版权所有年份 |
| site_email | string | 管理员邮箱<br>当运行出错时，展示给用户，便于用户反馈问题。 |
| site_mode | String | 运行模式<br>公开模式 `public`<br>私有模式 `private` |

**私有模式**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| site_private_status | Boolean | 是否对外开放加入 |
| site_private_service | String | 加入通道支持应用 `URL` |
| site_private_end_after | Number | 用户到期后的状态<br>`1` 站点内容全部不可见<br>`2` 到期前内容可见，新内容不可见 |

## 政策条款

> 控制面板 > 系统 > 政策条款

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| account_terms_status | Boolean | 是否显示-服务条款 |
| account_privacy_status | Boolean | 是否显示-隐私权政策 |
| account_cookie_status | Boolean | 是否显示-Cookies 政策 |
| account_delete_status | Boolean | 是否显示-注销说明 |
| account_terms_policy | String | 服务条款 `Markdown` |
| account_privacy_policy | String | 隐私权政策 `Markdown` |
| account_cookie_policy | String | Cookie 政策 `Markdown` |
| account_delete_policy | String | 注销说明 `Markdown` |

## 账户设置

> 控制面板 > 系统 > 账户设置

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| account_center_service | String | 账号中心 `URL` |
| account_register_service | String | 账号注册 `URL` |
| account_login_service | String | 账号登录 `URL` |
| account_register_status | Boolean | 注册状态 |
| account_kyc_service | String | 实名认证 `URL` |

## 钱包设置

> 控制面板 > 系统 > 钱包设置

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| wallet_status | Boolean | 钱包功能 |
| wallet_currency_code | String | 钱包货币代码 |
| wallet_currency_name | String | 货币自定义命名 |
| wallet_currency_unit | String | 货币单位自定义命名 |
| wallet_withdraw_status | Boolean | 提现功能 |
| wallet_withdraw_check_kyc | Boolean | 提现是否验证实名信息 |

## 用户配置

> 控制面板 > 运营 > 用户配置

**名称**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| user_name | String | 身份自定义名称 |
| user_uid_name | String | ID 自定义名称 |
| user_username_name | String | 名称自定义名称 |
| user_nickname_name | String | 昵称自定义名称 |
| user_role_name | String | 角色自定义名称 |
| user_bio_name | String | 介绍自定义名称 |

**默认**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| user_identifier | String | 用户标识类型 `uid` 或者 `username` |

**修改**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| username_min | Number | 用户名最小长度 |
| username_max | Number | 用户名最大长度 |
| username_edit | Number | 用户名修改间隔天数 |
| nickname_min | Number | 昵称最小长度 |
| nickname_max | Number | 昵称最大长度 |
| nickname_edit | Number | 昵称修改间隔天数 |
| nickname_unique | Boolean | 昵称不可重复 |
| user_ban_names | Array | 禁止用户名和昵称使用 |
| bio_length | Number | 用户简介字数限制，字符数长度 |
| bio_support_mention | Boolean | 用户简介支持艾特 |
| bio_support_hashtag | Boolean | 用户简介支持话题 |

**对话**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| conversation_status | Boolean | 对话功能 |

## 内容配置

> 控制面板 > 运营 > 内容配置

**名称**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| group_name | String | 小组自定义名称 |
| hashtag_name | String | 话题自定义名称 |
| geotag_name | String | 地理自定义名称 |
| post_name | String | 帖子内容名称 |
| comment_name | String | 评论内容名称 |
| publish_post_name | String | 发表帖子行为名称 |
| publish_comment_name | String | 发表评论行为名称 |

**互动**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| mention_status | Boolean | 艾特功能 |
| hashtag_status | Boolean | 话题功能 |
| hashtag_format | Number | 话题格式<br>1.`#话题`<br>2.`#话题#` |
| hashtag_length | Number | 话题字符长度 |

**列表**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| view_posts_by_timelines | Boolean | 查看时间线的帖子 |
| view_comments_by_timelines | Boolean | 查看时间线的评论 |
| view_posts_by_nearby | Boolean | 查看附近的帖子 |
| view_comments_by_nearby | Boolean | 查看附近的评论 |

## 互动配置

> 控制面板 > 运营 > 互动配置

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| user_like_enabled | Boolean | 用户-赞 |
| user_dislike_enabled | Boolean | 用户-踩 |
| user_follow_enabled | Boolean | 用户-关注 |
| user_block_enabled | Boolean | 用户-屏蔽 |
| group_like_enabled | Boolean | 小组-赞 |
| group_dislike_enabled | Boolean | 小组-踩 |
| group_follow_enabled | Boolean | 小组-关注 |
| group_block_enabled | Boolean | 小组-屏蔽 |
| hashtag_like_enabled | Boolean | 话题-赞 |
| hashtag_dislike_enabled | Boolean | 话题-踩 |
| hashtag_follow_enabled | Boolean | 话题-关注 |
| hashtag_block_enabled | Boolean | 话题-屏蔽 |
| geotag_like_enabled | Boolean | 地理-赞 |
| geotag_dislike_enabled | Boolean | 地理-踩 |
| geotag_follow_enabled | Boolean | 地理-关注 |
| geotag_block_enabled | Boolean | 地理-屏蔽 |
| post_like_enabled | Boolean | 帖子-赞 |
| post_dislike_enabled | Boolean | 帖子-踩 |
| post_follow_enabled | Boolean | 帖子-关注 |
| post_block_enabled | Boolean | 帖子-屏蔽 |
| comment_like_enabled | Boolean | 评论-赞 |
| comment_dislike_enabled | Boolean | 评论-踩 |
| comment_follow_enabled | Boolean | 评论-关注 |
| comment_block_enabled | Boolean | 评论-屏蔽 |

## 频道配置

> 控制面板 > 客户端 > 频道配置

### 门户

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_portal_name | String | 门户名称 |
| channel_portal_seo | Object | SEO 配置 |

### 用户

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_user_name | String | 用户名称 |
| channel_user_seo | Object | SEO 配置 |
| channel_user_query_state | Number | 配置状态 |
| channel_user_query_config | String | 配置内容 |
| channel_user_list_name | String | 用户列表-名称 |
| channel_user_list_seo | Object | 用户列表-SEO 配置 |
| channel_user_list_query_state | Number | 用户列表-配置状态 |
| channel_user_list_query_config | String | 用户列表-配置内容 |
| channel_likes_users_name | String | 赞的用户-名称 |
| channel_dislikes_users_name | String | 踩的用户-名称 |
| channel_following_users_name | String | 关注的用户-名称 |
| channel_blocking_users_name | String | 屏蔽的用户-名称 |

### 小组

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_group_name | String | 小组名称  |
| channel_group_seo | Object | SEO 配置 |
| channel_group_type | String | 小组主页默认类型<br>`tree` 树结构<br>`list` 列表 |
| channel_group_query_state | Number | 配置状态 |
| channel_group_query_config | String | 配置内容 |
| channel_group_list_name | String | 小组列表-名称  |
| channel_group_list_seo | Object | 小组列表-SEO 配置 |
| channel_group_list_query_state | Number | 小组列表-配置状态 |
| channel_group_list_query_config | String | 小组列表-配置内容 |
| channel_group_detail_type | String | 详情页默认列表 `posts` 或者 `comments` |
| channel_likes_groups_name | String | 赞的小组-名称 |
| channel_dislikes_groups_name | String | 踩的小组-名称 |
| channel_following_groups_name | String | 关注的小组-名称 |
| channel_blocking_groups_name | String | 屏蔽的小组-名称 |

### 话题

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_hashtag_name | String | 话题名称 |
| channel_hashtag_seo | Object | SEO 配置 |
| channel_hashtag_query_state | Number | 配置状态 |
| channel_hashtag_query_config | String | 配置内容 |
| channel_hashtag_list_name | String | 话题列表-名称  |
| channel_hashtag_list_seo | Object | 话题列表-SEO 配置 |
| channel_hashtag_list_query_state | Number | 话题列表-配置状态 |
| channel_hashtag_list_query_config | String | 话题列表-配置内容 |
| channel_hashtag_detail_type | String | 详情页默认列表 `posts` 或者 `comments` |
| channel_likes_hashtags_name | String | 赞的话题-名称 |
| channel_dislikes_hashtags_name | String | 踩的话题-名称 |
| channel_following_hashtags_name | String | 关注的话题-名称 |
| channel_blocking_hashtags_name | String | 屏蔽的话题-名称 |

### 地理

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_geotag_name | String | 地理名称 |
| channel_geotag_seo | Object | SEO 配置 |
| channel_geotag_query_state | Number | 配置状态 |
| channel_geotag_query_config | String | 配置内容 |
| channel_geotag_list_name | String | 地理列表-名称  |
| channel_geotag_list_seo | Object | 地理列表-SEO 配置 |
| channel_geotag_list_query_state | Number | 地理列表-配置状态 |
| channel_geotag_list_query_config | String | 地理列表-配置内容 |
| channel_geotag_detail_type | String | 详情页默认列表 `posts` 或者 `comments` |
| channel_likes_geotags_name | String | 赞的地理-名称 |
| channel_dislikes_geotags_name | String | 踩的地理-名称 |
| channel_following_geotags_name | String | 关注的地理-名称 |
| channel_blocking_geotags_name | String | 屏蔽的地理-名称 |

### 帖子

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_post_name | String | 帖子名称 |
| channel_post_seo | Object | SEO 配置 |
| channel_post_query_state | Number | 配置状态 |
| channel_post_query_config | String | 配置内容 |
| channel_post_list_name | String | 帖子列表-名称  |
| channel_post_list_seo | Object | 帖子列表-SEO 配置 |
| channel_post_list_query_state | Number | 帖子列表-配置状态 |
| channel_post_list_query_config | String | 帖子列表-配置内容 |
| channel_likes_posts_name | String | 赞的帖子-名称 |
| channel_dislikes_posts_name | String | 踩的帖子-名称 |
| channel_following_posts_name | String | 关注的帖子-名称 |
| channel_blocking_posts_name | String | 屏蔽的帖子-名称 |

### 评论

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_comment_name | String | 评论名称 |
| channel_comment_seo | Object | SEO 配置 |
| channel_comment_query_state | Number | 配置状态 |
| channel_comment_query_config | String | 配置内容 |
| channel_comment_list_name | String | 评论列表-名称  |
| channel_comment_list_seo | Object | 评论列表-SEO 配置 |
| channel_comment_list_query_state | Number | 评论列表-配置状态 |
| channel_comment_list_query_config | String | 评论列表-配置内容 |
| channel_likes_comments_name | String | 赞的评论-名称 |
| channel_dislikes_comments_name | String | 踩的评论-名称 |
| channel_following_comments_name | String | 关注的评论-名称 |
| channel_blocking_comments_name | String | 屏蔽的评论-名称 |

### 时间线

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_timeline_name | String | 时间线名称 |
| channel_timeline_type | String | 默认列表 `posts` 或者 `comments` |
| channel_timeline_posts_name | String | 全部关注的帖子-名称 |
| channel_timeline_user_posts_name | String | 关注用户的帖子-名称 |
| channel_timeline_group_posts_name | String | 关注小组的帖子-名称 |
| channel_timeline_comments_name | String | 全部关注的评论-名称 |
| channel_timeline_user_comments_name | String | 关注用户的评论-名称 |
| channel_timeline_group_comments_name | String | 关注小组的评论-名称 |

### 附近

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_nearby_name | String | 附近名称 |
| channel_nearby_type | String | 默认列表 `posts` 或者 `comments` |
| channel_nearby_posts_name | String | 附近的帖子 |
| channel_nearby_comments_name | String | 附近的评论 |

### 个人中心

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_me_name | String | 个人中心 |
| channel_me_wallet_name | String | 钱包 |
| channel_me_extcredits_name | String | 扩展分值 |
| channel_me_drafts_name | String | 草稿箱 |
| channel_me_users_name | String | 用户 |
| channel_me_settings_name | String | 设置 |

### 消息

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_conversations_name | String | 对话 |
| channel_notifications_name | String | 通知 |
| channel_notifications_all_name | String | 全部 |
| channel_notifications_systems_name | String | 系统 |
| channel_notifications_recommends_name | String | 推荐 |
| channel_notifications_likes_name | String | 赞 |
| channel_notifications_dislikes_name | String | 踩 |
| channel_notifications_follows_name | String | 关注 |
| channel_notifications_blocks_name | String | 屏蔽 |
| channel_notifications_mentions_name | String | 提及 |
| channel_notifications_comments_name | String | 评论 |
| channel_notifications_quotes_name | String | 引用 |

### 搜索

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_search_name | String | 搜索 |

- SEO 配置 `*_seo`
    - 参数格式 `{"title":"标题","keywords":"关键词","description":"描述"}`
- 配置状态 `*_query_state`
    - `1` 不接受客户端传参（但支持默认参数）
    - `2` 仅接受客户端分页参数
    - `3` 接受全部参数
- 配置内容 `*_query_config`
    - 服务端配置默认参数（格式同 API Query 传参一致）

## 路径配置

> 控制面板 > 客户端 > 路径配置

### 频道

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| website_portal_path | String | 门户 |
| website_user_path | String | 用户 |
| website_group_path | String | 小组 |
| website_hashtag_path | String | 话题 |
| website_geotag_path | String | 地理 |
| website_post_path | String | 帖子 |
| website_comment_path | String | 评论 |

### 详情页

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| website_user_detail_path | String | 用户 |
| website_group_detail_path | String | 小组 |
| website_hashtag_detail_path | String | 话题 |
| website_geotag_detail_path | String | 地理 |
| website_post_detail_path | String | 帖子 |
| website_comment_detail_path | String | 评论 |

- 以帖子举例，完整 URL 格式 `{site_url}`/`{website_user_detail_path}`/`{pid}`

## 语言包配置

> 控制面板 > 客户端 > 语言包配置

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| language_pack_version| String | 语言包版本 |

## 客户端基础

> 控制面板 > 客户端 > 客户端基础

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| website_cookie_prefix | String | 网站 Cookie 前缀 |
| website_stat_code | String | 网页统计工具代码 |
| website_stat_position | String | 统计代码位置 `head` 或 `body`<br>统计代码载入到 HTML 的哪个位置 |
| site_china_mode | Boolean | 中国大陆模式，站点服务器是否部署在中国大陆 |
| china_icp_filing | String | ICP 备案号 [https://beian.miit.gov.cn](https://beian.miit.gov.cn/) |
| china_icp_license | String | ICP 许可证号 [https://dxzhgl.miit.gov.cn](https://dxzhgl.miit.gov.cn/) |
| china_mps_filing | String | 公安备案号 [https://beian.mps.gov.cn](https://beian.mps.gov.cn/) |
| china_broadcasting_license | String | 广播电视节目制作经营许可证 [https://zw.nrta.gov.cn](https://zw.nrta.gov.cn/) |

## 站点默认首页

> 控制面板 > 客户端 > 频道配置

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| default_homepage | String | 默认首页 |

::: details 默认首页->选项
- portal
- user
- group
- hashtag
- post
- comment
:::

## 用户默认主页

> 控制面板 > 运营 > 用户配置

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| profile_default_homepage | String | 用户主页默认内容列表 |

::: details `profile_default_homepage` 选项列表
- posts
- comments
- **likers** `赞他的用户`
- **dislikers** `踩他的用户`
- **followers** `关注他的用户`
- **blockers** `屏蔽他的用户`
- likes_users
- likes_groups
- likes_hashtags
- likes_geotags
- likes_posts
- likes_comments
- dislikes_users
- dislikes_groups
- dislikes_hashtags
- dislikes_geotags
- dislikes_posts
- dislikes_comments
- following_users
- following_groups
- following_hashtags
- following_geotags
- following_posts
- following_comments
- blocking_users
- blocking_groups
- blocking_hashtags
- blocking_geotags
- blocking_posts
- blocking_comments
:::

### 用户内容

> 控制面板 > 运营 > 互动配置

*用户的哪些内容可以被别人查看*

**用户发表内容**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| profile_posts_enabled | Boolean | 他发表的帖子 |
| post_name | String |  |
| profile_comments_enabled | Boolean | 他发表的评论 |
| comment_name | String |  |

**用户互动内容**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| user_like_public_record | Number | 赞他的用户 |
| profile_likers_name | String |  |
| user_dislike_public_record | Number | 踩他的用户 |
| profile_dislikers_name | String |  |
| user_follow_public_record | Number | 关注他的用户 |
| profile_followers_name | String |  |
| user_block_public_record | Number | 屏蔽他的用户 |
| profile_blockers_name | String |  |
| profile_followers_you_follow_enabled | Boolean | 你认识的关注者<br>你关注的用户也关注了他 |
| profile_followers_you_follow_name | String |  |

- `*_public_record` 是否公开记录
    - `1` 不公开
    - `2` 仅对自己公开
    - `3` 对所有人公开

**赞**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| profile_likes_users_enabled | Boolean | 他点赞的用户 |
| profile_likes_users_name | String |  |
| profile_likes_groups_enabled | Boolean | 他点赞的小组 |
| profile_likes_groups_name | String |  |
| profile_likes_hashtags_enabled | Boolean | 他点赞的话题 |
| profile_likes_hashtags_name | String |  |
| profile_likes_geotags_enabled | Boolean | 他点赞的地理 |
| profile_likes_geotags_name | String |  |
| profile_likes_posts_enabled | Boolean | 他点赞的帖子 |
| profile_likes_posts_name | String |  |
| profile_likes_comments_enabled | Boolean | 他点赞的评论 |
| profile_likes_comments_name | String |  |

**踩**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| profile_dislikes_users_enabled | Boolean | 他踩的用户 |
| profile_dislikes_users_name | String |  |
| profile_dislikes_groups_enabled | Boolean | 他踩的小组 |
| profile_dislikes_groups_name | String |  |
| profile_dislikes_hashtags_enabled | Boolean | 他踩的话题 |
| profile_dislikes_hashtags_name | String |  |
| profile_dislikes_geotags_enabled | Boolean | 他踩的地理 |
| profile_dislikes_geotags_name | String |  |
| profile_dislikes_posts_enabled | Boolean | 他踩的帖子 |
| profile_dislikes_posts_name | String |  |
| profile_dislikes_comments_enabled | Boolean | 他踩的评论 |
| profile_dislikes_comments_name | String |  |

**关注**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| profile_following_users_enabled | Boolean | 他关注的用户 |
| profile_following_users_name | String |  |
| profile_following_groups_enabled | Boolean | 他关注的小组 |
| profile_following_groups_name | String |  |
| profile_following_hashtags_enabled | Boolean | 他关注的话题 |
| profile_following_hashtags_name | String |  |
| profile_following_geotags_enabled | Boolean | 他关注的地理 |
| profile_following_geotags_name | String |  |
| profile_following_posts_enabled | Boolean | 他关注的帖子 |
| profile_following_posts_name | String |  |
| profile_following_comments_enabled | Boolean | 他关注的评论 |
| profile_following_comments_name | String |  |

**屏蔽**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| profile_blocking_users_enabled | Boolean | 他屏蔽的用户 |
| profile_blocking_users_name | String |  |
| profile_blocking_groups_enabled | Boolean | 他屏蔽的小组 |
| profile_blocking_groups__name | String |  |
| profile_blocking_hashtags_enabled | Boolean | 他屏蔽的话题 |
| profile_blocking_hashtags_name | String |  |
| profile_blocking_geotags_enabled | Boolean | 他屏蔽的地理 |
| profile_blocking_geotags_name | String |  |
| profile_blocking_posts_enabled | Boolean | 他屏蔽的帖子 |
| profile_blocking_posts_name | String |  |
| profile_blocking_comments_enabled | Boolean | 他屏蔽的评论 |
| profile_blocking_comments_name | String |  |
