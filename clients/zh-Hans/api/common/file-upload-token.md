# 生成 S3 上传文件令牌

- 接口地址：`/api/fresns/v1/common/file/upload-token`
- 请求方式：`POST`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| usageType | String | YES | 文件用途类型 |
| usageFsid | String | YES | 用途目标 fsid |
| archiveCode | String | NO | `elementType` 文件类[扩展档案](../global/archives.md) |
| type | String | YES | 四选一 `image`,`video`,`audio`,`document` |
| name | String | YES | 文件名 |
| mime | String | YES | 文件 Mime 类型 |
| extension | String | YES | 文件扩展名 |
| size | Number | YES | 单位 `Byte` |
| sha | String | NO | 文件 SHA |
| shaType | String | NO | 文件 SHA 类型 |
| width | Number | NO | 图片专用，单位 `px` |
| height | Number | NO | 图片专用，单位 `px` |
| duration | Number | NO | 音视频专用，单位 `秒` |
| warning | String | NO | 文件警告 `none`, `nudity`, `violence`, `sensitive` |
| moreInfo | Object | NO | 文件自定义信息 |

**接口使用说明**

- 获取 S3 预签名 URL
- [使用预签名 URL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html)

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
        "fid": "String / 文件 ID",
        "method": "String / 请求方式",
        "url": "String / 上传地址",
        "headers": "Object / 请求标头",
        "activeMinutes": "Number / 有效期分钟数",
        "expiration": "String / 到期时间 Y-m-d H:i:s" // UTC+0
    }
}
```
