# 钱包功能

## 验证钱包密码

```php
\FresnsCmdWord::plugin('Fresns')->walletCheckPassword($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | String | YES | 钱包账号 |
| password | String | NO | 钱包密码，没有密码则留空 |

## 充值

```php
\FresnsCmdWord::plugin('Fresns')->walletRecharge($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | String | YES | 充值方账号 |
| uid | Number | NO | 充值方用户 |
| amountTotal | Numeric | YES | 交易总金额 10.00<br>decimal 类型，小数点两位的数字 |
| systemFee | Numeric | YES | 系统服务费 0.00<br>decimal 类型，小数点两位的数字 |
| transactionFskey | String | YES | 交易处理者 |
| transactionId | Number | NO | 交易记录凭证 ID |
| transactionCode | String | NO | 交易记录凭证 Code |
| remark | String | NO | 交易备注（字符串） |
| moreJson | Json | NO | 交易备注（Json） |
| immediate | Boolean | NO | 是否立即生效，不传则为 `false`<br>立即生效则表示立马执行交易，否则只是创建一条待处理的交易日志 |

## 提现

```php
\FresnsCmdWord::plugin('Fresns')->walletWithdraw($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | String | YES | 提现方账号 |
| uid | Number | NO | 提现方用户 |
| password | String | NO | 提现方用户钱包密码，没有密码则留空 |
| amountTotal | Numeric | YES | 交易总金额 10.00<br>decimal 类型，小数点两位的数字 |
| systemFee | Numeric | YES | 系统服务费 0.00<br>decimal 类型，小数点两位的数字 |
| transactionFskey | String | YES | 交易处理者 |
| transactionId | Number | NO | 交易记录凭证 ID |
| transactionCode | String | NO | 交易记录凭证 Code |
| remark | String | NO | 交易备注（字符串） |
| moreJson | Json | NO | 交易备注（Json） |
| immediate | Boolean | NO | 是否立即生效，不传则为 `false`<br>立即生效则表示立马执行交易，否则只是创建一条待处理的交易日志 |

## 变更充值或提现状态

```php
\FresnsCmdWord::plugin('Fresns')->walletUpdateState($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | String | YES | 交易方账号 |
| uid | Number | NO | 交易方用户 |
| logId | Number | NO | 交易日志 ID |
| transactionId | Number | NO | 交易记录凭证 ID |
| transactionCode | String | NO | 交易记录凭证 Code |
| updateState | Number | YES | 变更的状态 1.待处理 / 2.处理中 / 3.成功 / 4.失败 |

- `logId`, `transactionId`, `transactionCode` 三个参数必须至少传一项
- 仅支持充值和提现交易
- 当交易的状态为 `3` 或 `4` 的时候，不支持变更状态

## 冻结

```php
\FresnsCmdWord::plugin('Fresns')->walletFreeze($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | String | YES | 冻结账号 |
| uid | Number | NO | 冻结用户 |
| amountTotal | Numeric | YES | 冻结金额 10.00<br>decimal 类型，小数点两位的数字 |
| transactionFskey | String | YES | 交易处理者 |
| transactionId | Number | NO | 交易记录凭证 ID |
| transactionCode | String | NO | 交易记录凭证 Code |
| remark | String | NO | 交易备注（字符串） |
| moreJson | Json | NO | 交易备注（Json） |

## 解冻

```php
\FresnsCmdWord::plugin('Fresns')->walletUnfreeze($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | String | YES | 解冻账号 |
| uid | Number | NO | 解冻用户 |
| amountTotal | Numeric | YES | 解冻金额 10.00<br>decimal 类型，小数点两位的数字 |
| transactionFskey | String | YES | 交易处理者 |
| transactionId | Number | NO | 交易记录凭证 ID |
| transactionCode | String | NO | 交易记录凭证 Code |
| remark | String | NO | 交易备注（字符串） |
| moreJson | Json | NO | 交易备注（Json） |

## 收入交易

```php
\FresnsCmdWord::plugin('Fresns')->walletIncrease($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | String | YES | 收入方账号 |
| uid | Number | NO | 收入方用户 |
| amountTotal | Numeric | YES | 交易总金额 10.00<br>decimal 类型，小数点两位的数字 |
| systemFee | Numeric | YES | 系统服务费 0.00<br>decimal 类型，小数点两位的数字 |
| originAid | String | NO | 来源账号，从哪个账号的钱包中扣款 |
| originUid | Number | NO | 来源用户 |
| transactionFskey | String | YES | 交易处理者 |
| transactionId | Number | NO | 交易记录凭证 ID |
| transactionCode | String | NO | 交易记录凭证 Code |
| remark | String | NO | 交易备注（字符串） |
| moreJson | Json | NO | 交易备注（Json） |

## 支出交易

```php
\FresnsCmdWord::plugin('Fresns')->walletDecrease($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | String | YES | 支出方账号 |
| uid | Number | NO | 支出方用户 |
| password | String | NO | 支出方用户钱包密码，没有密码则留空 |
| amountTotal | Numeric | YES | 交易总金额 10.00<br>decimal 类型，小数点两位的数字 |
| systemFee | Numeric | YES | 系统服务费 0.00<br>decimal 类型，小数点两位的数字 |
| originAid | String | NO | 去向账号，转入哪个账号的钱包中 |
| originUid | Number | NO | 去向用户 |
| transactionFskey | String | YES | 交易处理者 |
| transactionId | Number | NO | 交易记录凭证 ID |
| transactionCode | String | NO | 交易记录凭证 Code |
| remark | String | NO | 交易备注（字符串） |
| moreJson | Json | NO | 交易备注（Json） |

## 撤销交易

```php
\FresnsCmdWord::plugin('Fresns')->walletReversal($wordBody);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| aid | String | YES | 交易方账号 |
| uid | Number | NO | 交易方用户 |
| logId | Number | NO | 交易日志 ID |
| transactionId | Number | NO | 交易记录凭证 ID |
| transactionCode | String | NO | 交易记录凭证 Code |

- `logId`, `transactionId`, `transactionCode` 三个参数必须至少传一项
- 仅支持收入和支出交易
