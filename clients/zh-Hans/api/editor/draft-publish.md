# 提交发表（或审核）

- 接口地址：`/api/fresns/v1/editor/{type}/draft/{did}`
- 请求方式：`POST`
- 传参方式：`Rest`

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
| type | String | YES | `post` 或 `comment` |
| did | String | YES | 草稿 ID |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "fsid": "String / 正式内容的 pid 或 cid"
    }
}
```
