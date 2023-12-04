# Search Posts

- Endpoint Path: `/fresns-api/v1/search/posts`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| searchKey | String | **required** | Search Keywords |
| followUsers | Boolean | *optional* | Specified range: Published by users I follow |
| followGroups | Boolean | *optional* | Specified range: In the groups I follow |
| followHashtags | Boolean | *optional* | Specified range: In the hashtags I follow |
| followPosts | Boolean | *optional* | Specified range: In the posts I follow |
| ... |  | *optional* | Optional [post list](../post/list.md#query-params) api all parameters |

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
                // Common Data Structure -> Post Info
            }
        ]
    }
}
```
