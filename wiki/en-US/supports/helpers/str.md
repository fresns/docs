# StrHelper

`App\Helpers\StrHelper`

## Encrypt and Output Email

```php
StrHelper::maskEmail('email');
//显示前 3 位 + *(实际位数,最少有三个*号) + 邮箱后缀，如 jav***@qq.com
```

## Encrypt and Output Numbers

```php
StrHelper::maskNumber('number');
//显示前 2 位 + *(实际位数,最少有三个*号) + 后 2 位
//比如手机号：13*******50
//比如身份证：31**************23
//比如银行卡：62*************96
```

## Encrypt and Output Name

```php
StrHelper::maskName('name');
//显示后 1 位，如：*杰
```

## Generate Pure Numeric String

- Not Starting with 0

```php
StrHelper::generateDigital('8'); //8 表示生成 8 位数
```

## Concatenate Complete URL

```php
StrHelper::qualifyUrl('uri', 'domain');
```

## Check if Pure Numeric Value

```php
StrHelper::isPureInt('variable');
```

## Extract Domain from Host

```php
StrHelper::extractDomainByHost('host');
```

## Extract Domain from URL

```php
StrHelper::extractDomainByUrl('url');
```
