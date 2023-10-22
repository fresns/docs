# Wallet Command Word

## walletCheckPassword

```php
\FresnsCmdWord::plugin('Fresns')->walletCheckPassword($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | Wallet account |
| password | String | *optional* | Wallet password, leave blank if no password |

## walletRecharge

```php
\FresnsCmdWord::plugin('Fresns')->walletRecharge($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | Recharge party account |
| uid | Number | *optional* | Recharge party user |
| amountTotal | Numeric | **required** | Total transaction amount 10.00<br>decimal type, a number with two decimal places |
| systemFee | Numeric | **required** | System service fee 0.00<br>decimal type, a number with two decimal places |
| transactionFskey | String | **required** | Transaction processor |
| transactionId | Number | *optional* | Transaction record voucher ID |
| transactionCode | String | *optional* | Transaction record voucher Code |
| remark | String | *optional* | Transaction remark (string) |
| moreJson | Json | *optional* | Transaction remark (Json) |
| immediate | Boolean | *optional* | Whether to take effect immediately, `false` if not passed<br>Effective immediately means that the transaction will be executed immediately, otherwise it will just create a pending transaction log. |

## walletWithdraw

```php
\FresnsCmdWord::plugin('Fresns')->walletWithdraw($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | Withdrawal party account |
| uid | Number | *optional* | Withdrawal party user |
| password | String | *optional* | Withdrawal party user wallet password, leave blank if no password |
| amountTotal | Numeric | **required** | Total transaction amount 10.00<br>decimal type, a number with two decimal places |
| systemFee | Numeric | **required** | System service fee 0.00<br>decimal type, a number with two decimal places |
| transactionFskey | String | **required** | Transaction processor |
| transactionId | Number | *optional* | Transaction record voucher ID |
| transactionCode | String | *optional* | Transaction record voucher Code |
| remark | String | *optional* | Transaction remark (string) |
| moreJson | Json | *optional* | Transaction remark (Json) |
| immediate | Boolean | *optional* | Whether to take effect immediately, `false` if not passed<br>Effective immediately means that the transaction will be executed immediately, otherwise it will just create a pending transaction log. |

## walletUpdateState

```php
\FresnsCmdWord::plugin('Fresns')->walletUpdateState($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | Trading party account |
| uid | Number | *optional* | Trading party user |
| logId | Number | *optional* | Transaction log ID |
| transactionId | Number | *optional* | Transaction ID |
| transactionCode | String | *optional* | Transaction Code |
| updateState | Number | **required** | Changed Status: 1.Pending / 2.Processing / 3.Success / 4.Failed |

- `logId`, `transactionId`, `transactionCode`, at least one of the three parameters must be passed.
- Only supports recharge and withdrawal transactions
- When the transaction status is `3` or `4`, changing the status is not supported

## walletFreeze

```php
\FresnsCmdWord::plugin('Fresns')->walletFreeze($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | Frozen account |
| uid | Number | *optional* | Frozen user |
| amountTotal | Numeric | **required** | Frozen amount 10.00<br>decimal type, a number with two decimal places |
| transactionFskey | String | **required** | Transaction processor |
| transactionId | Number | *optional* | Transaction record voucher ID |
| transactionCode | String | *optional* | Transaction record voucher Code |
| remark | String | *optional* | Transaction remark (string) |
| moreJson | Json | *optional* | Transaction remark (Json) |

## walletUnfreeze

```php
\FresnsCmdWord::plugin('Fresns')->walletUnfreeze($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | Unfreeze account |
| uid | Number | *optional* | Unfreeze user |
| amountTotal | Numeric | **required** | Unfreeze amount 10.00<br>decimal type, a number with two decimal places |
| transactionFskey | String | **required** | Transaction processor |
| transactionId | Number | *optional* | Transaction record voucher ID |
| transactionCode | String | *optional* | Transaction record voucher Code |
| remark | String | *optional* | Transaction remark (string) |
| moreJson | Json | *optional* | Transaction remark (Json) |

## walletIncrease

```php
\FresnsCmdWord::plugin('Fresns')->walletIncrease($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | Increase party account |
| uid | Number | *optional* | Increase party user |
| amountTotal | Numeric | **required** | Total transaction amount 10.00<br>decimal type, a number with two decimal places |
| systemFee | Numeric | **required** | System service fee 0.00<br>decimal type, a number with two decimal places |
| originAid | String | *optional* | Source account, deducted from which account wallet |
| originUid | Number | *optional* | Source user |
| transactionFskey | String | **required** | Transaction processor |
| transactionId | Number | *optional* | Transaction record voucher ID |
| transactionCode | String | *optional* | Transaction record voucher Code |
| remark | String | *optional* | Transaction remark (string) |
| moreJson | Json | *optional* | Transaction remark (Json) |

## walletDecrease

```php
\FresnsCmdWord::plugin('Fresns')->walletDecrease($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | Expenditure party account |
| uid | Number | *optional* | Expenditure party user |
| password | String | *optional* | Expenditure party user wallet password, leave blank if no password |
| amountTotal | Numeric | **required** | Total transaction amount 10.00<br>decimal type, a number with two decimal places |
| systemFee | Numeric | **required** | System service fee 0.00<br>decimal type, a number with two decimal places |
| originAid | String | *optional* | Destination account, transferred to which account wallet |
| originUid | Number | *optional* | Destination user |
| transactionFskey | String | **required** | Transaction processor |
| transactionId | Number | *optional* | Transaction record voucher ID |
| transactionCode | String | *optional* | Transaction record voucher Code |
| remark | String | *optional* | Transaction remark (string) |
| moreJson | Json | *optional* | Transaction remark (Json) |

## walletRevoke

```php
\FresnsCmdWord::plugin('Fresns')->walletRevoke($wordBody);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | Trading party account |
| uid | Number | *optional* | Trading party user |
| logId | Number | *optional* | Transaction log ID |
| transactionId | Number | *optional* | Transaction ID |
| transactionCode | String | *optional* | Transaction Code |

- `logId`, `transactionId`, `transactionCode`, at least one of the three parameters must be passed.
