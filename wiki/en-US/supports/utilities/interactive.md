# InteractiveUtility

`App\Utilities\InteractiveUtility`

## 检查是否点赞
```php
InteractiveUtility::checkUserLike($likeType, $likeId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| likeType | Number | **required** | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| likeId | Number | **required** | 对应类型的主键 ID |
| userId | Number | **required** | `users > id` |

- 检查用户 `userId` 是否对 `likeType` 对象的 `likeId` 操作了点赞。

## 检查是否点踩
```php
InteractiveUtility::checkUserDislike($dislikeType, $dislikeId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| dislikeType | Number | **required** | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| dislikeId | Number | **required** | 对应类型的主键 ID |
| userId | Number | **required** | `users > id` |

- 检查用户 `userId` 是否对 `dislikeType` 对象的 `dislikeId` 操作了点踩。

## 检查是否关注
```php
InteractiveUtility::checkUserFollow($followType, $followId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| followType | Number | **required** | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| followId | Number | **required** | 对应类型的主键 ID |
| userId | Number | **required** | `users > id` |

- 检查用户 `userId` 是否对 `followType` 对象的 `followId` 操作了关注。

## 检查是否屏蔽
```php
InteractiveUtility::checkUserBlock($blockType, $blockId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| blockType | Number | **required** | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| blockId | Number | **required** | 对应类型的主键 ID |
| userId | Number | **required** | `users > id` |

- 检查用户 `userId` 是否对 `blockType` 对象的 `blockId` 操作了屏蔽。

## 检查全部状态
```php
InteractiveUtility::checkInteractiveStatus($markType, $markId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| markType | Number | **required** | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| markId | Number | **required** | 对应类型的主键 ID |
| userId | Number | **required** | `users > id` |

- 检查用户 `userId` 是否对 `markType` 对象的 `markId` 操作。
- 输出是否点赞、点踩、关注、屏蔽。
- 参数名 `likeStatus`,`dislikeStatus`,`followStatus`,`blockStatus`

## 检查是否关注了我
```php
InteractiveUtility::checkUserFollowMe($userId, $myUserId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | **required** | `users > id` |
| myUserId | Number | **required** | `users > id` |

- 检查用户 `userId` 是否关注了我 `myUserId`

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
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | `post` 或 `comment` |
| id | Number | **required** | 对应类型的主键 ID |
| stickyState | Number | **required** | 帖子: 1.否 / 2.小组页置顶 / 3.全局置顶<br>评论: 0.否 / 1.是 |

## 操作内容精华
```php
InteractiveUtility::markContentDigest($type, $id, $digestState);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | `post` 或 `comment` |
| id | Number | **required** | 对应类型的主键 ID |
| digestState | Number | **required** | 1.否 / 2.普通精华 / 3.高级精华 |

## 操作行为统计记数
```php
InteractiveUtility::markStats($userId, $interactiveType, $markType, $markId, $actionType);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | **required** | `users > id` |
| interactiveType | String | **required** | `like`, `dislike`, `follow`, `block` |
| markType | Number | **required** | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| markId | Number | **required** | 对应类型的主键 ID |
| actionType | String | **required** | `increment` 或 `decrement` |

## 发表行为统计记数
```php
InteractiveUtility::publishStats($type, $id, $actionType);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | `post` 或 `comment` |
| id | Number | **required** | 对应类型的主键 ID |
| actionType | String | **required** | `increment` 或 `decrement` |

## 精华行为统计记数
```php
InteractiveUtility::digestStats($type, $id, $actionType);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | `post` 或 `comment` |
| id | Number | **required** | 对应类型的主键 ID |
| actionType | String | **required** | `increment` 或 `decrement` |