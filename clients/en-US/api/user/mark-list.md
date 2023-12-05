# User Mark List

- Endpoint Path: `/api/fresns/v1/user/{uidOrUsername}/mark/{markType}/{listType}`
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
| markType | String | **required** | `like`,`dislike`,`follow`,`block` |
| listType | String | **required** | `users`,`groups`,`hashtags`,`posts`,`comments` |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| orderDirection | String | *optional* | Sort by direction `asc`,`desc`, Default: `desc` |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Request Description**

- Content marked by they actions. Get the content marked by the user `uidOrUsername`.
- Ordered by record time, e.g., for posts, it is sorted by the marking time, not the post creation time.
- The interface will output data based on the configuration table setting `Operations > Interaction Configuration > View Others' Content Settings`.
    - Like configuration `markType=like`
        - `listType=users` Get the list of users they liked, the configuration key `it_like_users` determines whether to output.
        - `listType=groups` Get the list of groups they liked, the configuration key `it_like_groups` determines whether to output.
        - `listType=hashtags` Get the list of hashtags they liked, the configuration key `it_like_hashtags` determines whether to output.
        - `listType=posts` Get the list of posts they liked, the configuration key `it_like_posts` determines whether to output.
        - `listType=comments` Get the list of comments they liked, the configuration key `it_like_comments` determines whether to output.
    - Dislike configuration `markType=dislike`
        - `listType=users` Get the list of users they disliked, the configuration key `it_dislike_users` determines whether to output.
        - `listType=groups` Get the list of groups they disliked, the configuration key `it_dislike_groups` determines whether to output.
        - `listType=hashtags` Get the list of hashtags they disliked, the configuration key `it_dislike_hashtags` determines whether to output.
        - `listType=posts` Get the list of posts they disliked, the configuration key `it_dislike_posts` determines whether to output.
        - `listType=comments` Get the list of comments they disliked, the configuration key `it_dislike_comments` determines whether to output.
    - Follow configuration `markType=follow`
        - `listType=users` Get the list of users they followed, the configuration key `it_follow_users` determines whether to output.
        - `listType=groups` Get the list of groups they followed, the configuration key `it_follow_groups` determines whether to output.
        - `listType=hashtags` Get the list of hashtags they followed, the configuration key `it_follow_hashtags` determines whether to output.
        - `listType=posts` Get the list of posts they followed, the configuration key `it_follow_posts` determines whether to output.
        - `listType=comments` Get the list of comments they followed, the configuration key `it_follow_comments` determines whether to output.
    - Block configuration `markType=block`
        - `listType=users` Get the list of users they blocked, the configuration key `it_block_users` determines whether to output.
        - `listType=groups` Get the list of groups they blocked, the configuration key `it_block_groups` determines whether to output.
        - `listType=hashtags` Get the list of hashtags they blocked, the configuration key `it_block_hashtags` determines whether to output.
        - `listType=posts` Get the list of posts they blocked, the configuration key `it_block_posts` determines whether to output.
        - `listType=comments` Get the list of comments they blocked, the configuration key `it_block_comments` determines whether to output.
- If `uidOrUsername` is the logged-in user themselves, the above configuration is invalid, and the data is output directly, meaning that when viewing their own content, the switch is ignored.
- `orderDirection` The sorting direction is based on the creation time.

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
                // Common Data Structure -> Structural information for the corresponding content type
            }
        ]
    }
}
```
