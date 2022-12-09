# Comment List

- Endpoint Path: `/api/v2/comment/list`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | **required** |
| aidToken | *optional* | **required** |
| uid | *optional* | **required** |
| uidToken | *optional* | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| mapId | Number | *optional* | 地图服务商编号 |
| mapLng | String | *optional* | 地图经度（用于计算距离） |
| mapLat | String | *optional* | 地图纬度（用于计算距离） |
| uidOrUsername | String | *optional* | 指定范围：用户 |
| pid | String | *optional* | 指定范围：帖子 |
| cid | String | *optional* | 指定范围：评论（获取该评论的子孙级评论） |
| gid | String | *optional* | 指定范围：小组 |
| hid | String | *optional* | 指定范围：话题 |
| sticky | Boolean | *optional* | 是否置顶（留空输出全部） |
| digestState | Number | *optional* | 指定范围：精华（留空输出全部）<br>digest_state 字段 1.否 2.一级精华 3.二级精华 |
| allDigest | Boolean | *optional* | 指定范围：全部精华，一级精华和二级精华<br>传参后，将忽略 `digestState` 参数 |
| contentType | String | *optional* | 内容类型（内容类型扩展配置的参数） |
| createDateGt | String | *optional* | 发表时间大于 `Y-m-d` |
| createDateLt | String | *optional* | 发表时间小于 `Y-m-d` |
| likeCountGt | Number | *optional* | 点赞数大于 |
| likeCountLt | Number | *optional* | 点赞数小于 |
| followCountGt | Number | *optional* | 关注数大于 |
| followCountLt | Number | *optional* | 关注数小于 |
| blockCountGt | Number | *optional* | 屏蔽数大于 |
| blockCountLt | Number | *optional* | 屏蔽数小于 |
| commentCountGt | Number | *optional* | 子级评论总数大于 |
| commentCountLt | Number | *optional* | 子级评论总数小于 |
| orderType | String | *optional* | 排序类型，默认 `createDate`<br>createDate,like,dislike,follow,block,comment |
| orderDirection | String | *optional* | 排序方式，默认 `desc`<br>`asc`,`desc` |
| pageSize | Number | *optional* | 每页显示条数（默认 15 条） |
| page | Number | *optional* | 页码（默认 1） |

**Request Description**

- `uidOrUsername` 参数有值，代表获取指定用户的帖子，将根据 `运营 > 互动配置 > 查看别人内容设置` 决定是否输出数据。
    - `it_comments` 配置，是否输出点赞我的用户
- 如果 `uidOrUsername` 为登录用户自己时，上方配置无效，直接输出数据，表示查看自己的内容时无视开关。

| contentType | 说明 |
| --- | --- |
| {空} | 输出全部内容 |
| all | 输出全部内容 |
| text | 输出纯文本评论 |
| image | 输出带图片的评论 |
| video | 输出带视频的评论 |
| audio | 输出带音频的评论 |
| document | 输出带文档的评论 |
| {abc} | 输出插件 abc 扩展内容的评论 |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "pagination": {
            "total": "Number / How much data in total",
            "pageSize": "Number / How much data on each page",
            "currentPage": "Number / Current page number",
            "lastPage": "Number / Last page number"
        },
        "list": [
            {
                // Common Data Structure -> Comment Info
            }
        ]
    }
}
```
