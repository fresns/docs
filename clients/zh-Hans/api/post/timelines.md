# 获取帖子[列表] 时间线

- 接口地址：`/api/fresns/v1/post/timelines`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | NO | `user`, `group`, `hashtag` `geotag`<br>留空则使用全部 |
| langTag | String | NO | 指定范围：语言标签 |
| contentType | String | NO | 筛选过滤内容类型 |
| sincePid | String | NO | 查询该帖子之后的新内容 |
| beforePid | String | NO | 查询该帖子之前的旧内容 |
| mapId | Number | NO | [地图服务商编号](../../reference/dictionary/maps.md) |
| mapLng | String | NO | 地图经度（用于计算距离） |
| mapLat | String | NO | 地图纬度（用于计算距离） |
| filterType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对 |
| filterKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterGroupType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `group` 参数有效 |
| filterGroupKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterHashtagType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `hashtags` 参数有效 |
| filterHashtagKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterGeotagType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `geotag` 参数有效 |
| filterGeotagKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterAuthorType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `author` 参数有效 |
| filterAuthorKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterQuotedPostType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `quotedPost` 参数有效 |
| filterQuotedPostKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterPreviewLikeUserType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `previewLikeUsers` 参数有效 |
| filterPreviewLikeUserKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| filterPreviewCommentType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `previewComments` 参数有效 |
| filterPreviewCommentKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

**接口使用说明**

- `type` 参数用于指定输出我关注对象的帖子列表，以时间线为基础，用户自己发表的帖子也包括在 `user` 时间线当中。
- `type 留空`
    - 我自己发表的帖子。
    - 我关注的用户，他发表的帖子都输出（但不包括私有小组内的帖子）。
    - 我关注的小组，被设置为精华的帖子才输出。
    - 全站二级精华无论我是否关注了发帖者，都输出（但不包括私有小组内的帖子）。
    - 过滤掉我屏蔽的用户、小组、话题、地理、帖子。
- `type=user`
    - 我自己发表的帖子。
    - 我关注的用户，他发表的帖子都输出（但不包括私有小组内的帖子）。
    - 过滤掉我屏蔽的帖子。
- `type=group`
    - 我关注的小组下的帖子全部输出，不分是否为精华。
    - 过滤掉我屏蔽的用户、话题、帖子。

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

- [通用数据结构->帖子信息](../../reference/data/post.md)
