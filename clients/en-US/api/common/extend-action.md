# Extend Action Request

- Endpoint Path: `/api/fresns/v1/common/extend-action`
- Method: `POST`
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
| eid | String | **required** | Extend Content ID |
| key | String | **required** | actions->items->key |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // Common Data Structure -> Extend Content Info -> actions
    }
}
```

- [Common Data Structure -> Extends -> Extend Content Info -> actions](../../reference/data/extends.md#extend-content-info)
