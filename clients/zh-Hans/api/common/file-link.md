# 文件下载链接

- 接口地址：`/api/fresns/v1/common/file/{fid}/link`
- 请求方式：`GET`
- 传参方式：`Rest` + `Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## Path 变量

| 变量名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| fid | String | YES | 要下载的文件 FID |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | `post`, `comment`, `conversation` |
| fsid | String | YES | type 参数对应的数据表简写 ID `pid`, `cid`, `cmid` |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "link": "String / 原始文件下载链接"
    }
}
```
