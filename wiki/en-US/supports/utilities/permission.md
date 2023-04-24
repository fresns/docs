# PermissionUtility

`App\Utilities\PermissionUtility`

## Get User rMain Role

```php
PermissionUtility::getUserMainRole($userId, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | **required** | `users->id` |
| langTag | String | *optional* | What language is the role name in |

- 如果主角色有过期时间，并且已经过期，则输出继承角色。
- 如果无继承角色（或者该继承 ID 找不到角色），则以配置表 `default_role` 键名键值的角色为准。
- 如果配置表键值为空（或找不到角色），则输出 `null`。

## Get User All Roles

```php
PermissionUtility::getUserRoles($userId, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | **required** | `users->id` |
| langTag | String | *optional* | What language is the role name in |

- 仅输出有效期内的角色列表，包括主角色。

## Get Group IDs Not Displayed

```php
PermissionUtility::getGroupFilterIds($userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | *optional* | `users->id` |

## Get Group IDs Excluding Posts

```php
PermissionUtility::getPostFilterByGroupIds($userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | *optional* | `users->id` |

## Determine if User Belongs to Account

```php
PermissionUtility::checkUserAffiliation($userId, $accountId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | **required** | `users->id` |
| accountId | Number | **required** | `accounts->id` |

## Determine User Permissions

```php
PermissionUtility::checkUserPerm($userId, $permUserIds);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | **required** | `users->id` |
| permUserIds | Array | *optional* | ID array of authorised users `["1","2"]` |

*将拥有权限的用户 ID 和需要确认的用户 ID 传参，该功能会判断用户 ID 是否包括在授权 IDs 当中。*

## Determine User Role Permissions

```php
PermissionUtility::checkUserRolePerm($userId, $permRoleIds);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | **required** | `users->id` |
| permRoleIds | Array | **required** | ID array of authorised roles `["1","2"]` |

*将拥有权限的角色 ID 和需要确认的用户 ID 传参，该功能会判断用户名下所有角色是否拥有授权角色。*

## Determine User Conversation Permissions

```php
PermissionUtility::checkUserConversationPerm($receiveUserId, $authUserId, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| receiveUserId | Number | **required** | Recipient `users->id` |
| authUserId | Number | **required** | Sender `users->id` |
| langTag | String | *optional* | Language used for the prompt |

::: details View Result
- 有权则输出为 `0`
- 无权则输出对应的 [Error Code](../../api/error-code.md)
:::

## Determine if User is Group Administrator

```php
PermissionUtility::checkUserGroupAdmin($groupId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| groupId | Number | **required** | `groups->id` |
| userId | Number | **required** | `users->id` |

## Determine if User Has Group Publish Permissions

```php
PermissionUtility::checkUserGroupPublishPerm($groupId, $permissions, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| groupId | Number | **required** | `groups->id` |
| permissions | Array | **required** | `groups->permissions` |
| userId | Number | **required** | `users->id` |

::: details View Result
```json
{
    "allowPost": true, // Can post
    "reviewPost": false, // Post needs review
    "allowComment": true, // Can comment
    "reviewComment": false, // Comment needs review
}
```
:::

## Determine Post Reading Permissions

```php
PermissionUtility::checkPostAllow($postId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| postId | Number | **required** | `posts->id` |
| userId | Number | **required** | `users->id` |

*对需要授权的帖子，判断当前用户是否符合授权要求*

## Determine if Post Can Be Commented On

```php
PermissionUtility::checkPostCommentPerm($pidOrPostId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| pidOrPostId | string | *optional* | `posts->id` |
| userId | Number | *optional* | `users->id` |

## Determine Content Editing Status

```php
PermissionUtility::checkContentEditPerm($createDateTime, $editTimeConfig, $timezone, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| createDateTime | Carbon | **required** | `posts->created_at` or `comments->created_at` |
| editTimeConfig | Number | **required** | `post_edit_time_limit` or `comment_edit_time_limit` |
| timezone | String | *optional* | If empty, the default time zone is used. |
| langTag | String | *optional* | If empty, the default language is used. |

## Determine Extension Permissions

```php
PermissionUtility::checkExtendPerm($unikey, $scene, $groupId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| unikey | String | **required** | Plugin UniKey |
| scene | String | **required** | [{scene} 入口场景](../../extensions/callback/variables.md#scene-entrance-scene) |
| groupId | Number | *optional* | Group ID `groups->id` |
| userId | Number | *optional* | User ID `users->id` |
