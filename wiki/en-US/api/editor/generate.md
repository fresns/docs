# Generate Draft

- Endpoint Path: `/api/v2/editor/{type}/generate/{fsid}`
- Method: `POST`
- Request: `Rest`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| uid | **required** | **required** |
| token | **required** | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | `post` 或 `comment` |
| fsid | String | **required** | `pid` 或 `cid` |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // Common Data Structure -> Post Log Info 或者 评论日志信息
        },
        "edit": {
            "editableStatus": "Boolean / 是否可编辑",
            "editableTime": "String / 剩余可编辑时长，例如 03:00 表示剩余 3 分钟",
            "deadlineTime": "String / 剩余可编辑截止具体日期时间，例如 2022-07-01 15:05:00"
        }
    }
}
```