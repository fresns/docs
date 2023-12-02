# 输入提示信息

- 接口地址：`/fresns-api/v1/common/input-tips`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | 选其一 `user`,`group`,`hashtag`,`geotag`,`extend` |
| key | String | YES | 关键词 |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "fsid": "String / 简写 id 或者 slug",
            "name": "String / 名称（或昵称）",
            "image": "String / 图片链接",
            "followStatus": "Boolean / type=user 专用，关注状态",
        }
    ]
}
```
