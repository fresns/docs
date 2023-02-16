# 获取评论[列表] 位置附近的

- 接口地址：`/api/v2/comment/nearby`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| mapId | Number | YES | 地图服务商编号 |
| mapLng | String | YES | 地图经度（用于查询附近评论） |
| mapLat | String | YES | 地图纬度（用于查询附近评论） |
| unit | String | NO | 范围单位 km / mi |
| length | Number | NO | 范围 |
| contentType | String | NO | 指定类型：内容类型扩展配置的参数，为空或者为 All，则输出全部内容 |
| pluginRatingId | Number | NO | 排序编号（插件专用） |
| whitelistParams | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistParams | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
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
                // 通用数据结构->评论信息
            }
        ]
    }
}
```
