# User Roles

- Endpoint Path: `/api/v2/global/roles`
- Method: `GET`
- Request: `Query`

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
| ids | String | *optional* | Role `rid`, separated by English commas for multiple roles |
| type | Number | *optional* | `1` Management personnel<br>`2` System settings<br>`3` User operation<br>Leave empty to output all |
| status | Boolean | *optional* | `0` Disable role<br>`1` Enable role<br>Leave empty to output all |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

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
                "type": "Number / Role Type",
                "rid": "Number / Role ID",
                "nicknameColor": "String / Nickname color for users with this role",
                "name": "String / Role name",
                "nameDisplay": "Boolean / Whether to display role name",
                "icon": "String / Role icon URL",
                "iconDisplay": "Boolean / Whether to display role icon",
                "permission": [
                    // All content from roles table permission field
                ],
                "status": "Boolean / Enabled status",
            }
        ]
    }
}
```
