# Numbered Description

## Content Type

| Number | Description | Table Name | Model `const` constant definition |
| --- | --- | --- | --- |
| 1 | User | users | `TYPE_USER` |
| 2 | Group | groups | `TYPE_GROUP` |
| 3 | Hashtag | hashtags | `TYPE_HASHTAG` |
| 4 | Geotag | geotags | `TYPE_GEOTAG` |
| 5 | Post | posts | `TYPE_POST` |
| 6 | Comment | comments | `TYPE_COMMENT` |
| 7 | Post Log | post_logs | `TYPE_POST_LOG` |
| 8 | Comment Log | comment_logs | `TYPE_COMMENT_LOG` |
| 9 | Conversation | conversations | `TYPE_CONVERSATION` |

## File Type

| Number | Description | Data table name and column | Model `const` constant definition |
| --- | --- | --- | --- |
| 1 | Image | files->type | `TYPE_IMAGE` |
| 2 | Video | files->type | `TYPE_VIDEO` |
| 3 | Audio | files->type | `TYPE_AUDIO` |
| 4 | Document | files->type | `TYPE_DOCUMENT` |

## Type of File Usage

| Number | Description | Scenes |
| --- | --- | --- |
| 1 | Other / Unknown uses |  |
| 2 | System Configuration | Pictures of the various configurations of the control panel |
| 3 | Stickers |  |
| 4 | User Profile | User avatar, banner, decorate |
| 5 | Conversations | Files sent in conversation messages |
| 6 | Posts |  |
| 7 | Comments |  |
| 8 | Extend Content |  |
| 9 | Apps | Plugin, Theme, App |

**Data table name and column**

- `file_usages->usage_type`

**Path rules for file types**

```php
FileHelper::fresnsFileStoragePath($fileType, $usageType);
```
