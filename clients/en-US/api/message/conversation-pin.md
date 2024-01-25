# [Conversation] Pin Conversation

- Endpoint Path: `/api/fresns/v1/conversation/{uidOrUsername}/pin`
- Method: `PATCH`
- Request: `Rest`

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

**Request Description**

- If not pinned, pin it; if pinned, unpin it.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
