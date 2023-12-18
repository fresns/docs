# 获取帖子[详情] 历史详情

- 接口地址：`/api/fresns/v1/post/history/{hpid}/detail`
- 请求方式：`GET`
- 传参方式：`Rest` + `Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Path 变量

| 变量名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| hpid | String | YES | 历史帖子 ID |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // 通用数据结构->帖子->历史帖子信息
        }
    }
}
```

- [通用数据结构->帖子->历史帖子信息](../../reference/data/post.md#历史帖子信息)
