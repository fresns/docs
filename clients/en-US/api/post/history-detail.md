# Post History Detail

- Endpoint Path: `/api/fresns/v1/history/{hpid}/detail`
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
| hpid | String | **required** | History Post ID |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| filterType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data |
| filterKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| filterAuthorType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `author` parameter in the returned result |
| filterAuthorKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // Common Data Structure -> Post -> History Post Info
        }
    }
}
```

- [Common Data Structure -> Post -> History Post Info](../../reference/data/post.md#history-post-info)
