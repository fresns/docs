---
aside: false
---

# 草稿信息

```json
{
    "did": "String / 草稿 ID",
    "fsid": "String / 已发表正式内容 pid 或者 cid",
    "quotedPid": "String / 引用哪个帖子", // 帖子专用
    "replyToPid": "String / 回复哪个帖子", // 评论专用
    "replyToCid": "String / 回复哪个评论", // 评论专用
    "title": "String / 标题", // 帖子专用
    "content": "String / 内容",
    "contentLength": "Number / 内容总长度",
    "isMarkdown": "Boolean / 是否为 MD 格式",
    "isAnonymous": "Boolean / 是否匿名",
    "isPrivate": "Boolean / 评论是否为私有",
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

## 帖子 `permissions` 权限参数介绍

```json
{
    "editor": {
        "isAppEditor": "Boolean / 是否仅在应用中编辑",
        "editorFskey": "String / 编辑器 fskey"
    },
    "contentWritingDirection": "String / 内容写作方向", // ltr or rtl
    "canDelete": "Boolean / 作者是否有权删除",
    "readConfig": {
        "isReadLocked": "Boolean / 是否需要阅读授权",
        "previewPercentage": "Number / 无权时内容显示比例",
        "whitelist": {
            "users": "Array / 白名单用户 ID",
            "roles": "Array / 白名单角色 ID"
        },
        "buttonName": {
            "语言标签": "String / 无权时按钮文字",
            "en": "Name"
        },
        "appFskey": "String / 授权应用 fskey"
    },
    "associatedUserListConfig": {
        "hasUserList": "Boolean / 是否有关联用户列表",
        "userListName": {
            "语言标签": "String / 用户列表名称",
            "en": "Name"
        },
        "appFskey": "String / 用户列表应用 fskey"
    },
    "commentConfig": {
        "visible": "Boolean / 评论是否可见（不可见对所有人隐藏，包括作者）",
        "policy": "Number / 谁可以评论 1.所有人 2.你关注的人 3.你关注的人和已认证的人 4.不允许所有人 5.仅限你提及到的用户",
        "privacy": "String / public (公开) 或 private（私有则仅评论作者和帖子作者可见）",
        "action": {
            "hasActionButton": "Boolean / 评论是否有按钮",
            "buttonName": {
                "语言标签": "String / 按钮名称",
                "en": "Name"
            },
            "buttonStyle": "String / 按钮风格 primary secondary success danger warning info",
            "appFskey": "String / 配置应用 fskey"
        }
    },
}
```

## 评论 `permissions` 权限参数介绍

```json
{
    "editor": {
        "isAppEditor": "Boolean / 是否仅在应用中编辑",
        "editorFskey": "String / 编辑器 fskey"
    },
    "contentWritingDirection": "String / 内容写作方向", // ltr or rtl
    "canDelete": "Boolean / 作者是否有权删除",
    "activeButton": {
        // 与帖子 commentConfig.action 联动，替换该配置
        "hasActiveButton": "Boolean / 是否有 active 按钮",
        "buttonName": {
            "语言标签": "String / 按钮名称",
            "en": "Name"
        },
        "buttonStyle": "String / 按钮风格 primary secondary success danger warning info",
        "appFskey": "String / 配置应用 fskey"
    },
}
```
