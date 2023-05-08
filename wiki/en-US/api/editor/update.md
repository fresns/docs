# Update Draft

- Endpoint Path: `/api/v2/editor/{type}/{draftId}`
- Method: `PUT`
- Request: `Rest` + `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | `post` or `comment` |
| draftId | Number | **required** | Draft ID |

## Body Params

| Parameter Name | Type | Required | **Post** Description | **Comment** Description |
| --- | --- | --- | --- | --- |
| editorFskey | String | *optional* | Is it an editor plugin<br>Passing `Fresns` will reset to the default editor |  |
| postQuotePid | String | *optional* | Quoted post PID<br>Not required | *Post-specific* |
| postGid | String | *optional* | Group | *Post-specific* |
| postTitle | String | *optional* | Title | *Post-specific* |
| postIsCommentDisabled | Boolean | NO | Whether comments are disabled | *Post-specific* |
| postIsCommentPrivate  | Boolean | NO | Whether the comment is private<br>Visible only to the comment author and post author | *Post-specific* |
| content | String | *optional* | Content<br>Insert the file in the content in the format `[file:{fid}]` |  |
| isMarkdown | Boolean | *optional* | Is content in MD format |  |
| isAnonymous | Boolean | *optional* | Is it anonymous |  |
| map | Object | *optional* | Location information |  |
| extends | Array | *optional* | Extended content |  |
| archives | Array | *optional* | Extended parameters |
| deleteMap | Boolean | *optional* | Delete location information |  |
| deleteFile | String | *optional* | Delete file, pass `fid` as parameter |  |
| deleteExtend | String | *optional* | Delete extended content, pass `eid` as parameter |  |
| deleteArchive | String | *optional* | Delete extended parameters, pass `code` as parameter |  |

**Request Description**

- For file functionality, use the [File Upload Interface](../common/upload-file.md) to upload files, with the following parameter examples:
    - `tableName` = Post `post_logs` Comment `comment_logs`
    - `tableColumn` = `id`
    - `tableId` = Current draft ID `{draftId}`
- Location information `map` parameter example:
    - Location information `mapId`, `latitude`, `longitude`, `poi` are required, others are optional
    - `mapId` is from the data dictionary, [Map Service Provider Number](../../database/dictionary/maps.md)
    - To delete (clear) location information, use the `deleteMap` parameter.

**Example Parameters**

::: code-group
```json [Location Info]
{
    "mapId": 2,
    "latitude": 37.3185039,
    "longitude": -122.0288017,
    "scale": 14,
    "continent": "North America",
    "continentCode": "NA",
    "country": "United States",
    "countryCode": "US",
    "region": "California",
    "regionCode": "CA",
    "city": "Santa Clara",
    "cityCode": "SC",
    "district": "Cupertino",
    "address": "10800 Torre Ave, Cupertino, CA 95014",
    "zip": "95014",
    "poi": "Cupertino Library",
    "poiId": "TRDucfBPkhuzzR9a7",
}
```

```json [Extend Content Info]
[
    {
        "eid": "eid",
        "canDelete": true, // Can user delete
        "rating": 9, // Sort by
        "fskey": null
    }
]
```

```json [Extend Archive Info]
[
    {
        "code": "code",
        "value": "value",
        "isPrivate": false, // Private or not (public display or not)
        "fskey": null
    }
]
```
:::

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
