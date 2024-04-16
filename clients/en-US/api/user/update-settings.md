# Update Settings

- Endpoint Path: `/api/fresns/v1/user/settings`
- Method: `PATCH`
- Request: `application/json`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Body Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| conversationPolicy | Number | *optional* | Conversation setting |
| commentPolicy | Number | *optional* | Comment setting |
| deviceToken | String | *optional* | iOS or Android device Token |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
