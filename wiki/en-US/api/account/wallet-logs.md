# Wallet Logs

- Endpoint Path: `/api/v2/account/wallet-logs`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | *optional* | Transaction type (leave empty to output all), multiple types separated by English commas<br>1.Income (Recharge) / 2.Income (Unfreeze) / 3.Income (Transaction) 4.Income (Revoke) <br> 5.Expense (Withdrawal) / 6.Expense (Freeze) / 7.Expense (Transaction) / 8.Expense (Revoke) |
| state | Number | *optional* | Transaction status<br>1.Pending / 2.Processing / 3.Success / 4.Failed / 5.Reversed |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays<br>Valid only for the `user` parameter |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays<br>Valid only for the `user` parameter |
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
                "type": "Number / Transaction type 1. Income (recharge) 2. Income (unfreeze) 3. Income (transaction) 4. Expense (withdrawal) 5. Expense (freeze) 6. Expense (transaction)",
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
