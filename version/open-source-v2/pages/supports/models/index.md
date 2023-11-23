# Models

Various data set models

## Account

`App\Models\Account`

```php
# Account Basic Information
getAccountInfo($langTag, $timezone);

# Account Connect Information
getAccountConnects();

# Account Wallet Information
getAccountWallet($langTag);
```

## User

`App\Models\User`

```php
# User Basic Information
getUserProfile($langTag, $timezone);

# User Main Role Information
getUserMainRole($langTag, $timezone);

# User All Role List
getUserRoles($langTag, $timezone);

# User Archives
getUserArchives($langTag);

# User Stats
getUserStats($langTag);
```

## File

`App\Models\File`

```php
# File Original Url
getFileOriginalUrl();

# File Information
getFileInfo();
```

## Group

`App\Models\Group`

```php
# Group Information
getGroupInfo($langTag);

# Group Admin List
getGroupAdmins($langTag, $timezone);

# Group Group Information
getParentGroupInfo($langTag);
```

## Hashtag

`App\Models\Hashtag`

```php
# Hashtag Information
getHashtagInfo($langTag);
```

## Post

`App\Models\Post`

```php
# Post Basic Information
getPostInfo($langTag, $timezone);
```

## Comment

`App\Models\Comment`

```php
# Comment Basic Information
getCommentInfo($langTag, $timezone);
```
