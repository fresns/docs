---
aside: false
---

# 帖子信息

```json
{
    "pid": "String / 帖子 ID",
    "url": "String / 帖子详情页地址",
    "title": "String / 帖子标题",
    "content": "String / 帖子内容或简述",
    "contentLength": "Number / 内容总长度",
    "langTag": "String / 内容语言标签",
    "writingDirection": "String / 内容撰写方向",
    "isBrief": "Boolean / 是否为简述",
    "isMarkdown": "Boolean / 是否为 MD 格式",
    "isAnonymous": "Boolean / 是否匿名",
    "stickyState": "Number / 置顶状态 1.否 2.小组页置顶 3.全局置顶",
    "digestState": "Number / 精华状态 1.否 2.普通精华 3.高级精华",
    "viewCount": "Number / 查看总数",
    "likeCount": "Number / 被点赞总数",
    "dislikeCount": "Number / 被点踩总数",
    "followCount": "Number / 被关注总数",
    "blockCount": "Number / 被屏蔽总数",
    "commentCount": "Number / 评论总数",
    "commentDigestCount": "Number / 评论中精华总数",
    "commentLikeCount": "Number / 评论被点赞总数",
    "commentDislikeCount": "Number / 评论被点踩总数",
    "commentFollowCount": "Number / 评论被关注总数",
    "commentBlockCount": "Number / 评论被屏蔽总数",
    "quoteCount": "Number / 关联帖子总数，别人引用它的数量",
    "createdDatetime": "String / 帖子发表时间",
    "createdTimeAgo": "String / 人性化时间",
    "editedDatetime": "String / 帖子最后编辑时间",
    "editedTimeAgo": "String / 人性化时间",
    "editedCount": "Number / 编辑次数",
    "lastCommentDatetime": "String / 最新评论的时间",
    "lastCommentTimeAgo": "String / 人性化时间",
    "rankState": "Number / 等级状态",
    "status": "Boolean / 帖子状态",
    "readConfig": {
        "isReadLocked": "Boolean / 是否需要授权",
        "previewPercentage": "Number / 无权时内容显示百分比",
        "buttonName": "String / 无权时按钮文字",
        "buttonUrl": "String / 处理授权的地址"
    },
    "associatedUserListConfig": {
        "hasUserList": "Boolean / 是否有关联用户列表",
        "userListName": "String / 用户列表名称",
        "userListCount": "Number / 用户列表用户数",
        "userListUrl": "String / 查看用户列表的地址"
    },
    "commentConfig": {
        "visible": "Boolean / 评论是否可见（不可见对所有人隐藏，包括作者）",
        "policy": "Number / 谁可以评论 1.所有人 2.你关注的人 3.你关注的人和已认证的人 4.不允许所有人 5.仅限你提及到的用户",
        "privacy": "String / public (公开) 或 private（私有则仅评论作者和帖子作者可见）",
        "action": {
            "hasActionButton": "Boolean / 评论是否有按钮",
            "buttonName": "String / 按钮名称",
            "buttonStyle": "String / 按钮风格 primary secondary success danger warning info",
            "buttonUrl": "String / 按钮应用地址"
        }
    },
    "moreInfo": {
        // 更多信息
        // 以下是已知 Key
        "ipLocation": "String / 发表者 IP 位置名",
        "deviceName": "String / 发表者设备名称"
    },
    "archives": [
        // 通用数据结构->扩展资料信息
    ],
    "operations": {
        // 通用数据结构->扩展运营信息
    },
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
        // 帖子所属小组，可为 null
        // 通用数据结构->小组信息
    },
    "hashtags": [
        {
            // 帖子关联话题
            // 通用数据结构->话题信息
        }
    ],
    "geotag": {
        // 通用数据结构->地理信息
    },
    "author": {
        // 帖子作者
        // 通用数据结构->用户信息
    },
    "isMultiLevelQuote": "Boolean / 是否多层级引用，上一级 quotedPost 帖子是否也有引用",
    "quotedPost": {
        // 当前帖子引用的帖子
        // 通用数据结构->帖子信息
    },
    "previewLikeUsers": [
        {
            // 通用数据结构->用户信息
        }
    ],
    "previewComments": [
        {
            // 通用数据结构->评论信息
        }
    ],
    "interaction": {
        "likeEnabled": "Boolean / 是否允许 like",
        "likeName": "String / like 行为自定义名称",
        "likeUserTitle": "String / like 行为的用户头衔",
        "likePublicRecord": "Boolean / 是否公开记录",
        "likePublicCount": "Boolean / 是否公开计数",
        "dislikeEnabled": "Boolean / 是否允许 dislike",
        "dislikeName": "String / dislike 行为自定义名称",
        "dislikeUserTitle": "String / dislike 行为的用户头衔",
        "dislikePublicRecord": "Boolean / 是否公开记录",
        "dislikePublicCount": "Boolean / 是否公开计数",
        "followEnabled": "Boolean / 是否允许 follow",
        "followName": "String / follow 行为自定义名称",
        "followUserTitle": "String / follow 行为的用户头衔",
        "followPublicRecord": "Boolean / 是否公开记录",
        "followPublicCount": "Boolean / 是否公开计数",
        "blockEnabled": "Boolean / 是否允许 block",
        "blockName": "String / block 行为自定义名称",
        "blockUserTitle": "String / block 行为的用户头衔",
        "blockPublicRecord": "Boolean / 是否公开记录",
        "blockPublicCount": "Boolean / 是否公开计数",
        "likeStatus": "Boolean / 点赞状态",
        "dislikeStatus": "Boolean / 点踩状态",
        "followStatus": "Boolean / 关注状态",
        "blockStatus": "Boolean / 屏蔽状态",
        "note": "String / 我的互动备注（关注或屏蔽）"
    },
    "controls": {
        "isAuthor": "Boolean / 我是否为作者",
        "canEdit": "Boolean / 是否允许编辑",
        "canDelete": "Boolean / 是否允许删除"
    },
    "manages": [
        // 帖子管理扩展
        // 通用数据结构->扩展功能信息
    ]
}
```

## 历史帖子信息

```json
{
    "hpid": "String / 历史帖子 ID",
    "pid": "String / 所属帖子 ID",
    "title": "String / 标题",
    "content": "String / 内容或简述",
    "contentLength": "Number / 内容总长度",
    "langTag": "String / 内容语言标签",
    "writingDirection": "String / 内容撰写方向",
    "isBrief": "Boolean / 是否为简述",
    "isMarkdown": "Boolean / 是否为 MD 格式",
    "isAnonymous": "Boolean / 是否匿名",
    "createdDatetime": "String / 帖子发表时间",
    "createdTimeAgo": "String / 人性化时间",
    "status": "Boolean / 状态",
    "locationInfo": {
        // 初始位置信息
    },
    "moreInfo": {
        // 更多信息
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
    "author": {
        // 通用数据结构->用户信息
    },
}
```
