---
aside: false
---

# 话题信息

```json
{
    "htid": "String / 话题 ID",
    "url": "String / 话题详情页地址",
    "name": "String / 话题名",
    "cover": "String / 话题封面图",
    "description": "String / 话题介绍",
    "likeCount": "Number / 被点赞总数",
    "dislikeCount": "Number / 被点踩总数",
    "followCount": "Number / 被关注总数",
    "blockCount": "Number / 被屏蔽总数",
    "postCount": "Number / 帖子总数",
    "postDigestCount": "Number / 精华帖子总数",
    "commentCount": "Number / 评论总数",
    "commentDigestCount": "Number / 精华评论总数",
    "createdDatetime": "String / 话题创建日期",
    "moreInfo": {
        // 更多信息 hashtags->more_info
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
        "followNote": "String / 我对该话题的关注备注",
        "blockStatus": "Boolean / 屏蔽状态",
        "blockNote": "String / 我对该话题的屏蔽备注"
    }
}
```
