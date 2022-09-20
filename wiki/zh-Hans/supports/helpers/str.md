# 数据处理 StrHelper

`App\Helpers\StrHelper`

## 加密输出邮箱

```php
StrHelper::maskEmail('email');
//显示前 3 位 + *(实际位数,最少有三个*号) + 邮箱后缀，如 jav***@qq.com
```

## 加密输出数字

```php
StrHelper::maskNumber('number');
//显示前 2 位 + *(实际位数,最少有三个*号) + 后 2 位
//比如手机号：13*******50
//比如身份证：31**************23
//比如银行卡：62*************96
```

## 加密输出姓名

```php
StrHelper::maskName('name');
//显示后 1 位，如：*杰
```

## 生成纯数字（非 0 开头）

```php
StrHelper::generateDigital('8'); //8 表示生成 8 位数
```

## 拼接完整 URL 地址

```php
StrHelper::qualifyUrl('uri', 'domain');
```

## 是否为纯数字值

```php
StrHelper::isPureInt('variable');
```

## 提取 Host 中的域名

```php
StrHelper::extractDomainByHost('host');
```

## 提取 URL 中的域名

```php
StrHelper::extractDomainByUrl('url');
```
