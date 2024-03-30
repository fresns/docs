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
| usageType | String | YES | 文件用途类型<br>`userAvatar`<br>`userBanner`<br>`conversation`<br>`post`<br>`comment`<br>`postDraft`<br>`commentDraft` |
| usageFsid | String | YES | 文件用途 fsid<br>`userAvatar` 传参 `uidOrUsername`<br>`userBanner` 传参 `uidOrUsername`<br>`conversation` 传参 `uidOrUsername`<br>`post` 传参 `pid`<br>`comment` 传参 `cid`<br>`postDraft` 传参 `did`<br>`commentDraft` 传参 `did` |
| type | String | YES | 四选一 `image`,`video`,`audio`,`document` |
| file | File | YES |  |
| warning | String | NO | 文件警告 `none`, `nudity`, `violence`, `sensitive` |
| moreInfo | String | NO | 文件自定义信息，转换为字符串传参 (Object to String) |

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
