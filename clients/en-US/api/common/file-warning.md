# File Update Warning

- Endpoint Path: `/api/fresns/v1/common/file/{fid}/warning`
- Method: `PUT`
- Request: `application/json`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Body Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| warning | String | *optional* | File Warning `nudity`, `violence`, `sensitive` |

**Request Description**

- `warning` parameter null this parameter blank to clear the existing warning configuration.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
