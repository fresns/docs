# Post Interaction Users

- Endpoint Path: `/api/fresns/v1/post/{pid}/interaction/{type}`
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
| pid | String | **required** | Post ID |
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

- List Type
    - `type=likers` Get the list of users who liked `pid`.
    - `type=dislikers` Get the list of users who disliked `pid`.
    - `type=followers` Get the list of users who followed `pid`.
    - `type=blockers` Get the list of users who blocked `pid`.
- Sort by direction
    - `orderDirection` The sort direction is sorted by creation time.
- Judgement of whether to output records
    - `detail.interaction.likePublicRecord`
    - `detail.interaction.dislikePublicRecord`
    - `detail.interaction.followPublicRecord`
    - `detail.interaction.blockPublicRecord`

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
