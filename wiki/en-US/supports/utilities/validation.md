# ValidationUtility

`App\Utilities\ValidationUtility`

- `true` 验证通过
- `false` 验证未通过

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
::: details 数组结果
```json
{
    "length": true,  // 长度
    "number": true,  // 包含数字
    "lowercase": true,  // 包含小写字母
    "uppercase": true,  // 包含大写字母
    "symbols": true,  // 包含特殊符号（不包括空格）
}
```
:::

## 验证用户名

```php
ValidationUtility::username('username');
```
::: details 数组结果
```json
{
    "formatString": true,  // 无特殊字符
    "formatHyphen": true,  // 一个连字符
    "formatNumeric": true,  // 不是纯数字
    "minLength": true,  // 最小长度
    "maxLength": true,  // 最大长度
    "use": true,  // 未被使用
    "banName": true,  // 无禁用名
}
```
:::

## 验证昵称

```php
ValidationUtility::nickname('nickname');
```
::: details 数组结果
```json
{
    "formatString": true,  // 无标点符号
    "formatSpace": true,  // 一个空格
    "minLength": true,  // 最小长度
    "maxLength": true,  // 最大长度
    "use": true,  // 未被使用或无验证要求
    "banName": true,  // 无禁用名
}
```
:::

## 验证简介

```php
ValidationUtility::bio('bio');
```
::: details 数组结果
```json
{
    "length": true,  // 长度
    "banWord": true,  // 禁用词
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
