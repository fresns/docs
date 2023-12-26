# Content Handler Plugin Development

- Content Handler Service Configuration `Panel > Extends > Content Handler`
- [View plugin configuration information](../configs/panel/content-handler.html)

## API involved

### Post List

| Endpoint Path | Description | Command Word |
| --- | --- | --- |
| [/api/fresns/v1/post/list](../../api/post/list.md) | Get post all list | `getPosts` |
| [/api/fresns/v1/post/timelines](../../api/post/timelines.md) | Get post list by timelines | `getPostsByTimelines` |
| [/api/fresns/v1/post/nearby](../../api/post/nearby.md) | Get post list by nearby | `getPostsByNearby` |
| [/api/fresns/v1/comment/list](../../api/comment/list.md) | Get comment all list | `getComments` |
| [/api/fresns/v1/comment/timelines](../../api/comment/timelines.md) | Get comment list by timelines | `getCommentsByTimelines` |
| [/api/fresns/v1/comment/nearby](../../api/comment/nearby.md) | Get comment list by nearby | `getCommentsByNearby` |

### Post Detail

| Endpoint Path | Description | Command Word |
| --- | --- | --- |
| [/api/fresns/v1/post/detail](../../api/post/detail.md) | Get post detail | `getPostDetail` |
| [/api/fresns/v1/comment/detail](../../api/comment/detail.md) | Get comment detail | `getCommentDetail` |

### Search

| Endpoint Path | Description | Command Word |
| --- | --- | --- |
| /api/fresns/v1/search/users | Search Users | `searchUsers` |
| /api/fresns/v1/search/groups | Search Groups | `searchGroups` |
| /api/fresns/v1/search/hashtags | Search Hashtags | `searchHashtags` |
| /api/fresns/v1/search/geotags | Search Geotags | `searchGeotags` |
| /api/fresns/v1/search/posts | Search Posts | `searchPosts` |
| /api/fresns/v1/search/comments | Search Comments | `searchComments` |

### Content Review

| Endpoint Path | Description | Command Word |
| --- | --- | --- |
| /api/fresns/v1/editor/`{type}`/draft/`{did}`<br><br>/api/fresns/v1/editor/`{type}`/publications | Content Publish | `reviewNotice` |

*This command word is requested when the content triggers an review.*

::: details Request Example
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


## Request Process

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| headers | Object | **required** | API Headers parameter |
| body | Object | **required** | The Body parameter of the corresponding API |
| type | String | *optional* | getPostByFollow and getCommentByFollow specific |
| fsid | String | *optional* | getPostDetail and getCommentDetail specific, pid or cid |

**Request Example:**

```php
$wordBody = [
    'headers' => AppHelper::getHeaders(),
    'body' => $dtoRequest->toArray(),
    'type' => '',
    'fsid' => '',
];

\FresnsCmdWord::plugin($fskey)->getPostByAll($wordBody);
```

**Return Example:**

After the plug-in processes the request and returns the data, the main program would transmit the returned data to its API interface directly.

- It is recommended that the plug-in outputs according to the parameter format of the corresponding API, so as to ensure that different client-end could use the plug-in directly.
- If your client-end is a customized one, the plug-in could also return the output in the format required by the customized client if there are any special requirements.


## Additional information

### Public Mode: `site_mode=public`

- **Unlogged in**
    - 1. Do not output private group posts `groups->type_mode=2`
    - 2. Judge whether a post has any permission conditions `post_appends->is_read_locked`
        - If there is no permission condition, output the content normally, otherwise the content should be output according to the permission configuration directly (percentage, button text, and plugin)
        - Percentage `post_appends->read_pre_percentage`
        - Button Text `post_appends->read_btn_name`
        - Plugin `post_appends->read_plugin_fskey`
        - Reference `App\Fresns\Api\Services\PostService::contentHandle`
- **Logged in**
    - 1. Do not output private group posts `groups->type_mode=2` unless the user has already followed(`user_follows`) the group.
    - 2. Screen posts of blocked accounts `user_blocks->block_id`
        - `block_type=1` Posts by this user
        - `block_type=2` Posts under the group
        - `block_type=3` Posts related to this hashtag
        - `block_type=4` The post
    - 3.  Judge whether a post has any permission conditions `post_appends->is_read_locked`. The logic is the same as above

### Private Mode: `site_mode=private`

- **Unlogged in**
    - 1. Do not output post lists.
- **Logged in**
    - 1. Role permission, whether the role has the right to view `roles->permission['content_view']`
    - 2. Whether `users->expired_at` is within the validity period (permanently effective if left empty)
        - 2.1 `site_private_end_after=1`  If expired, the content should invisible. In this case, the post lists should not be output.
        - 2.2 `site_private_end_after=2` If expired, the content that has not expired is visible. In this case, only the list of posts before the expiration date could be output.
        - 2.3 Within the validity period, all post lists should be output.
    - Other logged-in scenarios with the same logic as the public mode (private groups, blocked accounts, post permission)

### Content output and parse logic (including comment content)

- It is necessary to part and output content of the corresponding format when outputting contents (hashtag, links, mention, and sticker).
    - Reference `App\Utilities\ContentUtility::handleAndReplaceAll`
- To output content, the filter words should be replaced.
    - Reference `App\Utilities\ContentUtility::replaceBlockWords`

### Send View Notification

If you are using yourself content data, it is recommended that you use the View Notification feature.

```php
use App\Utilities\SubscribeUtility;

SubscribeUtility::notifyViewContent($type, $fsid, $viewType, $authUserId);
```
