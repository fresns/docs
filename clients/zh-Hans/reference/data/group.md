---
aside: false
---

# 小组信息

```json
{
    "gid": "String / 小组 ID",
    "url": "String / 小组详情页地址",
    "name": "String / 小组名",
    "description": "String / 小组介绍",
    "cover": "String / 小组封面图",
    "banner": "String / 小组条幅图",
    "recommend": "Boolean / 是否为推荐小组",
    "mode": "Number / 小组模式 1.公开 2.非公开",
    "modeEndAfter": "Number / 非公开模式到期后 1.不限制 2.小组内容全部不可见 3.到期前内容可见，新内容不可见",
    "find": "Number / 是否可发现（是否显示） 1.可发现 2.不可发现",
    "followType": "Number / 关注方式 1.原生方式 2.应用方式 3.关闭",
    "followUrl": "String / 关注方式 2 专用，操作关注应用页地址",
    "parentGid": "String / 父级小组 ID",
    "parentInfo": {
        "gid": "String / 父级小组 ID",
        "name": "String / 父级小组名",
        "description": "String / 父级小组介绍",
        "cover": "String / 父级小组封面图",
        "banner": "String / 父级小组条幅图"
    },
    "subgroupCount": "Number / 子级小组总数",
    "likeCount": "Number / 被点赞总数",
    "dislikeCount": "Number / 被点踩总数",
    "followCount": "Number / 被关注总数",
    "blockCount": "Number / 被屏蔽总数",
    "postCount": "Number / 帖子总数",
    "postDigestCount": "Number / 精华帖子总数",
    "commentCount": "Number / 评论总数",
    "commentDigestCount": "Number / 精华评论总数",
    "createdDatetime": "String / 小组创建日期",
    "canViewContent": "Boolean / 是否有权查看内容",
    "publishRule": {
        "canPublish": "Boolean / 是否开放发表，不开放则所有人都无权发表",
        "allowPost": "Boolean / 是否有权发帖子",
        "reviewPost": "Boolean / 发帖子是否需要审核",
        "allowComment": "Boolean / 是否有权发评论",
        "reviewComment": "Boolean / 发评论是否需要审核"
    },
    "permissions": {
        // 小组配置自定义参数
        // 数据表 groups->permissions
    },
    "moreInfo": {
        // 更多信息 groups->more_info
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
    "creator": {
        // 小组创建者
        // 通用数据结构->用户信息
    },
    "admins": [
        {
            // 小组管理员列表
            // 通用数据结构->用户信息
        }
    ],
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
        "followNote": "String / 我对该小组的关注备注",
        "followExpired": "Boolean / 是否过期，公开小组模式始终为 false",
        "followExpiryDateTime": "String / 过期时间",
        "blockStatus": "Boolean / 屏蔽状态",
        "blockNote": "String / 我对该小组的屏蔽备注"
    }
}
```