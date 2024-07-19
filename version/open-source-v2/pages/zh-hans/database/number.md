# 编号说明

## 内容类型

| 编号 | 说明 | 主表名 | 模型 const 常量定义 |
| --- | --- | --- | --- |
| 1 | 用户 | users | `TYPE_USER` |
| 2 | 小组 | groups | `TYPE_GROUP` |
| 3 | 话题 | hashtags | `TYPE_HASHTAG` |
| 4 | 帖子 | posts | `TYPE_POST` |
| 5 | 评论 | comments | `TYPE_COMMENT` |
| 6 | 帖子日志 | post_logs | `TYPE_POST_LOG` |
| 7 | 评论日志 | comment_logs | `TYPE_COMMENT_LOG` |
| 8 | 扩展内容 | extends | `TYPE_EXTEND` |

## 文件类型

| 编号 | 说明 | 关联字段 | 模型 const 常量定义 |
| --- | --- | --- | --- |
| 1 | 图片 | files->type | `TYPE_IMAGE` |
| 2 | 视频 | files->type | `TYPE_VIDEO` |
| 3 | 音频 | files->type | `TYPE_AUDIO` |
| 4 | 文档 | files->type | `TYPE_DOCUMENT` |

## 文件用途类型

| 编号 | 说明 | 关联字段 | 场景 |
| --- | --- | --- | --- |
| 1 | 其他/未知用途 | file_usages->usage_type |  |
| 2 | 系统配置 | file_usages->usage_type | 控制面板各种配置的图 |
| 3 | 运营配置 | file_usages->usage_type | 运营中配置的图<br>用户挂件、图标、文案 |
| 4 | 表情图 | file_usages->usage_type |  |
| 5 | 用户资料图 | file_usages->usage_type | 头像、背景条幅、挂件等图 |
| 6 | 对话 | file_usages->usage_type | 私信对话中发送的文件 |
| 7 | 帖子 | file_usages->usage_type |  |
| 8 | 评论 | file_usages->usage_type |  |
| 9 | 扩展内容 | file_usages->usage_type |  |
| 10 | 插件文件 | file_usages->usage_type |  |

**文件类型的路径规则**

```php
FileHelper::fresnsFileStoragePath($fileType, $usageType);
```
