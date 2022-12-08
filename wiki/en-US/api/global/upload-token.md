# Get Upload Token

- Endpoint Path: `/api/v2/global/upload-token`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| aidToken | **required** | **required** |
| uid | **required** | **required** |
| uidToken | **required** | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | 四选一 `image`,`video`,`audio`,`document` |
| name | String | **required** | 本次上传的文件名 |
| expireTime | Number | **required** | 有效期，单位：秒<br>上限 600 秒 |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "storageId": "Number / 存储服务商编号，见字典键值",
        "token": "String / 跟插件索要的 SDK 上传 token",
        "expireTime": "Number / 有效期，单位：秒" //没有则输出 null
    }
}
```
