# Followers You Know

- Endpoint Path: `/api/fresns/v1/user/{uidOrUsername}/followers-you-follow`
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
| uidOrUsername | Number / String | **required** | User `uid` or `username` |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| filterType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data |
| filterKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Request Description**

- The interface will output data based on the configuration table setting `Operations > Interaction > View user content settings > Which of the user's content can be viewed by others`.
    - Followers you know
    - Configuration key `it_followers_you_follow`
- Unauthenticated requests are also allowed, but the output will be an empty list.

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
