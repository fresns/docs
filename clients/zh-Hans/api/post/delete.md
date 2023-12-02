# 删除帖子

- 接口地址：`/fresns-api/v1/post/{pid}`
- 请求方式：`DELETE`
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
| pid | String | YES | 帖子 ID |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
