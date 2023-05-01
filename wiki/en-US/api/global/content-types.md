# Content Types

- Endpoint Path: `/api/v2/global/{type}/content-types`
- Method: `GET`
- Request: `Rest`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | **required** |
| X-Fresns-Aid-Token | *optional* | **required** |
| X-Fresns-Uid | *optional* | **required** |
| X-Fresns-Uid-Token | *optional* | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
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
            "icon": "String / Service provider icon URL",
            "url": "String / Service provider access URL",
            "badgesType": "Number / Display type 1.Red dot 2.Text 3.Number",
            "badgesValue": "String / Display text or number",
            "pluginRating": {
                "postByAll": [
                    {
                        "id": "Number / For list interface pluginRatingId parameter",
                        "title":"String / Title",
                        "description":"String / Description"
                    }
                ],
                "postByFollow": [
                    // ditto
                ],
                "postByNearby": [
                    // ditto
                ],
                "commentByAll": [
                    // ditto
                ],
                "commentByFollow": [
                    // ditto
                ],
                "commentByNearby": [
                    // ditto
                ]
            }
        }
    ]
}
```
