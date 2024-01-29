# Group Creator

- Endpoint Path: `/api/fresns/v1/group/{gid}/creator`
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
| gid | String | **required** | Group GID |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| filterType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data |
| filterKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |

**Request Description**

- null if no creator

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // Common Data Structure -> User Info
    }
}
```

- [Common Data Structure -> User Info](../../reference/data/user.md)
