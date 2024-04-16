# File Update Info

- Endpoint Path: `/api/fresns/common/v1/file/{fid}/info`
- Method: `PATCH`
- Request: `application/json`

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
| fid | String | **required** | File FID |

## Body Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| uploaded | Boolean | *optional* | [S3 uploaded successfully](file-upload-token.md) |
| warning | String | *optional* | File Warning `none`, `nudity`, `violence`, `sensitive` |

**Request Description**

- Null to not modify.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // Common Data Structure -> File Info
    }
}
```

- [Common Data Structure -> File Info](../../reference/data/file.md)
