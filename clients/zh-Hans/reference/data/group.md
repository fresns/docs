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
    "privacy": "String / public (任何人都能查看小组内帖子) 或 private (只有成员才能查看小组内帖子)",
    "privateEndAfter": "Number / private 模式到期后 1.不限制 2.小组内容全部不可见 3.到期前内容可见，新内容不可见",
    "visibility": "String / visible (任何人都能找到这个小组) 或 hidden (只有成员能找到这个小组)",
    "parentGid": "String / 父级小组 ID",
    "parentInfo": {
        "gid": "String / 父级小组 ID",
        "url": "String / 父级小组详情页地址",
        "name": "String / 父级小组名",
        "description": "String / 父级小组介绍",
        "cover": "String / 父级小组封面图",
        "banner": "String / 父级小组条幅图"
    },
    "subgroupCount": "Number / 子级小组总数",
    "viewCount": "Number / 查看总数",
    "likeCount": "Number / 被点赞总数",
    "dislikeCount": "Number / 被点踩总数",
    "followCount": "Number / 被关注总数",
    "blockCount": "Number / 被屏蔽总数",
    "postCount": "Number / 帖子总数",
    "postDigestCount": "Number / 精华帖子总数",
    "commentCount": "Number / 评论总数",
    "commentDigestCount": "Number / 精华评论总数",
    "createdDatetime": "String / 小组创建日期",
    "createdTimeAgo": "String / 人性化时间",
    "lastPublishPostDateTime": "String / 最后发帖时间",
    "lastPublishPostTimeAgo": "String / 人性化时间",
    "lastPublishCommentDateTime": "String / 最后评论时间",
    "lastPublishCommentTimeAgo": "String / 人性化时间",
    "moreInfo": {
        // 更多信息 groups->more_info
    },
    "canViewContent": "Boolean / 是否有权查看内容",
    "publishRule": {
        "canPublish": "Boolean / 是否开放发表，不开放则所有人都无权发表",
        "allowPost": "Boolean / 是否有权发帖子",
        "reviewPost": "Boolean / 发帖子是否需要审核",
        "allowComment": "Boolean / 是否有权发评论",
        "reviewComment": "Boolean / 发评论是否需要审核"
    },
    "archives": [
        // 通用数据结构->扩展资料信息
    ],
    "operations": {
        // 通用数据结构->扩展运营信息
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
        "followMethod": "String / 关注方式 api/page",
        "followAppUrl": "String / 关注方式 page 专用，操作关注的应用页地址",
        "followExpired": "Boolean / 是否过期，公开小组模式始终为 false",
        "followExpiryDateTime": "String / 过期时间"
    }
}
```
