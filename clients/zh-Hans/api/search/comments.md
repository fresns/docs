# 搜索评论

- 接口地址：`/api/fresns/v1/search/comments`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| searchKey | String | YES | 搜索词 |
| followUsers | Boolean | NO | 指定范围：我关注的用户发表的 |
| followGroups | Boolean | NO | 指定范围：我关注的小组里 |
| followHashtags | Boolean | NO | 指定范围：我关注的话题里 |
| followComments | Boolean | NO | 指定范围：我关注的评论 |
| ... |  | NO | 可选[评论列表](../comment/list.md#query-参数)接口所有参数 |

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

- [通用数据结构->帖子信息](../../reference/data/post.md)
