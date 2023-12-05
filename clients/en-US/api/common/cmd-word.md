# Command Word Request

- Endpoint Path: `/api/fresns/v1/common/cmd-word`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | *optional* |
| X-Fresns-Aid-Token | *optional* | *optional* |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Body Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| fskey | String | **required** | app fskey |
| cmdWord | String | **required** | Cmd Word |
| wordBody | Object | *optional* | Word Body |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // Cmd-Word Request Output
    }
}
```
