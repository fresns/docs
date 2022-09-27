# 获取评论[列表]

- 接口地址：`/api/v2/comment/list`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | NO | YES |
| uid | NO | YES |
| token | NO | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| mapId | Number | NO | 地图服务商编号 |
| mapLng | String | NO | 地图经度（用于计算距离） |
| mapLat | String | NO | 地图纬度（用于计算距离） |
| uidOrUsername | String | NO | 指定范围：用户 |
| pid | String | NO | 指定范围：帖子 |
| cid | String | NO | 指定范围：评论（获取该评论的子孙级评论） |
| gid | String | NO | 指定范围：小组 |
| hid | String | NO | 指定范围：话题 |
| sticky | Boolean | NO | 是否置顶（留空输出全部） |
| digestState | Number | NO | 指定范围：精华（留空输出全部）<br>digest_state 字段 1.否 2.一级精华 3.二级精华 |
| contentType | String | NO | 内容类型（内容类型扩展配置的参数） |
| createDateGt | String | NO | 发表时间大于 `Y-m-d` |
| createDateLt | String | NO | 发表时间小于 `Y-m-d` |
| likeCountGt | Number | NO | 点赞数大于 |
| likeCountLt | Number | NO | 点赞数小于 |
| followCountGt | Number | NO | 关注数大于 |
| followCountLt | Number | NO | 关注数小于 |
| blockCountGt | Number | NO | 屏蔽数大于 |
| blockCountLt | Number | NO | 屏蔽数小于 |
| commentCountGt | Number | NO | 子级评论总数大于 |
| commentCountLt | Number | NO | 子级评论总数小于 |
| orderType | String | NO | 排序类型，默认 `createDate`<br>createDate,like,dislike,follow,block,comment |
| orderDirection | String | NO | 排序方式，默认 `desc`<br>`asc`,`desc` |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

**接口使用说明**

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

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "pagination": {
            "total": "Number / 一共有多少条数据",
            "pageSize": "Number / 每页有多少条数据",
            "currentPage": "Number / 当前页码",
            "lastPage": "Number / 最后一页页码"
        },
        "list": [
            {
                // 通用数据结构->评论信息
            }
        ]
    }
}
```