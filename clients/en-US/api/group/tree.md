# Group Tree List

- Endpoint Path: `/api/fresns/v1/group/tree`
- Method: `GET`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |

**Request Description**

- This interface will fetch all groups and then assemble them into a tree structure for output.
- This interface is not available if the total number of groups exceeds 100.
- The use case of this interface is similar to traditional BBS sections, where all groups (sections) are displayed in a tree structure.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            // Common Data Structure -> Group Info
            "groups": [
                {
                    // Common Data Structure -> Group Info
                }
            ]
        }
    ]
}
```
