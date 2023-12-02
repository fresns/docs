# 获取帖子[列表] 时间线

- 接口地址：`/fresns-api/v1/post/timelines`
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
| type | String | NO | `user`,`group`,`hashtag`，留空输出全部 |
| contentType | String | NO | 筛选过滤内容类型 |
| lastPid | String | NO | 以此帖子为界线，查询新内容 |
| mapId | Number | NO | [地图服务商编号](../../reference/dictionary/maps.md) |
| mapLng | String | NO | 地图经度（用于计算距离） |
| mapLat | String | NO | 地图纬度（用于计算距离） |
| whitelistKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| whitelistGroupKeys | String | NO | 针对帖子信息中的 `group` 参数 |
| blacklistGroupKeys | String | NO | 针对帖子信息中的 `group` 参数 |
| whitelistHashtagKeys | String | NO | 针对帖子信息中的 `hashtags` 参数 |
| blacklistHashtagKeys | String | NO | 针对帖子信息中的 `hashtags` 参数 |
| whitelistAuthorKeys | String | NO | 针对帖子信息中的 `author` 参数 |
| blacklistAuthorKeys | String | NO | 针对帖子信息中的 `author` 参数 |
| whitelistQuotedPostKeys | String | NO | 针对帖子信息中的 `quotedPost` 参数 |
| blacklistQuotedPostKeys | String | NO | 针对帖子信息中的 `quotedPost` 参数 |
| whitelistPreviewLikeUserKeys | String | NO | 针对帖子信息中的 `previewLikeUsers` 参数 |
| blacklistPreviewLikeUserKeys | String | NO | 针对帖子信息中的 `previewLikeUsers` 参数 |
| whitelistPreviewCommentKeys | String | NO | 针对帖子信息中的 `previewComments` 参数 |
| blacklistPreviewCommentKeys | String | NO | 针对帖子信息中的 `previewComments` 参数 |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

**接口使用说明**

- `type` 参数用于指定输出我关注对象的帖子列表，以时间线为基础，用户自己发表的帖子也包括在 `user` 时间线当中。
- `type 留空`
    - 我自己发表的帖子。
    - 我关注的用户，他发表的帖子都输出（但不包括私有小组内的帖子）。
    - 我关注的小组，被设置为精华的帖子才输出。
    - 我关注的话题，被设置为精华的帖子才输出（但不包括私有小组内的帖子）。
    - 全站二级精华无论我是否关注了发帖者，都输出（但不包括私有小组内的帖子）。
    - 过滤掉我屏蔽的用户、小组、话题、帖子。
- `type=user`
    - 我自己发表的帖子。
    - 我关注的用户，他发表的帖子都输出（但不包括私有小组内的帖子）。
    - 过滤掉我屏蔽的帖子。
- `type=group`
    - 我关注的小组下的帖子全部输出，不分是否为精华。
    - 过滤掉我屏蔽的用户、话题、帖子。
- `type=hashtag`
    - 我关注的话题下的帖子全部输出，不分是否为精华（但不包括私有小组内的帖子）。
    - 过滤掉我屏蔽的用户、小组、帖子。

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
