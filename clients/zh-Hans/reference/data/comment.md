---
aside: false
---

# 评论信息

```json
{
    "cid": "String / 评论 ID",
    "url": "String / 评论详情页地址",
    "content": "String / 评论内容或简述",
    "contentLength": "Number / 内容总长度",
    "langTag": "String / 内容语言标签",
    "writingDirection": "String / 内容撰写方向",
    "isBrief": "Boolean / 是否为简述",
    "isMarkdown": "Boolean / 是否为 MD 格式",
    "isAnonymous": "Boolean / 是否匿名",
    "isPrivate": "Boolean / 是否私有评论（私有仅评论作者和帖子作者可见）",
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
    "commentDislikeCount": "Number / 子评论被点赞总数",
    "commentFollowCount": "Number / 子评论被关注总数",
    "commentBlockCount": "Number / 子评论被屏蔽总数",
    "createdDatetime": "String / 评论发表时间",
    "createdTimeAgo": "String / 评论发表人性化时间",
    "editedDatetime": "String / 评论最后编辑时间",
    "editedTimeAgo": "String / 评论最后编辑人性化时间",
    "editedCount": "Number / 编辑次数",
    "latestCommentDatetime": "String / 最新子级评论的时间",
    "latestCommentTimeAgo": "String / 最新子级评论的人性化时间",
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
    "hashtags": [
        {
            // 评论关联话题
            // 通用数据结构->话题信息
        }
    ],
    "geotag": {
        // 通用数据结构->地理信息
        "distance": "Number / 帖子发表位置与我的距离",
        "unit": "String / 与我距离的单位 km 或 mi"
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
    "followType": "String / 来自哪种关注 null.无 user.我关注的用户 group.我关注的小组 hashtag.我关注的话题 digest.高级精华"
}
```

## 历史评论信息

```json
{
    "did": "String / 草稿 ID", // 如果作为草稿使用时
    "pcid": "Number / 历史评论 ID",
    "cid": "String / 所属评论 ID",
    "pid": "String / 评论的帖子 ID",
    "parentCid": "String / 回复评论的 ID",
    "isAppEditor": "Boolean / 是否应用编辑器",
    "editorFskey": "String / 编辑器应用 Fskey",
    "editorUrl": "String / 编辑器访问地址",
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
