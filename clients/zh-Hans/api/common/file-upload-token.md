# 文件 S3 上传令牌

- 接口地址：`/api/fresns/v1/common/file/upload-token`
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
| usageType | String | YES | 文件用途类型<br>`userAvatar`<br>`userBanner`<br>`conversation`<br>`post`<br>`comment`<br>`postDraft`<br>`commentDraft` |
| usageFsid | String | YES | 文件用途 fsid<br>`userAvatar` 传参 `uidOrUsername`<br>`userBanner` 传参 `uidOrUsername`<br>`conversation` 传参 `uidOrUsername`<br>`post` 传参 `pid`<br>`comment` 传参 `cid`<br>`postDraft` 传参 `did`<br>`commentDraft` 传参 `did` |
| type | String | YES | 四选一 `image`,`video`,`audio`,`document` |
| name | String | YES | 文件名 |
| mime | String | YES | 文件 Mime 类型 |
| extension | String | YES | 文件扩展名 |
| size | Number | YES | 单位 `Byte` |
| md5 | String | NO | 文件 MD5 |
| sha | String | NO | 文件 SHA |
| shaType | String | NO | 文件 SHA 类型 |
| width | Number | NO | 图片专用，单位 `px` |
| height | Number | NO | 图片专用，单位 `px` |
| duration | Number | NO | 音视频专用，单位 `秒` |
| warning | String | NO | 文件警告 `none`, `nudity`, `violence`, `sensitive` |
| moreInfo | String | NO | 文件自定义信息，转换为字符串传参 (Object to String) |

- 获取 S3 预签名 URL
- [使用预签名 URL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html)

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
