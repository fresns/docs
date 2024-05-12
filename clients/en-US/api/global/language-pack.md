# Language Pack

- Endpoint Path: `/api/fresns/v1/global/language-pack`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | *optional* |
| X-Fresns-Aid-Token | *optional* | *optional* |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| langTag | String | *optional* | If null, use the request header `X-Fresns-Client-Lang-Tag` |

**Request Description**

- [Language Pack Contents](../../reference/language-pack.md)

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "keyName": "keyValue",
        "darkMode": "Dark Mode",
    }
}
```
