# 用户角色

- 接口地址：`/api/fresns/v1/global/roles`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| rids | String | NO | 角色 rid，多个以英文逗号隔开 |
| status | Boolean | NO | `0` 停用角色<br>`1` 启用角色<br>留空输出全部 |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "pagination": {
            "total": "Number / 一共有多少条数据",
            "pageSize": "Number / 每页有多少条数据",
            "currentPage": "Number / 当前页码",
            "lastPage": "Number / 最后一页页码"
        },
        "list": [
            {
                "rid": "String / 角色 ID",
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
