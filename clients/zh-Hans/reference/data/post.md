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
    "commentDislikeCount": "Number / 评论被点赞总数",
    "commentFollowCount": "Number / 评论被关注总数",
    "commentBlockCount": "Number / 评论被屏蔽总数",
    "postCount": "Number / 关联帖子总数，别人引用它的数量",
    "createdDatetime": "String / 帖子发表时间",
    "createdTimeAgo": "String / 帖子发表人性化时间",
    "editedDatetime": "String / 帖子最后编辑时间",
    "editedTimeAgo": "String / 帖子最后编辑人性化时间",
    "editedCount": "Number / 编辑次数",
    "latestCommentDatetime": "String / 最新评论的时间",
    "latestCommentTimeAgo": "String / 最新评论的人性化时间",
    "rankState": "Number / 等级状态",
    "status": "Boolean / 帖子状态",
    "readConfig": {
        "isReadLocked": "Boolean / 是否需要授权",
        "previewPercentage": "Number / 无权时内容显示百分比",
        "buttonName": "String / 无权时按钮文字",
        "buttonUrl": "String / 处理授权的地址"
    },
    "affiliatedUserConfig": {
        "hasUserList": "Boolean / 是否有关联用户列表",
        "userListName": "String / 用户列表名称",
        "userListCount": "Number / 用户列表用户数",
        "userListUrl": "String / 查看用户列表的地址"
    },
    "commentConfig": {
        "hidden": "Boolean / 是否隐藏全部评论",
        "disabled": "Boolean / 是否禁止评论",
        "private": "Boolean / 是否私有评论（私有则仅评论作者和帖子作者可见）",
        "action": {
            "hasActionButton": "Boolean / 评论是否有按钮",
            "buttonName": "String / 按钮名称",
            "buttonStyle": "String / 按钮风格 primary secondary success danger warning info",
            "appUrl": "String / 配置应用地址"
        }
    },
    "moreInfo": {
        // 更多信息 posts->more_info
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
    "extends": {
        // 通用数据结构->扩展内容信息
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
        "distance": "Number / 帖子发表位置与我的距离",
        "unit": "String / 与我距离的单位 km 或 mi"
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
    "manages": [
        // 帖子管理扩展
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
        "likeSetting": "Boolean / 是否允许 like",
        "likeName": "String / like 行为自定义名称",
        "dislikeSetting": "Boolean / 是否允许 dislike",
        "dislikeName": "String / dislike 行为自定义名称",
        "followSetting": "Boolean / 是否允许 follow",
        "followName": "String / follow 行为自定义名称",
        "blockSetting": "Boolean / 是否允许 block",
        "blockName": "String / block 行为自定义名称",
        "likeStatus": "Boolean / 点赞状态",
        "dislikeStatus": "Boolean / 点踩状态",
        "followStatus": "Boolean / 关注状态",
        "blockStatus": "Boolean / 屏蔽状态",
        "note": "String / 我的互动备注（关注或屏蔽）"
    },
    "followType": "String / 来自哪种关注 null.无 user.我关注的用户 group.我关注的小组 hashtag.我关注的话题 digest.高级精华"
}
```

## 历史帖子信息

```json
{
    "did": "String / 草稿 ID", // 如果作为草稿使用时
    "hpid": "String / 历史帖子 ID",
    "pid": "String / 所属帖子 ID",
    "quotedPid": "String / 引用帖子 ID",
    "isAppEditor": "Boolean / 是否应用编辑器",
    "editorFskey": "String / 编辑器应用 fskey",
    "editorUrl": "String / 编辑器访问地址",
    "group": {
        // 所属小组
        // 通用数据结构->小组信息
    },
    "title": "String / 帖子标题",
    "content": "String / 帖子内容或简述",
    "contentLength": "Number / 内容总长度",
    "isBrief": "Boolean / 是否为简述",
    "isMarkdown": "Boolean / 是否为 MD 格式",
    "isAnonymous": "Boolean / 是否匿名",
    "state": "Number / 状态",
    "reason": "String / 审核拒绝原因",
    "mapInfo": {
        "mapId": "Number / 经纬度地图编号",
        "latitude": "String / 纬度",
        "longitude": "String / 经度",
        "scale": "String / 定位地图比例",
        "continent": "String / 洲名",
        "continentCode": "String / 洲名代码",
        "country": "String / 国家名",
        "countryCode": "String / 国家代码",
        "region": "String / 省名",
        "regionCode": "String / 省代码",
        "city": "String / 城市名",
        "cityCode": "String / 城市代码",
        "district": "String / 城区名",
        "address": "String / 地址",
        "zip": "String / 邮编",
        "poi": "String / POI 信息",
        "poiId": "String / POI ID"
    },
    "readConfig": {
        "isReadLocked": "Boolean / 是否有权限配置",
        "previewPercentage": "Number / 无权时预读百分比",
        "buttonName": {
            "语言标签": "名称", // 无权时按钮文字，多语言配置
        },
        "appFskey": "String / 配置应用 fskey",
        "appUrl": "String / 配置应用地址",
        "permissions": {
            "users": [
                {
                    // 预授权用户
                    // 通用数据结构->用户信息
                }
            ],
            "roles": [
                // 预授权角色
                {
                    "rid": "String / 角色 ID",
                    "nicknameColor": "String / 昵称颜色",
                    "name": "String / 角色名",
                    "nameDisplay": "Boolean / 是否显示角色名",
                    "icon": "String / 角色图标地址",
                    "iconDisplay": "Boolean / 是否显示角色图标",
                    "status": "Boolean / 是否有效"
                }
            ]
        },
    },
    "affiliatedUserConfig": {
        "hasUserList": "Boolean / 是否有关联用户列表",
        "userListName": {
            "语言标签": "名称" // 用户列表名称，多语言配置
        },
        "appFskey": "String / 配置应用 fskey",
        "appUrl": "String / 配置应用地址"
    },
    "commentConfig": {
        "disabled": "Boolean / 是否禁止评论",
        "private": "Boolean / 是否私有评论（不公开则仅帖子作者可见）",
        "action": {
            "hasActionButton": "Boolean / 评论是否有按钮",
            "buttonName": {
                "语言标签": "名称" // 按钮文字，多语言配置
            },
            "buttonStyle": "String / 按钮风格",
            "appFskey": "String / 配置应用 fskey",
            "appUrl": "String / 配置应用地址"
        }
    },
    "author": {
        // 作者
        // 通用数据结构->用户信息
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
    "archives": [
        // 通用数据结构->扩展资料信息
    ],
    "operations": {
        // 通用数据结构->扩展运营信息
    },
    "extends": {
        // 通用数据结构->扩展内容信息
    }
}
```
