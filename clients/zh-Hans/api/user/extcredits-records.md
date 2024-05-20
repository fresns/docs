# 用户扩展分值记录

- 接口地址：`/api/fresns/v1/user/extcredits-records`
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
| extcreditsId | Number | NO | 分值类型编号（留空输出全部） |
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
                "extcreditsId": "Number / 分值类型编号",
                "name": "String / 名称",
                "unit": "String / 单位",
                "type": "String / 操作类型，increment 或 decrement",
                "amount": "Number / 分值",
                "openingAmount": "Number / 期初分值",
                "closingAmount": "Number / 期末分值",
                "fskey": "String / 处理的应用",
                "remark": "String / 备注",
                "datetime": "String / 日期时间",
                "datetimeFormat": "String / 日期时间格式化",
                "timeAgo": "String / 人性化时间",
            }
        ]
    }
}
```
