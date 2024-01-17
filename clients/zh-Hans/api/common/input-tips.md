# 输入提示信息

- 接口地址：`/api/fresns/v1/common/input-tips`
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
| type | String | YES | 选其一 `user`, `hashtag` |
| key | String | YES | 关键词 |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "fsid": "String / username 或 hid",
            "name": "String / 用户昵称或话题名",
            "image": "String / 用户头像或话题封面",
            "interaction": {
                "likeStatus": "Boolean / 点赞状态",
                "dislikeStatus": "Boolean / 点踩状态",
                "followStatus": "Boolean / 关注状态",
                "blockStatus": "Boolean / 屏蔽状态",
                "note": "String / 我的互动备注（关注或屏蔽）",
            }
        }
    ]
}
```
