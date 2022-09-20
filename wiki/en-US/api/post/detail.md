# Post Detail

- Endpoint Path: `/api/v2/post/{pid}/detail`
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
| pid | String | **required** | 帖子 PID |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| mapId | Number | *optional* | 地图服务商编号 |
| mapLng | String | *optional* | 地图经度（用于计算距离） |
| mapLat | String | *optional* | 地图纬度（用于计算距离） |

**Request Description**

- 如果是**私有模式**，当过期后 `users > expired_at`，需判断到期后的状态。
    - 配置表 `site_private_end_after` 键值为 `1` 时，该接口不可请求；
    - 键值为 `2` 时，再判断发表时间，如果 `posts > created_at` 发表时间大于失效时间 `users > expired_at`，则不输出；如果发表时间小于失效时间，则代表为失效前的内容，可以输出。

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
            // Common Data Structure -> Post Info
        }
    }
}
```
