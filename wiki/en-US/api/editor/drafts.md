# Draft List

- Endpoint Path: `/api/v2/editor/{type}/drafts`
- Method: `GET`
- Request: `Rest` + `Query`

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
| type | String | **required** | `post` 或 `comment` |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| status | Number | *optional* | 1.可编辑草稿 / 2.审核中草稿<br>留空输出全部 |
| pageSize | Number | *optional* | 每页显示条数（默认 15 条） |
| page | Number | *optional* | 页码（默认 1） |

## Return

**帖子**

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
                // Common Data Structure -> Post Log Info 或者 评论日志信息
            }
        ]
    }
}
```
