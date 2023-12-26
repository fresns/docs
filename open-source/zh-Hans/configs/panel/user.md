# 用户配置

> 控制面板 > 运营 > 用户配置

## 名称配置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 身份自定义名称 | user_name |  | object | `用户` **多语言** |
| ID 自定义名称 | user_uid_name |  | object | `UID` **多语言** |
| 名称自定义名称 | user_username_name |  | object | `用户名` **多语言** |
| 昵称自定义名称 | user_nickname_name |  | object | `用户昵称` **多语言** |
| 角色自定义名称 | user_role_name |  | object | `用户角色` **多语言** |
| 介绍自定义名称 | user_bio_name |  | object | `用户简介` **多语言** |

## 默认配置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 默认用户角色 | default_role | 4 | number | 用户角色 ID |
| 默认用户头像 | default_avatar |  | **file** | 用户无头像时的默认头像 |
| 匿名用户头像 | anonymous_avatar |  | **file** | 帖子和评论开启匿名功能后，匿名用户的头像。 |
| 已停用用户头像 | deactivate_avatar |  | **file** | 用户注销或停用后的头像图 |
| 用户标识类型 | user_identifier | username | string | `uid` 或者 `username` |
| 用户 UID 起始位数 | user_uid_digit | 8 | number |  |
| 用户主页默认内容列表 | profile_default_homepage | posts | string | 访问用户主页时，默认内容列表 |

::: details `profile_default_homepage` 选项
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

## 修改配置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 用户名最小长度 | username_min | 5 | number |  |
| 用户名最大长度 | username_max | 16 | number |  |
| 用户名修改间隔天数 | username_edit | 180 | number |  |
| 昵称最小长度 | nickname_min | 2 | number |  |
| 昵称最大长度 | nickname_max | 20 | number |  |
| 昵称修改间隔天数 | nickname_edit | 1 | number |  |
| 昵称不可重复 | nickname_unique | false | boolean |  |
| 用户名禁用名 | user_ban_names | ["fresns","admin"] | array | 禁止用户名和昵称使用 |
| 用户简介字数限制 | bio_length | 128 | number | 字符数长度 |
| 用户简介支持艾特 | bio_support_mention | false | boolean | true 或 false |
| 用户简介支持链接 | bio_support_link | false | boolean | true 或 false |
| 用户简介支持话题 | bio_support_hashtag | false | boolean | true 或 false |

## 用户扩展分值

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 扩展 1 名称 | extcredits1_name |  | object | **多语言** |
| 扩展 1 单位 | extcredits1_unit |  | object | **多语言** |
| 扩展 1 状态 | extcredits1_state | 1 | number | 1.不启用 2.私有 3.公开 |
| 扩展 2 名称 | extcredits2_name |  | object | **多语言** |
| 扩展 2 单位 | extcredits2_unit |  | object | **多语言** |
| 扩展 2 状态 | extcredits2_state | 1 | number | 1.不启用 2.私有 3.公开 |
| 扩展 3 名称 | extcredits3_name |  | object | **多语言** |
| 扩展 3 单位 | extcredits3_unit |  | object | **多语言** |
| 扩展 3 状态 | extcredits3_state | 1 | number | 1.不启用 2.私有 3.公开 |
| 扩展 4 名称 | extcredits4_name |  | object | **多语言** |
| 扩展 4 单位 | extcredits4_unit |  | object | **多语言** |
| 扩展 4 状态 | extcredits4_state | 1 | number | 1.不启用 2.私有 3.公开 |
| 扩展 5 名称 | extcredits5_name |  | object | **多语言** |
| 扩展 5 单位 | extcredits5_unit |  | object | **多语言** |
| 扩展 5 状态 | extcredits5_state | 1 | number | 1.不启用 2.私有 3.公开 |

## 对话功能

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 对话功能 | conversation_status | false | boolean |  |
| 对话附件 | conversation_files | `["image"]` | array | `image`<br>`video`<br>`audio`<br>`document` |
| 附件上传方式 | conversation_file_upload_type |  | object | 选项: `api`, `page`, `sdk` |

- 附件上传方式 `{"image":"api","video":"sdk","audio":"sdk","document":"sdk"}`
