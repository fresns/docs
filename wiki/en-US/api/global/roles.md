# User Roles

- Endpoint Path: `/api/v2/global/roles`
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
| ids | String | *optional* | 角色 rid，多个以英文逗号隔开 |
| type | Number | *optional* | `1` 管理人员类<br>`2` 系统设置类<br>`3` 用户运营类<br>留空输出全部 |
| status | Boolean | *optional* | `0` 停用角色<br>`1` 启用角色<br>留空输出全部 |
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
                "rid": "Number / 角色 ID",
                "nicknameColor": "String / 角色用户的昵称颜色",
                "name": "String / 角色名称",
                "nameDisplay": "Boolean / 是否显示角色名",
                "icon": "String / 角色图标 URL",
                "iconDisplay": "Boolean / 是否显示角色图标",
                "permission": [
                    // roles 表 permission 字段所有内容
                ],
                "status": "Boolean / 启用状态",
            }
        ]
    }
}
```
