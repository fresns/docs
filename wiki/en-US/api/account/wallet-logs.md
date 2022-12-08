# Wallet Logs

- Endpoint Path: `/api/v2/account/wallet-logs`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| aidToken | **required** | **required** |
| uid | *optional* | *optional* |
| uidToken | *optional* | *optional* |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | *optional* | 交易类型（留空输出全部），多个以英文逗号隔开<br>1.收入(充值) / 2.收入(解冻) / 3.收入(交易)<br>4.支出(提现) / 5.支出(冻结) / 6.支出(交易) |
| status | Boolean | *optional* | 交易状态（留空输出全部）<br>0.交易失败 / 1.交易成功 |
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
                "type": "Number / 交易类型 1.收入(充值) 2.收入(解冻) 3.收入(交易) 4.支出(提现) 5.支出(冻结) 6.支出(交易)",
                "amountTotal": "Number / 交易总额",
                "transactionAmount": "Number / 交易金额",
                "systemFee": "Number / 交易服务费",
                "openingBalance": "Number / 期初余额",
                "closingBalance": "Number / 期末余额",
                "createTime": "String / 交易时间",
                "createTimeFormat": "String / 交易时间格式化",
                "remark": "String / 交易备注",
                "pluginUnikey": "String / 处理交易的插件",
                "status": "Boolean / 交易状态",
            }
        ]
    }
}
```
