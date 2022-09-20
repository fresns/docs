# Comment Detail

- Endpoint Path: `/api/v2/comment/{cid}/detail`
- Method: `GET`
- Request: `Rest` + `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | **required** |
| uid | *optional* | **required** |
| token | *optional* | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| cid | String | **required** | 评论 CID |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| mapId | Number | *optional* | 地图服务商编号 |
| mapLng | String | *optional* | 地图经度（用于计算距离） |
| mapLat | String | *optional* | 地图纬度（用于计算距离） |

## Return

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
            // Common Data Structure -> Comment Info
        }
    }
}
```
