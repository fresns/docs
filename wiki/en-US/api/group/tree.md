# Group Tree List

- Endpoint Path: `/api/v2/group/tree`
- Method: `GET`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | **required** |
| uid | *optional* | **required** |
| token | *optional* | **required** |

**Request Description**

- 本接口将获取全部小组，然后组装成树结构输出。
- 本接口使用场景类似于传统 BBS 版区，以树结构平铺所有小组（版区）。

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "gid": "String / 小组 ID",
            "gname": "String / 小组名称",
            "description": "String / 小组描述",
            "cover": "String / 小组封面图地址",
            "banner": "String / 小组条幅图地址",
            "groups": [
                {
                    // Common Data Structure -> Group Info
                }
            ]
        }
    ]
}
```
