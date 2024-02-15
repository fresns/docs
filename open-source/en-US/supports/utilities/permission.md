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

- If the main role has an expiration time and has expired, output the inherited role.
- If there is no inherited role (or the inherited ID cannot find a role), use the role specified by the `default_role` key value in the configuration table.
- If the configuration table key value is empty (or the role cannot be found), output `null`.

## Get User All Roles

```php
PermissionUtility::getUserRoles($userId, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | **required** | `users->id` |
| langTag | String | *optional* | What language is the role name in |

- Only output the list of roles within the valid period, including the main role.

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

## Determine User Role Permissions

```php
PermissionUtility::checkUserRolePerm($userId, $permRoleIds);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | **required** | `users->id` |
| permRoleIds | Array | **required** | ID array of authorised roles `["1","2"]` |

*Pass the role IDs with permissions and the user IDs to be confirmed as parameters. This function will check if all roles under the username have authorized roles.*

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
- If authorized, the output will be `0`
- If unauthorized, output the corresponding [Error Code](https://docs.fresns.com/clients/reference/error-codes.html)
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
PermissionUtility::checkPostAuth($postId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| postId | Number | **required** | `posts->id` |
| userId | Number | **required** | `users->id` |

*For posts that require authorization, determine if the current user meets the authorization requirements*

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
PermissionUtility::checkContentEditPerm($createdDatetime, $editTimeConfig, $timezone, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| createdDatetime | Carbon | **required** | `posts->created_at` or `comments->created_at` |
| editTimeConfig | Number | **required** | `post_edit_time_limit` or `comment_edit_time_limit` |
| timezone | String | *optional* | If empty, the database time zone is used. |
| langTag | String | *optional* | If empty, the default language is used. |

## Determine Extension Permissions

```php
PermissionUtility::checkExtendPerm($fskey, $usageType, $groupId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fskey | String | **required** | Plugin Fskey |
| usageType | Number | **required** | [app_usages->usage_type](../../database/apps/app-usages.md) |
| groupId | Number | *optional* | Group ID `groups->id` |
| userId | Number | *optional* | User ID `users->id` |
