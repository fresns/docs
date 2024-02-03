---
aside: false
---

# 草稿信息

```json
{
    "did": "String / 草稿 ID",
    "quotedPid": "String / 引用哪个帖子", // 帖子专用
    "replyToPid": "String / 回复哪个帖子", // 评论专用
    "replyToCid": "String / 回复哪个评论", // 评论专用
    "title": "String / 标题", // 帖子专用
    "content": "String / 内容",
    "contentLength": "Number / 内容总长度",
    "isMarkdown": "Boolean / 是否为 MD 格式",
    "isAnonymous": "Boolean / 是否匿名",
    "isPrivate": "Boolean / 是否私有", // 评论专用
    "locationInfo": {
        // 位置信息
    },
    "moreInfo": {
        // 更多信息
    },
    "permissions": {
        // 权限配置信息
    },
    "archives": [
        // 通用数据结构->扩展资料信息
    ],
    "files": {
        "images": [
            {
                // 通用数据结构->文件信息
            }
        ],
        "videos": [
            {
                // 通用数据结构->文件信息
            }
        ],
        "audios": [
            {
                // 通用数据结构->文件信息
            }
        ],
        "documents": [
            {
                // 通用数据结构->文件信息
            }
        ]
    },
    "extends": {
        "texts": [
            {
                // 通用数据结构->扩展内容信息->texts
            }
        ],
        "infos": [
            {
                // 通用数据结构->扩展内容信息->infos
            }
        ],
        "actions": [
            {
                // 通用数据结构->扩展内容信息->actions
            }
        ]
    },
    "group": {
        // 帖子专用，所属小组
        // 通用数据结构->小组信息
    },
    "geotag": {
        // 通用数据结构->地理信息
    },
    "createdDatetime": "String / 创建时间",
    "createdTimeAgo": "String / 人性化创建时间",
    "state": "Number / 草稿状态",
    "reason": "String / 审核拒绝原因"
}
```
