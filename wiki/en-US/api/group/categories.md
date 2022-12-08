# Group Categories

- Endpoint Path: `/api/v2/group/categories`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | **required** |
| aidToken | *optional* | **required** |
| uid | *optional* | **required** |
| uidToken | *optional* | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| pageSize | Number | *optional* | 每页显示条数（默认 30 条） |
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
                "gid": "String / 小组分类 ID",
                "gname": "String / 小组分类名称",
                "description": "String / 小组分类描述",
                "cover": "String / 小组分类封面图地址",
                "banner": "String / 小组分类条幅图地址"
            }
        ]
    }
}
```
