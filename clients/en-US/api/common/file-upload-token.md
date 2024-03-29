# File S3 Upload Token

- Endpoint Path: `/api/fresns/common/v1/file/upload-token`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | Choose one from `image`, `video`, `audio`, `document` |
| usageType | String | **required** | File usage type<br>`userAvatar`<br>`userBanner`<br>`conversationMessage`<br>`post`<br>`comment`<br>`postDraft`<br>`commentDraft` |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "endpointUrl": "String / Endpoint URL",
        "authToken": "String / Authentication Token (STS)",
        "bucketName": "String / Bucket Name",
        "region": "String / Bucket Region",
        "pathPrefix": "String / Path Prefix",
        "expireTime": "Number / Expiration time, in seconds" // If not available, output null
    }
}
```
