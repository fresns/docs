# 更新文件信息

- 接口地址：`/api/fresns/v1/common/file/{fid}/info`
- 请求方式：`PATCH`
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
| uploaded | Boolean | NO | [S3 上传成功](file-upload-token.md) |
| warning | String | NO | 文件警告 `none`, `nudity`, `violence`, `sensitive` |
| moreInfo | String | NO | 文件自定义信息，转换为字符串传参 (Object to String) |

**接口使用说明**

- 留空代表不修改。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
