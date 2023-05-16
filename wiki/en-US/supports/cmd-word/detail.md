# Detail Command Word

## getAccountDetail

```php
\FresnsCmdWord::plugin('Fresns')->getAccountDetail($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** |  |
| langTag | String | *optional* | Text Specified Language |
| timezone | String | *optional* | Date time specified in [UTC timezone](../../database/dictionary/timezone.md) |

## getUserDetail

```php
\FresnsCmdWord::plugin('Fresns')->getUserDetail($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uidOrUsername | String | **required** |  |
| langTag | String | *optional* | Text Specified Language |
| timezone | String | *optional* | Date time specified in [UTC timezone](../../database/dictionary/timezone.md) |
| authUidOrUsername | String | *optional* | Interaction status (like, dislike, follow, block) for `uidOrUsername` with this user request |

## getGroupDetail

```php
\FresnsCmdWord::plugin('Fresns')->getGroupDetail($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| gid | String | **required** |  |
| langTag | String | *optional* | Text Specified Language |
| timezone | String | *optional* | Date time specified in [UTC timezone](../../database/dictionary/timezone.md) |
| authUidOrUsername | String | *optional* | Interaction status (like, dislike, follow, block) for `gid` with this user request |

## getGroupDetail

```php
\FresnsCmdWord::plugin('Fresns')->getGroupDetail($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| hid | String | **required** |  |
| langTag | String | *optional* | Text Specified Language |
| timezone | String | *optional* | Date time specified in [UTC timezone](../../database/dictionary/timezone.md) |
| authUidOrUsername | String | *optional* | Interaction status (like, dislike, follow, block) for `hid` with this user request |

## getGroupDetail

```php
\FresnsCmdWord::plugin('Fresns')->getGroupDetail($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| pid | String | **required** |  |
| langTag | String | *optional* | Text Specified Language |
| timezone | String | *optional* | Date time specified in [UTC timezone](../../database/dictionary/timezone.md) |
| authUidOrUsername | String | *optional* | Interaction status (like, dislike, follow, block) for `pid` with this user request |
| type | String | *optional* | 详情类型 `list` 或 `detail`，不传则默认为 `detail` |
| outputPreviewComments | Boolean | *optional* | Exclusive for `list` detail type, whether to output the preview comment list and liked user list |
| mapId | Number | *optional* | If the post has location information, it will calculate the distance between them when this parameter is passed |
| mapLng | Numeric | *optional* | If the post has location information, it will calculate the distance between them when this parameter is passed |
| mapLat | Numeric | *optional* | If the post has location information, it will calculate the distance between them when this parameter is passed |

## getGroupDetail

```php
\FresnsCmdWord::plugin('Fresns')->getGroupDetail($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| cid | String | **required** |  |
| langTag | String | *optional* | Text Specified Language |
| timezone | String | *optional* | Date time specified in [UTC timezone](../../database/dictionary/timezone.md) |
| authUidOrUsername | String | *optional* | Interaction status (like, dislike, follow, block) for `cid` with this user request |
| type | String | *optional* | Detail type `list` or `detail`, default to `detail` if not provided |
| outputSubComments | Boolean | *optional* | Exclusive for `list` detail type, whether to output the preview sub-comment list |
| outputReplyToPost | Boolean | *optional* | Whether to output the details of the related post |
| outputReplyToComment | Boolean | *optional* | If it is a sub-comment, whether to output the details of the related post |
| mapId | Number | *optional* | If the post has location information, it will calculate the distance between them when this parameter is passed |
| mapLng | Numeric | *optional* | If the post has location information, it will calculate the distance between them when this parameter is passed |
| mapLat | Numeric | *optional* | If the post has location information, it will calculate the distance between them when this parameter is passed |
