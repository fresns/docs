# Group Tree List

- Endpoint Path: `/api/v2/group/tree`
- Method: `GET`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |

**Request Description**

- This interface will fetch all groups and then assemble them into a tree structure for output.
- The use case of this interface is similar to traditional BBS sections, where all groups (sections) are displayed in a tree structure.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "gid": "String / Group ID",
            "gname": "String / Group name",
            "description": "String / Group description",
            "cover": "String / Group cover image URL",
            "banner": "String / Group banner image URL",
            "groups": [
                {
                    // Common Data Structure -> Group Info
                }
            ]
        }
    ]
}
```
