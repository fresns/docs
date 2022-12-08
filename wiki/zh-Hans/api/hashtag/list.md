# 获取话题[列表]

- 接口地址：`/api/v2/hashtag/list`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | NO | YES |
| aidToken | NO | YES |
| uid | NO | YES |
| uidToken | NO | YES |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| createDateGt | String | NO | 创建时间大于 `Y-m-d` |
| createDateLt | String | NO | 创建时间小于 `Y-m-d` |
| likeCountGt | Number | NO | 点赞数大于 |
| likeCountLt | Number | NO | 点赞数小于 |
| followCountGt | Number | NO | 关注数大于  |
| followCountLt | Number | NO | 关注数小于 |
| blockCountGt | Number | NO | 屏蔽数大于 |
| blockCountLt | Number | NO | 屏蔽数小于 |
| postCountGt | Number | NO | 帖子数大于 |
| postCountLt | Number | NO | 帖子数小于 |
| postDigestCountGt | Number | NO | 精华数大于 |
| postDigestCountLt | Number | NO | 精华数小于 |
| orderType | String | NO | 排序类型 createDate,like,follow,block,post,postDigest<br>默认 createDate |
| orderDirection | String | NO | 排序方式 `asc`,`desc`，默认 `desc` |
| pageSize | Number | NO | 每页显示条数（默认 30 条） |
| page | Number | NO | 页码（默认 1） |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "pagination": {
            "total": "Number / 一共有多少条数据",
            "current": "Number / 当前页码",
            "pageSize": "Number / 每页有多少条数据",
            "lastPage": "Number / 最后一页页码"
        },
        "list": [
            {
                // 通用数据结构->话题信息
            }
        ]
    }
}
```
