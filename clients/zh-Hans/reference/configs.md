# 全局配置

- 接口地址：[/fresns-api/v1/global/configs](/api/global/configs.md)

## 语言设置

> 控制面板 > 系统 > 语言设置

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| language_status | Boolean | 是否开启多语言 |
| language_menus | Array | 多语言配置列表 |
| default_language | String | 默认语言 |

::: details 多语言配置列表
```json
[
    {
        "sortOrder": "排序",
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
        "sortOrder": 1,
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
| site_copyright | String | 版权所有名称 |
| site_copyright_years | String | 版权所有年份 |
| site_mode | String | 运行模式<br>公开模式 `public`<br>私有模式 `private` |
| site_email | string | 管理员邮箱<br>当运行出错时，展示给用户，便于用户反馈问题。 |

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
| account_cookies_status | Boolean | 是否显示-Cookies 政策 |
| account_ip_location_status | Boolean | 是否显示-IP 属地 |
| account_delete_status | Boolean | 是否显示-注销说明 |
| account_terms | String | 服务条款 `Markdown` |
| account_privacy | String | 隐私权政策 `Markdown` |
| account_cookies | String | Cookies 政策 `Markdown` |
| account_delete | String | 注销说明 `Markdown` |

## 账户设置

> 控制面板 > 系统 > 账户设置

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| account_center_service | String | 账号中心 `URL` |
| account_register_path | String | 注册入口 |
| account_login_path | String | 登录入口 |

- 完整 URL 格式 `{account_center_service}`/`{account_register_path}`

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

## 命名配置

> 控制面板 > 运营 > 命名配置

**用户命名**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| user_name | String | 身份自定义名称 |
| user_uid_name | String | ID 自定义名称 |
| user_username_name | String | 名称自定义名称 |
| user_nickname_name | String | 昵称自定义名称 |
| user_role_name | String | 角色自定义名称 |
| user_bio_name | String | 介绍自定义名称 |

**内容命名**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| group_name | String | 小组自定义名称 |
| hashtag_name | String | 话题自定义名称 |
| geotag_name | String | 地理自定义名称 |
| post_name | String | 帖子内容名称 |
| comment_name | String | 评论内容名称 |

**发表行为命名**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| publish_post_name | String | 发表帖子行为名称 |
| publish_comment_name | String | 发表评论行为名称 |

**关注者命名**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| user_follower_name | String | 关注用户对象 |
| group_follower_name | String | 关注小组对象 |
| hashtag_follower_name | String | 关注话题对象 |
| geotag_follower_name | String | 关注地理对象 |
| post_follower_name | String | 关注帖子对象 |
| comment_follower_name | String | 关注评论对象 |

## 用户配置

> 控制面板 > 运营 > 用户配置

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| username_min | Number | 用户名最小长度 |
| username_max | Number | 用户名最大长度 |
| username_edit | Number | 用户名修改间隔天数 |
| nickname_min | Number | 昵称最小长度 |
| nickname_max | Number | 昵称最大长度 |
| nickname_edit | Number | 昵称修改间隔天数 |
| nickname_unique | Boolean | 昵称不可重复 |
| bio_length | Number | 用户简介字数限制，字符数长度 |
| bio_support_mention | Boolean | 用户简介支持艾特 |
| bio_support_link | Boolean | 用户简介支持链接 |
| bio_support_hashtag | Boolean | 用户简介支持话题 |

## 互动配置

> 控制面板 > 运营 > 互动配置

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| mention_status | Boolean | 艾特功能 |
| hashtag_status | Boolean | 话题功能 |
| hashtag_format | Number | 话题格式<br>1.`#话题`<br>2.`#话题#` |
| hashtag_length | Number | 话题字符长度 |

**对话**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| conversation_status | Boolean | 私信对话功能 |

**互动内容**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| it_home_list | String | 用户主页默认内容列表 |

::: details 用户主页默认内容列表->选项
- it_posts
- it_comments
- **user_likers** `点赞他的用户`
- **user_dislikers** `踩他的用户`
- **user_followers** `关注他的用户`
- **user_blockers** `屏蔽他的用户`
- it_like_users
- it_like_groups
- it_like_hashtags
- it_like_geotags
- it_like_posts
- it_like_comments
- it_dislike_users
- it_dislike_groups
- it_dislike_hashtags
- it_dislike_geotags
- it_dislike_posts
- it_dislike_comments
- it_follow_users
- it_follow_groups
- it_follow_hashtags
- it_follow_geotags
- it_follow_posts
- it_follow_comments
- it_block_users
- it_block_groups
- it_block_hashtags
- it_block_geotags
- it_block_posts
- it_block_comments
:::

**用户的哪些内容可以被别人查看**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| it_posts | Boolean | 他发表的帖子 |
| it_comments | Boolean | 他发表的评论 |
| it_followers_you_follow | Boolean | 你认识的关注者<br>你关注的用户也关注了他 |
| it_like_users | Boolean | 他点赞的用户 |
| it_like_groups | Boolean | 他点赞的小组 |
| it_like_hashtags | Boolean | 他点赞的话题 |
| it_like_geotags | Boolean | 他点赞的地理 |
| it_like_posts | Boolean | 他点赞的帖子 |
| it_like_comments | Boolean | 他点赞的评论 |
| it_dislike_users | Boolean | 他踩的用户 |
| it_dislike_groups | Boolean | 他踩的小组 |
| it_dislike_hashtags | Boolean | 他踩的话题 |
| it_dislike_geotags | Boolean | 他踩的地理 |
| it_dislike_posts | Boolean | 他踩的帖子 |
| it_dislike_comments | Boolean | 他踩的评论 |
| it_follow_users | Boolean | 他关注的用户 |
| it_follow_groups | Boolean | 他关注的小组 |
| it_follow_hashtags | Boolean | 他关注的话题 |
| it_follow_geotags | Boolean | 他关注的地理 |
| it_follow_posts | Boolean | 他关注的帖子 |
| it_follow_comments | Boolean | 他关注的评论 |
| it_block_users | Boolean | 他屏蔽的用户 |
| it_block_groups | Boolean | 他屏蔽的小组 |
| it_block_hashtags | Boolean | 他屏蔽的话题 |
| it_block_geotags | Boolean | 他屏蔽的地理 |
| it_block_posts | Boolean | 他屏蔽的帖子 |
| it_block_comments | Boolean | 他屏蔽的评论 |

**哪些互动记录可以被查看**

**用户**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| user_likers | Boolean | 点赞了他的用户 |
| user_dislikers | Boolean | 踩了他的用户 |
| user_followers | Boolean | 关注了他的用户 |
| user_blockers | Boolean | 屏蔽了他的用户 |

**小组**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| group_likers | Boolean | 点赞了他的用户 |
| group_dislikers | Boolean | 踩了他的用户 |
| group_followers | Boolean | 关注了他的用户 |
| group_blockers | Boolean | 屏蔽了他的用户 |

**话题**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| hashtag_likers | Boolean | 点赞了他的用户 |
| hashtag_dislikers | Boolean | 踩了他的用户 |
| hashtag_followers | Boolean | 关注了他的用户 |
| hashtag_blockers | Boolean | 屏蔽了他的用户 |

**地理**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| geotag_likers | Boolean | 点赞了他的用户 |
| geotag_dislikers | Boolean | 踩了他的用户 |
| geotag_followers | Boolean | 关注了他的用户 |
| geotag_blockers | Boolean | 屏蔽了他的用户 |

**帖子**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| post_likers | Boolean | 点赞了他的用户 |
| post_dislikers | Boolean | 踩了他的用户 |
| post_followers | Boolean | 关注了他的用户 |
| post_blockers | Boolean | 屏蔽了他的用户 |

**评论**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| comment_likers | Boolean | 点赞了他的用户 |
| comment_dislikers | Boolean | 踩了他的用户 |
| comment_followers | Boolean | 关注了他的用户 |
| comment_blockers | Boolean | 屏蔽了他的用户 |

## 频道配置

> 控制面板 > 客户端 > 频道配置

**首页**

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

**门户**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_portal_name | String | 门户-导航名称 |
| channel_portal_title | String | 门户-SEO 标题 |
| channel_portal_keywords | String | 门户-SEO 关键词 |
| channel_portal_description | String | 门户-SEO 描述 |
| channel_portal_status | Boolean | 门户-启用状态 |

**用户**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_user_name | String | 用户-导航名称 |
| channel_user_title | String | 用户-SEO 标题 |
| channel_user_keywords | String | 用户-SEO 关键词 |
| channel_user_description | String | 用户-SEO 描述 |
| channel_user_status | Boolean | 用户-启用状态 |
| channel_user_query_state | Number | 用户-配置状态 |
| channel_user_query_config | String | 用户-配置内容 |

**小组**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_group_name | String | 小组-导航名称 |
| channel_group_title | String | 小组-SEO 标题 |
| channel_group_keywords | String | 小组-SEO 关键词 |
| channel_group_description | String | 小组-SEO 描述 |
| channel_group_type | String | 小组-类型，`tree` 树结构 `list` 列表 |
| channel_group_status | Boolean | 小组-启用状态 |
| channel_group_query_state | Number | 小组-配置状态 |
| channel_group_query_config | String | 小组-配置内容 |

**话题**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_hashtag_name | String | 话题-导航名称 |
| channel_hashtag_title | String | 话题-SEO 标题 |
| channel_hashtag_keywords | String | 话题-SEO 关键词 |
| channel_hashtag_description | String | 话题-SEO 描述 |
| channel_hashtag_status | Boolean | 话题-启用状态 |
| channel_hashtag_query_state | Number | 话题-配置状态 |
| channel_hashtag_query_config | String | 话题-配置内容 |

**地理**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_geotag_name | String | 地理-导航名称 |
| channel_geotag_title | String | 地理-SEO 标题 |
| channel_geotag_keywords | String | 地理-SEO 关键词 |
| channel_geotag_description | String | 地理-SEO 描述 |
| channel_geotag_status | Boolean | 地理-启用状态 |
| channel_geotag_query_state | Number | 地理-配置状态 |
| channel_geotag_query_config | String | 地理-配置内容 |

**帖子**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_post_name | String | 帖子-导航名称 |
| channel_post_title | String | 帖子-SEO 标题 |
| channel_post_keywords | String | 帖子-SEO 关键词 |
| channel_post_description | String | 帖子-SEO 描述 |
| channel_post_status | Boolean | 帖子-启用状态 |
| channel_post_query_state | Number | 帖子-配置状态 |
| channel_post_query_config | String | 帖子-配置内容 |

**评论**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_comment_name | String | 评论-导航名称 |
| channel_comment_title | String | 评论-SEO 标题 |
| channel_comment_keywords | String | 评论-SEO 关键词 |
| channel_comment_description | String | 评论-SEO 描述 |
| channel_comment_status | Boolean | 评论-启用状态 |
| channel_comment_query_state | Number | 评论-配置状态 |
| channel_comment_query_config | String | 评论-配置内容 |

**时间线**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_timeline_name | String | 时间线-名称 |
| channel_timeline_list | String | 时间线-列表，`posts` 帖子列表，`comments` 评论列表 |
| channel_timeline_status | Boolean | 时间线-启用状态 |

**附近**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_nearby_name | String | 附近-名称 |
| channel_nearby_list | String | 附近-列表，`posts` 帖子列表，`comments` 评论列表 |
| channel_nearby_status | Boolean | 附近-启用状态 |

**周边**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_geotag_name | String | 周边-名称 |
| channel_geotag_list | String | 周边-列表，`posts` 帖子列表，`comments` 评论列表 |
| channel_geotag_status | Boolean | 周边-启用状态 |

**用户列表**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_user_list_name | String | 用户列表页-导航名称 |
| channel_user_list_title | String | 用户列表页-SEO 标题 |
| channel_user_list_keywords | String | 用户列表页-SEO 关键词 |
| channel_user_list_description | String | 用户列表页-SEO 描述 |
| channel_user_list_status | Boolean | 用户列表页-启用状态 |
| channel_user_list_query_state | Number | 用户列表页-配置状态 |
| channel_user_list_query_config | String | 用户列表页-配置内容 |

**小组列表**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_group_list_name | String | 小组列表页-导航名称 |
| channel_group_list_title | String | 小组列表页-SEO 标题 |
| channel_group_list_keywords | String | 小组列表页-SEO 关键词 |
| channel_group_list_description | String | 小组列表页-SEO 描述 |
| channel_group_list_status | Boolean | 小组列表页-启用状态 |
| channel_group_list_query_state | Number | 小组列表页-配置状态 |
| channel_group_list_query_config | String | 小组列表页-配置内容 |

**话题列表**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_hashtag_list_name | String | 话题列表页-导航名称 |
| channel_hashtag_list_title | String | 话题列表页-SEO 标题 |
| channel_hashtag_list_keywords | String | 话题列表页-SEO 关键词 |
| channel_hashtag_list_description | String | 话题列表页-SEO 描述 |
| channel_hashtag_list_status | Boolean | 话题列表页-启用状态 |
| channel_hashtag_list_query_state | Number | 话题列表页-配置状态 |
| channel_hashtag_list_query_config | String | 话题列表页-配置内容 |

**地理列表**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_geotag_list_name | String | 地理列表页-导航名称 |
| channel_geotag_list_title | String | 地理列表页-SEO 标题 |
| channel_geotag_list_keywords | String | 地理列表页-SEO 关键词 |
| channel_geotag_list_description | String | 地理列表页-SEO 描述 |
| channel_geotag_list_status | Boolean | 地理列表页-启用状态 |
| channel_geotag_list_query_state | Number | 地理列表页-配置状态 |
| channel_geotag_list_query_config | String | 地理列表页-配置内容 |

**帖子列表**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_post_list_name | String | 帖子列表页-导航名称 |
| channel_post_list_title | String | 帖子列表页-SEO 标题 |
| channel_post_list_keywords | String | 帖子列表页-SEO 关键词 |
| channel_post_list_description | String | 帖子列表页-SEO 描述 |
| channel_post_list_status | Boolean | 帖子列表页-启用状态 |
| channel_post_list_query_state | Number | 帖子列表页-配置状态 |
| channel_post_list_query_config | String | 帖子列表页-配置内容 |

**评论列表**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| channel_comment_list_name | String | 评论列表页-导航名称 |
| channel_comment_list_title | String | 评论列表页-SEO 标题 |
| channel_comment_list_keywords | String | 评论列表页-SEO 关键词 |
| channel_comment_list_description | String | 评论列表页-SEO 描述 |
| channel_comment_list_status | Boolean | 评论列表页-启用状态 |
| channel_comment_list_query_state | Number | 评论列表页-配置状态 |
| channel_comment_list_query_config | String | 评论列表页-配置内容 |

- 配置状态
    - `1` 不接受客户端传参（但支持默认参数）
    - `2` 仅接受客户端分页参数
    - `3` 接受全部参数
- 配置内容
    - 服务端配置默认参数（格式同 API Query 传参一致）

## 栏目配置

> 控制面板 > 客户端 > 栏目配置

**用户栏目命名**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| column_like_users | String | 点赞的用户 |
| column_dislike_users | String | 点踩的用户 |
| column_follow_users | String | 关注的用户 |
| column_block_users | String | 屏蔽的用户 |

**小组栏目命名**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| column_like_groups | String | 点赞的小组 |
| column_dislike_groups | String | 点踩的小组 |
| column_follow_groups | String | 关注的小组 |
| column_block_groups | String | 屏蔽的小组 |

**话题栏目命名**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| column_like_hashtags | String | 点赞的话题 |
| column_dislike_hashtags | String | 点踩的话题 |
| column_follow_hashtags | String | 关注的话题 |
| column_block_hashtags | String | 屏蔽的话题 |

**地理栏目命名**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| column_like_geotags | String | 点赞的地理 |
| column_dislike_geotags | String | 点踩的地理 |
| column_follow_geotags | String | 关注的地理 |
| column_block_geotags | String | 屏蔽的地理 |

**帖子栏目命名**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| column_nearby_posts | String | 附近范围的帖子 |
| column_location_posts | String | 指定位置的周边帖子 |
| column_like_posts | String | 点赞的帖子 |
| column_dislike_posts | String | 点踩的帖子 |
| column_follow_posts | String | 关注的帖子 |
| column_block_posts | String | 屏蔽的帖子 |

**评论栏目命名**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| column_nearby_comments | String | 附近范围的评论 |
| column_location_comments | String | 指定位置的周边评论 |
| column_like_comments | String | 点赞的评论 |
| column_dislike_comments | String | 点踩的评论 |
| column_follow_comments | String | 关注的评论 |
| column_block_comments | String | 屏蔽的评论 |

**时间线栏目命名**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| column_timeline_user_posts | String | 关注用户的帖子 |
| column_timeline_group_posts | String | 关注小组的帖子 |
| column_timeline_hashtag_posts | String | 关注话题的帖子 |
| column_timeline_user_comments | String | 关注用户的评论 |
| column_timeline_group_comments | String | 关注小组的评论 |
| column_timeline_hashtag_comments | String | 关注话题的评论 |

**消息栏目命名**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| column_conversations | String | 对话 |
| column_notifications | String | 通知 |
| column_notifications_all | String | 通知-全部 |
| column_notifications_systems | String | 通知-系统 |
| column_notifications_recommends | String | 通知-推荐 |
| column_notifications_likes | String | 通知-点赞 |
| column_notifications_dislikes | String | 通知-点踩 |
| column_notifications_follows | String | 通知-关注 |
| column_notifications_blocks | String | 通知-屏蔽 |
| column_notifications_mentions | String | 通知-提及 |
| column_notifications_comments | String | 通知-评论 |
| column_notifications_quotes | String | 通知-引用 |

**搜索栏目命名**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| column_search | String | 搜索 |

**编辑器栏目命名**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| column_editor_functions | String | 编辑器 |
| column_editor_drafts | String | 草稿箱 |

**用户主页命名**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| column_profile_likes | String | 点赞他的用户 |
| column_profile_dislikes | String | 点踩他的用户 |
| column_profile_followers | String | 关注他的用户 |
| column_profile_blockers | String | 屏蔽他的用户 |
| column_profile_followers_you_follow | String | 你认识的关注者 |
| column_profile_like_users | String | 他点赞的用户 |
| column_profile_like_groups | String | 他点赞的小组 |
| column_profile_like_hashtags | String | 他点赞的话题 |
| column_profile_like_geotags | String | 他点赞的地理 |
| column_profile_like_posts | String | 他点赞的帖子 |
| column_profile_like_comments | String | 他点赞的评论 |
| column_profile_dislike_users | String | 他点踩的用户 |
| column_profile_dislike_groups | String | 他点踩的小组 |
| column_profile_dislike_hashtags | String | 他点踩的话题 |
| column_profile_dislike_geotags | String | 他点踩的地理 |
| column_profile_dislike_posts | String | 他点踩的帖子 |
| column_profile_dislike_comments | String | 他点踩的评论 |
| column_profile_follow_users | String | 他关注的用户 |
| column_profile_follow_groups | String | 他关注的小组 |
| column_profile_follow_hashtags | String | 他关注的话题 |
| column_profile_follow_geotags | String | 他关注的地理 |
| column_profile_follow_posts | String | 他关注的帖子 |
| column_profile_follow_comments | String | 他关注的评论 |
| column_profile_block_users | String | 他屏蔽的用户 |
| column_profile_block_groups | String | 他屏蔽的小组 |
| column_profile_block_hashtags | String | 他屏蔽的话题 |
| column_profile_block_geotags | String | 他屏蔽的地理 |
| column_profile_block_posts | String | 他屏蔽的帖子 |
| column_profile_block_comments | String | 他屏蔽的评论 |

## 路径配置

> 控制面板 > 客户端 > 路径配置

**详情页**

| 键名 | 键值类型 | 描述 |
| --- | --- | --- |
| website_user_detail_path | String | 用户 |
| website_group_detail_path | String | 小组 |
| website_hashtag_detail_path | String | 话题 |
| website_geotag_detail_path | String | 地理 |
| website_post_detail_path | String | 帖子 |
| website_comment_detail_path | String | 评论 |

- 以帖子举例，完整 URL 格式 `{site_url}`/`{website_user_detail_path}`/`{pid}`

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
