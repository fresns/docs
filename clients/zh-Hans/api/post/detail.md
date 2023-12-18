# 获取帖子[详情]

- 接口地址：`/api/fresns/v1/post/{pid}/detail`
- 请求方式：`GET`
- 传参方式：`Rest` + `Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Path 变量

| 变量名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| pid | String | YES | 帖子 ID |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| mapId | Number | NO | [地图服务商编号](../../reference/dictionary/maps.md) |
| mapLng | String | NO | 地图经度（用于计算距离） |
| mapLat | String | NO | 地图纬度（用于计算距离） |
| whitelistKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| whitelistGroupKeys | String | NO | 针对帖子信息中的 `group` 参数 |
| blacklistGroupKeys | String | NO | 针对帖子信息中的 `group` 参数 |
| whitelistHashtagKeys | String | NO | 针对帖子信息中的 `hashtags` 参数 |
| blacklistHashtagKeys | String | NO | 针对帖子信息中的 `hashtags` 参数 |
| whitelistGeotagKeys | String | NO | 针对帖子信息中的 `geotag` 参数 |
| blacklistGeotagKeys | String | NO | 针对帖子信息中的 `geotag` 参数 |
| whitelistAuthorKeys | String | NO | 针对帖子信息中的 `author` 参数 |
| blacklistAuthorKeys | String | NO | 针对帖子信息中的 `author` 参数 |
| whitelistQuotedPostKeys | String | NO | 针对帖子信息中的 `quotedPost` 参数 |
| blacklistQuotedPostKeys | String | NO | 针对帖子信息中的 `quotedPost` 参数 |
| whitelistPreviewLikeUserKeys | String | NO | 针对帖子信息中的 `previewLikeUsers` 参数 |
| blacklistPreviewLikeUserKeys | String | NO | 针对帖子信息中的 `previewLikeUsers` 参数 |
| whitelistPreviewCommentKeys | String | NO | 针对帖子信息中的 `previewComments` 参数 |
| blacklistPreviewCommentKeys | String | NO | 针对帖子信息中的 `previewComments` 参数 |

**接口使用说明**

- 如果是**私有模式**，当过期后 `users->expired_at`，需判断到期后的状态。
    - 配置表 `site_private_end_after` 键值为 `1` 时，该接口不可请求；
    - 键值为 `2` 时，再判断发表时间，如果 `posts->created_at` 发表时间大于失效时间 `users->expired_at`，则不输出；如果发表时间小于失效时间，则代表为失效前的内容，可以输出。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "items": {
            "title": "String / SEO 标题",
            "keywords": "String / SEO 关键词",
            "description": "String / SEO 描述"
        },
        "detail": {
            // 通用数据结构->帖子信息
        }
    }
}
```

- [通用数据结构->帖子信息](../../reference/data/post.md)
