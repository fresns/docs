# User Interaction Users

- Endpoint Path: `/api/v2/user/{uidOrUsername}/interaction/{type}`
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
| uidOrUsername | String | **required** | User `uid` or `username` |
| type | String | **required** | Return type `like`,`dislike`,`follow`,`block` |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| orderDirection | String | *optional* | Sort by direction `asc`,`desc`, Default: `desc` |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Request Description**

- `type=like` Get the list of users who liked `uidOrUsername`.
- `type=dislike` Get the list of users who disliked `uidOrUsername`.
- `type=follow` Get the list of users who followed `uidOrUsername`.
- `type=block` Get the list of users who blocked `uidOrUsername`.
- The interface will decide whether to output data based on the configuration table settings `Operations > Interactions > View Interaction Record Settings`.
    - `user_likers` configuration, whether to output users who liked his
    - `user_dislikers` configuration, whether to output users who disliked his
    - `user_followers` configuration, whether to output users who followed his
    - `user_blockers` configuration, whether to output users who blocked his
- If `uidOrUsername` is the logged-in user themselves, it means viewing their own data. When the above configuration is closed, this determines whether to output data.
    - `my_likers` configuration, whether to output users who liked me
    - `my_dislikers` configuration, whether to output users who disliked me
    - `my_followers` configuration, whether to output users who followed me
    - `my_blockers` configuration, whether to output users who blocked me
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
