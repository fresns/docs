# User List

- Endpoint Path: `/api/v2/user/list`
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
| roles | String | *optional* | Specify main role `rid`, separated by commas for multiple values |
| verified | Boolean | *optional* | Verification status |
| gender | Number | *optional* | `gender` field<br>`1` Not set / `2` Male / `3` Female |
| createDate | String | *optional* | Date register: `today`,`yesterday`,`week`,`lastWeek`,`month`,`lastMonth`,`year`,`lastYear` |
| createDateGt | String | *optional* | Register date greater than `Y-m-d` |
| createDateLt | String | *optional* | Register date less than `Y-m-d` |
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
| commentCountGt | Number | *optional* | Total number of comments greater than |
| commentCountLt | Number | *optional* | Total number of comments less than |
| postDigestCountGt | Number | *optional* | Total number of digest posts greater than |
| postDigestCountLt | Number | *optional* | Total number of digest posts less than |
| commentDigestCountGt | Number | *optional* | Total number of digest comments greater than |
| commentDigestCountLt | Number | *optional* | Total number of digest comments less than |
| extcredits1CountGt | Number | *optional* | extcredits1 greater than |
| extcredits1CountLt | Number | *optional* | extcredits1 less than |
| extcredits2CountGt | Number | *optional* | extcredits2 greater than |
| extcredits2CountLt | Number | *optional* | extcredits2 less than |
| extcredits3CountGt | Number | *optional* | extcredits3 greater than |
| extcredits3CountLt | Number | *optional* | extcredits3 less than |
| extcredits4CountGt | Number | *optional* | extcredits4 greater than |
| extcredits4CountLt | Number | *optional* | extcredits4 less than |
| extcredits5CountGt | Number | *optional* | extcredits5 greater than |
| extcredits5CountLt | Number | *optional* | extcredits5 less than |
| orderType | String | *optional* | Sort by type: `createDate`,`random`,`view`,`like`,`dislike`,`follow`,`block`<br>`post`,`comment`,`postDigest`,`commentDigest`<br>`extcredits1`,`extcredits2`,`extcredits3`,`extcredits4`,`extcredits5`<br>Default `createDate` |
| orderDirection | String | *optional* | Sort by direction, default `desc`<br>`asc`,`desc` |
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
                // Common Data Structure -> User Info
            }
        ]
    }
}
```
