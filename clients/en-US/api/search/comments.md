# Search Comments

- Endpoint Path: `/api/fresns/v1/search/comments`
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
| followGeotags | Boolean | *optional* | Specified range: In the geotags I follow |
| followPosts | Boolean | *optional* | Specified range: In the posts I follow |
| followComments | Boolean | *optional* | Specified range: In the comments I follow |
| ... |  | *optional* | Optional [comment list](../comment/list.md#query-params) api all parameters |

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
                // Common Data Structure -> Comment Info
            }
        ]
    }
}
```

- [Common Data Structure -> Comment Info](../../reference/data/comment.md)
