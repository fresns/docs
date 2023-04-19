# 文件下载链接

- 接口地址：`/api/v2/common/file/{fid}/link`
- 请求方式：`GET`
- 传参方式：`Rest` + `Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## Rest 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| fid | String | YES | 要下载的文件 FID |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | 三选一 `post`,`comment`,`extend`,`conversation` |
| fsid | String | YES | type 参数对应的数据表简写 ID `pid`/`cid`/`eid`/`messageId` |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "originalUrl": "String / 原始文件下载链接"
    }
}
```

::: details 开发说明
- 需要验证文件是否属于对应的来源目标，比如文件是否属于该帖子。
- 帖子附件需要判断帖子是否开启了权限功能 `posts->is_allow`，如果帖子有阅读权限，则判断当前请求下载的用户本身和用户关联的任意角色是否在授权列表 `post_allows` 表。
- 需要判断当前请求用户的主角色权限 `download_file_count` 设置值，计算近 24 小时内，下载次数是否达到了上限（该用户 file_downloads 近 24 小时内的记录数量）。
- 请求后，登记下载记录，记录在 `file_downloads` 表。
:::