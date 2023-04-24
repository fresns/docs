# Wallet Command Word

## walletRecharge

```php
\FresnsCmdWord::plugin('Fresns')->walletRecharge($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | Recharge party account |
| uid | Number | *optional* | Recharge party user |
| amountTotal | Numeric | **required** | Total transaction amount 10.00<br>decimal type, a number with two decimal places |
| systemFee | Numeric | **required** | System service fee 0.00<br>decimal type, a number with two decimal places |
| transactionUnikey | String | **required** | Transaction processor |
| transactionId | Number | *optional* | Transaction record voucher ID |
| transactionCode | String | *optional* | Transaction record voucher Code |
| remark | String | *optional* | Transaction remark (string) |
| moreJson | Json | *optional* | Transaction remark (Json) |

## walletWithdraw

```php
\FresnsCmdWord::plugin('Fresns')->walletWithdraw($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | Withdrawal party account |
| uid | Number | *optional* | Withdrawal party user |
| password | String | *optional* | Withdrawal party user wallet password, leave blank if no password |
| amountTotal | Numeric | **required** | Total transaction amount 10.00<br>decimal type, a number with two decimal places |
| systemFee | Numeric | **required** | System service fee 0.00<br>decimal type, a number with two decimal places |
| transactionUnikey | String | **required** | Transaction processor |
| transactionId | Number | *optional* | Transaction record voucher ID |
| transactionCode | String | *optional* | Transaction record voucher Code |
| remark | String | *optional* | Transaction remark (string) |
| moreJson | Json | *optional* | Transaction remark (Json) |

## walletFreeze

```php
\FresnsCmdWord::plugin('Fresns')->walletFreeze($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | Frozen account |
| uid | Number | *optional* | Frozen user |
| amountTotal | Numeric | **required** | Frozen amount 10.00<br>decimal type, a number with two decimal places |
| transactionUnikey | String | **required** | Transaction processor |
| transactionId | Number | *optional* | Transaction record voucher ID |
| transactionCode | String | *optional* | Transaction record voucher Code |
| remark | String | *optional* | Transaction remark (string) |
| moreJson | Json | *optional* | Transaction remark (Json) |

## walletUnfreeze

```php
\FresnsCmdWord::plugin('Fresns')->walletUnfreeze($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | Unfreeze account |
| uid | Number | *optional* | Unfreeze user |
| amountTotal | Numeric | **required** | Unfreeze amount 10.00<br>decimal type, a number with two decimal places |
| transactionUnikey | String | **required** | Transaction processor |
| transactionId | Number | *optional* | Transaction record voucher ID |
| transactionCode | String | *optional* | Transaction record voucher Code |
| remark | String | *optional* | Transaction remark (string) |
| moreJson | Json | *optional* | Transaction remark (Json) |

## walletIncrease

```php
\FresnsCmdWord::plugin('Fresns')->walletIncrease($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | Increase party account |
| uid | Number | *optional* | Increase party user |
| amountTotal | Numeric | **required** | Total transaction amount 10.00<br>decimal type, a number with two decimal places |
| systemFee | Numeric | **required** | System service fee 0.00<br>decimal type, a number with two decimal places |
| originAid | String | *optional* | Source account, deducted from which account wallet |
| originUid | Number | *optional* | Source user |
| transactionUnikey | String | **required** | Transaction processor |
| transactionId | Number | *optional* | Transaction record voucher ID |
| transactionCode | String | *optional* | Transaction record voucher Code |
| remark | String | *optional* | Transaction remark (string) |
| moreJson | Json | *optional* | Transaction remark (Json) |

## walletDecrease

```php
\FresnsCmdWord::plugin('Fresns')->walletDecrease($wordBody)
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
| transactionUnikey | String | **required** | Transaction processor |
| transactionId | Number | *optional* | Transaction record voucher ID |
| transactionCode | String | *optional* | Transaction record voucher Code |
| remark | String | *optional* | Transaction remark (string) |
| moreJson | Json | *optional* | Transaction remark (Json) |

## walletRevoke

```php
\FresnsCmdWord::plugin('Fresns')->walletRevoke($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| logId | Number | **required** | Transaction log ID |
| aid | String | **required** | Trading party account |
| uid | Number | *optional* | Trading party user |
