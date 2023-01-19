# 获取小组[详情]

- 接口地址：`/api/v2/group/{gid}/detail`
- 请求方式：`GET`
- 传参方式：`Rest`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Rest 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| gid | String | YES | 小组 GID |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "items": {
            "title": "String / SEO 标题",
            "keywords": "String / SEO 关键词",
            "description": "String / SEO 描述",
            "extensions": [
                {
                    // 小组的扩展
                    // 通用数据结构->扩展功能信息
                }
            ]
        },
        "detail": {
            // 通用数据结构->小组信息
        }
    }
}
```
