# Update Draft

- Endpoint Path: `/api/fresns/v1/editor/{type}/draft/{did}`
- Method: `PUT`
- Request: `Rest` + `application/json`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Path Variables

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | `post` or `comment` |
| did | String | **required** | Draft ID |

## Body Params

| Key | Type | Required | **Post** Description | **Comment** Description |
| --- | --- | --- | --- | --- |
| editorFskey | String | *optional* | Is it an editor plugin<br>Passing `Fresns` will reset to the default editor |  |
| postQuotePid | String | *optional* | Quoted Post ID<br>Not required | *Post-specific* |
| postGid | String | *optional* | Group | *Post-specific* |
| postTitle | String | *optional* | Title | *Post-specific* |
| postCommentDisabled | Boolean | NO | Whether comments are disabled | *Post-specific* |
| postCommentPrivate  | Boolean | NO | Whether the comment is private<br>Visible only to the comment author and post author | *Post-specific* |
| content | String | *optional* | Content<br>Insert the file in the content in the format `[file:{fid}]` |  |
| isMarkdown | Boolean | *optional* | Is content in MD format |  |
| isAnonymous | Boolean | *optional* | Is it anonymous |  |
| map | Object | *optional* | Location information |  |
| archives | Array | *optional* | Extended parameters |
| extends | Array | *optional* | Extended content |  |
| deleteMap | Boolean | *optional* | Delete location information |  |
| deleteFile | String | *optional* | Delete file, pass `fid` as parameter |  |
| deleteArchive | String | *optional* | Delete extended parameters, pass `code` as parameter |  |
| deleteExtend | String | *optional* | Delete extended content, pass `eid` as parameter |  |

**Request Description**

- For file functionality, use the [File Upload Interface](../common/file-upload.md) to upload files.
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

```json [Extend Content Info]
[
    {
        "eid": "eid",
        "canDelete": true, // Can user delete
        "sortOrder": 9,
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
