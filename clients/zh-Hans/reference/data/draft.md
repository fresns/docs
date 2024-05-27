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

## `permissions` 权限参数介绍

::: code-group
```json [帖子]
{
    "editor": {
        "isAppEditor": "Boolean / 是否编辑器插件创建",
        "editorFskey": "String / 编辑器 fskey"
    },
    "contentWritingDirection": "String / 内容写作方向", // ltr or rtl
    "canDelete": "Boolean / 作者是否有权删除",
    "readConfig": {
        "isReadLocked": "Boolean / 是否需要阅读授权",
        "previewPercentage": "Number / 无权时内容显示比例",
        "whitelist": {
            "users": [
                {
                    "fsid": "String / 用户标识 ID，uid 或 username",
                    "uid": "Number / 用户 ID",
                    "url": "String / 用户主页地址",
                    "username": "String / 用户名",
                    "nickname": "String / 用户昵称",
                    "avatar": "String / 头像图"
                }
            ],
            "roles": [
                {
                    "rid": "String / 角色 ID",
                    "name": "String / 角色名",
                    "icon": "String / 角色图标地址",
                }
            ]
        },
        "buttonName": "String / 无权时按钮文字",
        "appUrl": "String / 应用页面链接"
    },
    "associatedUserListConfig": {
        "hasUserList": "Boolean / 是否有关联用户列表",
        "userListName": "String / 用户列表名称",
        "appUrl": "String / 应用页面链接"
    },
    "commentConfig": {
        "visible": "Boolean / 评论是否可见（不可见对所有人隐藏，包括作者）",
        "policy": "Number / 谁可以评论 1.所有人 2.你关注的人 3.你关注的人和已认证的人 4.不允许所有人 5.仅限你提及到的用户",
        "privacy": "String / public (公开) 或 private（私有则仅评论作者和帖子作者可见）",
        "action": {
            "hasActionButton": "Boolean / 评论是否有按钮",
            "buttonName": "String / 按钮名称",
            "buttonStyle": "String / 按钮风格 primary secondary success danger warning info",
            "appUrl": "String / 应用页面链接"
        }
    },
}
```

```json [评论]
{
    "editor": {
        "isAppEditor": "Boolean / 是否编辑器插件创建",
        "editorFskey": "String / 编辑器 fskey"
    },
    "contentWritingDirection": "String / 内容写作方向", // ltr or rtl
    "canDelete": "Boolean / 作者是否有权删除",
    "activeButton": {
        // 与帖子 commentConfig.action 联动，替换该配置
        "hasActiveButton": "Boolean / 是否有 active 按钮",
        "buttonName": "String / 按钮名称",
        "buttonStyle": "String / 按钮风格 primary secondary success danger warning info",
        "appUrl": "String / 应用页面链接"
    },
}
```
:::
