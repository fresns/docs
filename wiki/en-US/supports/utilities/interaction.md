# InteractionUtility

`App\Utilities\InteractionUtility`

## Check if Liked
```php
InteractionUtility::checkUserLike($likeType, $likeId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| likeType | Number | **required** | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| likeId | Number | **required** | Primary id of the corresponding type |
| userId | Number | **required** | `users->id` |

- 检查用户 `userId` 是否对 `likeType` 对象的 `likeId` 操作了点赞。

## Check if Disliked
```php
InteractionUtility::checkUserDislike($dislikeType, $dislikeId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| dislikeType | Number | **required** | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| dislikeId | Number | **required** | Primary id of the corresponding type |
| userId | Number | **required** | `users->id` |

- 检查用户 `userId` 是否对 `dislikeType` 对象的 `dislikeId` 操作了点踩。

## Check if Followed
```php
InteractionUtility::checkUserFollow($followType, $followId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| followType | Number | **required** | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| followId | Number | **required** | Primary id of the corresponding type |
| userId | Number | **required** | `users->id` |

- 检查用户 `userId` 是否对 `followType` 对象的 `followId` 操作了关注。

## Check if Blocked
```php
InteractionUtility::checkUserBlock($blockType, $blockId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| blockType | Number | **required** | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| blockId | Number | **required** | Primary id of the corresponding type |
| userId | Number | **required** | `users->id` |

- 检查用户 `userId` 是否对 `blockType` 对象的 `blockId` 操作了屏蔽。

## Check All Statuses
```php
InteractionUtility::checkInteractionStatus($markType, $markId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| markType | Number | **required** | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| markId | Number | **required** | Primary id of the corresponding type |
| userId | Number | **required** | `users->id` |

- 检查用户 `userId` 是否对 `markType` 对象的 `markId` 操作。
- 输出是否点赞、点踩、关注、屏蔽。
- 参数名 `likeStatus`,`dislikeStatus`,`followStatus`,`blockStatus`

## Mark Like Action
```php
InteractionUtility::markUserLike($userId, $likeType, $likeId);
```

## Mark Dislike Action
```php
InteractionUtility::markUserDislike($userId, $dislikeType, $dislikeId);
```

## Mark Follow Action
```php
InteractionUtility::markUserFollow($userId, $followType, $followId);
```

## Mark Block Action
```php
InteractionUtility::markUserBlock($userId, $blockType, $blockId);
```

## Mark Content Sticky
```php
InteractionUtility::markContentSticky($type, $id, $stickyState);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | `post` or `comment` |
| id | Number | **required** | Primary id of the corresponding type |
| stickyState | Number | **required** | Post: 1.No / 2.Group State / 3.Global Sticky<br>Comment: 0.No / 1.Yes |

## Mark Content Digest
```php
InteractionUtility::markContentDigest($type, $id, $digestState);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | `post` or `comment` |
| id | Number | **required** | Primary id of the corresponding type |
| digestState | Number | **required** | 1.No / 2.General Digest / 3.Advanced Digest |

## Mark Behavior Statistics Count
```php
InteractionUtility::markStats($userId, $interactionType, $markType, $markId, $actionType);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | **required** | `users->id` |
| interactionType | String | **required** | `like`, `dislike`, `follow`, `block` |
| markType | Number | **required** | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| markId | Number | **required** | Primary id of the corresponding type |
| actionType | String | **required** | `increment` or `decrement` |

## Publish Behavior Statistics Count
```php
InteractionUtility::publishStats($type, $id, $actionType);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | `post` or `comment` |
| id | Number | **required** | Primary id of the corresponding type |
| actionType | String | **required** | `increment` or `decrement` |

## Digest Behavior Statistics Count
```php
InteractionUtility::digestStats($type, $id, $actionType);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | `post` or `comment` |
| id | Number | **required** | Primary id of the corresponding type |
| actionType | String | **required** | `increment` or `decrement` |

## Get Followed Object ID Array
```php
InteractionUtility::getFollowIdArr($type, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| userId | Number | **required** | `users->id` |

## Get Blocked Object ID Array
```php
InteractionUtility::getBlockIdArr($type, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| userId | Number | **required** | `users->id` |

## Get Private Group ID Array
```php
InteractionUtility::getPrivateGroupIdArr();
```
