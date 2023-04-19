# Crontab Command Word

## 检查并处理用户主角色过期

每隔 10 分钟执行一次用户主角色过期时间检测

```php
\FresnsCmdWord::plugin('Fresns')->checkUserRoleExpired()
```

- 1、筛选 `user_roles` 表，字段 `type=2` + `expired_at 小于当前时间` 的记录（时间小于，说明已经过期）。
- 2、判断该记录 `restore_role_id` 字段是否有值。
    - 2.1、有值，判断该值是否已经和该用户关联：
        - 2.1.1、已关联：删除该条过期记录，将已关联的记录 `type` 字段值改为 `2`
        - 2.1.2、无关联：删除该条过期记录，以 `restore_role_id` 字段值（角色 ID）创建一条新记录，并且 `type` 字段值为 `2`
    - 2.2、无值：中止任务，暂不做任何操作。

## 检查并处理注销账号的删除

每隔 6 小时执行一次用户注销任务

```php
\FresnsCmdWord::plugin('Fresns')->checkDeleteAccount()
```

**逻辑注销**：不删除数据，只标注状态

- 在 `accounts` 表 `phone 和 email` 字段现有内容前加上 `deleted#YmdHis#` 前缀，`YmdHis` 为当前执行任务时的时间；
- 物理删除 `account_connects` 表关联信息；
- 对话表 `conversations` 如果存在记录，则标注已停用，字段为 `a_is_deactivate 或 b_is_deactivate`
- 为避免遗漏，定时任务每次都检测库里所有 `accounts->deleted_at` 有值的用户，如果 `phone 和 email` 前缀有 `deleted#` 则代表执行过任务，则跳过，如果没有则执行任务。
- 配置表 `delete_account_todo` 键值规定时间内的不处理；比如当前执行任务时，配置的是 7 天，则查询所有记录时，7 天内的不查（不处理）。

**物理注销**：物理删除数据（真实删除）

- 删除用户以下表的所有记录
    - `accounts`
    - `account_connects`
    - `account_wallets`
    - `account_wallet_logs`
    - `session_tokens`
    - `session_logs`
    - `plugin_badges`
    - `users`
    - `user_stats`
    - `user_roles`
    - `user_likes`
    - `user_follows`
    - `user_blocks`
    - `files` *头像*
    - `file_usages`
    - `notifications`
    - `seo`
    - `posts`
    - `post_logs`
    - `comments`
    - `comment_logs`
- 对话表 `conversations` 如果存在记录，则标注已停用，字段为 `a_is_deactivate 或 b_is_deactivate`
- 为避免遗漏，定时任务每次都检测库里所有 `accounts->deleted_at` 有值的用户，如果存在则执行物理删除。
- 配置表 `delete_account_todo` 键值规定时间内的不处理；比如当前执行任务时，配置的是 7 天，则查询所有记录时，7 天内的不查（不处理）。

## 检查并更新版本信息

每隔 8 小时执行一次后端主程序和扩展的版本情况，检查是否有新版。

```php
\FresnsCmdWord::plugin('Fresns')->checkExtensionsVersion()
```

- 1、向 Fresns 官方发送已安装扩展清单（插件、引擎、主题、移动应用），接口返回该清单扩展的最新版本号。
- 2、对比插件表版本号，如果不一致，更新版本号
    - `is_upgrade = 1`
    - `upgrade_version = 接口返回的版本号`
