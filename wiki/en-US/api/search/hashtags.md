# Search Hashtags

- Endpoint Path: `/api/v2/search/hashtags`
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
| ... |  | *optional* | Optional [hashtag list](../hashtag/list.md#query-params) api all parameters |

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
                // Common Data Structure -> Hashtag Info
            }
        ]
    }
}
```
