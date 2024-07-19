# 鉴权工具 PermissionUtility

`App\Utilities\PermissionUtility`

## 获取用户主角色

```php
PermissionUtility::getUserMainRole($userId, $langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| userId | Number | YES | `users->id` |
| langTag | String | NO | 角色名使用的语言 |

- 如果主角色有过期时间，并且已经过期，则输出继承角色。
- 如果无继承角色（或者该继承 ID 找不到角色），则以配置表 `default_role` 键名键值的角色为准。
- 如果配置表键值为空（或找不到角色），则输出 `null`。

## 获取用户所有角色

```php
PermissionUtility::getUserRoles($userId, $langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| userId | Number | YES | `users->id` |
| langTag | String | NO | 角色名使用的语言 |

- 仅输出有效期内的角色列表，包括主角色。

## 获取不显示的小组 ID

```php
PermissionUtility::getGroupFilterIds($userId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| userId | Number | NO | `users->id` |

## 获取不输出帖子的小组 ID

```php
PermissionUtility::getPostFilterByGroupIds($userId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| userId | Number | NO | `users->id` |

## 判断用户是否归属该账号

```php
PermissionUtility::checkUserAffiliation($userId, $accountId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| userId | Number | YES | `users->id` |
| accountId | Number | YES | `accounts->id` |

## 判断用户角色权限

```php
PermissionUtility::checkUserRolePerm($userId, $permRoleIds);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| userId | Number | YES | `users->id` |
| permRoleIds | Array | NO | 有权角色的 ID 数组 `["1","2"]` |

*将拥有权限的角色 ID 和需要确认的用户 ID 传参，该功能会判断用户名下所有角色是否拥有授权角色。*

## 判断用户对话权限

```php
PermissionUtility::checkUserConversationPerm($receiveUserId, $authUserId, $langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| receiveUserId | Number | YES | 收信人 `users->id` |
| authUserId | Number | YES | 发信人 `users->id` |
| langTag | String | NO | 语言标签，可不传，不传则使用默认语言 |

::: details 查看结果
- 有权则输出为 `0`
- 无权则输出对应的 [Error Code](https://docs.fresns.com/zh-hans/clients/reference/error-codes.html)
:::

## 判断用户是否为小组管理员

```php
PermissionUtility::checkUserGroupAdmin($groupId, $userId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| groupId | Number | YES | `groups->id` |
| userId | Number | YES | `users->id` |

## 判断用户是否有小组发表权限

```php
PermissionUtility::checkUserGroupPublishPerm($groupId, $permissions, $userId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| groupId | Number | YES | `groups->id` |
| permissions | Array | YES | `groups->permissions` |
| userId | Number | YES | `users->id` |

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
PermissionUtility::checkPostAuth($postId, $userId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| postId | Number | YES | `posts->id` |
| userId | Number | YES | `users->id` |

*对需要授权的帖子，判断当前用户是否符合授权要求*

## 判断帖子是否可以评论

```php
PermissionUtility::checkPostCommentPerm($pidOrPostId, $userId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| pidOrPostId | string | NO | `posts->id` |
| userId | Number | NO | `users->id` |

## 判断内容编辑状态

```php
PermissionUtility::checkContentEditPerm($createdDatetime, $editTimeConfig, $timezone, $langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| createdDatetime | Carbon | YES | `posts->created_at` 或 `comments->created_at` |
| editTimeConfig | Number | YES | `post_edit_time_limit` 或 `comment_edit_time_limit` |
| timezone | String | NO | UTC 时区，可不传，不传则使用数据库时区 |
| langTag | String | NO | 语言标签，可不传，不传则使用默认语言 |

## 判断扩展权限

```php
PermissionUtility::checkExtendPerm($fskey, $usageType, $groupId, $userId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| fskey | String | YES | 插件 Fskey |
| usageType | Number | YES | [app_usages->usage_type](../../database/apps/app-usages.md) |
| groupId | Number | NO | 小组 id `groups->id` |
| userId | Number | NO | 用户 id `users->id` |
