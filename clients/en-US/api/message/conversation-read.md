# [Conversation] Mark As Read

- Endpoint Path: `/api/fresns/v1/conversation/{uidOrUsername}/read-status`
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
| uidOrUsername | Number / String | **required** | User `uid` or `username` |

## Body Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| cmids | String | *optional* | separated by English commas for multiple cmid |

**Request Description**

- cmids Leave null to mark the entire conversation as read.
- Use the `cmids` parameter to set specified ID messages as read in bulk.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
