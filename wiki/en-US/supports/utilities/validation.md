# ValidationUtility

`App\Utilities\ValidationUtility`

- `true` Verification passed
- `false` Verification failed

## Validate Disposable Email

```php
ValidationUtility::disposableEmail('email');
```

- Check if the email service provider (domain) belongs to a disposable email.
- `false` validation not passed, indicating it's a disposable email.

## Validate Password

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

## Validate Username

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

## Validate Nickname

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

## Validate Bio

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

## Validate Mark Itself

```php
ValidationUtility::userMarkOwn($userId, $markType, $markId);
```

## Validate Content Ban Words

```php
ValidationUtility::contentBanWords($content);
```

## Validate Content Review Words

```php
ValidationUtility::contentReviewWords($content);
```

## Validate Message Ban Words

```php
ValidationUtility::messageBanWords($message);
```
