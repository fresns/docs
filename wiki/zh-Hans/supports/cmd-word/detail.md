# 详情功能

## 获取账号详情

```php
\FresnsCmdWord::plugin('Fresns')->getAccountDetail($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | String | YES |  |
| langTag | String | NO | 文本指定语言 |
| timezone | String | NO | 日期时间指定 [UTC 时区](../../database/dictionary/timezone.md) |

## 获取用户详情

```php
\FresnsCmdWord::plugin('Fresns')->getUserDetail($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uidOrUsername | String | YES |  |
| langTag | String | NO | 文本指定语言 |
| timezone | String | NO | 日期时间指定 [UTC 时区](../../database/dictionary/timezone.md) |
| authUidOrUsername | String | NO | 凭该用户查询对 `uidOrUsername` 的互动状态（点赞、点踩、关注、屏蔽） |

## 获取小组详情

```php
\FresnsCmdWord::plugin('Fresns')->getGroupDetail($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| gid | String | YES |  |
| langTag | String | NO | 文本指定语言 |
| timezone | String | NO | 日期时间指定 [UTC 时区](../../database/dictionary/timezone.md) |
| authUidOrUsername | String | NO | 凭该用户查询对 `gid` 的互动状态（点赞、点踩、关注、屏蔽） |

## 获取话题详情

```php
\FresnsCmdWord::plugin('Fresns')->getGroupDetail($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| hid | String | YES |  |
| langTag | String | NO | 文本指定语言 |
| timezone | String | NO | 日期时间指定 [UTC 时区](../../database/dictionary/timezone.md) |
| authUidOrUsername | String | NO | 凭该用户查询对 `hid` 的互动状态（点赞、点踩、关注、屏蔽） |

## 获取帖子详情

```php
\FresnsCmdWord::plugin('Fresns')->getGroupDetail($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| pid | String | YES |  |
| langTag | String | NO | 文本指定语言 |
| timezone | String | NO | 日期时间指定 [UTC 时区](../../database/dictionary/timezone.md) |
| authUidOrUsername | String | NO | 凭该用户查询对 `pid` 的互动状态（点赞、点踩、关注、屏蔽） |
| type | String | NO | 详情类型 `list` 或 `detail`，不传则默认为 `detail` |
| outputPreviewComments | Boolean | NO | 详情类型为 `list` 专用，是否输出预览评论列表和点赞用户列表 |
| mapId | Number | NO | 如果帖子有位置信息，传参后，将计算两者之间的距离 |
| mapLng | Numeric | NO | 如果帖子有位置信息，传参后，将计算两者之间的距离 |
| mapLat | Numeric | NO | 如果帖子有位置信息，传参后，将计算两者之间的距离 |

## 获取评论详情

```php
\FresnsCmdWord::plugin('Fresns')->getGroupDetail($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| cid | String | YES |  |
| langTag | String | NO | 文本指定语言 |
| timezone | String | NO | 日期时间指定 [UTC 时区](../../database/dictionary/timezone.md) |
| authUidOrUsername | String | NO | 凭该用户查询对 `pid` 的互动状态（点赞、点踩、关注、屏蔽） |
| type | String | NO | 详情类型 `list` 或 `detail`，不传则默认为 `detail` |
| outputSubComments | Boolean | NO | 详情类型为 `list` 专用，是否输出预览子级评论列表 |
| outputReplyToPost | Boolean | NO | 是否输出所属帖子详情 |
| outputReplyToComment | Boolean | NO | 如果是子级评论，是否输出所属帖子详情 |
| mapId | Number | NO | 如果帖子有位置信息，传参后，将计算两者之间的距离 |
| mapLng | Numeric | NO | 如果帖子有位置信息，传参后，将计算两者之间的距离 |
| mapLat | Numeric | NO | 如果帖子有位置信息，传参后，将计算两者之间的距离 |
