# Content Types

- Endpoint Path: `/fresns-api/v1/global/{type}/content-types`
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
| type | String | **required** | `post`,`comment` |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "fskey": "String / Plugin Fskey",
            "name": "String / Name",
            "icon": "String / Service provider icon URL"
        }
    ]
}
```
