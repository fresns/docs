# Wallet Command Word

## walletRecharge

```php
\FresnsCmdWord::plugin('Fresns')->walletRecharge($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | 充值方账号 |
| uid | Number | *optional* | 充值方用户 |
| amountTotal | Numeric | **required** | 交易总金额 10.00<br>decimal 类型，小数点两位的数字 |
| systemFee | Numeric | **required** | 系统服务费 0.00<br>decimal 类型，小数点两位的数字 |
| transactionUnikey | String | **required** | 交易处理者 |
| transactionId | Number | *optional* | 交易记录凭证 ID |
| transactionCode | String | *optional* | 交易记录凭证 Code |
| remark | String | *optional* | 交易备注（字符串） |
| moreJson | Json | *optional* | 交易备注（Json） |

## walletWithdraw

```php
\FresnsCmdWord::plugin('Fresns')->walletWithdraw($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | 提现方账号 |
| uid | Number | *optional* | 提现方用户 |
| password | String | *optional* | 提现方用户钱包密码，没有密码则留空 |
| amountTotal | Numeric | **required** | 交易总金额 10.00<br>decimal 类型，小数点两位的数字 |
| systemFee | Numeric | **required** | 系统服务费 0.00<br>decimal 类型，小数点两位的数字 |
| transactionUnikey | String | **required** | 交易处理者 |
| transactionId | Number | *optional* | 交易记录凭证 ID |
| transactionCode | String | *optional* | 交易记录凭证 Code |
| remark | String | *optional* | 交易备注（字符串） |
| moreJson | Json | *optional* | 交易备注（Json） |

## walletFreeze

```php
\FresnsCmdWord::plugin('Fresns')->walletFreeze($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | 冻结账号 |
| uid | Number | *optional* | 冻结用户 |
| amountTotal | Numeric | **required** | 冻结金额 10.00<br>decimal 类型，小数点两位的数字 |
| transactionUnikey | String | **required** | 交易处理者 |
| transactionId | Number | *optional* | 交易记录凭证 ID |
| transactionCode | String | *optional* | 交易记录凭证 Code |
| remark | String | *optional* | 交易备注（字符串） |
| moreJson | Json | *optional* | 交易备注（Json） |

## walletUnfreeze

```php
\FresnsCmdWord::plugin('Fresns')->walletUnfreeze($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | 解冻账号 |
| uid | Number | *optional* | 解冻用户 |
| amountTotal | Numeric | **required** | 解冻金额 10.00<br>decimal 类型，小数点两位的数字 |
| transactionUnikey | String | **required** | 交易处理者 |
| transactionId | Number | *optional* | 交易记录凭证 ID |
| transactionCode | String | *optional* | 交易记录凭证 Code |
| remark | String | *optional* | 交易备注（字符串） |
| moreJson | Json | *optional* | 交易备注（Json） |

## walletIncrease

```php
\FresnsCmdWord::plugin('Fresns')->walletIncrease($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | 收入方账号 |
| uid | Number | *optional* | 收入方用户 |
| amountTotal | Numeric | **required** | 交易总金额 10.00<br>decimal 类型，小数点两位的数字 |
| systemFee | Numeric | **required** | 系统服务费 0.00<br>decimal 类型，小数点两位的数字 |
| originAid | String | *optional* | 来源账号，从哪个账号的钱包中扣款 |
| originUid | Number | *optional* | 来源用户 |
| transactionUnikey | String | **required** | 交易处理者 |
| transactionId | Number | *optional* | 交易记录凭证 ID |
| transactionCode | String | *optional* | 交易记录凭证 Code |
| remark | String | *optional* | 交易备注（字符串） |
| moreJson | Json | *optional* | 交易备注（Json） |

## walletDecrease

```php
\FresnsCmdWord::plugin('Fresns')->walletDecrease($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| aid | String | **required** | 支出方账号 |
| uid | Number | *optional* | 支出方用户 |
| password | String | *optional* | 支出方用户钱包密码，没有密码则留空 |
| amountTotal | Numeric | **required** | 交易总金额 10.00<br>decimal 类型，小数点两位的数字 |
| systemFee | Numeric | **required** | 系统服务费 0.00<br>decimal 类型，小数点两位的数字 |
| originAid | String | *optional* | 去向账号，转入哪个账号的钱包中 |
| originUid | Number | *optional* | 去向用户 |
| transactionUnikey | String | **required** | 交易处理者 |
| transactionId | Number | *optional* | 交易记录凭证 ID |
| transactionCode | String | *optional* | 交易记录凭证 Code |
| remark | String | *optional* | 交易备注（字符串） |
| moreJson | Json | *optional* | 交易备注（Json） |

## walletRevoke

```php
\FresnsCmdWord::plugin('Fresns')->walletRevoke($wordBody)
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| logId | Number | **required** | 交易日志 ID |
| aid | String | **required** | 交易方账号 |
| uid | Number | *optional* | 交易方用户 |
