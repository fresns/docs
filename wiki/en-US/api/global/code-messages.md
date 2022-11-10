# Code Messages

- Endpoint Path: `/api/v2/global/code-messages`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | *optional* |
| uid | *optional* | *optional* |
| token | *optional* | *optional* |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| codes | String | **required** | [状态码编号](../error-code.md)，多个以英文逗号隔开 |
| unikey | String | *optional* | 状态码 Unikey，留空将使用默认 Fresns |

**Request Description**

- 该接口查询[状态码](../error-code.md) Message 信息，来自数据表 [code_messages](../../database/systems/code-messages.md)。
- 可以用于视图界面显示多语言提示信息，可与[语言包](../../database/dictionary/language-pack.md)配合使用。

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
