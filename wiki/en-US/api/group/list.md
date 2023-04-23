# Group List

- Endpoint Path: `/api/v2/group/list`
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
| gid | String | *optional* | Get groups under this gid |
| recommend | Boolean | *optional* | Recommendation status 0. Not recommended / 1. Recommended |
| createDate | String | *optional* | Date created: `today`,`yesterday`,`week`,`lastWeek`,`month`,`lastMonth`,`year`,`lastYear` |
| createDateGt | String | *optional* | Create date greater than `Y-m-d` |
| createDateLt | String | *optional* | Create date less than `Y-m-d` |
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
| orderType | String | *optional* | Sort by type: `like`,`dislike`,`follow`,`block`,`post`,`postDigest`,`createDate`,`rating`<br>Default `rating` |
| orderDirection | String | *optional* | Sort by direction `asc`,`desc`, Default: `asc` |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
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
                // Common Data Structure -> Group Info
            }
        ]
    }
}
```
