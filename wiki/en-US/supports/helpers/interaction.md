# InteractionHelper

`App\Helpers\InteractionHelper`

## 获取数据计数

```php
InteractionHelper::fresnsOverview();
```

## 获取角色信息和权限参数

```php
InteractionHelper::fresnsRoleInteraction($roleId, $langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| roleId | Number | Yes | 角色 ID |
| langTag | String | NO | 语言标签，不传则使用默认语言 |

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
