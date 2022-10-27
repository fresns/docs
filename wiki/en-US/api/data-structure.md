# Common Data Structure

为了减少编写文档的工作量，以及保证公共数据的一致，本页面将 API 文档中相同的部分统一撰写为数据结构。

- Empty array use `[]`
- Empty object use `null`

## Account Info

```json
{
    "aid": "String / 账号 ID",
    "countryCode": "Number / 手机国际区号",
    "purePhone": "String / 加密的手机号",
    "phone": "String / 加密的带国际区号的手机号",
    "email": "String / 加密的邮箱",
    "hasPassword": "Boolean / 账号是否有密码",
    "verifyStatus": "Boolean / 是否实名认证",
    "verifySupport": "String / 实名认证的地址",
    "verifyRealName": "String / 加密的姓名",
    "verifyGender": "Number / 性别 0.未知 1.男 2.女",
    "verifyCertType": "String / 证件类型 idcard 身份证 passport 护照 driving 驾驶证 business 营业执照",
    "verifyCertNumber": "String / 加密的证件号码",
    "verifyIdentityType": "Number / 认证类型 0.未知 1.个人 2.企业",
    "verifyDateTime": "String / 认证时间",
    "registerDateTime": "String / 账号注册时间",
    "status": "Boolean / 账号状态",
    "waitDelete": "Boolean / 是否待删除",
    "waitDeleteDateTime": "String / 准备删除时间",
    "deactivate": "Boolean / 是否已注销",
    "deactivateTime": "String / 注销时间",
    "connects": [
        {
            "connectId": "Number / 互联平台编号",
            "username": "String / 互联用户名",
            "nickname": "String / 互联昵称",
            "avatar": "String / 互联头像",
            "status": "String / 互联是否有效"
        }
    ],
    "wallet": {
        "status": "Boolean / 钱包是否有效",
        "hasPassword": "Boolean / 钱包是否有密码",
        "currencyCode": "String / 货币标识，例如 USD",
        "currencyName": "String / 货币自定义名称",
        "currencyUnit": "String / 货币单位自定义名称",
        "currencyPrecision": "Number / 货币精度",
        "balance": "String / 钱包金额",
        "freezeAmount": "String / 不可用金额",
        "bankName": "String / 银行名称",
        "swiftCode": "String / SWIFT 代码",
        "bankAddress": "String / 银行地址",
        "bankAccount": "String / 加密的银行账号",
        "bankStatus": "Boolean / 银行验证状态"
    },
    "users": [
        {
            // Common Data Structure -> User Info
        }
    ],
    "interactive": {
        "userName": "String / 用户身份自定义名称",
        "userUidName": "String / 用户 ID 自定义名称",
        "userUsernameName": "String / 用户名自定义名称",
        "userNicknameName": "String / 用户昵称自定义名称",
        "userRoleName": "String / 用户角色自定义名称",
        "userBioName": "String / 用户介绍自定义名称",
        "followSetting": "Boolean / 是否允许 follow",
        "followName": "String / follow 行为自定义名称",
        "likeSetting": "Boolean / 是否允许 like",
        "likeName": "String / like 行为自定义名称",
        "dislikeSetting": "Boolean / 是否允许 dislike",
        "dislikeName": "String / dislike 行为自定义名称",
        "blockSetting": "Boolean / 是否允许 block",
        "blockName": "String / block 行为自定义名称",
        "publishPostName": "String / 发表帖子自定义名称",
        "publishCommentName": "String / 发表评论自定义名称",
    }
}
```

## User Info

```json
{
    "fsid": "String / 用户标识 ID，uid 或 username",
    "uid": "Number / 用户 ID",
    "username": "String / 用户名",
    "url": "String / 用户主页地址",
    "nickname": "String / 用户昵称",
    "avatar": "String / 头像图",
    "decorate": "String / 头像挂件",
    "banner": "String / 条幅图",
    "gender": "Number / 性别 0.未知 1.男 2.女",
    "birthday": "String / 生日",
    "bio": "String / 简介",
    "location": "String / 位置",
    "dialogLimit": "Number / 会话设置，1.允许所有用户 2.仅允许我关注的用户 3.我关注的用户和已认证的用户 4.不允许所有用户",
    "commentLimit": "Number / 评论设置，1.允许所有用户 2.仅允许我关注的用户 3.我关注的用户和已认证的用户 4.不允许所有用户",
    "timezone": "String / 自定义 UTC 时区",
    "verifiedStatus": "Boolean / 是否认证",
    "verifiedIcon": "String / 自定义认证图标",
    "verifiedDesc": "String / 认证介绍",
    "verifiedDateTime": "String / 认证时间",
    "expiryDateTime": "String / 用户过期时间",
    "lastPublishPost": "String / 最后发帖时间",
    "lastPublishComment": "String / 最后评论时间",
    "lastEditUsername": "String / 最后修改用户名时间",
    "lastEditNickname": "String / 最后修改昵称时间",
    "registerDate": "String / 注册日期",
    "hasPassword": "Boolean / 是否有密码",
    "status": "Boolean / 用户状态",
    "waitDelete": "Boolean / 是否待删除",
    "waitDeleteDateTime": "String / 准备删除时间",
    "deactivate": "Boolean / 是否已注销",
    "deactivateTime": "String / 注销时间",
    "nicknameColor": "String / 主角色-昵称颜色",
    "rid": "Number / 主角色-角色 ID",
    "roleName": "String / 主角色-角色名",
    "roleNameDisplay": "Boolean / 主角色-是否显示角色名",
    "roleIcon": "String / 主角色-角色图标地址",
    "roleIconDisplay": "Boolean / 主角色-是否显示角色图标",
    "roleExpiryDateTime": "String / 主角色-角色过期日期",
    "rolePermissions": {
        // Object 角色权限
        // 数据表 roles->permissions
    },
    "roleStatus": "Boolean / 主角色-是否有效",
    "stats": {
        "likeUserCount": "Number / 他点赞的用户总数",
        "likeGroupCount": "Number / 他点赞的小组总数",
        "likeHashtagCount": "Number / 他点赞的话题总数",
        "likePostCount": "Number / 他点赞的帖子总数",
        "likeCommentCount": "Number / 他点赞的评论总数",
        "dislikeUserCount": "Number / 他点踩的用户总数",
        "dislikeGroupCount": "Number / 他点踩的小组总数",
        "dislikeHashtagCount": "Number / 他点踩的话题总数",
        "dislikePostCount": "Number / 他点踩的帖子总数",
        "dislikeCommentCount": "Number / 他点踩的评论总数",
        "followUserCount": "Number / 他关注的用户总数",
        "followGroupCount": "Number / 他关注的小组总数",
        "followHashtagCount": "Number / 他关注的（收藏）话题总数",
        "followPostCount": "Number / 他关注的（收藏）帖子总数",
        "followCommentCount": "Number / 他关注的（收藏）评论总数",
        "blockUserCount": "Number / 他一共屏蔽（拉黑）了多少用户",
        "blockGroupCount": "Number / 他屏蔽的（不感兴趣）小组总数",
        "blockHashtagCount": "Number / 他屏蔽的（不感兴趣）话题总数",
        "blockPostCount": "Number / 他屏蔽的（不感兴趣）帖子总数",
        "blockCommentCount": "Number / 他屏蔽的（不感兴趣）评论总数",
        "likeMeCount": "Number / 别人点赞他的人数",
        "dislikeMeCount": "Number / 别人点踩他的人数",
        "followMeCount": "Number / 别人关注他的人数（粉丝数）",
        "blockMeCount": "Number / 别人屏蔽（拉黑）他的人数",
        "postPublishCount": "Number / 他发表的帖子总数",
        "postDigestCount": "Number / 他的帖子精华总数",
        "postLikeCount": "Number / 别人赞了他的帖子总数",
        "postDislikeCount": "Number / 别人踩了他的帖子总数",
        "postFollowCount": "Number / 别人关注了他的帖子总数",
        "postBlockCount": "Number / 别人屏蔽了他的帖子总数",
        "commentPublishCount": "Number / 他发表的评论总数",
        "commentDigestCount": "Number / 他的评论精华总数",
        "commentLikeCount": "Number / 别人赞了他的评论总数",
        "commentDislikeCount": "Number / 别人踩了他的评论总数",
        "commentFollowCount": "Number / 别人关注了他的评论总数",
        "commentBlockCount": "Number / 别人屏蔽了他的评论总数",
        "extcredits1": "Number / 自定义分值",
        "extcredits1Status": "Number / 状态 1.不启用 2.私有 3.公开",
        "extcredits1Name": "String / 名称",
        "extcredits1Unit": "String / 单位",
        "extcredits2": "Number / 自定义分值",
        "extcredits2Status": "Number / 状态 1.不启用 2.私有 3.公开",
        "extcredits2Name": "String / 名称",
        "extcredits2Unit": "String / 单位",
        "extcredits3": "Number / 自定义分值",
        "extcredits3Status": "Number / 状态 1.不启用 2.私有 3.公开",
        "extcredits3Name": "String / 名称",
        "extcredits3Unit": "String / 单位",
        "extcredits4": "Number / 自定义分值",
        "extcredits4Status": "Number / 状态 1.不启用 2.私有 3.公开",
        "extcredits4Name": "String / 名称",
        "extcredits4Unit": "String / 单位",
        "extcredits5": "Number / 自定义分值",
        "extcredits5Status": "Number / 状态 1.不启用 2.私有 3.公开",
        "extcredits5Name": "String / 名称",
        "extcredits5Unit": "String / 单位"
    },
    "archives": {
        "String / 扩展参数 Code": "String / 扩展参数内容"
    },
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
    "extends": {
        // Common Data Structure -> Extend Content Info
    },
    "roles": [
        {
            "rid": "Number / 角色 ID",
            "isMain": "Boolean / 是否为主角色",
            "expiryDateTime": "String / 角色过期日期",
            "nicknameColor": "String / 昵称颜色",
            "name": "String / 角色名",
            "nameDisplay": "Boolean / 是否显示角色名",
            "icon": "String / 角色图标地址",
            "iconDisplay": "Boolean / 是否显示角色图标",
            "status": "Boolean / 是否有效"
        }
    ],
    "interactive": {
        "userName": "String / 用户身份自定义名称",
        "userUidName": "String / 用户 ID 自定义名称",
        "userUsernameName": "String / 用户名自定义名称",
        "userNicknameName": "String / 用户昵称自定义名称",
        "userRoleName": "String / 用户角色自定义名称",
        "userBioName": "String / 用户介绍自定义名称",
        "likeSetting": "Boolean / 是否允许 like",
        "likeName": "String / like 行为自定义名称",
        "dislikeSetting": "Boolean / 是否允许 dislike",
        "dislikeName": "String / dislike 行为自定义名称",
        "followSetting": "Boolean / 是否允许 follow",
        "followName": "String / follow 行为自定义名称",
        "blockSetting": "Boolean / 是否允许 block",
        "blockName": "String / block 行为自定义名称",
        "publishPostName": "String / 发表帖子自定义名称",
        "publishCommentName": "String / 发表评论自定义名称",
        "likeStatus": "Boolean / 是否可以操作点赞",
        "dislikeStatus": "Boolean / 是否可以操作点踩",
        "followStatus": "Boolean / 是否可以操作关注",
        "followMeStatus": "Boolean / 他是否关注了我",
        "followNote": "String / 我对他的关注备注",
        "blockStatus": "Boolean / 是否可以操作屏蔽",
        "blockMeStatus": "Boolean / 他是否屏蔽了我",
        "blockNote": "String / 我对他的屏蔽备注"
    },
    "dialog": {
        "status": "Boolean / 是否可以给他发私信",
        "code": "Number / 不能发时的错误码",
        "message": "String / 不能发时的错误描述"
    }
}
```

## Group Info

```json
{
    "gid": "String / 小组 ID",
    "url": "String / 小组详情页地址",
    "type": "Number / 小组类型 1.小组分类 2.小组 3.子小组，小组内小组",
    "gname": "String / 小组名",
    "description": "String / 小组介绍",
    "cover": "String / 小组封面图",
    "banner": "String / 小组条幅图",
    "recommend": "Boolean / 是否为推荐小组",
    "mode": "Number / 小组模式 1.公开 2.非公开",
    "find": "Number / 是否可发现（是否显示） 1.可发现 2.不可发现",
    "followType": "Number / 关注方式 1.原生方式 2.插件方式",
    "followUrl": "String / 关注方式 2 专用，操作关注插件页地址",
    "parentGid": "String / 父级小组 ID",
    "category": {
        "gid": "String / 父级小组 ID",
        "gname": "String / 父级小组名",
        "description": "String / 父级小组介绍",
        "cover": "String / 父级小组封面图",
        "banner": "String / 父级小组条幅图"
    },
    "likeCount": "Number / 被点赞总数",
    "dislikeCount": "Number / 被点踩总数",
    "followCount": "Number / 被关注总数",
    "blockCount": "Number / 被屏蔽总数",
    "postCount": "Number / 帖子总数",
    "postDigestCount": "Number / 精华帖子总数",
    "permissions": {
        // Object 角色权限
        // 数据表 groups->permissions
    },
    "createDate": "String / 小组创建日期",
    "archives": {
        "String / 扩展参数 Code": "String / 扩展参数内容"
    },
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
    "extends": {
        // Common Data Structure -> Extend Content Info
    },
    "creator": {
        // 小组创建者
        // 用户 Profile 信息
    },
    "publishRule": {
        "allowPost": "Boolean / 是否有权发帖子",
        "reviewPost": "Boolean / 发帖子是否需要审核",
        "allowComment": "Boolean / 是否有权发评论",
        "reviewComment": "Boolean / 发评论是否需要审核"
    },
    "admins": [
        {
            // 小组管理员列表
            // 用户 Profile 信息
        }
    ],
    "interactive": {
        "groupName": "String / 小组自定义名称",
        "likeSetting": "Boolean / 是否允许 like",
        "likeName": "String / like 行为自定义名称",
        "dislikeSetting": "Boolean / 是否允许 dislike",
        "dislikeName": "String / dislike 行为自定义名称",
        "followSetting": "Boolean / 是否允许 follow",
        "followName": "String / follow 行为自定义名称",
        "blockSetting": "Boolean / 是否允许 block",
        "blockName": "String / block 行为自定义名称",
        "publishPostName": "String / 发表帖子自定义名称",
        "publishCommentName": "String / 发表评论自定义名称",
        "likeStatus": "Boolean / 是否可以操作点赞",
        "dislikeStatus": "Boolean / 是否可以操作点踩",
        "followStatus": "Boolean / 是否可以操作关注",
        "followNote": "String / 我对该小组的关注备注",
        "blockStatus": "Boolean / 是否可以操作屏蔽",
        "blockNote": "String / 我对该小组的屏蔽备注"
    }
}
```

## Hashtag Info

```json
{
    "hid": "String / 话题 ID",
    "url": "String / 话题详情页地址",
    "hname": "String / 话题名",
    "cover": "String / 话题封面图",
    "description": "String / 话题介绍",
    "likeCount": "Number / 被点赞总数",
    "dislikeCount": "Number / 被点踩总数",
    "followCount": "Number / 被关注总数",
    "blockCount": "Number / 被屏蔽总数",
    "postCount": "Number / 帖子总数",
    "postDigestCount": "Number / 精华帖子总数",
    "createDate": "String / 小组创建日期",
    "archives": {
        "String / 扩展参数 Code": "String / 扩展参数内容"
    },
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
    "extends": {
        // Common Data Structure -> Extend Content Info
    },
    "interactive": {
        "hashtagName": "String / 话题自定义名称",
        "likeSetting": "Boolean / 是否允许 like",
        "likeName": "String / like 行为自定义名称",
        "dislikeSetting": "Boolean / 是否允许 dislike",
        "dislikeName": "String / dislike 行为自定义名称",
        "followSetting": "Boolean / 是否允许 follow",
        "followName": "String / follow 行为自定义名称",
        "blockSetting": "Boolean / 是否允许 block",
        "blockName": "String / block 行为自定义名称",
        "publishPostName": "String / 发表帖子自定义名称",
        "publishCommentName": "String / 发表评论自定义名称",
        "likeStatus": "Boolean / 是否可以操作点赞",
        "dislikeStatus": "Boolean / 是否可以操作点踩",
        "followStatus": "Boolean / 是否可以操作关注",
        "followNote": "String / 我对该话题的关注备注",
        "blockStatus": "Boolean / 是否可以操作屏蔽",
        "blockNote": "String / 我对该话题的屏蔽备注"
    }
}
```

## Post Info

```json
{
    "pid": "String / 帖子 ID",
    "url": "String / 帖子详情页地址",
    "title": "String / 帖子标题",
    "content": "String / 帖子内容或简述",
    "contentLength": "Number / 内容总长度",
    "langTag": "String / 内容语言标签",
    "writingDirection": "String / 内容撰写方向",
    "isBrief": "Boolean / 是否为简述",
    "isMarkdown": "Boolean / 是否为 MD 格式",
    "isAnonymous": "Boolean / 是否匿名",
    "stickyState": "Number / 置顶状态 1.否 2.小组页置顶 3.全局置顶",
    "digestState": "Number / 精华状态 1.否 2.普通精华 3.高级精华",
    "likeCount": "Number / 被点赞总数",
    "dislikeCount": "Number / 被点踩总数",
    "followCount": "Number / 被关注总数",
    "blockCount": "Number / 被屏蔽总数",
    "commentCount": "Number / 评论总数",
    "commentDigestCount": "Number / 评论中精华总数",
    "commentLikeCount": "Number / 评论被点赞总数",
    "commentDislikeCount": "Number / 评论被点赞总数",
    "commentFollowCount": "Number / 评论被关注总数",
    "commentBlockCount": "Number / 评论被屏蔽总数",
    "createTime": "String / 帖子发表时间",
    "createTimeFormat": "String / 帖子发表人性化时间",
    "editTime": "String / 帖子最后编辑时间",
    "editTimeFormat": "String / 帖子最后编辑人性化时间",
    "editCount": "Number / 编辑次数",
    "isAllow": "Boolean / 是否需要授权",
    "allowProportion": "Number / 无权时内容显示百分比",
    "allowBtnName": "String / 无权时按钮文字",
    "allowBtnUrl": "String / 处理授权的地址",
    "isUserList": "Boolean / 是否有关联用户列表",
    "userListName": "String / 用户列表名称",
    "userListUrl": "String / 查看用户列表的地址",
    "userListCount": "Number / 用户列表用户数",
    "ipLocation": "String / 发表 IP 位置",
    "location": {
        "isLbs": "Boolean / 是否有位置信息",
        "mapId": "Number / 经纬度地图编号",
        "latitude": "String / 纬度",
        "longitude": "String / 经度",
        "scale": "String / 定位地图比例",
        "poi": "String / POI 信息",
        "poiId": "String / POI ID",
        "distance": "Number / 帖子发表位置与我的距离",
        "unit": "String / 与我距离的单位 km 或 mi",
    },
    "isComment": "Boolean / 是否可评论",
    "isCommentPublic": "Boolean / 是否公开评论（不公开则仅帖子作者可见）",
    "archives": {
        "String / 扩展参数 Code": "String / 扩展参数内容"
    },
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
    "extends": {
        // Common Data Structure -> Extend Content Info
    },
    "files": {
        "images": [
            {
                // Common Data Structure -> File Info
            }
        ],
        "videos": [
            {
                // Common Data Structure -> File Info
            }
        ],
        "audios": [
            {
                // Common Data Structure -> File Info
            }
        ],
        "documents": [
            {
                // Common Data Structure -> File Info
            }
        ]
    },
    "fileCount": {
        "images": "Number / 图片数量",
        "videos": "Number / 视频数量",
        "audios": "Number / 音频数量",
        "documents": "Number / 文档数量"
    },
    "group": {
        // 帖子所属小组，可为 null
        // Common Data Structure -> Group Info
    },
    "hashtags": [
        {
            // 帖子关联话题
            // Common Data Structure -> Hashtag Info
        }
    ],
    "creator": {
        // 帖子作者
        // 用户 Profile 信息
    },
    "topComment": {
        // 帖子热门评论，可为 null
        // Common Data Structure -> Comment Info
    },
    "manages": [
        // 帖子管理扩展
        // Common Data Structure -> Extend Function Info
    ],
    "editStatus": {
        "isMe": "Boolean / 我是否为作者",
        "canDelete": "Boolean / 是否允许删除",
        "canEdit": "Boolean / 是否允许编辑",
        "isPluginEditor": "Boolean / 是否插件编辑器",
        "editorUrl": "String / 插件编辑器访问地址"
    },
    "interactive": {
        "postName": "String / 帖子自定义名称",
        "likeSetting": "Boolean / 是否允许 like",
        "likeName": "String / like 行为自定义名称",
        "dislikeSetting": "Boolean / 是否允许 dislike",
        "dislikeName": "String / dislike 行为自定义名称",
        "followSetting": "Boolean / 是否允许 follow",
        "followName": "String / follow 行为自定义名称",
        "blockSetting": "Boolean / 是否允许 block",
        "blockName": "String / block 行为自定义名称",
        "publishPostName": "String / 发表帖子自定义名称",
        "publishCommentName": "String / 发表评论自定义名称",
        "likeStatus": "Boolean / 是否可以操作点赞",
        "dislikeStatus": "Boolean / 是否可以操作点踩",
        "followStatus": "Boolean / 是否可以操作关注",
        "followNote": "String / 我对该帖子的关注备注",
        "blockStatus": "Boolean / 是否可以操作屏蔽",
        "blockNote": "String / 我对该帖子的屏蔽备注"
    },
    "commentHidden": "Boolean / 是否隐藏评论",
    "followType": "String / 来自哪种关注 null.无 user.我关注的用户 group.我关注的小组 hashtag.我关注的话题 digest.高级精华"
}
```

## Comment Info

```json
{
    "cid": "String / 评论 ID",
    "url": "String / 评论详情页地址",
    "content": "String / 评论内容或简述",
    "contentLength": "Number / 内容总长度",
    "langTag": "String / 内容语言标签",
    "writingDirection": "String / 内容撰写方向",
    "isBrief": "Boolean / 是否为简述",
    "isMarkdown": "Boolean / 是否为 MD 格式",
    "isAnonymous": "Boolean / 是否匿名",
    "isSticky": "Boolean / 是否置顶",
    "digestState": "Number / 精华状态 1.否 2.普级精华 3.高级精华",
    "likeCount": "Number / 被点赞总数",
    "dislikeCount": "Number / 被点踩总数",
    "followCount": "Number / 被关注总数",
    "blockCount": "Number / 被屏蔽总数",
    "commentCount": "Number / 子评论总数",
    "commentDigestCount": "Number / 子评论中精华总数",
    "commentLikeCount": "Number / 子评论被点赞总数",
    "commentDislikeCount": "Number / 子评论被点赞总数",
    "commentFollowCount": "Number / 子评论被关注总数",
    "commentBlockCount": "Number / 子评论被屏蔽总数",
    "createTime": "String / 评论发表时间",
    "createTimeFormat": "String / 评论发表人性化时间",
    "editTime": "String / 评论最后编辑时间",
    "editTimeFormat": "String / 评论最后编辑人性化时间",
    "editCount": "Number / 编辑次数",
    "isCommentBtn": "Boolean / 评论是否有扩展按钮",
    "commentBtnName": "String / 按钮文字",
    "commentBtnStyle": "String / 按钮风格",
    "commentBtnUrl": "String / 按钮访问地址",
    "ipLocation": "String / 发表 IP 位置",
    "location": {
        "isLbs": "Boolean / 是否有位置信息",
        "mapId": "Number / 经纬度地图编号",
        "latitude": "String / 纬度",
        "longitude": "String / 经度",
        "scale": "String / 定位地图比例",
        "poi": "String / POI 信息",
        "poiId": "String / POI ID",
        "distance": "Number / 帖子发表位置与我的距离",
        "unit": "String / 与我距离的单位 km 或 mi",
    },
    "archives": {
        "String / 扩展参数 Code": "String / 扩展参数内容"
    },
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
    "extends": {
        // Common Data Structure -> Extend Content Info
    },
    "files": {
        "images": [
            {
                // Common Data Structure -> File Info
            }
        ],
        "videos": [
            {
                // Common Data Structure -> File Info
            }
        ],
        "audios": [
            {
                // Common Data Structure -> File Info
            }
        ],
        "documents": [
            {
                // Common Data Structure -> File Info
            }
        ]
    },
    "fileCount": {
        "images": "Number / 图片数量",
        "videos": "Number / 视频数量",
        "audios": "Number / 音频数量",
        "documents": "Number / 文档数量"
    },
    "hashtags": [
        {
            // 帖子关联话题
            // Common Data Structure -> Hashtag Info
        }
    ],
    "creator": {
        // 评论作者
        // 用户 Profile 信息
        "isPostCreator": "Boolean / 是否为帖子作者"
    },
    "replyToUser": {
        // 是否回复某个用户
        // 用户 Profile 信息
    },
    "commentPreviews": [
        {
            // 子评论预览
            // Common Data Structure -> Comment Info
        }
    ],
    "commentBtn": {
        "status": "Boolean / 是否显示按钮",
        "name": "String / 按钮名称",
        "url": "String / 按钮访问地址",
        "style": "String / 按钮风格 primary secondary success danger warning info"
    },
    "manages": [
        // 评论管理扩展
        // Common Data Structure -> Extend Function Info
    ],
    "editStatus": {
        "isMe": "Boolean / 我是否为作者",
        "canDelete": "Boolean / 是否允许删除",
        "canEdit": "Boolean / 是否允许编辑",
        "isPluginEditor": "Boolean / 是否插件编辑器",
        "editorUrl": "String / 插件编辑器访问地址"
    },
    "interactive": {
        "commentName": "String / 评论自定义名称",
        "likeSetting": "Boolean / 是否允许 like",
        "likeName": "String / like 行为自定义名称",
        "dislikeSetting": "Boolean / 是否允许 dislike",
        "dislikeName": "String / dislike 行为自定义名称",
        "followSetting": "Boolean / 是否允许 follow",
        "followName": "String / follow 行为自定义名称",
        "blockSetting": "Boolean / 是否允许 block",
        "blockName": "String / block 行为自定义名称",
        "publishPostName": "String / 发表帖子自定义名称",
        "publishCommentName": "String / 发表评论自定义名称",
        "likeStatus": "Boolean / 是否可以操作点赞",
        "dislikeStatus": "Boolean / 是否可以操作点踩",
        "followStatus": "Boolean / 是否可以操作关注",
        "followNote": "String / 我对该评论的关注备注",
        "blockStatus": "Boolean / 是否可以操作屏蔽",
        "blockNote": "String / 我对该评论的屏蔽备注",
        "postCreatorLikeStatus": "Boolean / 帖子作者是否点赞"
    },
    "followType": "String / 来自哪种关注 null.无 user.我关注的用户 group.我关注的小组 hashtag.我关注的话题 digest.高级精华",
    "post": {
        // 评论所属的帖子
        // Common Data Structure -> Post Info
    }
}
```

## Post Log Info

```json
{
    "id": "Number / 日志 ID",
    "pid": "String / 所属帖子 ID",
    "isPluginEditor": "Boolean / 是否插件编辑器",
    "editorUnikey": "String / 编辑器插件 Unikey",
    "editorUrl": "String / 编辑器访问地址",
    "group": {
        // 所属小组
        // Common Data Structure -> Group Info
    },
    "title": "String / 帖子标题",
    "content": "String / 帖子内容或简述",
    "contentLength": "Number / 内容总长度",
    "isBrief": "Boolean / 是否为简述",
    "isMarkdown": "Boolean / 是否为 MD 格式",
    "isAnonymous": "Boolean / 是否匿名",
    "isComment": "Boolean / 是否可评论",
    "isCommentPublic": "Boolean / 是否公开评论（不公开则仅帖子作者可见）",
    "mapJson": {
        "mapId": "Number / 字典数据: 地图服务商编号",
        "latitude": "String / 纬度",
        "longitude": "String / 经度",
        "scale": "String / 定位地图比例",
        "continent": "Asia",
        "continentCode": "AS",
        "country": "China",
        "countryCode": "CN",
        "region": "Jiangsu",
        "regionCode": "JS",
        "city": "Suzhou",
        "cityCode": "SZ",
        "district": "Taicang",
        "address": "String / 地址",
        "zip": "215400",
        "poi": "String / POI 信息",
        "poiId": "String / POI ID"
    },
    "allowJson": {
        "isAllow": "Boolean / 是否有权限配置",
        "proportion": "Number / 无权时预读百分比",
        "pluginUrl": "String / 配置插件地址",
        "pluginUnikey": "String / 配置插件 unikey",
        "defaultLangBtnName": "String / 无权时按钮文字",
        "btnName": [
            // 无权时按钮文字，多语言配置
        ],
        "permissions": {
            "users": [
                {
                    // 预授权用户
                    // 用户 Profile 信息
                }
            ],
            "roles": [
                // 预授权角色
                {
                    "rid": "Number / 角色 ID",
                    "nicknameColor": "String / 昵称颜色",
                    "name": "String / 角色名",
                    "nameDisplay": "Boolean / 是否显示角色名",
                    "icon": "String / 角色图标地址",
                    "iconDisplay": "Boolean / 是否显示角色图标",
                    "status": "Boolean / 是否有效"
                }
            ]
        },
    },
    "userListJson": {
        "isUserList": "Boolean / 是否有关联用户列表",
        "defaultLangUserListName": "String / 用户名称",
        "userListName": [
            // 用户名称，多语言配置
        ],
        "pluginUrl": "String / 配置插件地址",
        "pluginUnikey": "String / 配置插件 unikey",
    },
    "commentBtnJson": {
        "isCommentBtn": "Boolean / 评论是否有按钮",
        "defaultLangBtnName": "String / 按钮文字",
        "btnName": [
            // 按钮文字，多语言配置
        ],
        "btnStyle": "String / 按钮风格",
        "pluginUrl": "String / 配置插件地址",
        "pluginUnikey": "String / 配置插件 unikey",
    },
    "state": "Number / 状态",
    "reason": "String / 审核拒绝原因",
    "creator": {
        // 创建者
        // 用户 Profile 信息
    },
    "archives": {
        "String / 扩展参数 Code": "String / 扩展参数内容"
    },
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
    "extends": {
        // Common Data Structure -> Extend Content Info
    },
    "files": {
        "images": [
            {
                // Common Data Structure -> File Info
            }
        ],
        "videos": [
            {
                // Common Data Structure -> File Info
            }
        ],
        "audios": [
            {
                // Common Data Structure -> File Info
            }
        ],
        "documents": [
            {
                // Common Data Structure -> File Info
            }
        ]
    },
    "fileCount": {
        "images": "Number / 图片数量",
        "videos": "Number / 视频数量",
        "audios": "Number / 音频数量",
        "documents": "Number / 文档数量"
    }
}
```

## Comment Log Info

```json
{
    "id": "Number / 日志 ID",
    "cid": "String / 所属评论 ID",
    "isPluginEditor": "Boolean / 是否插件编辑器",
    "editorUnikey": "String / 编辑器插件 Unikey",
    "editorUrl": "String / 编辑器访问地址",
    "content": "String / 帖子内容或简述",
    "contentLength": "Number / 内容总长度",
    "isBrief": "Boolean / 是否为简述",
    "isMarkdown": "Boolean / 是否为 MD 格式",
    "isAnonymous": "Boolean / 是否匿名",
    "mapJson": {
        "mapId": "Number / 字典数据: 地图服务商编号",
        "latitude": "String / 纬度",
        "longitude": "String / 经度",
        "scale": "String / 定位地图比例",
        "continent": "Asia",
        "continentCode": "AS",
        "country": "China",
        "countryCode": "CN",
        "region": "Jiangsu",
        "regionCode": "JS",
        "city": "Suzhou",
        "cityCode": "SZ",
        "district": "Taicang",
        "address": "String / 地址",
        "zip": "215400",
        "poi": "String / POI 信息",
        "poiId": "String / POI ID"
    },
    "state": "Number / 状态",
    "reason": "String / 审核拒绝原因",
    "creator": {
        // 创建者
        // 用户 Profile 信息
    },
    "archives": {
        "String / 扩展参数 Code": "String / 扩展参数内容"
    },
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
    "extends": {
        // Common Data Structure -> Extend Content Info
    },
    "files": {
        "images": [
            {
                // Common Data Structure -> File Info
            }
        ],
        "videos": [
            {
                // Common Data Structure -> File Info
            }
        ],
        "audios": [
            {
                // Common Data Structure -> File Info
            }
        ],
        "documents": [
            {
                // Common Data Structure -> File Info
            }
        ]
    },
    "fileCount": {
        "images": "Number / 图片数量",
        "videos": "Number / 视频数量",
        "audios": "Number / 音频数量",
        "documents": "Number / 文档数量"
    }
}
```

## File Info

```json
{
    "fid": "String / 文件 fid",
    "type": "Number / 文件类型编号 1.图片 2.视频 3.音频 4.文档",
    "status": "Boolean / 是否有效",
    "substitutionImageUrl": "String / 文件无效提示图",
    "sensitive": "Boolean / 是否为敏感文件",
    "name": "String / 完整原始名称",
    "mime": "String / 文件扩展名",
    "extension": "String / 文件后缀名",
    "size": "String / 大小",
    "md5": "String / 文件 md5 编码",
    "sha": "String / 文件 sha 编码",
    "shaType": "String / 文件 sha 类型",
    "moreJson": {
        // files->more_json
    },
    // Image Parameters
    "imageWidth": "Number / 图片宽度",
    "imageHeight": "Number / 图片高度",
    "imageLong": "Boolean / 是否长图",
    "imageDefaultUrl": "String / 默认图片地址",
    "imageConfigUrl": "String / 配置用途图片地址",
    "imageAvatarUrl": "String / 头像用途图片地址",
    "imageRatioUrl": "String / 等比例缩略图地址",
    "imageSquareUrl": "String / 正方形缩略图地址",
    "imageBigUrl": "String / 原图压缩图地址",
    // Video Parameters
    "videoTime": "Number / 视频时长",
    "videoCoverUrl": "String / 视频封面图链接",
    "videoGifUrl": "String / 视频动图链接",
    "videoUrl": "String / 视频链接",
    // Audio Parameters
    "audioTime": "Number / 音频时长",
    "audioUrl": "String / 音频链接",
    // Document Parameters
    "documentUrl": "String / 文档链接",
    "documentPreviewUrl": "String / 文件预览链接",
    // Audio and Video Parameter
    "transcodingState": "Number / 音视频转码状态 1.待转码 2.转码中 3.转码完成 4.转码失败"
}
```

## Extend Operation Info

```json
{
    "customizes": [
        {
            "code": "String / 标识码",
            "style": "String / 风格 primary, secondary, success, danger, warning, info",
            "name": "String / 名称",
            "description": "String / 描述",
            "imageUrl": "String / 图片",
            "imageActiveUrl": "String / 二态图片",
            "displayType": "Number / 展示类型 1.基础 2.功能（插件）",
            "pluginUrl": "String / 展示类型 2 专用，插件访问地址",
        }
    ],
    "buttonIcons": [
        {
            // Ibid
        }
    ],
    "diversifyImages": [
        {
            // Ibid
        }
    ],
    "tips": [
        {
            // Ibid
        }
    ]
}
```

- 参考资料: [operations](../database/extends/operations.md#code-用途编码)

## Extend Content Info

```json
{
    "textBox": [
        {
            "eid": "String / 扩展内容 ID",
            "type": "Number / 类型 1.文本框 2.信息框 3.交互框",
            "textContent": "String / 文本框专用-内容",
            "textIsMarkdown": "Boolean / 文本框专用-内容是否为 MD 格式",
            "infoType": "Number / 信息框专用-类型编号",
            "infoTypeString": "String / 信息框专用-类型字符串",
            "cover": "String / 信息框专用-封面图",
            "title": "String / 信息框专用-标题",
            "titleColor": "String / 信息框专用-标题颜色",
            "descPrimary": "String / 信息框专用-主要副信息",
            "descPrimaryColor": "String / 信息框专用-主要副信息颜色",
            "descSecondary": "String / 信息框专用-次要副信息",
            "descSecondaryColor": "String / 信息框专用-次要副信息颜色",
            "buttonName": "String / 信息框专用-按钮名称",
            "buttonColor": "String / 信息框专用-按钮名称颜色",
            "position": "Number / 显示位置 1.上方 2.下方",
            "accessUrl": "String / 访问地址",
            "moreJson": {
                // 自定义信息
            },
        }
    ],
    "infoBox": [
        {
            // Ibid
        }
    ],
    "interactiveBox": [
        {
            // Ibid
        }
    ],
}
```

## Extend Function Info

```json
{
    "plugin": "String / 插件 Unikey",
    "name": "String / 扩展名称",
    "icon": "String / 扩展图标地址",
    "url": "String / 扩展访问地址",
    "badgesType": "Number / 扩展提示类型 null.无 1.红点 2.文字 3.数字",
    "badgesValue": "String / 扩展提示值",
    "editorToolbar": "Boolean / 编辑器专用，是否在 toolbar 显示",
    "editorNumber": "Number / 编辑器专用，可使用数量",
    "pluginRating": {
        "postByAll": [
            {
                "id": "Number / 列表接口 pluginRatingId 参数用途值",
                "title": "String / 参数标题",
                "description": "String / 参数描述"
            }
        ],
        "postByFollow": [
            {
                "id": "Number / 列表接口 pluginRatingId 参数用途值",
                "title": "String / 参数标题",
                "description": "String / 参数描述"
            }
        ],
        "postByNearby": [
            {
                "id": "Number / 列表接口 pluginRatingId 参数用途值",
                "title": "String / 参数标题",
                "description": "String / 参数描述"
            }
        ]
    }
}
```
