# Update Draft

- Endpoint Path: `/api/fresns/v1/editor/{type}/draft/{did}`
- Method: `PATCH`
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

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| editorFskey | String | *optional* | Is it a plugin editor, empty means no |
| quotePid | String | *optional* | Post-Only: Quoted Post ID |
| gid | String | *optional* | Post-Only: Group |
| title | String | *optional* | Post-Only: Title |
| content | String | *optional* | Content<br>Insert the file in the content in the format `[file:{fid}]` |
| isMarkdown | Boolean | *optional* | Content in MD format |
| isAnonymous | Boolean | *optional* | Anonymous |
| commentPolicy | Number | *optional* | Post-Only: Who can comment?<br>`1` Everyone `2` People you follow `3` People you follow or verified `4` No one is allowed `5` Only users you mention |
| commentPrivate | Boolean | *optional* | `Post` Are all comments private<br>`Comment` Is this comment private<br>Private is only visible to the author of the comment and the author of the post. |
| gtid | String | *optional* | Geotag ID |
| locationInfo | Object | *optional* | Location Info |
| archives | Array | *optional* | Archive Parameter |
| extends | Array | *optional* | Extend Content |
| deleteLocation | Boolean | *optional* | Delete `locationInfo` |
| deleteArchive | String | *optional* | Delete archive parameter, pass `code` as parameter |
| deleteExtend | String | *optional* | Delete extend content, pass `eid` as parameter |
| deleteFile | String | *optional* | Delete file, pass `fid` as parameter |

**Request Description**

- For file functionality, use the [File Upload Interface](../file/uploads.md) to upload files.
- When published, the location information `locationInfo` is not used, even if it has a `gtid` value.

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
