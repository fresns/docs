# 主键转换 PrimaryHelper

`App\Helpers\PrimaryHelper`

## 获取数据模型

```php
PrimaryHelper::fresnsModelByFsid($modelName, $fsid);

PrimaryHelper::fresnsModelById($modelName, $id);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| modelName | String | YES | 模型名 |
| fsid | Number / String | YES | 字段值，比如 aid 值 |

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
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| tableName | String | YES | 表名 |
| tableKey | String | YES | 字段值，比如 aid 值 |

- `configs`->`item_key`
- `accounts`->`aid`
- `users`->`uid`或者`username`
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
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | String | NO | `accounts->aid` |
| uidOrUsername | Number / String | NO | `users->uid` 或者 `users->username` |

## 获取用户主键 ID

```php
PrimaryHelper::fresnsUserIdByUidOrUsername($uidOrUsername);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uidOrUsername | Number / String | NO | `users->uid` 或者 `users->username` |

## 获取小组主键 ID

```php
PrimaryHelper::fresnsGroupIdByGid($gid);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| gid | String | NO | `groups->gid` |

## 获取小组主键 ID (基于内容 fsid)

```php
PrimaryHelper::fresnsGroupIdByContentFsid($type, $fsid);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | `post` 或 `comment` |
| fsid | String | NO | `posts->pid` 或 `comments->cid` |

## 获取话题主键 ID

```php
PrimaryHelper::fresnsHashtagIdByHid($hid);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| hid | String | NO | `hashtags->slug` |

## 获取帖子主键 ID

```php
PrimaryHelper::fresnsPostIdByPid($pid);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| pid | String | NO | `posts->pid` |

## 获取评论主键 ID

```php
PrimaryHelper::fresnsCommentIdByCid($cid);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| cid | String | NO | `comments->cid` |

## 获取文件主键 ID

```php
PrimaryHelper::fresnsFileIdByFid($fid);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| fid | String | NO | `files->fid` |

## 获取扩展主键 ID

```php
PrimaryHelper::fresnsExtendIdByEid($eid);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| eid | String | NO | `extends->eid` |
