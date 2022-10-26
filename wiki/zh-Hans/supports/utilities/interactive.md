# 互动工具 InteractiveUtility

`App\Utilities\InteractiveUtility`

## 检查是否点赞
```php
InteractiveUtility::checkUserLike($likeType, $likeId, $userId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| likeType | Number | YES | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| likeId | Number | YES | 对应类型的主键 ID |
| userId | Number | YES | `users > id` |

- 检查用户 `userId` 是否对 `likeType` 对象的 `likeId` 操作了点赞。

## 检查是否点踩
```php
InteractiveUtility::checkUserDislike($dislikeType, $dislikeId, $userId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| dislikeType | Number | YES | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| dislikeId | Number | YES | 对应类型的主键 ID |
| userId | Number | YES | `users > id` |

- 检查用户 `userId` 是否对 `dislikeType` 对象的 `dislikeId` 操作了点踩。

## 检查是否关注
```php
InteractiveUtility::checkUserFollow($followType, $followId, $userId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| followType | Number | YES | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| followId | Number | YES | 对应类型的主键 ID |
| userId | Number | YES | `users > id` |

- 检查用户 `userId` 是否对 `followType` 对象的 `followId` 操作了关注。

## 检查是否屏蔽
```php
InteractiveUtility::checkUserBlock($blockType, $blockId, $userId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| blockType | Number | YES | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| blockId | Number | YES | 对应类型的主键 ID |
| userId | Number | YES | `users > id` |

- 检查用户 `userId` 是否对 `blockType` 对象的 `blockId` 操作了屏蔽。

## 检查全部状态
```php
InteractiveUtility::checkInteractiveStatus($markType, $markId, $userId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| markType | Number | YES | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| markId | Number | YES | 对应类型的主键 ID |
| userId | Number | YES | `users > id` |

- 检查用户 `userId` 是否对 `markType` 对象的 `markId` 操作。
- 输出是否点赞、点踩、关注、屏蔽。
- 参数名 `likeStatus`,`dislikeStatus`,`followStatus`,`blockStatus`

## 操作点赞
```php
InteractiveUtility::markUserLike($userId, $likeType, $likeId);
```

## 操作点踩
```php
InteractiveUtility::markUserDislike($userId, $dislikeType, $dislikeId);
```

## 操作关注
```php
InteractiveUtility::markUserFollow($userId, $followType, $followId);
```

## 操作屏蔽
```php
InteractiveUtility::markUserBlock($userId, $blockType, $blockId);
```

## 操作内容置顶
```php
InteractiveUtility::markContentSticky($type, $id, $stickyState);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | `post` 或 `comment` |
| id | Number | YES | 对应类型的主键 ID |
| stickyState | Number | YES | 帖子: 1.否 / 2.小组页置顶 / 3.全局置顶<br>评论: 0.否 / 1.是 |

## 操作内容精华
```php
InteractiveUtility::markContentDigest($type, $id, $digestState);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | `post` 或 `comment` |
| id | Number | YES | 对应类型的主键 ID |
| digestState | Number | YES | 1.否 / 2.普通精华 / 3.高级精华 |

## 操作行为统计记数
```php
InteractiveUtility::markStats($userId, $interactiveType, $markType, $markId, $actionType);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| userId | Number | YES | `users > id` |
| interactiveType | String | YES | `like`, `dislike`, `follow`, `block` |
| markType | Number | YES | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| markId | Number | YES | 对应类型的主键 ID |
| actionType | String | YES | `increment` 或 `decrement` |

## 发表行为统计记数
```php
InteractiveUtility::publishStats($type, $id, $actionType);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | `post` 或 `comment` |
| id | Number | YES | 对应类型的主键 ID |
| actionType | String | YES | `increment` 或 `decrement` |

## 精华行为统计记数
```php
InteractiveUtility::digestStats($type, $id, $actionType);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | `post` 或 `comment` |
| id | Number | YES | 对应类型的主键 ID |
| actionType | String | YES | `increment` 或 `decrement` |

## 获取关注对象 ID 数组
```php
InteractiveUtility::getFollowIdArr($type, $userId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| userId | Number | YES | `users > id` |

## 获取屏蔽对象 ID 数组
```php
InteractiveUtility::getBlockIdArr($type, $userId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| userId | Number | YES | `users > id` |

## 获取私有小组 ID 数组
```php
InteractiveUtility::getPrivateGroupIdArr();
```
