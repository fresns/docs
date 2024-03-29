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
| type | String | YES | 四选一 `image`,`video`,`audio`,`document` |
| usageType | String | YES | 文件用途类型<br>`userAvatar`<br>`userBanner`<br>`conversationMessage`<br>`post`<br>`comment`<br>`postDraft`<br>`commentDraft` |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "endpointUrl": "String / 服务 URL",
        "authToken": "String / 临时上传凭证 STS",
        "bucketName": "String / 存储桶名称",
        "region": "String / 存储桶区域",
        "pathPrefix": "String / 上传路径前缀",
        "expireTime": "Number / 有效期，单位：秒", //没有则输出 null
    }
}
```
