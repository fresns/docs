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
| fsid | Number / String | **required** | Field value, e.g. aid value |

## Get Primary ID

```php
PrimaryHelper::fresnsPrimaryId($tableName, $tableKey);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| tableName | String | **required** | Table Name |
| tableKey | String | **required** | Primary Key Name<br>For example, the aid value |

## Get Account Primary ID

```php
PrimaryHelper::fresnsAccountIdByAid($aid);

PrimaryHelper::fresnsAccountIdByUidOrUsername($uidOrUsername);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | *optional* | `accounts->aid` |
| uidOrUsername | Number / String | *optional* | `users->uid` or `users->username` |

## Get User Primary ID

```php
PrimaryHelper::fresnsUserIdByUidOrUsername($uidOrUsername);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uidOrUsername | Number / String | *optional* | `users->uid` or `users->username` |

## Get Group Primary ID

```php
PrimaryHelper::fresnsGroupIdByGid($gid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| gid | String | *optional* | `groups->gid` |

## Get Group Primary ID by ContentFsid

```php
PrimaryHelper::fresnsGroupIdByContentFsid($type, $fsid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | `post` or `comment` |
| fsid | String | *optional* | `posts->pid` or `comments->cid` |

## Get Hashtag Primary ID

```php
PrimaryHelper::fresnsHashtagIdByHid($hid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| hid | String | *optional* | `hashtags->slug` |

## Get Post Primary ID

```php
PrimaryHelper::fresnsPostIdByPid($pid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| pid | String | *optional* | `posts->pid` |

## Get Comment Primary ID

```php
PrimaryHelper::fresnsCommentIdByCid($cid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| cid | String | *optional* | `comments->cid` |

## Get File Primary ID

```php
PrimaryHelper::fresnsFileIdByFid($fid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fid | String | *optional* | `files->fid` |

## Get Extend Primary ID

```php
PrimaryHelper::fresnsExtendIdByEid($eid);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| eid | String | *optional* | `extends->eid` |
