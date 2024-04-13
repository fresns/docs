---
aside: false
---

# 评论信息

```json
{
    "cid": "String / 评论 ID",
    "url": "String / 评论详情页地址",
    "privacy": "String / public (公开) 或 private（私有则仅评论作者和帖子作者可见）",
    "content": "String / 评论内容或简述",
    "contentLength": "Number / 内容总长度",
    "langTag": "String / 内容语言标签",
    "writingDirection": "String / 内容撰写方向",
    "isBrief": "Boolean / 是否为简述",
    "isMarkdown": "Boolean / 是否为 MD 格式",
    "isAnonymous": "Boolean / 是否匿名",
    "isSticky": "Boolean / 是否置顶",
    "digestState": "Number / 精华状态 1.否 2.普级精华 3.高级精华",
    "viewCount": "Number / 查看总数",
    "likeCount": "Number / 被点赞总数",
    "dislikeCount": "Number / 被点踩总数",
    "followCount": "Number / 被关注总数",
    "blockCount": "Number / 被屏蔽总数",
    "commentCount": "Number / 子评论总数",
    "commentDigestCount": "Number / 子评论中精华总数",
    "commentLikeCount": "Number / 子评论被点赞总数",
    "commentDislikeCount": "Number / 子评论被点踩总数",
    "commentFollowCount": "Number / 子评论被关注总数",
    "commentBlockCount": "Number / 子评论被屏蔽总数",
    "createdDatetime": "String / 评论发表时间",
    "createdTimeAgo": "String / 人性化时间",
    "editedDatetime": "String / 评论最后编辑时间",
    "editedTimeAgo": "String / 人性化时间",
    "editedCount": "Number / 编辑次数",
    "lastCommentDatetime": "String / 最新子级评论的时间",
    "lastCommentTimeAgo": "String / 人性化时间",
    "rankState": "Number / 等级状态",
    "status": "Boolean / 评论状态",
    "moreInfo": {
        // 更多信息 comments->more_info
        // 以下是已知 Key
        "ipLocation": "String / 发表者 IP 位置名",
        "deviceName": "String / 发表者设备名称",
    },
    "activeButton": {
        // 与帖子 commentConfig.action 联动，替换该配置
        "hasActiveButton": "Boolean / 是否有 active 按钮",
        "buttonName": "String / 按钮名称",
        "buttonStyle": "String / 按钮风格 primary secondary success danger warning info",
        "appUrl": "String / 配置应用地址"
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
    "hashtags": [
        {
            // 评论关联话题
            // 通用数据结构->话题信息
        }
    ],
    "geotag": {
        // 通用数据结构->地理信息
    },
    "author": {
        // 评论作者
        // 通用数据结构->用户信息
        "isPostAuthor": "Boolean / 是否为帖子作者"
    },
    "previewLikeUsers": [
        {
            // 通用数据结构->用户信息
        }
    ],
    "previewComments": [
        {
            // 子评论预览
            // 通用数据结构->评论信息
        }
    ],
    "manages": [
        // 评论管理扩展
        // 通用数据结构->扩展功能信息
    ],
    "editControls": {
        "isAuthor": "Boolean / 我是否为作者",
        "canDelete": "Boolean / 是否允许删除",
        "canEdit": "Boolean / 是否允许编辑",
        "isAppEditor": "Boolean / 是否应用编辑器",
        "editorUrl": "String / 应用编辑器访问地址"
    },
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
        "note": "String / 我的互动备注（关注或屏蔽）",
        "postAuthorLikeStatus": "Boolean / 帖子作者是否点赞"
    },
    "replyToPost": {
        // 评论所属的帖子信息，如果是子级评论列表仅有 pid 参数
        // 通用数据结构->帖子信息
    },
    "replyToComment": {
        // 当前评论的父级评论
        // 通用数据结构->评论信息
    },
    "followType": "String / 来自哪种关注 null.无 user.我关注的用户 group.我关注的小组 digest.高级精华"
}
```

## 历史评论信息

```json
{
    "hcid": "String / 历史评论 ID",
    "cid": "String / 所属评论 ID",
    "privacy": "String / public (公开) 或 private（私有则仅评论作者和帖子作者可见）",
    "content": "String / 评论内容或简述",
    "contentLength": "Number / 内容总长度",
    "langTag": "String / 内容语言标签",
    "writingDirection": "String / 内容撰写方向",
    "isBrief": "Boolean / 是否为简述",
    "isMarkdown": "Boolean / 是否为 MD 格式",
    "isAnonymous": "Boolean / 是否匿名",
    "createdDatetime": "String / 评论发表时间",
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
        // 评论作者
        // 通用数据结构->用户信息
    }
}
```
