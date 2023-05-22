# 内容处理开发

- 内容处理服务商配置位置 `控制面板 > 扩展 > 内容处理扩展`
- [查看插件配置信息](../../database/keyname/content-handler.md)

## 涉及接口

### 帖子列表

| 接口路径 | 描述 | 命令字 |
| --- | --- | --- |
| [/api/v2/post/list](../../api/post/list.md) | 获取帖子列表 | `getPostByAll` |
| [/api/v2/post/follow](../../api/post/follow.md) | 获取关注对象的帖子列表 | `getPostByFollow` |
| [/api/v2/post/nearby](../../api/post/nearby.md) | 获取位置附近的帖子列表 | `getPostByNearby` |
| [/api/v2/comment/list](../../api/comment/list.md) | 获取评论列表 | `getCommentByAll` |
| [/api/v2/comment/follow](../../api/comment/follow.md) | 获取关注对象的评论列表 | `getCommentByFollow` |
| [/api/v2/comment/nearby](../../api/comment/nearby.md) | 获取位置附近的评论列表 | `getCommentByNearby` |

- 根据插件关联使用表 [plugin_usages->data_sources](../../database/plugins/plugin-usages.md) 的配置，主程序会将请求通过命令字传输给插件，由插件处理客户端请求并返回结果。

### 帖子详情

| 接口路径 | 描述 | 命令字 |
| --- | --- | --- |
| [/api/v2/post/detail](../../api/post/detail.md) | 获取帖子详情 | `getPostDetail` |
| [/api/v2/comment/detail](../../api/comment/detail.md) | 获取评论详情 | `getCommentDetail` |

### 搜索

| 接口路径 | 描述 | 命令字 |
| --- | --- | --- |
| /api/v2/search/users | 搜索用户 | `searchUsers` |
| /api/v2/search/groups | 搜索小组 | `searchGroups` |
| /api/v2/search/hashtags | 搜索话题 | `searchHashtags` |
| /api/v2/search/posts | 搜索帖子 | `searchPosts` |
| /api/v2/search/comments | 搜索评论 | `searchComments` |

### 内容审核

| 接口路径 | 描述 | 命令字 |
| --- | --- | --- |
| /api/v2/editor/`{type}`/`{draftId}`<br><br>/api/v2/editor/direct-publish | 内容发表 | `reviewNotice` |

*当内容触发审核时，会请求该命令字。*

::: details 请求示例
```php
$reviewService = ConfigHelper::fresnsConfigByItemKey('content_review_service');

$wordType = match ($type) {
    'post' => 1,
    'comment' => 2,
};

$wordBody = [
    'type' => $wordType,
    'logId' => $draft->id,
];

\FresnsCmdWord::plugin($reviewService)->reviewNotice($wordBody);
```
:::


## 请求流程

| 参数 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| headers | Object | YES | API 的 Headers 参数 |
| body | Object | YES | 对应 API 的 Body 参数 |
| type | String | NO | getPostByFollow 和 getCommentByFollow 专用 |
| fsid | String | NO | getPostDetail 和 getCommentDetail 专用，pid 或 cid |

**请求示例：**

```php
$wordBody = [
    'headers' => \request()->headers->all(),
    'body' => $dtoRequest->toArray(),
    'type' => '',
    'fsid' => '',
];

\FresnsCmdWord::plugin($fskey)->getPostByAll($wordBody);
```

**返回示例：**

插件处理完毕并返回数据，主程序将直接把返回数据传输到主程序 API 接口。

- 建议插件按照对应 API 的参数格式输出，保证不同客户端也能直接使用。
- 如果你是自己定制的客户端，有特殊要求，那么插件也可以返回定制客户端要求的格式输出。


## 补充介绍

### 公开模式： site_mode=public

- **未登录**
    - 1、不输出非公开的小组帖子 `groups->type_mode=2`
    - 2、判断帖子是否有权限条件 `post_appends->is_read_locked`
        - 无权限条件，正常输出内容；有权限条件，则直接按权限配置输出内容（百分比、按钮文字和处理插件）。
        - 百分比 `post_appends->read_pre_percentage`
        - 按钮文字 `post_appends->read_btn_name`
        - 处理插件 `post_appends->read_plugin_fskey`
        - 参考 `App\Fresns\Api\Services\PostService::contentHandle`
- **已登录**
    - 1、不输出非公开的小组帖子 `groups->type_mode=2`，除非已经 `user_follows` 了该小组。
    - 2、过滤屏蔽对象的帖子 `user_blocks->block_id`
        - `block_type=1` 该用户发表的帖子
        - `block_type=2` 发表在该小组下的帖子
        - `block_type=3` 关联该话题的帖子
        - `block_type=4` 该帖子
    - 3、判断帖子是否有权限条件 `post_appends->is_read_locked`，逻辑同上

### 私有模式： site_mode=private

- **未登录**
    - 1、不输出帖子列表。
- **已登录**
    - 1、角色权限，是否有权浏览 `roles->permission['content_view']`
    - 2、用户 `users->expired_at` 是否在有效期内（为空代表永久有效）。
        - 2.1、`site_private_end_after=1` 过期后内容不可见，不输出帖子列表。
        - 2.2、`site_private_end_after=2` 过期后，到期前的内容可见，输出到期日期前的帖子列表。
        - 2.3、在有效期内，全部输出。
    - 其余逻辑同公开模式的已登录（非公开小组、屏蔽对象、帖子权限）。

### 内容输出解析逻辑（包括评论内容）

- 内容输出的时候，需要解析并输出对应格式的内容（话题、链接、艾特、表情）。
    - 参考 `App\Utilities\ContentUtility::handleAndReplaceAll`
- 内容输出还需替换过滤词。
    - 参考 `App\Utilities\ContentUtility::replaceBlockWords`

### 调用查看通知

如果使用自制内容数据，建议调用查看通知功能。

```php
use App\Utilities\InteractionUtility;

InteractionUtility::sendViewNotification($type, $fsid, $viewType, $authUserId);
```
