# ValidationUtility

`App\Utilities\ValidationUtility`

- `true` Verification passed
- `false` Verification failed

## 验证一次性邮箱

```php
ValidationUtility::disposableEmail('email');
```

- 邮箱服务商（域名）是否属于一次性邮箱。
- `false` 验证未通过，表示为一次性邮箱。

## 验证密码

```php
ValidationUtility::password('password');
```
::: details Array Result
```json
{
    "length": true,  // Length validation
    "number": true,  // Contains number
    "lowercase": true,  // Contains lowercase letter
    "uppercase": true,  // Contains uppercase letter
    "symbols": true,  // Contains special symbols (excluding space)
}
```
:::

## 验证用户名

```php
ValidationUtility::username('username');
```
::: details Array Result
```json
{
    "formatString": true,  // No special characters
    "formatHyphen": true,  // One hyphen
    "formatNumeric": true,  // Not all numbers
    "minLength": true,  // Minimum length
    "maxLength": true,  // Maximum length
    "use": true,  // Not used
    "banName": true,  // No banned name
}
```
:::

## 验证昵称

```php
ValidationUtility::nickname('nickname');
```
::: details Array Result
```json
{
    "formatString": true,  // No punctuation
    "formatSpace": true,  // One space
    "minLength": true,  // Minimum length
    "maxLength": true,  // Maximum length
    "use": true,  // Not used or no validation requirement
    "banName": true,  // No banned name
}
```
:::

## 验证简介

```php
ValidationUtility::bio('bio');
```
::: details Array Result
```json
{
    "length": true,  // Length validation
    "banWord": true,  // Banned word validation
}
```
:::

## 验证 Mark 自己

```php
ValidationUtility::userMarkOwn($userId, $markType, $markId);
```

## 验证内容禁用词

```php
ValidationUtility::contentBanWords($content);
```

## 验证内容审核词

```php
ValidationUtility::contentReviewWords($content);
```

## 验证消息禁用词

```php
ValidationUtility::messageBanWords($message);
```
