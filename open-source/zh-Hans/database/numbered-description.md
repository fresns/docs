# 编号说明

## 内容类型编号

| 编号 | 说明 | 主表名 | 模型 const 常量定义 |
| --- | --- | --- | --- |
| 1 | 用户 | users | `TYPE_USER` |
| 2 | 小组 | groups | `TYPE_GROUP` |
| 3 | 话题 | hashtags | `TYPE_HASHTAG` |
| 4 | 地理 | geotags | `TYPE_GEOTAG` |
| 5 | 帖子 | posts | `TYPE_POST` |
| 6 | 评论 | comments | `TYPE_COMMENT` |
| 7 | 帖子日志 | post_logs | `TYPE_POST_LOG` |
| 8 | 评论日志 | comment_logs | `TYPE_COMMENT_LOG` |
| 9 | 扩展内容 | extends | `TYPE_EXTEND` |
| 10 | 对话 | conversations | `TYPE_CONVERSATION` |

## 文件类型编号

| 编号 | 说明 | 关联字段 | 模型 const 常量定义 |
| --- | --- | --- | --- |
| 1 | 图片 | files->type | `TYPE_IMAGE` |
| 2 | 视频 | files->type | `TYPE_VIDEO` |
| 3 | 音频 | files->type | `TYPE_AUDIO` |
| 4 | 文档 | files->type | `TYPE_DOCUMENT` |

## 文件用途编号

| 编号 | 说明 | 场景 |
| --- | --- | --- |
| 1 | 其他/未知用途 |  |
| 2 | 系统配置 | 控制面板各种配置的图和运营中配置的图 |
| 3 | 表情图 |  |
| 4 | 用户资料图 | 头像、背景条幅、挂件等图 |
| 5 | 对话 | 私信对话中发送的文件 |
| 6 | 帖子 |  |
| 7 | 评论 |  |
| 8 | 扩展内容 |  |
| 9 | 扩展应用文件 | 插件、主题、应用 |

**表和字段**

- `file_usages->usage_type`

**文件类型的路径规则**

```php
FileHelper::fresnsFileStoragePath($fileType, $usageType);
```
