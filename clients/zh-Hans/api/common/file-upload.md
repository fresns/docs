# 上传文件

- 接口地址：`/api/fresns/v1/common/file/upload`
- 请求方式：`POST`
- 传参方式：`multipart/form-data`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## Form-data 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| usageType | String | YES | 文件用途类型 |
| usageFsid | String | YES | 用途目标 fsid |
| archiveCode | String | NO | `elementType` 文件类[扩展档案](../global/archives.md) |
| type | String | YES | 四选一 `image`,`video`,`audio`,`document` |
| file | File | YES |  |
| warning | String | NO | 文件警告 `none`, `nudity`, `violence`, `sensitive` |
| moreInfo | String | NO | 文件自定义信息，转换为字符串传参 (Object to String) |

**接口使用说明**

| usageType | usageFsid | archiveCode |
| --- | --- | --- |
| `userAvatar` | 用户的 `uidOrUsername` |  |
| `userBanner` | 用户的 `uidOrUsername` |  |
| `userArchive` | 用户的 `uidOrUsername` | [扩展档案](../global/archives.md) `code` |
| `conversation` | 接收用户的 `uidOrUsername` |  |
| `post` | 帖子 ID `pid` |  |
| `comment` | 评论 ID `comment` |  |
| `postDraft` | 帖子草稿 ID `did` |  |
| `postDraftArchive` | 帖子草稿 ID `did` | [扩展档案](../global/archives.md) `code` |
| `commentDraft` | 评论草稿 ID `did` |  |
| `commentDraftArchive` | 评论草稿 ID `did` | [扩展档案](../global/archives.md) `code` |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // 通用数据结构->文件信息
    }
}
```

- [通用数据结构->文件信息](../../reference/data/file.md)
