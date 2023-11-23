# Block Words

- Endpoint Path: `/api/v2/global/block-words`
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
| type | String | *optional* | Choose one from `content`,`user`,`conversation`<br>leave empty to output all |
| pageSize | Number | *optional* | Number of items per page (default 50 items) |
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
                "word": "String / Processed Word",
                "contentMode": "Number / Content Processing Mode (posts and comments)",
                "userMode": "Number / User Processing Mode (nickname and bio)",
                "conversationMode": "Number / Message Processing Mode (conversation messages)",
                "replaceWord": "String / Replacement Word"
            }
        ]
    }
}
```
