# PrimaryHelper

`App\Helpers\PrimaryHelper`

## 获取数据模型

```php
PrimaryHelper::fresnsModelByFsid($modelName, $fsid);

PrimaryHelper::fresnsModelById($modelName, $id);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| modelName | String | **required** | Model name |
| fsid | String | **required** | Field value, e.g. aid value |

**模型名**

- `account`
- `user`
- `group`
- `hashtag`
- `post`
- `comment`
- `file`
- `extend`
- `archive`

## 获取主键 ID

```php
PrimaryHelper::fresnsPrimaryId($tableName, $tableKey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| tableName | String | **required** | Table Name |
| tableKey | String | **required** | Primary Key Name<br>For example, the aid value |

- `configs`->`item_key`
- `accounts`->`aid`
- `users`->`uid` or `username`
- `posts`->`pid`
- `comments`->`cid`
- `extends`->`eid`
- `groups`->`gid`
- `hashtags`->`slug`

## 获取账号主键 ID

```php
PrimaryHelper::fresnsAccountIdByAid($aid);

PrimaryHelper::fresnsAccountIdByUidOrUsername($uidOrUsername);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | `accounts->aid` |
| uidOrUsername | String | **required** | `users->uid` or `users->username` |

## 获取用户主键 ID

```php
PrimaryHelper::fresnsUserIdByUidOrUsername($uidOrUsername);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uidOrUsername | String | **required** | `users->uid` or `users->username` |

## 获取小组主键 ID

```php
PrimaryHelper::fresnsGroupIdByGid($gid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| gid | String | **required** | `groups->gid` |

## 获取话题主键 ID

```php
PrimaryHelper::fresnsHashtagIdByHid($hid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| hid | String | **required** | `hashtags->slug` |

## 获取帖子主键 ID

```php
PrimaryHelper::fresnsPostIdByPid($pid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| pid | String | **required** | `posts->pid` |

## 获取评论主键 ID

```php
PrimaryHelper::fresnsCommentIdByCid($cid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| cid | String | **required** | `comments->cid` |

## 获取文件主键 ID

```php
PrimaryHelper::fresnsFileIdByFid($fid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fid | String | **required** | `files->fid` |

## 获取扩展主键 ID

```php
PrimaryHelper::fresnsExtendIdByEid($eid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| eid | String | **required** | `extends->eid` |
