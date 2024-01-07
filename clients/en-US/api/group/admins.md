# Group Admins

- Endpoint Path: `/api/fresns/v1/group/{gid}/admins`
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
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            // Common Data Structure -> User Info
        }
    ]
}
```

- [Common Data Structure -> User Info](../../reference/data/user.md)
