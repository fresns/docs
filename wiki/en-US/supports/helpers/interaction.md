# InteractionHelper

`App\Helpers\InteractionHelper`

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
