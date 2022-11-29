# 互动配置 InteractionHelper

`App\Helpers\InteractionHelper`

## 获取用户交互配置

```php
InteractionHelper::fresnsUserInteraction($langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| langTag | String | NO | 语言标签，不传则使用默认语言 |

## 获取小组交互配置

```php
InteractionHelper::fresnsGroupInteraction($langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| langTag | String | NO | 语言标签，不传则使用默认语言 |

## 获取话题交互配置

```php
InteractionHelper::fresnsHashtagInteraction($langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| langTag | String | NO | 语言标签，不传则使用默认语言 |

## 获取帖子交互配置

```php
InteractionHelper::fresnsPostInteraction($langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| langTag | String | NO | 语言标签，不传则使用默认语言 |

## 获取评论交互配置

```php
InteractionHelper::fresnsCommentInteraction($langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| langTag | String | NO | 语言标签，不传则使用默认语言 |
