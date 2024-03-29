# Wallet Records

- Endpoint Path: `/api/fresns/v1/account/wallet-records`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | *optional* | Transaction type (Null to output all), multiple types separated by English commas<br>1.Income (Recharge) / 2.Income (Unfreeze) / 3.Income (Transaction) 4.Income (Revoke) <br> 5.Expense (Withdrawal) / 6.Expense (Freeze) / 7.Expense (Transaction) / 8.Expense (Revoke) |
| state | Number | *optional* | Transaction status<br>1.Pending / 2.Processing / 3.Success / 4.Failed / 5.Reversed |
| filterUserType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `user` parameter in the returned result |
| filterUserKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

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
                "type": "Number / Transaction type",
                "fskey": "String / Plugin handling the transaction",
                "transactionId": "Number / Transaction ID",
                "transactionCode": "String / Transaction Code",
                "amountTotal": "Number / Total transaction amount",
                "transactionAmount": "Number / Transaction amount",
                "systemFee": "Number / Transaction service fee",
                "openingBalance": "Number / Opening balance",
                "closingBalance": "Number / Closing balance",
                "user": {
                    // Transaction user, If not, it is null
                    // Common Data Structure -> User Info
                },
                "remark": "String / Transaction remark",
                "datetime": "String / Datetime",
                "datetimeFormat": "String / Formatted time",
                "timeAgo": "String / Humanized time",
                "state": "Number / Transaction state",
            }
        ]
    }
}
```

- [Common Data Structure -> User Info](../../reference/data/user.md)
