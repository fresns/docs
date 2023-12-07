# 更新文件警告

- 接口地址：`/api/fresns/v1/file/{fid}/warning`
- 请求方式：`PUT`
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
| warning | String | NO | 文件警告 `nudity`, `violence`, `sensitive` |

**接口使用说明**

- 参数 `warning` 留空则清空已有警告配置。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
