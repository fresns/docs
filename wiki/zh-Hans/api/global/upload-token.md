# 获取上传凭证

- 接口地址：`/api/v2/global/upload-token`
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
| name | String | YES | 本次上传的文件名 |
| expireTime | Number | YES | 有效期，单位：秒<br>上限 600 秒 |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "storageId": "Number / 存储服务商编号，见字典键值",
        "token": "String / 跟插件索要的 SDK 上传 token",
        "expireTime": "Number / 有效期，单位：秒" //没有则输出 null
    }
}
```

::: details 开发说明
- 转参给系统配置的插件，请求命令字 `getUploadToken`
- 转参时将 `type` Query 参数转换为系统内部的文件[数字编号](../../database/number.md#文件类型)
- 返参 `storageId` 参见[存储服务商编号](../../database/dictionary/storages.md)
:::
