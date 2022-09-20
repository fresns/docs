# Block Words

- Endpoint Path: `/api/v2/global/block-words`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | **required** |
| uid | *optional* | **required** |
| token | *optional* | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | *optional* | 三选一传参 `content`,`user`,`dialog`<br>留空输出全部 |
| pageSize | Number | *optional* | 每页显示条数（默认 50 条） |
| page | Number | *optional* | 页码（默认 1） |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "pagination": {
            "total": "Number / How much data in total",
            "pageSize": "Number / How much data on each page",
            "currentPage": "Number / Current page number",
            "lastPage": "Number / Last page number"
        },
        "list": [
            {
                "word": "String / 处理词",
                "contentMode": "Number / 内容处理方式（帖子和评论）", // 1.不处理 2.自动替换 3.禁止发表 4.发表后需审核
                "userMode": "Number / 用户处理方式（昵称和签名）", // 1.不处理 2.自动替换 3.禁止使用
                "dialogMode": "Number / 消息处理方式（会话私信）", // 1.不处理 2.自动替换 3.禁止发送
                "replaceWord": "String / 处理词替换词"
            },
            {
                "word": "String / 处理词",
                "contentMode": "Number / 内容处理方式（帖子和评论）",
                "userMode": "Number / 用户处理方式（昵称和签名）",
                "dialogMode": "Number / 消息处理方式（会话私信）",
                "replaceWord": "String / 处理词替换词"
            }
        ]
    }
}
```
