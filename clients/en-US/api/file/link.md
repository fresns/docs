# File Download Link

- Endpoint Path: `/api/fresns/v1/file/{fid}/link`
- Method: `GET`
- Request: `Rest` + `Query`

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
| fid | String | **required** | File to be downloaded FID |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | Choose one from `post`, `comment`, `conversation` |
| fsid | String | **required** | Abbreviated ID `pid`, `cid`, `cmid` corresponding to the type parameter's data table |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "link": "String / Download link to original file"
    }
}
```
