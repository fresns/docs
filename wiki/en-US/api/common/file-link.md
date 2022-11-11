# File Download Link

- Endpoint Path: `/api/v2/common/file/{fid}/link`
- Method: `GET`
- Request: `Rest` + `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| uid | **required** | **required** |
| token | **required** | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| fid | String | **required** | 要下载的文件 FID |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | 三选一 `post`,`comment`,`extend`,`conversation` |
| fsid | String | **required** | type 参数对应的数据表简写 ID `pid`/`cid`/`eid`/`messageId` |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "originalUrl": "String / 原始文件下载链接"
    }
}
```
