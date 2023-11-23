# Global Configs

- Endpoint Path: `/api/v2/global/configs`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | *optional* |
| X-Fresns-Aid-Token | *optional* | *optional* |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| keys | String | *optional* | Key names, get the configuration items of the specified key names, separated by English commas for multiple keys |
| tags | String | *optional* | Key tags, get the configuration items of the specified key tags, separated by English commas for multiple tags |

**Request Description**

- This interface queries the contents of [configs table](../../database/systems/configs.md). Please refer to the introduction of [configuration key names](../../database/keyname/) for details.
- Enter the `keys` parameter, query the `item_key` field, and output the specified key value.
- Enter `tags` parameters, query the `item_tag` field, and specify all parameters for outputting this tag.
- Two parameters, `keys` and `tags`, are left blank to represent all configurations of the output.
- Both parameters are filled in. If one of the conditions is met, then output. It is not necessary to meet both conditions.

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
