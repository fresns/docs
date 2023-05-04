# 用户扩展分值记录

- 接口地址：`/api/v2/user/extcredits-logs`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| extcredits | String | NO | 分值类型编号（留空输出全部），多个以英文逗号隔开 |
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
                "extcredits": "Number / 分值类型编号",
                "type": "String / 操作类型，increment 或 decrement",
                "amount": "Number / 分值",
                "openingAmount": "Number / 期初分值",
                "closingAmount": "Number / 期末分值",
                "fskey": "String / 处理的插件",
                "remark": "String / 备注",
                "createdDatetime": "String / 创建时间",
                "createdTimeAgo": "String / 创建时间人性化时间",
            }
        ]
    }
}
```
