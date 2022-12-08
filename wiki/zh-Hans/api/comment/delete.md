# 删除评论

- 接口地址：`/api/v2/comment/{cid}`
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
| cid | String | YES | 评论 CID |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

::: details 开发说明
- 删除都要验证评论的作者是否为本人。
- 需要验证用户是否有权删除，有一些内容可能不被允许删除，查询附属信息表 `comment_appends->can_delete` 字段。
:::
