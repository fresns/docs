# 删除草稿

- 接口地址：`/api/v2/editor/{type}/{draftId}`
- 请求方式：`DELETE`
- 传参方式：`Rest`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| aidToken | YES | YES |
| uid | YES | YES |
| uidToken | YES | YES |

## Rest 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | `post` 或 `comment` |
| draftId | Number | YES | 草稿 ID |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
