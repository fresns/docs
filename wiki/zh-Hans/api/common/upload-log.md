# 上传日志

- 接口地址：`/api/v2/common/upload-log`
- 请求方式：`POST`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | NO |
| X-Fresns-Aid-Token | NO | NO |
| X-Fresns-Uid | NO | NO |
| X-Fresns-Uid-Token | NO | NO |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | [日志类型](../../database/systems/session-logs.md#日志类型-type) |
| pluginUnikey | String | NO | 插件名 |
| objectName | String | YES | 功能模型名或者接口路径<br>例如模型名 App\Models\Post<br>例如接口路径：/api/v2/account/login |
| objectAction | String | YES | 行为描述，自定义输入内容 |
| objectResult | Number | YES | 1.未知或执行中 / 2.成功 / 3.失败 |
| objectOrderId | String | NO | 例如发表行为，则代表发表内容的 ID<br>插件行为，凭此 ID 可查询对应插件那边记录的关联信息 |
| deviceToken | String | NO | 交互设备 Token<br>例如 iOS Device Token 或 Android Device Token<br>可应用于推送消息 |
| moreJson | Object | NO | 其他自定义信息 |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
