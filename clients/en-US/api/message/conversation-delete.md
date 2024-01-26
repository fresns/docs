# [Conversation] Delete Conversation or Messages

- Endpoint Path: `/api/fresns/v1/conversation/{uidOrUsername}`
- Method: `DELETE`
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
| type | String | **required** | `conversation` or `messages` |
| cmids | String | *optional* | The `messages` option is specialized.<br>separated by English commas for multiple cmid |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
