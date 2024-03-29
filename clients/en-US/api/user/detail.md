# User Detail

- Endpoint Path: `/api/fresns/v1/user/{uidOrUsername}/detail`
- Method: `GET`
- Request: `Rest`

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

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "items": {
            "title": "String / SEO Title",
            "keywords": "String / SEO Keywords",
            "description": "String / SEO Description",
            "manages": [
                {
                    // User manage extensions
                    // Common Data Structure -> Extend Function Info
                }
            ],
        },
        "detail": {
            // Common Data Structure -> User Info
        }
    }
}
```

- [Common Data Structure -> Extends -> Extend Function Info](../../reference/data/extends.md#extend-function-info)
- [Common Data Structure -> User Info](../../reference/data/user.md)
