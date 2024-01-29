# 获取地理[列表]

- 接口地址：`/api/fresns/v1/geotag/list`
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
| type | Number | NO | 指定自定义类型 |
| mapId | Number | NO | [地图服务商编号](../../reference/dictionary/maps.md) |
| mapLng | String | NO | 地图经度（用于查询附近地理标签） |
| mapLat | String | NO | 地图纬度（用于查询附近地理标签） |
| createdDays | Number | NO | 创建天数：指定天数内创建的地理标签 |
| createdDate | String | NO | 创建日期：`today`,`yesterday`,`week`,`lastWeek`,`month`,`lastMonth`,`year`,`lastYear` |
| createdDateGt | String | NO | 创建时间大于 `Y-m-d` |
| createdDateLt | String | NO | 创建时间小于 `Y-m-d` |
| viewCountGt | Number | NO | 查看数大于 |
| viewCountLt | Number | NO | 查看数小于 |
| likeCountGt | Number | NO | 点赞数大于 |
| likeCountLt | Number | NO | 点赞数小于 |
| dislikeCountGt | Number | NO | 点踩数大于 |
| dislikeCountLt | Number | NO | 点踩数小于 |
| followCountGt | Number | NO | 关注数大于 |
| followCountLt | Number | NO | 关注数小于 |
| blockCountGt | Number | NO | 屏蔽数大于 |
| blockCountLt | Number | NO | 屏蔽数小于 |
| postCountGt | Number | NO | 帖子数大于 |
| postCountLt | Number | NO | 帖子数小于 |
| postDigestCountGt | Number | NO | 精华数大于 |
| postDigestCountLt | Number | NO | 精华数小于 |
| orderType | String | NO | 排序类型 `createdTime`,`random`,`view`,`like`,`dislike`,`follow`,`block`,`post`,`postDigest`<br>默认 `createdTime` |
| orderDirection | String | NO | 排序方向，默认 `desc`<br>`asc`,`desc` |
| filterType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对 |
| filterKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

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
                // 通用数据结构->地理信息
            }
        ]
    }
}
```

- [通用数据结构->地理信息](../../reference/data/geotag.md)
