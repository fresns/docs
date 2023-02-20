# File Download Users

- Endpoint Path: `/api/v2/common/file/{fid}/users`
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
| fid | String | **required** | 要下载的文件 FID |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| whitelistKeys | String | *optional* | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistKeys | String | *optional* | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| pageSize | Number | *optional* | 每页显示条数（默认 15 条） |
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
                "downloadTime": "String / 下载时间",
                "downloadTimeFormat": "String / 下载时间",
                "downloadUser": {
                    // Common Data Structure -> User Info
                }
            }
        ]
    }
}
```
