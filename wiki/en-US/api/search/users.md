# Search Users

- Endpoint Path: `/api/v2/search/users`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | **required** |
| uid | *optional* | **required** |
| token | *optional* | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| searchKey | String | **required** | Search Keywords |
| ... |  | *optional* | Optional [user list](../user/list.md#query-params) api all parameters |

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
        "list": [
            {
                // Common Data Structure -> User Info
            }
        ]
    }
}
```
