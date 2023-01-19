# 获取帖子[列表] 位置附近的

- 接口地址：`/api/v2/post/nearby`
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
| mapLng | String | YES | 地图经度（用于查询附近帖子） |
| mapLat | String | YES | 地图纬度（用于查询附近帖子） |
| unit | String | NO | 范围单位 km / mi |
| length | Number | NO | 范围 |
| contentType | String | NO | 指定类型：内容类型扩展配置的参数，为空或者为 All，则输出全部内容 |
| pluginRatingId | Number | NO | 排序编号（插件专用） |
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
                // 通用数据结构->帖子信息
            }
        ]
    }
}
```

::: details 开发说明
- 如果是**私有模式**，当过期后 `users > expired_at`，需判断到期后的状态。配置表 `site_private_end` 键值为 `1` 时，该接口不可请求；键值为 `2` 时，仅输出到期前的内容，到期后的新内容不输出。
- 根据 `searchType` 内容类型去 `plugin_usages` 查询数据来源是默认（主程序）还是指定的插件，如果是指定的插件，则将请求转述给插件，由插件提供数据。
- 以 `latitude` 和 `longitude` 为中心，`length` 为范围，将范围内帖子以时间为倒序排列输出。
- 非公开小组和过滤屏蔽对象的帖子（用户、小组、话题、帖子），数据不输出。
- 帖子所属小组，小组 `groups` 表 `type_mode = 2` + `type_find = 2` 只有当前请求接口的用户已经 follow 了该小组才输出，否则不输出在列表中。
:::
