# Upload Log

- Endpoint Path: `/fresns-api/v1/common/upload-log`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | *optional* |
| X-Fresns-Aid-Token | *optional* | *optional* |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Body Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | **required** | [Log Type](../../database/systems/session-logs.md#log-type) |
| fskey | String | *optional* | Plugin name |
| objectName | String | **required** | Function model name or interface path<br>For example, model name: App\Models\Post<br>For example, interface path: /fresns-api/v1/account/login |
| objectAction | String | **required** | Action description, custom input content |
| objectResult | Number | **required** | 1. Unknown or in progress / 2. Success / 3. Failure |
| objectOrderId | String | *optional* | For example, if it is a publishing action, it represents the ID of the published content<br>Plugin actions, this ID can be used to query the associated information recorded by the corresponding plugin |
| moreJson | Object | *optional* | Other custom information |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
