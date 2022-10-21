# Global Configs

- Endpoint Path: `/api/v2/global/configs`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | *optional* |
| uid | *optional* | *optional* |
| token | *optional* | *optional* |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| keys | String | *optional* | 键名，获取指定键名的配置项，多个以英文逗号隔开 |
| tags | String | *optional* | 键标签，获取指定键标签的配置项，多个以英文逗号隔开 |
| isAll | Boolean | NO | 是否输出全部结果（不分页） |
| pageSize | Number | *optional* | 每页显示条数（默认 50 条） |
| page | Number | *optional* | 页码（默认 1） |

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
        "pagination": {
            "total": "Number / How much data in total",
            "pageSize": "Number / How much data on each page",
            "currentPage": "Number / Current page number",
            "lastPage": "Number / Last page number"
        },
        "list": {
            "key name": "key value",
            "itemKey": "itemValue",
        }
    }
}
```
