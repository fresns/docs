# User List

- Endpoint Path: `/api/fresns/v1/user/list`
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
| roles | String | *optional* | Specify main role `rid`, separated by commas for multiple values |
| verified | Boolean | *optional* | Verification status |
| gender | Number | *optional* | `gender` field<br>1.Null 2.Female / 3.Male / 4.Custom |
| createdDays | Number | *optional* | Days register: User register in the specified number of days |
| createdDate | String | *optional* | Date register: `today`,`yesterday`,`week`,`lastWeek`,`month`,`lastMonth`,`year`,`lastYear` |
| createdDateGt | String | *optional* | Register date greater than `Y-m-d` |
| createdDateLt | String | *optional* | Register date less than `Y-m-d` |
| viewCountGt | Number | *optional* | View count greater than |
| viewCountLt | Number | *optional* | View count less than |
| likerCountGt | Number | *optional* | Liker count greater than |
| likerCountLt | Number | *optional* | Liker count less than |
| dislikerCountGt | Number | *optional* | Disliker count greater than |
| dislikerCountLt | Number | *optional* | Disliker count less than |
| followerCountGt | Number | *optional* | Follower count greater than |
| followerCountLt | Number | *optional* | Follower count less than |
| blockerCountGt | Number | *optional* | Blocker count greater than |
| blockerCountLt | Number | *optional* | Blocker count less than |
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
| orderType | String | *optional* | Sort by type: `createdTime`,`random`,`view`,`liker`,`disliker`,`follower`,`blocker`<br>`post`,`comment`,`postDigest`,`commentDigest`<br>`extcredits1`,`extcredits2`,`extcredits3`,`extcredits4`,`extcredits5`<br>Default `createdTime` |
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
                // Common Data Structure -> User Info
            }
        ]
    }
}
```

- [Common Data Structure -> User Info](../../reference/data/user.md)
