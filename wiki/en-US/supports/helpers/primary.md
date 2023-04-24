# PrimaryHelper

`App\Helpers\PrimaryHelper`

## Get Data Model

```php
PrimaryHelper::fresnsModelByFsid($modelName, $fsid);

PrimaryHelper::fresnsModelById($modelName, $id);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| modelName | String | **required** | Model name |
| fsid | String | **required** | Field value, e.g. aid value |

**Model Name**

- `account`
- `user`
- `group`
- `hashtag`
- `post`
- `comment`
- `file`
- `extend`
- `archive`

## Get Primary ID

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

## Get Account Primary ID

```php
PrimaryHelper::fresnsAccountIdByAid($aid);

PrimaryHelper::fresnsAccountIdByUidOrUsername($uidOrUsername);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | `accounts->aid` |
| uidOrUsername | String | **required** | `users->uid` or `users->username` |

## Get User Primary ID

```php
PrimaryHelper::fresnsUserIdByUidOrUsername($uidOrUsername);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uidOrUsername | String | **required** | `users->uid` or `users->username` |

## Get Group Primary ID

```php
PrimaryHelper::fresnsGroupIdByGid($gid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| gid | String | **required** | `groups->gid` |

## Get Hashtag Primary ID

```php
PrimaryHelper::fresnsHashtagIdByHid($hid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| hid | String | **required** | `hashtags->slug` |

## Get Post Primary ID

```php
PrimaryHelper::fresnsPostIdByPid($pid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| pid | String | **required** | `posts->pid` |

## Get Comment Primary ID

```php
PrimaryHelper::fresnsCommentIdByCid($cid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| cid | String | **required** | `comments->cid` |

## Get File Primary ID

```php
PrimaryHelper::fresnsFileIdByFid($fid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fid | String | **required** | `files->fid` |

## Get Extend Primary ID

```php
PrimaryHelper::fresnsExtendIdByEid($eid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| eid | String | **required** | `extends->eid` |
