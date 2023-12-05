# User Extcredits Records

- Endpoint Path: `/api/fresns/v1/user/extcredits-records`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| extcreditsId | Number | *optional* | Extcredits number (Null to output all) |
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
                "fskey": "String / App fskey",
                "remark": "String / Remark",
                "datetime": "String / Datetime",
                "datetimeFormat": "String / Formatted time",
                "timeAgo": "String / Humanized time",
            }
        ]
    }
}
```
