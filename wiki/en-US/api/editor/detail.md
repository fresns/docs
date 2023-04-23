# Draft Detail

- Endpoint Path: `/api/v2/editor/{type}/{draftId}`
- Method: `GET`
- Request: `Rest`

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
| type | String | **required** | `post` or `comment` |
| draftId | Number | **required** | Draft ID |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // Common Data Structure -> Post Log Info or Comment Log Info
        },
        "edit": {
            "isEdit": "Boolean / 是否为编辑草稿",
            "editableStatus": "Boolean / 是否可编辑",
            "editableTime": "String / 剩余可编辑时长，例如 03:00 表示剩余 3 分钟",
            "deadlineTime": "String / 剩余可编辑截止具体日期时间，例如 2022-07-01 15:05:00"
        }
    }
}
```
