# Group Interaction Users

- Endpoint Path: `/api/v2/group/{gid}/interaction/{type}`
- Method: `GET`
- Request: `Rest` + `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| gid | String | **required** | Group GID |
| type | String | **required** | View Type `likes`,`dislikes`,`follows`,`blocks` |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| orderDirection | String | *optional* | Sort by direction `asc`,`desc`, Default: `desc` |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Request Description**

- `type=likes` Get the list of users who liked `gid`.
- `type=dislikes` Get the list of users who disliked `gid`.
- `type=follows` Get the list of users who followed `gid`.
- `type=blocks` Get the list of users who blocked `gid`.
- The interface will decide whether to output data based on the configuration table settings `Operations > Interaction > View interaction log settings`.
    - `group_likers` configuration, whether to output users who liked it
    - `group_dislikers` configuration, whether to output users who disliked it
    - `group_followers` configuration, whether to output users who followed it
    - `group_blockers` configuration, whether to output users who blocked it
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
                // Common Data Structure -> User Info
            }
        ]
    }
}
```
