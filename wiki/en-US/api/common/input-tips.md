# Input Tips

- Endpoint Path: `/api/v2/common/input-tips`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | 选其一 `user`,`group`,`hashtag`,`post`,`extend` |
| key | String | **required** | 关键词 |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "fsid": "String / 简写 id 或者 slug",
            "name": "String / 名称",
            "image": "String / 图片链接",
            "nickname": "String / type=user 专用，昵称",
            "followStatus": "Boolean / type=user 专用，关注状态",
        }
    ]
}
```
