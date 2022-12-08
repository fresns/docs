# 获取帖子[列表] 关注对象的

- 接口地址：`/api/v2/post/follow/{type}`
- 请求方式：`GET`
- 传参方式：`Rest` + `Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| aidToken | YES | YES |
| uid | YES | YES |
| uidToken | YES | YES |

## Rest 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | `all`,`user`,`group`,`hashtag` |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| contentType | String | NO | 筛选过滤内容类型 |
| mapId | Number | NO | 地图服务商编号 |
| mapLng | String | NO | 地图经度（用于计算距离） |
| mapLat | String | NO | 地图纬度（用于计算距离） |
| pluginRatingId | Number | NO | 排序编号（插件专用） |
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
                // 通用数据结构->帖子信息
            }
        ]
    }
}
```

::: details 开发说明
- 帖子均以发布时间倒序排列。
- 站点为私有模式时，需要验证用户到期状态 users.expired_at，确认用户是否已到期。
    - 并根据站点配置的到期后数据处理模式 configs.site_private_end_after 对数据进行处理。
    - `site_private_end_after = 1` 接口不可请求。
    - `site_private_end_after = 2` 仅输出到期前的内容，到期后的新内容不输出。
- 根据 `searchType` 内容类型去 `plugin_usages` 查询数据来源是默认（主程序）还是指定的插件，如果是指定的插件，则将请求转述给插件，由插件提供数据。
- 帖子有重复时，以用户的帖子为主。比如我关注的用户，在小组里帖子被加精华了，这时候会重复，届时以用户身份输出为主。
    - A 用户关注了 B 用户，A 用户同时也关注了 X 小组。B 用户在 X 小组发了一篇帖子，帖子被设置为 X 小组的精华帖。查询全部帖子时，关注的用户里会出现这篇帖子，关注的小组也会出现这篇帖子。此次便为重复，则按顺序过滤掉小组的帖子，显示用户身份的帖子。
    - 依次关系为：用户 > 小组 > 话题 > 全站高级精华
- `followType = all`
    - 我自己发表的帖子。
    - 我关注的用户，他发表的帖子都输出（但不包括私有小组内的帖子）。
    - 我关注的小组，被设置为精华的帖子才输出。
    - 我关注的话题，被设置为精华的帖子才输出（但不包括私有小组内的帖子）。
    - 全站二级精华无论我是否关注了发帖者，都输出（但不包括私有小组内的帖子）。
    - 过滤掉我屏蔽的用户、小组、话题、帖子。
- `followType = user`
    - 我自己发表的帖子。
    - 我关注的用户，他发表的帖子都输出（但不包括私有小组内的帖子）。
    - 过滤掉我屏蔽的帖子。
- `followType = group`
    - 我关注的小组下的帖子全部输出，不分是否为精华。
    - 过滤掉我屏蔽的用户、话题、帖子。
- `followType = hashtag`
    - 我关注的话题下的帖子全部输出，不分是否为精华（但不包括私有小组内的帖子）。
    - 过滤掉我屏蔽的用户、小组、帖子。
:::