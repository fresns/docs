# 管理功能

## 获取门户内容

```php
\FresnsCmdWord::plugin('Fresns')->getPortalContent($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| platformId | Number | YES | 平台编号（配置表 [platforms](../../database/dictionary/platforms.md) 键名的键值） |
| langTag | String | NO | 语言标签，可不传，仅对多语言配置有效。<br>如果是多语言配置，不传则输出默认语言值。 |

## 更新门户内容

```php
\FresnsCmdWord::plugin('Fresns')->updatePortalContent($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| platformId | Number | YES | 平台编号（配置表 [platforms](../../database/dictionary/platforms.md) 键名的键值） |
| langTag | String | NO | 语言标签，可不传，仅对多语言配置有效。<br>如果是多语言配置，不传则输出默认语言值。 |
| content | String | NO | 留空则更新为空 |

## 检测扩展使用权限

```php
\FresnsCmdWord::plugin('Fresns')->checkExtendPerm($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| fskey | String | YES | 插件 Fskey |
| type | Number | YES | [app_usages->usage_type](../../database/apps/app-usages.md) |
| uid | Number | NO | 不传则表示身份为游客 |
| gid | String | NO | 传值表示为小组扩展功能 |
