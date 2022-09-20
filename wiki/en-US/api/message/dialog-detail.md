# [Dialog] Detail

- Endpoint Path: `/api/v2/dialog/{dialogId}/detail`
- Method: `GET`
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
| dialogId | Number | **required** | 会话 ID |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "user": {
            // 与我会话的用户信息
            // Common Data Structure -> User Info Profile
        }
    }
}
```
