# Manage

## getPortalContent

```php
\FresnsCmdWord::plugin($fskey)->getPortalContent($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| platformId | Number | **required** | Platform ID (Key value of the [platforms](../../database/dictionary/platforms.md) key name in the configuration table) |
| langTag | String | *optional* | Language tag, if not provided, the default language will be used |

## updatePortalContent

```php
\FresnsCmdWord::plugin($fskey)->updatePortalContent($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| platformId | Number | **required** | Platform ID (Key value of the [platforms](../../database/dictionary/platforms.md) key name in the configuration table) |
| langTag | String | *optional* | Language tag, if not provided, the default language will be used |
| content | String | *optional* | Leave blank to update to null |

## checkExtendPerm

```php
\FresnsCmdWord::plugin($fskey)->checkExtendPerm($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fskey | String | **required** | Plugin Fskey |
| type | Number | **required** | [plugin_usages->usage_type](../../database/plugins/plugin-usages.md) |
| uid | Number | *optional* | If you don't pass it on, you're a guest. |
| gid | String | *optional* | Passed values indicate extended functions for the group |
