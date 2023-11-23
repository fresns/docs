# Get Upload Token

- Endpoint Path: `/api/v2/global/upload-token`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | Choose one from `image`, `video`, `audio`, `document` |
| name | String | **required** | File name for this upload |
| expireTime | Number | **required** | Expiration time, unit: seconds<br>Up to 600 seconds |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "storageId": "Number / Storage service provider ID, see dictionary key-value",
        "token": "String / SDK upload token requested from the plugin",
        "expireTime": "Number / Expiration time, in seconds" // If not available, output null
    }
}
```
