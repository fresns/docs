# 钱包交易记录

- 接口地址：`/api/fresns/v1/account/wallet-records`
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
| type | String | NO | 交易类型（留空输出全部），多个以英文逗号隔开<br>1.收入(充值) / 2.收入(解冻) / 3.收入(交易) / 4.收入(撤回之前交易的支出)<br>5.支出(提现) / 6.支出(冻结) / 7.支出(交易) / 8.支出(撤回之前交易的收入) |
| state | Number | NO | 交易状态<br>1.待处理 / 2.处理中 / 3.成功 / 4.失败 / 5.撤回 |
| filterUserType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `user` 参数有效 |
| filterUserKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
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
                "type": "Number / 交易类型",
                "fskey": "String / 处理交易的插件",
                "transactionId": "Number / 交易数字凭证",
                "transactionCode": "String / 交易字符串凭证",
                "amountTotal": "Number / 交易总额",
                "transactionAmount": "Number / 交易金额",
                "systemFee": "Number / 交易服务费",
                "openingBalance": "Number / 期初余额",
                "closingBalance": "Number / 期末余额",
                "user": {
                    // 交易关联用户，没有则为 null
                    // 通用数据结构->用户信息
                },
                "remark": "String / 交易备注",
                "datetime": "String / 交易时间",
                "datetimeFormat": "String / 交易时间格式化",
                "timeAgo": "String / 交易时间人性化时间",
                "state": "Number / 交易状态",
            }
        ]
    }
}
```

- [通用数据结构->用户信息](../../reference/data/user.md)
