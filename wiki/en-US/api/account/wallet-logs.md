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
| type | String | *optional* | Transaction type (leave empty to output all), multiple types separated by English commas<br>1. Income (recharge) / 2. Income (unfreeze) / 3. Income (transaction)<br>4. Expense (withdrawal) / 5. Expense (freeze) / 6. Expense (transaction) |
| status | Boolean | *optional* | Transaction status (leave empty to output all)<br>0. Transaction failed / 1. Transaction successful |
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
                "amountTotal": "Number / Total transaction amount",
                "transactionAmount": "Number / Transaction amount",
                "systemFee": "Number / Transaction service fee",
                "openingBalance": "Number / Opening balance",
                "closingBalance": "Number / Closing balance",
                "createdDatetime": "String / Transaction creation time",
                "createdTimeAgo": "String / Human-friendly time since transaction creation",
                "remark": "String / Transaction remark",
                "user": {
                    // Transaction user, If not, it is null
                    // Common Data Structure -> User Info
                },
                "fskey": "String / Plugin handling the transaction",
                "status": "Boolean / Transaction status",
            }
        ]
    }
}
```
