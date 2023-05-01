# 钱包交易记录

- 接口地址：`/api/v2/account/wallet-logs`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | NO | NO |
| X-Fresns-Uid-Token | NO | NO |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | NO | 交易类型（留空输出全部），多个以英文逗号隔开<br>1.收入(充值) / 2.收入(解冻) / 3.收入(交易)<br>4.支出(提现) / 5.支出(冻结) / 6.支出(交易) |
| status | Boolean | NO | 交易状态（留空输出全部）<br>0.交易失败 / 1.交易成功 |
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
                "type": "Number / 交易类型 1.收入(充值) 2.收入(解冻) 3.收入(交易) 4.支出(提现) 5.支出(冻结) 6.支出(交易)",
                "amountTotal": "Number / 交易总额",
                "transactionAmount": "Number / 交易金额",
                "systemFee": "Number / 交易服务费",
                "openingBalance": "Number / 期初余额",
                "closingBalance": "Number / 期末余额",
                "createdDatetime": "String / 交易创建时间",
                "createdTimeAgo": "String / 交易创建时间人性化时间",
                "remark": "String / 交易备注",
                "pluginFskey": "String / 处理交易的插件",
                "status": "Boolean / 交易状态",
            }
        ]
    }
}
```
