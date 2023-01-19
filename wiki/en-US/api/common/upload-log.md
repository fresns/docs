# Upload Log

- Endpoint Path: `/api/v2/common/upload-log`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | *optional* |
| X-Fresns-Aid-Token | *optional* | *optional* |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | [日志类型](../../database/systems/session-logs.md#日志类型-type) |
| pluginUnikey | String | *optional* | 插件名 |
| objectName | String | **required** | 功能模型名或者接口路径<br>例如模型名 App\Models\Post<br>例如接口路径：/api/v2/account/login |
| objectAction | String | **required** | 行为描述，自定义输入内容 |
| objectResult | Number | **required** | 1.未知或执行中 / 2.成功 / 3.失败 |
| objectOrderId | String | *optional* | 例如发表行为，则代表发表内容的 ID<br>插件行为，凭此 ID 可查询对应插件那边记录的关联信息 |
| deviceToken | String | *optional* | 交互设备 Token<br>例如 iOS Device Token 或 Android Device Token<br>可应用于推送消息 |
| moreJson | Object | *optional* | 其他自定义信息 |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
