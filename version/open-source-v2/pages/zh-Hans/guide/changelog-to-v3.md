# Upgrade to v3 修改记录

## 数据库

**表和字段**

- 删除数据表 `languages`，多语言字段改为 `json` 格式，多语言值存在字段里，不单独存表。因为多语言不单独建表，所以语言配置创建后不支持修改语言标签。
- 所有 `rating` 字段名修改为 `sort_order`
- 所有 `more_json` 字段名修改为 `more_info`
- 数据表 `groups`
    - 删除字段 `type`
- 新增数据表 `themes`
- 新增数据表 `geotags`
- 移除数据表 `user_blocks`
- 移除数据表 `block_words`
- 移除数据表 `placements`

**配置键名**

- 菜单配置键名以 `menu_` 开头改为 `channel_` 开头
- 栏目配置键名以 `menu_` 开头改为 `column_` 开头
- `site_copyright` 修改为 `site_copyright_name`
- `account_cookies_status` 修改为 `account_cookie_status`
- `account_terms` 修改为 `account_terms_policy`
- `account_privacy` 修改为 `account_privacy_policy`
- `account_cookies` 修改为 `account_cookie_policy`
- `account_delete` 修改为 `account_delete_policy`
- `account_real_name_service` 修改为 `account_kyc_service`
- `wallet_withdraw_verify` 修改为 `wallet_withdraw_check_kyc`
- `ban_names` 修改为 `user_ban_names`
- `view_posts_by_follow_object` 修改为 `view_posts_by_timelines`
- `view_comments_by_follow_object` 修改为 `view_comments_by_timelines`
- `it_home_list` 修改为 `profile_default_homepage`

## 命令字

- `getPostByAll` 修改为 `getPosts`
- `getPostByFollow` 修改为 `getPostsByTimelines`
- `getPostByNearby` 修改为 `getPostsByNearby`
- `getCommentByAll` 修改为 `getComments`
- `getCommentByFollow` 修改为 `getCommentsByTimelines`
- `getCommentByNearby` 修改为 `getCommentsByNearby`
- `verifyUrlAuthorization` 修改为 `checkAccessToken`
- 文件新增命令字 `getAntiLinkFileConfigUrl`

## 语言包

- 除「政策条款」外，所有多语言配置项都并入语言包配置
- 语言标识名 `rankNum` 修改为 `sortOrder`
- 语言标识名 `getLocationError` 修改为 `errorGetLocation`
- 语言标识名 `userExtcreditsLogPlugin` 修改为 `userExtcreditsLogApp`
- 语言标识名 `accountRealName` 修改为 `accountKyc`
- 语言标识名 `userPassword` 修改为 `userPin`
- 语言标识名 `userAuthPassword` 修改为 `userAuthPin`
- 语言标识名 `userAuth` 修改为 `userEnter`
- 语言标识名 `renewal` 修改为 `privateRenewal`
- 语言标识名 `settingConnect` 修改为 `settingConnects`
- 语言标识名 `userDeactivate` 修改为 `userDeactivated`
- 语言标识名 `notificationLike` 修改为 `notificationLiked`
- 语言标识名 `notificationDislike` 修改为 `notificationDisliked`
- 语言标识名 `notificationFollow` 修改为 `notificationFollowed`
- 语言标识名 `notificationBlock` 修改为 `notificationBlocked`
- 语言标识名 `notificationMention` 修改为 `notificationMentioned`
- 语言标识名 `notificationComment` 修改为 `notificationCommented`
- 语言标识名 `notificationQuote` 修改为 `notificationQuoted`
- 语言标识名 `editorFullFunctions` 修改为 `editorGoTo`
- 语言标识名 `editorRequired` 修改为 `required`
- 语言标识名 `editorOptional` 修改为 `optional`
- 语言标识名 `editorVideoPlay` 修改为 `editorVideoPlayTip`

## 插件机制

- 回调功能，路径变量名 `authorization` 修改为 `accessToken`

## API

**接口地址**

- `/global/code-messages` 移除该接口
- `/global/block-words` 移除该接口
- `/common/upload-log` 移除该接口
- `/account/register` 移除该接口
- `/account/reset-password` 移除该接口
- `/account/verify-identity` 移除该接口
- `/account/apply-delete` 移除该接口
- `/account/recall-delete` 移除该接口
- `/account/login` 接口地址修改为 `/account/auth-token`
- `/account/wallet-logs` 接口地址修改为 `/account/wallet-records`
- `/user/auth` 接口地址修改为 `/user/auth-token`
- `/user/panel` 接口地址修改为 `/user/overview`
- `/notification/mark-as-read` 接口地址修改为 `/notification/read-status`
- `/conversation/mark-as-read` 接口地址修改为 `/notification/read-status`
- `/post/follow` 接口地址修改为 `/post/timelines`
- `/post/{pid}/logs` 接口地址修改为 `/post/{pid}/histories`
- `/post/{pid}/log/{logId}` 接口地址修改为 `/post/history/{hpid}/detail`
- `/comment/follow` 接口地址修改为 `/comment/timelines`
- `/comment/{pid}/logs` 接口地址修改为 `/comment/{pid}/histories`
- `/comment/{pid}/log/{logId}` 接口地址修改为 `/comment/history/{hpid}/detail`
- `/editor/{type}/config` 接口地址修改为 `/editor/{type}/configs`
- `/editor/{type}/quick-publish` 接口地址修改为 `/editor/{type}/publish`
- `/editor/{type}/create` 接口地址修改为 `/editor/{type}/draft`
- `/editor/{type}/generate/{fsid}` 接口地址修改为 `/editor/{type}/edit/{fsid}`
- `/editor/{type}/create` 接口地址修改为 `/editor/{type}/draft`
- `/editor/{type}/{did}` 接口地址修改为 `/editor/{type}/draft/{did}`

**接口参数**

- `/global/configs`
    - 移除参数 `tags`
- `/global/roles`
    - 参数名 `ids` 修改为 `rids`
    - 移除参数 `type`
- `/common/file/{fid}/link`
    - 返回结果，参数名 `originalUrl` 修改为 `link`
- `/common/file/{fid}/users`
    - 参数名 `whitelistKeys` 修改为 `whitelistUserKeys`
    - 参数名 `blacklistKeys` 修改为 `blacklistUserKeys`
- `/account/login`
    - 移除所有参数
    - 采用参数 `loginToken`
    - 返回结果，参数名 `sessionToken` 修改为 `authToken`
- `/user/auth`
    - 参数名 `password` 修改为 `pin`
    - 移除参数 `deviceToken`
    - 返回结果，参数名 `sessionToken` 修改为 `authToken`
- `/user/mark`
    - 参数名 `interactionType` 修改为 `markType`
    - 参数名 `markType` 修改为 `type`
- `/user/mark-note`
    - 参数名 `markType` 修改为 `type`
    - 移除参数 `interactionType`
- `/user/overview`
    - 移除参数 `multiUser`
    - 移除参数 `fileAccept`
- `/notification/list`
    - 参数名 `userWhitelistKeys` 修改为 `whitelistUserKeys`
    - 参数名 `userBlacklistKeys` 修改为 `blacklistUserKeys`
    - 参数名 `whitelistKeys` 修改为 `whitelistInfoKeys`
    - 参数名 `blacklistKeys` 修改为 `blacklistInfoKeys`
    - 返回结果，参数名 `id` 修改为 `nmid`
    - 返回结果，参数名 `isAccessPlugin` 修改为 `isAccessApp`
    - 返回结果，参数名 `pluginUrl` 修改为 `appUrl`
- `/conversation/list`
    - 参数名 `whitelistKeys` 修改为 `whitelistUserKeys`
    - 参数名 `blacklistKeys` 修改为 `blacklistUserKeys`
    - 返回结果，参数名 `latestMessage.id` 修改为 `cmid`
- `/conversation/{cvid}/detail`
    - 参数名 `whitelistKeys` 修改为 `whitelistUserKeys`
    - 参数名 `blacklistKeys` 修改为 `blacklistUserKeys`
- `/conversation/{cvid}/messages`
    - 参数名 `whitelistKeys` 修改为 `whitelistUserKeys`
    - 参数名 `blacklistKeys` 修改为 `blacklistUserKeys`
    - 返回结果，参数名 `id` 修改为 `cmid`
- `/conversation/pin`
    - 参数名 `conversationId` 修改为 `uidOrUsername`
- `/conversation/send-message`
    - 返回结果，参数名 `id` 修改为 `cmid`
- `/conversation/delete`
    - 参数名 `messageIds` 修改为 `cmids`
- `/conversation/mark-as-read`
    - 参数名 `conversationId` 修改为 `cvid`
- `/post/list`
    - 新增参数 `lastPid`
    - 新增参数 `whitelistGroupKeys`
    - 新增参数 `blacklistGroupKeys`
    - 新增参数 `whitelistHashtagKeys`
    - 新增参数 `blacklistHashtagKeys`
    - 新增参数 `whitelistGeotagKeys`
    - 新增参数 `blacklistGeotagKeys`
    - 新增参数 `whitelistAuthorKeys`
    - 新增参数 `blacklistAuthorKeys`
    - 新增参数 `whitelistQuotedPostKeys`
    - 新增参数 `blacklistQuotedPostKeys`
    - 新增参数 `whitelistPreviewLikeUserKeys`
    - 新增参数 `blacklistPreviewLikeUserKeys`
    - 新增参数 `whitelistPreviewCommentKeys`
    - 新增参数 `blacklistPreviewCommentKeys`
- `/editor/{type}/configs`
    - 参数 `uploadForm` 修改为 `uploadType`
    - 参数 `toolbar.title.view` 修改为 `inputDisplay`
    - 参数 `map` 修改为 `mapUrl`
- `/editor/{type}/publish`
    - 参数 `postQuotePid` 修改为 `quotePid`
    - 参数 `postGid` 修改为 `gid`
    - 参数 `postTitle` 修改为 `title`
    - 参数 `map` 修改为 `location`
    - 参数 `postIsCommentDisabled` 修改为 `commentDisabled`
    - 参数 `postIsCommentPrivate` 修改为 `commentPrivate`
    - 返回结果，参数名 `draftId` 修改为 `did`

**通用数据结构**

- 用户
    - 新增参数 `moreInfo`
    - 参数 `verifiedStatus` 修改为 `verified`
    - 参数 `hasPassword` 修改为 `hasPin`
    - 参数 `rid` 类型修改为 String
    - 参数 `lastPublishPost` 修改为 `lastPublishPostDateTime`
    - 参数 `lastPublishComment` 修改为 `lastPublishCommentDateTime`
    - 参数 `lastEditUsername` 修改为 `lastEditUsernameDateTime`
    - 参数 `lastEditNickname` 修改为 `lastEditNicknameDateTime`
    - 参数 `likeMeCount` 修改为 `likerCount`
    - 参数 `dislikeMeCount` 修改为 `dislikerCount`
    - 参数 `followMeCount` 修改为 `followerCount`
    - 参数 `blockMeCount` 修改为 `blockerCount`
    - 移除参数 `rolePermissions`
- 小组
    - 新增参数 `moreInfo`
    - 参数 `gname` 修改为 `name`
    - 参数 `category` 修改为 `parentInfo`
    - 参数 `mode` 修改为 `privacy`
    - 参数 `modeEndAfter` 修改为 `privateEndAfter`
    - 参数 `find` 修改为 `visibility`
    - 参数 `subGroupPost` 修改为 `canPublish`
    - 移除参数 `type`
    - 移除参数 `contentMeta`
- 话题
    - 新增参数 `moreInfo`
    - 参数 `hname` 修改为 `name`
- 帖子
    - 新增参数 `moreInfo`
    - 参数 `moreJson` 修改为 `moreInfo`
    - 参数 `location` 修改为 `geotag`
    - 参数 `isMe` 修改为 `isAuthor`
    - 参数 `isPluginEditor` 修改为 `isAppEditor`
    - 参数 `isCommentHidden`, `isCommentDisabled`, `isCommentPrivate` 合并进 `commentConfig` 参数中，并且去除前缀 `isComment`
- 历史帖子
    - 参数 `id` 修改为 `hpid`，类型修改为 String
    - 参数 `isPluginEditor` 修改为 `isAppEditor`
    - 参数 `mapJson` 修改为 `mapInfo`
    - 参数 `readJson` 修改为 `readConfig`
    - 参数 `userListJson` 修改为 `affiliatedUserConfig`
    - 参数 `isUserList` 修改为 `hasUserList`
    - 参数 `commentBtnJson` 修改为 `commentBtnConfig`
    - 参数 `isCommentButton` 修改为 `commentHasButton`
    - 参数 `isCommentDisabled`, `isCommentPrivate` 合并进 `commentConfig` 参数中，并且去除前缀 `isComment`
    - 参数 `pluginFskey` 修改为 `appFskey`
    - 参数 `pluginUrl` 修改为 `appUrl`
    - 涉及 `btn` 的参数，全部改用全称 `button`
- 评论
    - 新增参数 `previewLikeUsers`
    - 参数 `subComments` 修改为 `previewComments`
    - 参数 `isCommentPrivate` 修改为 `isPrivate`
    - 参数 `moreJson` 修改为 `moreInfo`
    - 参数 `location` 修改为 `geotag`
    - 参数 `isMe` 修改为 `isAuthor`
    - 参数 `isPluginEditor` 修改为 `isAppEditor`
- 历史评论
    - 参数 `id` 修改为 `hcid`，类型修改为 String
    - 参数 `isPluginEditor` 修改为 `isAppEditor`
    - 参数 `mapJson` 修改为 `mapInfo`
    - 涉及 `btn` 的参数，全部改用全称 `button`
- 文件
    - 参数 `moreJson` 修改为 `moreInfo`
    - 移除参数 `imageConfigUrl`
- 扩展
    - 参数 `imageUrl` 修改为 `image`
    - 参数 `imageActiveUrl` 修改为 `activeImage`
    - 参数 `pluginUrl` 修改为 `appUrl`
    - 参数 `accessUrl` 修改为 `appUrl`
    - 参数 `moreJson` 修改为 `moreInfo`
    - 参数 `infoBoxType` 修改为 `type`
    - 参数 `infoBoxTypeString` 修改为 `typeString`
- 所有通用数据里互动参数
    - 参数 `likeSetting` 修改为 `likeEnabled`
    - 参数 `dislikeSetting` 修改为 `dislikeEnabled`
    - 参数 `followSetting` 修改为 `followEnabled`
    - 参数 `blockSetting` 修改为 `blockEnabled`
    - 参数 `followNote` 和 `blockNote` 合并为 `note`
