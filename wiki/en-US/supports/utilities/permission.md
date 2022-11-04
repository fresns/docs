# PermissionUtility

`App\Utilities\PermissionUtility`

## 获取用户主角色权限

```php
PermissionUtility::getUserMainRolePerm($userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | **required** | `users > id` |

- 如果主角色有过期时间，并且已经过期，则输出继承角色权限。
- 如果无继承角色（或者该继承 ID 找不到角色），则以配置表 `default_role` 键名键值的角色权限为准。
- 如果配置表键值为空（或找不到角色），则输出 `null`。

## 获取不显示的小组 ID

```php
PermissionUtility::getGroupFilterIds($userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | *optional* | `users > id` |

## 获取不输出帖子的小组 ID

```php
PermissionUtility::getPostFilterByGroupIds($userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | *optional* | `users > id` |

## 判断用户是否归属该账号

```php
PermissionUtility::checkUserAffiliation($userId, $accountId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | **required** | `users > id` |
| accountId | Number | **required** | `accounts > id` |

## 判断用户权限

```php
PermissionUtility::checkUserPerm($userId, $permUserIds);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | **required** | `users > id` |
| permUserIds | Array | **required** | 有权用户的 ID 数组 `["1","2"]` |

*将拥有权限的用户 ID 和需要确认的用户 ID 传参，该功能会判断用户 ID 是否包括在授权 IDs 当中。*

## 判断用户角色权限

```php
PermissionUtility::checkUserRolePerm($userId, $permRoleIds);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | **required** | `users > id` |
| permRoleIds | Array | **required** | 有权角色的 ID 数组 `["1","2"]` |

*将拥有权限的角色 ID 和需要确认的用户 ID 传参，该功能会判断用户名下所有角色是否拥有授权角色。*

## 判断用户会话权限

```php
PermissionUtility::checkUserDialogPerm($receiveUserId, $authUserId, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| receiveUserId | Number | **required** | 收信人 `users > id` |
| authUserId | Number | **required** | 发信人 `users > id` |
| langTag | String | *optional* | 提示语使用的语言 |

::: details 查看结果
```json
{
    "status": true,
    "code": 36600, // 状态为 false 时输出的提示 code
    "message": "", // 状态为 false 时输出的提示语
}
```
:::

## 判断用户是否为小组管理员

```php
PermissionUtility::checkUserGroupAdmin($groupId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| groupId | Number | **required** | `groups > id` |
| userId | Number | **required** | `users > id` |

## 判断用户是否有小组发表权限

```php
PermissionUtility::checkUserGroupPublishPerm($groupId, $permissions, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| groupId | Number | **required** | `groups > id` |
| permissions | Array | **required** | `groups > permissions` |
| userId | Number | **required** | `users > id` |

::: details 查看结果
```json
{
    "allowPost": true, // 是否可发帖
    "reviewPost": false, // 发帖是否需要审核
    "allowComment": true, // 是否可发评论
    "reviewComment": false, // 发评论是否需要审核
}
```
:::

## 判断帖子阅读权限

```php
PermissionUtility::checkPostAllow($postId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| postId | Number | **required** | `posts > id` |
| userId | Number | **required** | `users > id` |

*对需要授权的帖子，判断当前用户是否符合授权要求*

## 判断帖子是否可以评论

```php
PermissionUtility::checkPostCommentPerm($pidOrPostId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| pidOrPostId | string | *optional* | `posts > id` |
| userId | Number | *optional* | `users > id` |

## 判断内容编辑状态

```php
PermissionUtility::checkContentEditPerm($createDateTime, $editTimeConfig, $timezone, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| createDateTime | Carbon | **required** | `posts->created_at` 或 `comments->created_at` |
| editTimeConfig | Number | **required** | `post_edit_time_limit` 或 `comment_edit_time_limit` |
| timezone | String | *optional* | If empty, the default time zone is used. |
| langTag | String | *optional* | If empty, the default language is used. |
