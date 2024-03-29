# Geotag List

- Endpoint Path: `/api/fresns/v1/geotag/list`
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
| type | Number | *optional* | Specify custom type |
| mapId | Number | *optional* | [Map Service Provider](../../reference/dictionary/maps.md) |
| mapLng | String | *optional* | Map Longitude (For querying nearby geotags) |
| mapLat | String | *optional* | Map Latitude (For querying nearby geotags) |
| createdDays | Number | *optional* | Days created: Geotag created in the specified number of days |
| createdDate | String | *optional* | Date created: `today`,`yesterday`,`week`,`lastWeek`,`month`,`lastMonth`,`year`,`lastYear` |
| createdDateGt | String | *optional* | Created date greater than `Y-m-d` |
| createdDateLt | String | *optional* | Created date less than `Y-m-d` |
| viewCountGt | Number | *optional* | View count greater than |
| viewCountLt | Number | *optional* | View count less than |
| likeCountGt | Number | *optional* | Likes count greater than |
| likeCountLt | Number | *optional* | Likes count less than |
| dislikeCountGt | Number | *optional* | Dislikes count greater than |
| dislikeCountLt | Number | *optional* | Dislikes count less than |
| followCountGt | Number | *optional* | Follows count greater than |
| followCountLt | Number | *optional* | Follows count less than |
| blockCountGt | Number | *optional* | Block count greater than |
| blockCountLt | Number | *optional* | Block count less than |
| postCountGt | Number | *optional* | Total number of posts greater than |
| postCountLt | Number | *optional* | Total number of posts less than |
| postDigestCountGt | Number | *optional* | Total number of digest posts greater than |
| postDigestCountLt | Number | *optional* | Total number of digest posts less than |
| orderType | String | *optional* | Sort by type: `createdTime`,`lastPostTime`,`lastCommentTime`,`random`,`view`,`like`,`dislike`,`follow`,`block`,`post`,`postDigest`<br>Default `createdTime` |
| orderDirection | String | *optional* | Sort by direction, default `desc`<br>`asc`,`desc` |
| filterType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data |
| filterKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

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
                // Common Data Structure -> Geotag Info
            }
        ]
    }
}
```

- [Common Data Structure -> geotag Info](../../reference/data/geotag.md)
