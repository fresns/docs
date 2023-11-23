# Crontab Command Word

## Check and Process User Main Role Expiration

Perform a user's main role expiration time check every 10 minutes

```php
\FresnsCmdWord::plugin('Fresns')->checkUserRoleExpired()
```

- 1. Filter the `user_roles` table for records with `type=2` + `expired_at less than the current time` (less than the current time indicates it has already expired).
- 2. Check if the `restore_role_id` field of the record has a value.
    - 2.1. If it has a value, check if the value is already associated with the user:
        - 2.1.1. If it is associated: delete the expired record and change the `type` field value of the associated record to `2`
        - 2.1.2. If not associated: delete the expired record, create a new record with the `restore_role_id` field value (role ID), and set the `type` field value to `2`
    - 2.2. If it has no value: terminate the task and do not perform any actions for now.

## Check and Handle Account Deletion

Perform a user deletion task every 6 hours

```php
\FresnsCmdWord::plugin('Fresns')->checkDeleteAccount()
```

**Logical Deletion**: Do not delete data, only mark the status

- Add the `deleted#YmdHis#` prefix before the existing content of the `phone and email` fields in the `accounts` table, where `YmdHis` is the current time when the task is executed;
- Physically delete associated information in the `account_connects` table;
- To avoid omissions, the scheduled task checks all users with a value in `accounts->deleted_at` in the database each time. If the `phone and email` prefix has `deleted#`, it means the task has been executed and will be skipped; otherwise, the task will be executed.
- The `delete_account_todo` key value in the configuration table specifies the time within which no processing should be performed; for example, if the current task execution time is set to 7 days, do not search (or process) records within 7 days.

**Physical Deletion**: Physically delete data (actual deletion)

- Delete all records of the user from the following tables
    - `accounts`
    - `account_connects`
    - `account_wallets`
    - `account_wallet_logs`
    - `session_tokens`
    - `session_logs`
    - `plugin_badges`
    - `users`
    - `user_stats`
    - `user_extcredits_logs`
    - `user_roles`
    - `user_likes`
    - `user_follows`
    - `user_blocks`
    - `files` *Avatar*
    - `file_usages`
    - `notifications`
    - `seo`
    - `posts`
    - `post_logs`
    - `comments`
    - `comment_logs`
- To avoid omissions, the scheduled task checks all users with a value in `accounts->deleted_at` in the database each time. If they exist, perform physical deletion.
- The `delete_account_todo` key value in the configuration table specifies the time within which no processing should be performed; for example, if the current task execution time is set to 7 days, do not search (or process) records within 7 days.

## Check and Update Version Information

- Perform a backend main program and extension version check every 8 hours to see if there are any new versions available.

```php
\FresnsCmdWord::plugin('Fresns')->checkPluginsVersions()
```

- 1. Send the list of installed plugins to the Fresns official, and the interface will return the latest version for the plugins on the list.
- 2. Compare the plugins table version, and if they are different, update the version
    - `is_upgrade = 1`
    - `upgrade_version = Version returned by the API`
