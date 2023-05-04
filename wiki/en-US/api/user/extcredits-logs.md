# User Extcredits Logs

- Endpoint Path: `/api/v2/user/extcredits-logs`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| extcreditsId | Number | *optional* | Extcredits number (leave empty to output all) |
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
                "extcreditsId": "Number / Extcredits number",
                "type": "String / Operation type, increment or decrement",
                "amount": "Number / Amount",
                "openingAmount": "Number / Opening amount",
                "closingAmount": "Number / Closing amount",
                "fskey": "String / Plugin fskey",
                "remark": "String / Remark",
                "createdDatetime": "String / Creation time",
                "createdTimeAgo": "String / Human-friendly time since creation",
            }
        ]
    }
}
```
