# Global Configs

- Endpoint Path: `/api/fresns/v1/global/configs`
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
| keys | String | *optional* | key name, get the configuration item with the specified key name<br>Multiple outputs separated by commas, Null to output all |

**Request Description**

- [Viewing the Global Configuration](../../reference/configs.md)

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "itemKey": "itemValue",
        "key name": "key value",
    }
}
```
