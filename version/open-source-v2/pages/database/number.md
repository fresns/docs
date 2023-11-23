# Numbered Description

## Content Type

| Number | Description | Table Name | Model `const` constant definition |
| --- | --- | --- | --- |
| 1 | User | users | `TYPE_USER` |
| 2 | Group | groups | `TYPE_GROUP` |
| 3 | Hashtag | hashtags | `TYPE_HASHTAG` |
| 4 | Post | posts | `TYPE_POST` |
| 5 | Comment | comments | `TYPE_COMMENT` |
| 6 | Post Log | post_logs | `TYPE_POST_LOG` |
| 7 | Comment Log | comment_logs | `TYPE_COMMENT_LOG` |
| 8 | Extend Content | extends | `TYPE_EXTEND` |

## File Type

| Number | Description | Data table name and column | Model `const` constant definition |
| --- | --- | --- | --- |
| 1 | Image | files->type | `TYPE_IMAGE` |
| 2 | Video | files->type | `TYPE_VIDEO` |
| 3 | Audio | files->type | `TYPE_AUDIO` |
| 4 | Document | files->type | `TYPE_DOCUMENT` |

## Type of File Usage

| Number | Description | Data table name and column | Scenes |
| --- | --- | --- | --- |
| 1 | Other / Unknown uses | file_usages->usage_type |  |
| 2 | System Configuration | file_usages->usage_type | Pictures of the various configurations of the control panel |
| 3 | Operation Configuration | file_usages->usage_type | Pictures configured in operation<br>Decorate, icons, copywriting |
| 4 | Stickers | file_usages->usage_type |  |
| 5 | User Profile | file_usages->usage_type | User avatar, banner, decorate |
| 6 | Conversations | file_usages->usage_type | Files sent in conversation messages |
| 7 | Posts | file_usages->usage_type |  |
| 8 | Comments | file_usages->usage_type |  |
| 9 | Extend Content | file_usages->usage_type |  |
| 10 | Plugins | file_usages->usage_type |  |

**Path rules for file types**

```php
FileHelper::fresnsFileStoragePath($fileType, $usageType);
```
