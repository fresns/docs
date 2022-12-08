# 获取话题[详情]

- 接口地址：`/api/v2/hashtag/{hid}/detail`
- 请求方式：`GET`
- 传参方式：`Rest`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | NO | YES |
| aidToken | NO | YES |
| uid | NO | YES |
| uidToken | NO | YES |

## Rest 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| hid | String | YES | 话题 slug |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "items": {
            "title": "String / SEO 标题",
            "keywords": "String / SEO 关键词",
            "description": "String / SEO 描述"
        },
        "detail": {
            // 通用数据结构->话题信息
        }
    }
}
```
