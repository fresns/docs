# Geotag Interaction Users

- Endpoint Path: `/api/fresns/v1/geotag/{gtid}/interaction/{type}`
- Method: `GET`
- Request: `Rest` + `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Path Variables

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| gtid | String | **required** | Geotag ID |
| type | String | **required** | View type `likers`,`dislikers`,`followers`,`blockers` |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| orderDirection | String | *optional* | Sort by direction `asc`,`desc`, Default: `desc` |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Request Description**

- `type=likers` Get the list of users who liked `gtid`.
- `type=dislikers` Get the list of users who disliked `gtid`.
- `type=followers` Get the list of users who followed `gtid`.
- `type=blockers` Get the list of users who blocked `gtid`.
- The interface will decide whether to output data based on the configuration table settings `Operations > Interaction > View interaction log settings`.
    - `geotag_likers` configuration, whether to output users who liked it
    - `geotag_dislikers` configuration, whether to output users who disliked it
    - `geotag_followers` configuration, whether to output users who followed it
    - `geotag_blockers` configuration, whether to output users who blocked it
- `orderDirection` The sort direction is sorted by creation time.

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
