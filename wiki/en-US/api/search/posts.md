# Search Posts

- Endpoint Path: `/api/v2/search/posts`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| searchKey | String | **required** | Search Keywords |
| followUsers | Boolean | NO | 指定范围：我关注的用户发表的 |
| followGroups | Boolean | NO | 指定范围：我关注的小组里 |
| followHashtags | Boolean | NO | 指定范围：我关注的话题里 |
| followPosts | Boolean | NO | 指定范围：我关注的帖子 |
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
