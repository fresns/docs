# Post Detail

- Endpoint Path: `/fresns-api/v1/post/{pid}/detail`
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

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| mapId | Number | *optional* | [Map Service Provider](../../reference/dictionary/maps.md) |
| mapLng | String | *optional* | Map Longitude (For distance calculation) |
| mapLat | String | *optional* | Map Latitude (For distance calculation) |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| whitelistGroupKeys | String | *optional* | For the `group` parameter in the post information |
| blacklistGroupKeys | String | *optional* | For the `group` parameter in the post information |
| whitelistHashtagKeys | String | *optional* | For the `hashtags` parameter in the post information |
| blacklistHashtagKeys | String | *optional* | For the `hashtags` parameter in the post information |
| whitelistAuthorKeys | String | *optional* | For the `author` parameter in the post information |
| blacklistAuthorKeys | String | *optional* | For the `author` parameter in the post information |
| whitelistQuotedPostKeys | String | *optional* | For the `quotedPost` parameter in the post information |
| blacklistQuotedPostKeys | String | *optional* | For the `quotedPost` parameter in the post information |
| whitelistPreviewLikeUserKeys | String | *optional* | For the `previewLikeUsers` parameter in the post information |
| blacklistPreviewLikeUserKeys | String | *optional* | For the `previewLikeUsers` parameter in the post information |
| whitelistPreviewCommentKeys | String | *optional* | For the `previewComments` parameter in the post information |
| blacklistPreviewCommentKeys | String | *optional* | For the `previewComments` parameter in the post information |

**Request Description**

- If in `private` mode, when expired at `users->expired_at`, you need to determine the status after expiration.
    - When the key value of the configuration table `site_private_end_after` is `1`, this interface cannot be requested;
    - When the key value is `2`, further judge the posting time. If `posts->created_at` posting time is greater than the expiration time `users->expired_at`, it will not be output; if the posting time is less than the expiration time, it means the content was posted before expiration and can be output.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "items": {
            "title": "String / SEO Title",
            "keywords": "String / SEO Keywords",
            "description": "String / SEO Description"
        },
        "detail": {
            // Common Data Structure -> Post Info
        }
    }
}
```
