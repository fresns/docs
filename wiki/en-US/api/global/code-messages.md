# Code Messages

- Endpoint Path: `/api/v2/global/code-messages`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | *optional* |
| X-Fresns-Aid-Token | *optional* | *optional* |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| unikey | String | *optional* | Status code Unikey, leave empty to use the default Fresns |
| isAll | Boolean | *optional* | Whether to output all `unikey` results |
| codes | String | *optional* | [Status code number](../error-code.md), separated by English commas for multiple codes |

**Request Description**

- This interface queries the Message information of the [status code](../error-code.md), which comes from the data table [code_messages](../../database/systems/code-messages.md).
- Either `isAll` or `codes` should be passed as a parameter.
- It can be used to display multi-language prompt information on the view interface, and can be used in conjunction with the [language pack](../../database/dictionary/language-pack.md).

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "code": "message",
        "30000": "Parameter error",
    }
}
```
