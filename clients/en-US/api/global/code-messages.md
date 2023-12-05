# Code Messages

- Endpoint Path: `/api/fresns/v1/global/code-messages`
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
| fskey | String | *optional* | Status code fskey, Null to use the default Fresns |
| codes | String | *optional* | [Status code number](../../reference/error-codes.md), more than one separated by a comma, Null to output all |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "code": "message",
        "30000": "Parameter error",
    }
}
```
