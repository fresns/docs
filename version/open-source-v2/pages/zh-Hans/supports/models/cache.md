# Cache

- 以下列表为缓存键名规则和标签，一个缓存键可能有多个标签。
- 注意：使用 `file`、`dynamodb` 或 `database` 缓存驱动程序时不支持缓存标签。

```php
use App\Helpers\CacheHelper;

CacheHelper::isSupportTags();
// false or true
```

## 无标签

```php
fresns_cache_tags
fresns_cache_config_keys
developer_mode
install_{$step}
autoUpgradeStep
autoUpgradeTip
manualUpgradeStep
manualUpgradeTip
```

## 系统

- tag: `fresnsSystems`

```php
fresns_current_version
fresns_new_version
fresns_news
fresns_database_timezone
fresns_database_datetime
fresns_panel_login_path
fresns_panel_translation_{$locale}
fresns_model_key_{$appId}
```

## 配置

- tag: `fresnsConfigs`

```php
fresns_default_langTag
fresns_lang_tags
fresns_config_{$itemKey}_{$langTag}
fresns_config_keys_{$key}_{$langTag}
fresns_config_tag_{$itemTag}_{$langTag}
fresns_config_api_{$itemKey}_{$langTag}
fresns_config_file_accept
fresns_config_file_url_expire
fresns_content_block_words       // fresns_{$type}_block_words
fresns_user_block_words          // fresns_{$type}_block_words
fresns_conversation_block_words  // fresns_{$type}_block_words
fresns_content_ban_words
fresns_content_review_words
fresns_user_ban_words
fresns_conversation_ban_words
fresns_role_{$id}_{$langTag}
fresns_code_messages_{$fskey}_{$langTag}
fresns_api_config_models
fresns_api_configs_{$langTag}
fresns_api_archives_{$type}_{$fskey}_{$langTag}
fresns_api_sticker_tree_{$langTag}
```

## 多语言

- tag: `fresnsLanguages`

```php
fresns_{$tableName}_{$tableColumn}_{$tableId}_{$langTag}
```

## 模型

- tag: `fresnsModels`

```php
fresns_model_account_{$aid}                                  // +tag: fresnsAccounts
fresns_model_user_{$uidOrUsername}_by_fsid                   // +tag: fresnsUsers
fresns_model_user_{$userId}                                  // +tag: fresnsUsers
fresns_model_conversation_{$userId}_{$conversationUserId}    // +tag: fresnsUsers
fresns_model_group_{$gid}                                    // +tag: fresnsGroups
fresns_model_group_{$groupId}                                // +tag: fresnsGroups
fresns_model_groups_{$idOrGid}                               // +tag: fresnsGroups
fresns_model_hashtag_{$hid}                                  // +tag: fresnsHashtags
fresns_model_hashtag_{$hashtagId}                            // +tag: fresnsHashtags
fresns_model_post_{$pid}                                     // +tag: fresnsPosts
fresns_model_post_{$postId}                                  // +tag: fresnsPosts
fresns_model_comment_{$cid}                                  // +tag: fresnsComments
fresns_model_comment_{$commentId}                            // +tag: fresnsComments
fresns_model_file_{$fid}                                     // +tag: fresnsFiles
fresns_model_file_{$fileId}                                  // +tag: fresnsFiles
fresns_model_extend_{$eid}                                   // +tag: fresnsExtends
fresns_model_extend_{$extendId}                              // +tag: fresnsExtends
fresns_model_archive_{$code}                                 // +tag: fresnsArchives
fresns_model_archive_{$archiveId}                            // +tag: fresnsArchives
fresns_model_operation_{$operationId}                        // +tag: fresnsOperations
fresns_model_conversation_{$conversationId}                  // +tag: fresnsConversations
fresns_model_follow_user_{$id}_by_{$userId}                  // +tag: fresnsUsers
fresns_model_follow_group_{$id}_by_{$userId}                 // +tag: fresnsGroups
fresns_model_follow_hashtag_{$id}_by_{$userId}               // +tag: fresnsHashtags
fresns_model_follow_post_{$id}_by_{$userId}                  // +tag: fresnsPosts
fresns_model_follow_comment_{$id}_by_{$userId}               // +tag: fresnsComments
```

## 搜索引擎优化

- tag: `fresnsSeo`

```php
fresns_seo_user_{$userId}            // +tag: fresnsUsers
fresns_seo_group_{$groupId}          // +tag: fresnsGroups
fresns_seo_hashtag_{$hashtagId}      // +tag: fresnsHashtags
fresns_seo_post_{$postId}            // +tag: fresnsPosts
fresns_seo_comment_{$commentId}      // +tag: fresnsComments
```

## 账号

- tag: `fresnsAccounts`

```php
fresns_token_account_{$accountId}_{$token}
fresns_api_account_{$aid}_{$langTag}
```

## 用户

- tag: `fresnsUsers`

```php
fresns_token_user_{$userId}_{$token}
fresns_user_{$userId}_main_role_{$langTag}
fresns_user_{$userId}_roles_{$langTag}
fresns_publish_{$type}_config_{$userId}_{$langTag}
fresns_plugin_{$fskey}_badge_{$userId}
fresns_interaction_status_{$markType}_{$markId}_{$userId}
fresns_follow_{$type}_array_by_{$userId}
fresns_block_{$type}_array_by_{$userId}
fresns_user_activity_{$uid}
fresns_user_post_read_{$pid}_{$uid}
fresns_api_user_{$uid}_{$langTag}
fresns_api_user_stats_{$uid}
fresns_api_user_panel_conversations_{$uid}
fresns_api_user_panel_notifications_{$uid}
fresns_api_user_panel_drafts_{$uid}
```

## 小组

- tag: `fresnsGroups`

```php
fresns_group_count
fresns_private_groups
fresns_filter_group_models
fresns_filter_groups_by_guest
fresns_filter_groups_by_user_{$userId}   // +tag: fresnsUsers
fresns_guest_all_groups
fresns_user_all_groups_{$userId}         // +tag: fresnsUsers
fresns_api_group_{$gid}_{$langTag}
```

## 话题

- tag: `fresnsHashtags`

```php
fresns_api_hashtag_{$hid}_{$langTag}
```

## 帖子

- tag: `fresnsPosts`

```php
fresns_api_post_{$pid}_{$langTag}
fresns_api_post_{$pid}_list_content
fresns_api_post_{$pid}_detail_content
fresns_api_post_{$postId}_preview_comments_{$langTag}    // +tag: fresnsComments
fresns_api_post_{$postId}_preview_like_users_{$langTag}  // +tag: fresnsUsers
```

## 评论

- tag: `fresnsComments`

```php
fresns_api_comment_{$cid}_{$langTag}
fresns_api_comment_{$cid}_list_content
fresns_api_comment_{$cid}_detail_content
fresns_api_comment_{$commentId}_sub_comments_{$langTag}
```

## 扩展

- tag: `fresnsExtensions`

```php
fresns_wallet_recharge_extends_by_everyone_{$langTag}
fresns_wallet_withdraw_extends_by_everyone_{$langTag}
fresns_post_content_types_by_{$typeName}_{$langTag}              // +tag: fresnsConfigs
fresns_comment_content_types_by_{$typeName}_{$langTag}           // +tag: fresnsConfigs

fresns_editor_post_extends_by_everyone_{$langTag}
fresns_editor_comment_extends_by_everyone_{$langTag}
fresns_manage_post_extends_by_everyone_{$langTag}
fresns_manage_comment_extends_by_everyone_{$langTag}
fresns_manage_user_extends_by_everyone_{$langTag}
fresns_group_{$groupId}_extends_by_everyone_{$langTag}           // +tag: fresnsGroups
fresns_feature_extends_by_everyone_{$langTag}
fresns_profile_extends_by_everyone_{$langTag}
fresns_channel_extends_by_everyone_{$langTag}

fresns_editor_post_extends_by_role_{$roleId}_{$langTag}
fresns_editor_comment_extends_by_role_{$roleId}_{$langTag}
fresns_manage_post_extends_by_role_{$roleId}_{$langTag}
fresns_manage_comment_extends_by_role_{$roleId}_{$langTag}
fresns_manage_user_extends_by_role_{$roleId}_{$langTag}
fresns_group_{$groupId}_extends_by_role_{$roleId}_{$langTag}     // +tag: fresnsGroups
fresns_feature_extends_by_role_{$roleId}_{$langTag}
fresns_profile_extends_by_role_{$roleId}_{$langTag}

fresns_manage_post_extends_by_group_admin_{$langTag}
fresns_manage_comment_extends_by_group_admin_{$langTag}
fresns_group_{$groupId}_extends_by_group_admin_{$langTag}        // +tag: fresnsGroups

fresns_plugin_url_{$fskey}                                      // +tag: fresnsConfigs
fresns_plugin_host_{$fskey}                                     // +tag: fresnsConfigs
fresns_plugin_version_{$fskey}                                  // +tag: fresnsConfigs
```

## Fresns 插件

- tag: `fresnsPlugins`
- tag: `fresnsPluginAuth`

## Fresns 官方默认引擎插件

- tag: `fresnsWeb`

```php
fresns_web_status                                     // tag: fresnsWebConfigs
fresns_web_languages                                  // tag: fresnsWebConfigs
fresns_web_api_host                                   // tag: fresnsWebConfigs
fresns_web_api_key                                    // tag: fresnsWebConfigs
fresns_web_key_{$keyId}                               // tag: fresnsWebConfigs
fresns_web_api_config_all_{$langTag}                  // tag: fresnsWebConfigs
fresns_web_code_message_all_{$fskey}_{$langTag}       // tag: fresnsWebConfigs
fresns_web_post_content_types_{$langTag}              // tag: fresnsWebConfigs
fresns_web_comment_content_types_{$langTag}           // tag: fresnsWebConfigs
fresns_web_stickers_{$langTag}                        // tag: fresnsWebConfigs
fresns_web_{$ulid}                                    // tag: fresnsWebAccountTokens

fresns_web_account_{$aid}_{$langTag}
fresns_web_user_{$uid}_{$langTag}
fresns_web_user_panel_{$uid}_{$langTag}
fresns_web_group_categories_by_{$uid}_{$langTag}
fresns_web_group_tree_by_{$uid}_{$langTag}
fresns_web_channels_guest_{$langTag}
fresns_web_channels_{$uid}_{$langTag}

fresns_web_users_index_list_by_{$uid}_{$langTag}
fresns_web_groups_index_list_by_{$uid}_{$langTag}
fresns_web_hashtags_index_list_by_{$uid}_{$langTag}
fresns_web_posts_index_list_by_{$uid}_{$langTag}
fresns_web_comments_index_list_by_{$uid}_{$langTag}

fresns_web_users_index_list_by_guest_{$langTag}
fresns_web_groups_index_list_by_guest_{$langTag}
fresns_web_hashtags_index_list_by_guest_{$langTag}
fresns_web_posts_index_list_by_guest_{$langTag}
fresns_web_comments_index_list_by_guest_{$langTag}

fresns_web_users_list_by_{$uid}_{$langTag}
fresns_web_groups_list_by_{$uid}_{$langTag}
fresns_web_hashtags_list_by_{$uid}_{$langTag}
fresns_web_posts_list_by_{$uid}_{$langTag}
fresns_web_comments_list_by_{$uid}_{$langTag}

fresns_web_users_list_by_guest_{$langTag}
fresns_web_groups_list_by_guest_{$langTag}
fresns_web_hashtags_list_by_guest_{$langTag}
fresns_web_posts_list_by_guest_{$langTag}
fresns_web_comments_list_by_guest_{$langTag}

fresns_web_sticky_posts_{$langTag}
fresns_web_group_{$gid}_sticky_posts_{$langTag}
fresns_web_post_{$pid}_sticky_comments_{$langTag}
```
