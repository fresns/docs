# Models

各种数据集模型

## 账号

`App\Models\Account`

```php
# 账号基础信息
getAccountInfo($langTag, $timezone);

# 账号互联信息
getAccountConnects();

# 账号钱包信息
getAccountWallet($langTag);
```

## 用户

`App\Models\User`

```php
# 用户基础信息
getUserProfile($langTag, $timezone);

# 用户主角色信息
getUserMainRole($langTag, $timezone);

# 用户所有角色列表
getUserRoles($langTag, $timezone);

# 用户延伸资料列表
getUserArchives($langTag);

# 用户统计数据
getUserStats($langTag);
```

## 文件

`App\Models\File`

```php
# 文件源件链接
getFileOriginalUrl();

# 文件信息
getFileInfo();
```

## 小组

`App\Models\Group`

```php
# 小组信息
getGroupInfo($langTag);

# 小组管理员列表
getGroupAdmins($langTag, $timezone);

# 小组父级分类信息
getParentGroupInfo($langTag);
```

## 话题

`App\Models\Hashtag`

```php
# 话题信息
getHashtagInfo($langTag);
```

## 帖子

`App\Models\Post`

```php
# 帖子信息
getPostInfo($langTag, $timezone);
```

## 评论

`App\Models\Comment`

```php
# 评论信息
getCommentInfo($langTag, $timezone);
```
