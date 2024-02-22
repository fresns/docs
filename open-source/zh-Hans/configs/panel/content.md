# 内容配置

> 控制面板 > 运营 > 内容配置

## 名称配置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 小组自定义名称 | group_name |  | object | `小组` **多语言** |
| 话题自定义名称 | hashtag_name |  | object | `话题` **多语言** |
| 地理自定义名称 | geotag_name |  | object | `地理` **多语言** |
| 帖子自定义名称 | post_name |  | object | `帖子` **多语言** |
| 评论自定义名称 | comment_name |  | object | `评论` **多语言** |
| 发表帖子行为名称 | publish_post_name |  | object | `发表` **多语言** |
| 发表评论行为名称 | publish_comment_name |  | object | `回复` **多语言** |

## 互动配置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 艾特功能 | mention_status | true | boolean |  |
| 艾特个数 | mention_number | 0 | number | 每篇内容支持艾特用户的数量，`0` 表示不限制 |
| 话题功能 | hashtag_status | true | boolean |  |
| 话题格式 | hashtag_format | 2 | number | `#话题` 和 `#话题#` 的区别 |
| 话题长度 | hashtag_length | 20 | number |  |
| 话题个数 | hashtag_number | 0 | number | 每篇内容支持话题的数量，`0` 表示不限制 |
| 话题正则表达式 | hashtag_regexp | `{"space":"","hash":""}` | object |  |

- 话题正则表达式-默认键值
    - space `/#[\p{L}\p{N}\p{M}]+[^\n\p{P}\s]/u`
    - hash `/#[\p{L}\p{N}\p{M}]+[^\n\p{P}]#/u`

## 附近搜索默认范围

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 附近默认范围（公里） | nearby_length_km | 50 | number |  |
| 附近默认范围（英里） | nearby_length_mi | 30 | number |  |

## 列表配置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 帖子摘要字数 | post_brief_length | 280 | number |  |
| 评论摘要字数 | comment_brief_length | 280 | number |  |
| 评论可见度规则 | comment_visibility_rule | 0 | number | 单位：天<br>0 代表不限制，7 代表显示 7 天内可见<br>以帖子发表时间为计算值，大于可见度规则天数，该帖子的评论不再显示，也不可再评论。 |

## 预览配置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 帖子赞用户预览 | preview_post_like_users | 0 | number | 0 代表不启用，最大数字 10 |
| 帖子评论预览数量 | preview_post_comments | 0 | number | 0 代表不启用，最大数字 5 |
| 帖子评论预览类型 | preview_post_comments_type | like | string | `like` 赞数量<br>`comment` 子级评论数量<br>`oldest` 正序发表时间<br>`latest` 倒序发表时间 |
| 帖子评论预览条件 | preview_post_comments_threshold | 10 | number | `like` 和 `comment` 专用，表示数量达到多少才输出预览 |
| 评论赞用户预览 | preview_comment_like_users | 0 | number | 0 代表不启用，最大数字 10 |
| 评论回复预览数量 | preview_comment_replies | 3 | number | 0 代表不启用，最大数字 5 |
| 评论回复预览类型 | preview_comment_replies_type | oldest | string | `like` 赞数量<br>`oldest` 正序发表时间<br>`latest` 倒序发表时间 |

## 管理配置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 帖子编辑权限 | post_edit | false | boolean |  |
| 多长时间内可以编辑 | post_edit_time_limit | 5 | number |  |
| 帖子置顶后编辑权限 | post_edit_sticky_limit | false | boolean |  |
| 帖子加精后编辑权限 | post_edit_digest_limit | false | boolean |  |
| 帖子删除权限 | post_delete | true | boolean |  |
| 帖子置顶后删除权限 | post_delete_sticky_limit | true | boolean |  |
| 帖子加精后删除权限 | post_delete_digest_limit | true | boolean |  |
| 评论编辑权限 | comment_edit | false | boolean |  |
| 多长时间内可以编辑 | comment_edit_time_limit | 5 | number |  |
| 评论置顶后编辑权限 | comment_edit_sticky_limit | false | boolean |  |
| 评论加精后编辑权限 | comment_edit_digest_limit | false | boolean |  |
| 评论删除权限 | comment_delete | true | boolean |  |
| 评论置顶后删除权限 | comment_delete_sticky_limit | true | boolean |  |
| 评论加精后删除权限 | comment_delete_digest_limit | true | boolean |  |
