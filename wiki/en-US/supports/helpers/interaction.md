# InteractionHelper

`App\Helpers\InteractionHelper`

## 获取数据计数

```php
InteractionHelper::fresnsOverview();
```

## 获取角色信息和权限参数

```php
InteractionHelper::fresnsRoleInfo($roleId, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| roleId | Number | Yes | Role ID |
| langTag | String | *optional* | Language tag, if not provided, the default language will be used |

## 获取用户交互配置

```php
InteractionHelper::fresnsUserInteraction($langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | *optional* | If empty, the default language is used. |

## 获取小组交互配置

```php
InteractionHelper::fresnsGroupInteraction($langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | *optional* | If empty, the default language is used. |

## 获取话题交互配置

```php
InteractionHelper::fresnsHashtagInteraction($langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | *optional* | If empty, the default language is used. |

## 获取帖子交互配置

```php
InteractionHelper::fresnsPostInteraction($langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | *optional* | If empty, the default language is used. |

## 获取评论交互配置

```php
InteractionHelper::fresnsCommentInteraction($langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | *optional* | If empty, the default language is used. |

## 获取匿名用户信息

```php
InteractionHelper::fresnsUserAnonymousProfile();
```
