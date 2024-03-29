---
aside: false
---

# 地理信息

```json
{
    "gtid": "String / 地理 ID",
    "url": "String / 地理详情页地址",
    "name": "String / 地理名",
    "cover": "String / 地理封面图",
    "description": "String / 地理描述",
    "placeId": "String / 地图地点 ID",
    "placeType": "String / 地图地点类型",
    "mapId": "Number / 地图编号",
    "latitude": "String / 纬度",
    "longitude": "String / 经度",
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
    "viewCount": "Number / 查看总数",
    "likeCount": "Number / 被点赞总数",
    "dislikeCount": "Number / 被点踩总数",
    "followCount": "Number / 被关注总数",
    "blockCount": "Number / 被屏蔽总数",
    "postCount": "Number / 帖子总数",
    "postDigestCount": "Number / 精华帖子总数",
    "commentCount": "Number / 评论总数",
    "commentDigestCount": "Number / 精华评论总数",
    "createdDatetime": "String / 地理创建日期",
    "createdTimeAgo": "String / 人性化时间",
    "lastPublishPostDateTime": "String / 最后发帖时间",
    "lastPublishPostTimeAgo": "String / 人性化时间",
    "lastPublishCommentDateTime": "String / 最后评论时间",
    "lastPublishCommentTimeAgo": "String / 人性化时间",
    "distance": "Number / 地理位置与我的距离",
    "unit": "String / 与我距离的单位 km 或 mi",
    "moreInfo": {
        // 更多信息 geotags->more_info
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
        "note": "String / 我的互动备注（关注或屏蔽）"
    }
}
```
