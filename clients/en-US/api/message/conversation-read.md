# [Conversation] Mark As Read

- Endpoint Path: `/api/fresns/v1/conversation/read-status`
- Method: `PATCH`
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
| type | String | **required** | `conversation` or `message` |
| cvid | String | *optional* |  |
| cmids | String | *optional* | separated by English commas for multiple id |

**Request Description**

- Choose either `cvid` or `cmids` to pass as a parameter, but not both.
- `type = conversation`: Use the `cvid` parameter to set the current conversation as read, not including messages within the conversation.
- `type = message`: Use the `cmids` parameter to set specified ID messages as read in bulk.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
