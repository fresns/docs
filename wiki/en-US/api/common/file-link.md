# File Download Link

- Endpoint Path: `/api/v2/common/file/{fid}/link`
- Method: `GET`
- Request: `Rest` + `Query`

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
| fid | String | **required** | File to be downloaded FID |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | Choose one from `post`, `comment`, `extend`, `conversation` |
| fsid | String | **required** | Abbreviated ID `pid`/`cid`/`eid`/`messageId` corresponding to the type parameter's data table |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "originalUrl": "String / Download link to original file"
    }
}
```
