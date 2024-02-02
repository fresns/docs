# Post List by Timelines

- Endpoint Path: `/api/fresns/v1/post/timelines`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | *optional* | `user`, `group`, `hashtag`, `geotag`<br>Leave blank to use all |
| langTag | String | *optional* | Filter content by lang |
| contentType | String | *optional* | Filter content by type |
| sincePid | String | *optional* | query new content after this post |
| beforePid | String | *optional* | query old content before this post |
| mapId | Number | *optional* | [Map Service Provider](../../reference/dictionary/maps.md) |
| mapLng | String | *optional* | Map Longitude (For distance calculation) |
| mapLat | String | *optional* | Map Latitude (For distance calculation) |
| filterType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data |
| filterKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterGroupType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `group` parameter in the returned result |
| filterGroupKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterHashtagType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `hashtags` parameter in the returned result |
| filterHashtagKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterGeotagType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `geotag` parameter in the returned result |
| filterGeotagKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterAuthorType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `author` parameter in the returned result |
| filterAuthorKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterQuotedPostType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `quotedPost` parameter in the returned result |
| filterQuotedPostKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterPreviewLikeUserType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `previewLikeUsers` parameter in the returned result |
| filterPreviewLikeUserKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterPreviewCommentType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `previewComments` parameter in the returned result |
| filterPreviewCommentKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Request Description**

- The `type` parameter is used to specify the list of posts to display to my followers based on the timeline, with the user own posts included in the user timeline.
- `type null`
    - I made the post myself.
    - Users I follow whose posts will be output (but not posts in private groups).
    - Posts from groups I follow that are set to digest will be output.
    - Premium digests will be output regardless of whether I follow the poster (but not posts in private groups).
    - Filter out users, groups, hashtags, geotags and posts that I have blocked.
- `type=user`
    - I made the post myself.
    - Users I follow whose posts will be output (but not posts in private groups).
    - Filter out the posts I blocked.
- `type=group`
    - All posts in the groups I follow will be output, whether they are in digest or not.
    - Filter out users, groups, hashtags and posts that I have blocked.

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

- [Common Data Structure -> Post Info](../../reference/data/post.md)
