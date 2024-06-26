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
| markType | String |  **required** | `like`,`dislike`,`follow`,`block` |
| listType | String | **required** | `users`,`groups`,`hashtags`,`geotags`,`posts`,`comments` |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| orderDirection | String | *optional* | Sort by direction `asc`,`desc`, Default: `desc` |
| filterType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data |
| filterKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Post list Query Params**

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| filterGroupType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `group` parameter in the returned result |
| filterGroupKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterHashtagType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `hashtags` parameter in the returned result |
| filterHashtagKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterGeotagType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `geotag` parameter in the returned result |
| filterGeotagKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterAuthorType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `author` parameter in the returned result |
| filterAuthorKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterQuotedPostType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `quotedPost` parameter in the returned result |
| filterQuotedPostKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterPreviewLikeUserType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `previewLikeUsers` parameter in the returned result |
| filterPreviewLikeUserKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterPreviewCommentType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `previewComments` parameter in the returned result |
| filterPreviewCommentKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |

**Comment list Query Params**

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| filterHashtagType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `hashtags` parameter in the returned result |
| filterHashtagKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterGeotagType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `geotag` parameter in the returned result |
| filterGeotagKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterAuthorType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `author` parameter in the returned result |
| filterAuthorKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterPreviewLikeUserType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `previewLikeUsers` parameter in the returned result |
| filterPreviewLikeUserKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterPreviewCommentType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `previewComments` parameter in the returned result |
| filterPreviewCommentKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterReplyToPostType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `replyToPost` parameter in the returned result |
| filterReplyToPostKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterReplyToCommentType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `replyToComment` parameter in the returned result |
| filterReplyToCommentKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |

**Request Description**

- Content marked by they actions. Get the content marked by the user `uidOrUsername`.
- Ordered by record time, e.g., for posts, it is sorted by the marking time, not the post creation time.
- Judgement of whether to output records
    - Like configuration `markType=like`
        - `listType=users` Get the list of users they liked, the config key `profile_likes_users_enabled`
        - `listType=groups` Get the list of groups they liked, the config key `profile_likes_groups_enabled`
        - `listType=hashtags` Get the list of hashtags they liked, the config key `profile_likes_hashtags_enabled`
        - `listType=geotags` Get the list of geotags they liked, the config key `profile_likes_geotags_enabled`
        - `listType=posts` Get the list of posts they liked, the config key `profile_likes_posts_enabled`
        - `listType=comments` Get the list of comments they liked, the config key `profile_likes_comments_enabled`
    - Dislike configuration `markType=dislike`
        - `listType=users` Get the list of users they disliked, the config key `profile_dislikes_users_enabled`
        - `listType=groups` Get the list of groups they disliked, the config key `profile_dislikes_groups_enabled`
        - `listType=hashtags` Get the list of hashtags they disliked, the config key `profile_dislikes_hashtags_enabled`
        - `listType=geotags` Get the list of geotags they disliked, the config key `profile_dislikes_geotags_enabled`
        - `listType=posts` Get the list of posts they disliked, the config key `profile_dislikes_posts_enabled`
        - `listType=comments` Get the list of comments they disliked, the config key `profile_dislikes_comments_enabled`
    - Follow configuration `markType=follow`
        - `listType=users` Get the list of users they followed, the config key `profile_following_users_enabled`
        - `listType=groups` Get the list of groups they followed, the config key `profile_following_groups_enabled`
        - `listType=hashtags` Get the list of hashtags they followed, the config key `profile_following_hashtags_enabled`
        - `listType=geotags` Get the list of geotags they followed, the config key `profile_following_geotags_enabled`
        - `listType=posts` Get the list of posts they followed, the config key `profile_following_posts_enabled`
        - `listType=comments` Get the list of comments they followed, the config key `profile_following_comments_enabled`
    - Block configuration `markType=block`
        - `listType=users` Get the list of users they blocked, the config key `profile_blocking_users_enabled`
        - `listType=groups` Get the list of groups they blocked, the config key `profile_blocking_groups_enabled`
        - `listType=hashtags` Get the list of hashtags they blocked, the config key `profile_blocking_hashtags_enabled`
        - `listType=geotags` Get the list of geotags they blocked, the config key `profile_blocking_geotags_enabled`
        - `listType=posts` Get the list of posts they blocked, the config key `profile_blocking_posts_enabled`
        - `listType=comments` Get the list of comments they blocked, the config key `profile_blocking_comments_enabled`
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

- [Common Data Structure -> User Info](../../reference/data/user.md)
- [Common Data Structure -> Group Info](../../reference/data/group.md)
- [Common Data Structure -> Hashtag Info](../../reference/data/hashtag.md)
- [Common Data Structure -> geotag Info](../../reference/data/geotag.md)
- [Common Data Structure -> Post Info](../../reference/data/post.md)
- [Common Data Structure -> Comment Info](../../reference/data/comment.md)
