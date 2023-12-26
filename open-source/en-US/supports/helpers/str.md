# StrHelper

`App\Helpers\StrHelper`

## Encrypt and Output Email

```php
StrHelper::maskEmail('email');
```

- Encrypt and Output Email: Display the first 3 characters + *(actual number of characters, at least three *s) + email suffix, such as `jev***@gmail.com`

## Encrypt and Output Numbers

```php
StrHelper::maskNumber('number');
```
- Display the first 2 digits + *(actual number of digits, at least three *s) + last 2 digits
- For example, phone number: `13*******50`
- For example, ID card: `31**************23`
- For example, bank card: `54*************96`

## Encrypt and Output Name

```php
StrHelper::maskName('name');
```
- Display the last 1 character, such as: `*g`

## Generate Pure Numeric String

```php
StrHelper::generateDigital('8');
```
- Not Starting with 0
- 8 means generating an 8-digit number

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
