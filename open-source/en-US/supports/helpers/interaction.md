# InteractionHelper

`App\Helpers\InteractionHelper`

## Get Data Count

```php
InteractionHelper::fresnsOverview();
```

## Get Role Info and Permission Parameters

```php
InteractionHelper::fresnsRoleInfo($roleId, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| roleId | Number | **required** | Role ID |
| langTag | String | *optional* | Language tag, if not provided, the default language will be used |

## Get User Interaction Configuration

```php
InteractionHelper::fresnsUserInteraction($langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | *optional* | If empty, the default language is used. |

## Get Group Interaction Configuration

```php
InteractionHelper::fresnsGroupInteraction($langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | *optional* | If empty, the default language is used. |

## Get Hashtag Interaction Configuration

```php
InteractionHelper::fresnsHashtagInteraction($langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | *optional* | If empty, the default language is used. |

## Get Post Interaction Configuration

```php
InteractionHelper::fresnsPostInteraction($langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | *optional* | If empty, the default language is used. |

## Get Comment Interaction Configuration

```php
InteractionHelper::fresnsCommentInteraction($langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | *optional* | If empty, the default language is used. |

## Get Substitution User Information

```php
InteractionHelper::fresnsUserSubstitutionProfile($type);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | *optional* | `anonymous` or `deactivate` |
