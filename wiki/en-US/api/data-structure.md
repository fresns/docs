# Common Data Structure

To reduce documentation effort and ensure consistency of public data, the same sections of the API documentation are written as data structures on this page.

- Empty array use `[]`
- Empty object use `null`
- like/dislike/follow/block The count parameter, if `null`, means the backend is not public, if public, it is a numeric value.

## Account Info

```json
{
    "aid": "String / Account ID",
    "countryCode": "Number / International Area Code of the Phone",
    "purePhone": "String / Encrypted Phone Number",
    "phone": "String / Encrypted Phone Number with International Area Code",
    "email": "String / Encrypted Email",
    "hasPassword": "Boolean / Account Has Password",
    "verifyStatus": "Boolean / Verified Identity",
    "verifySupport": "String / Verification Support Address",
    "verifyRealName": "String / Encrypted Real Name",
    "verifyGender": "Number / Gender 1.Unknown 2.Male 3.Female",
    "verifyCertType": "String / Certificate Type: idcard, passport, driving, business",
    "verifyCertNumber": "String / Encrypted Certificate Number",
    "verifyIdentityType": "Number / Verification Type 1.Unknown 2.Individual 3.Enterprise",
    "verifyDateTime": "String / Verification Time",
    "registerDateTime": "String / Account Registration Time",
    "status": "Boolean / Account Status",
    "waitDelete": "Boolean / Pending Deletion",
    "waitDeleteDateTime": "String / Scheduled Deletion Time",
    "connects": [
        {
            "connectId": "Number / Connected Platform Number",
            "username": "String / Connected Platform Username",
            "nickname": "String / Connected Platform Nickname",
            "avatar": "String / Connected Platform Avatar",
            "status": "String / Connected Platform Validity"
        }
    ],
    "wallet": {
        "status": "Boolean / Wallet Validity",
        "hasPassword": "Boolean / Wallet Has Password",
        "currencyCode": "String / Currency Code, e.g. USD",
        "currencyName": "String / Custom Currency Name",
        "currencyUnit": "String / Custom Currency Unit Name",
        "currencyPrecision": "Number / Currency Precision",
        "balance": "String / Wallet Balance",
        "freezeAmount": "String / Unavailable Amount",
        "bankName": "String / Bank Name",
        "swiftCode": "String / SWIFT Code",
        "bankAddress": "String / Bank Address",
        "bankAccount": "String / Encrypted Bank Account",
        "bankStatus": "Boolean / Bank Verification Status"
    },
    "users": [
        {
            // Common Data Structure -> User Info
        }
    ],
    "interaction": {
        "userName": "String / Custom User Identity Name",
        "userUidName": "String / Custom User ID Name",
        "userUsernameName": "String / Custom Username Name",
        "userNicknameName": "String / Custom User Nickname Name",
        "userRoleName": "String / Custom User Role Name",
        "userBioName": "String / Custom User Introduction Name",
        "followSetting": "Boolean / Allow Follow",
        "followName": "String / Custom Follow Action Name",
        "likeSetting": "Boolean / Allow Like",
        "likeName": "String / Custom Like Action Name",
        "dislikeSetting": "Boolean / Allow Dislike",
        "dislikeName": "String / Custom Dislike Action Name",
        "blockSetting": "Boolean / Allow Block",
        "blockName": "String / Custom Block Action Name",
        "publishPostName": "String / Custom Publish Post Name",
        "publishCommentName": "String / Custom Publish Comment Name"
    }
}
```

## User Info

```json
{
    "fsid": "String / User identifier ID, uid or username",
    "uid": "Number / User ID",
    "username": "String / Username",
    "url": "String / User homepage URL",
    "nickname": "String / User nickname",
    "avatar": "String / Avatar image",
    "decorate": "String / Avatar decoration",
    "banner": "String / Banner image",
    "gender": "Number / Gender 1. Unknown 2. Male 3. Female",
    "birthday": "String / Birthday",
    "bio": "String / Bio",
    "bioHtml": "String / Bio in HTML format",
    "location": "String / Location",
    "conversationLimit": "Number / Conversation settings, 1. Allow all users 2. Only allow users I follow 3. Users I follow and verified users 4. No users allowed",
    "commentLimit": "Number / Comment settings, 1. Allow all users 2. Only allow users I follow 3. Users I follow and verified users 4. No users allowed",
    "timezone": "String / Custom UTC timezone",
    "verifiedStatus": "Boolean / Verified status",
    "verifiedIcon": "String / Custom verified icon",
    "verifiedDesc": "String / Verification description",
    "verifiedDateTime": "String / Verification date and time",
    "expired": "Boolean / Whether the user is expired, always false in public mode",
    "expiryDateTime": "String / User expiry date and time",
    "lastPublishPost": "String / Last post publishing time",
    "lastPublishComment": "String / Last comment time",
    "lastEditUsername": "String / Last username edit time",
    "lastEditNickname": "String / Last nickname edit time",
    "registerDate": "String / Registration date",
    "hasPassword": "Boolean / Has password",
    "rankState": "Number / Rank status",
    "status": "Boolean / User status",
    "waitDelete": "Boolean / Waiting for deletion",
    "waitDeleteDateTime": "String / Scheduled deletion time",
    "nicknameColor": "String / Main role - Nickname color",
    "rid": "Number / Main role - Role ID",
    "roleName": "String / Main role - Role name",
    "roleNameDisplay": "Boolean / Main role - Display role name",
    "roleIcon": "String / Main role - Role icon URL",
    "roleIconDisplay": "Boolean / Main role - Display role icon",
    "roleExpiryDateTime": "String / Main role - Role expiry date",
    "roleRankState": "Number / Rank status",
    "rolePermissions": {
        // Data Table: roles->permissions
        // Role permissions converted to Object format
    },
    "roleStatus": "Boolean / Main role status",
    "stats": {
        "likeUserCount": "Number / Total users they liked",
        "likeGroupCount": "Number / Total groups they liked",
        "likeHashtagCount": "Number / Total hashtags they liked",
        "likePostCount": "Number / Total posts they liked",
        "likeCommentCount": "Number / Total comments they liked",
        "dislikeUserCount": "Number / Total users they disliked",
        "dislikeGroupCount": "Number / Total groups they disliked",
        "dislikeHashtagCount": "Number / Total hashtags they disliked",
        "dislikePostCount": "Number / Total posts they disliked",
        "dislikeCommentCount": "Number / Total comments they disliked",
        "followUserCount": "Number / Total users they followed",
        "followGroupCount": "Number / Total groups they followed",
        "followHashtagCount": "Number / Total hashtags they followed (bookmarked)",
        "followPostCount": "Number / Total posts they followed (bookmarked)",
        "followCommentCount": "Number / Total comments they followed (bookmarked)",
        "blockUserCount": "Number / Total users they blocked (blacklisted)",
        "blockGroupCount": "Number / Total groups they blocked (not interested)",
        "blockHashtagCount": "Number / Total hashtags they blocked (not interested)",
        "blockPostCount": "Number / Total posts they blocked (not interested)",
        "blockCommentCount": "Number / Total comments they blocked (not interested)",
        "likeMeCount": "Number / Total people who liked them",
        "dislikeMeCount": "Number / Total people who disliked them",
        "followMeCount": "Number / Total people who followed them (follower count)",
        "blockMeCount": "Number / Total people who blocked (blacklisted) them",
        "postPublishCount": "Number / Total posts they published",
        "postDigestCount": "Number / Total digest posts they published",
        "postLikeCount": "Number / Total likes on their posts",
        "postDislikeCount": "Number / Total dislikes on their posts",
        "postFollowCount": "Number / Total follows on their posts",
        "postBlockCount": "Number / Total blocks on their posts",
        "commentPublishCount": "Number / Total comments they published",
        "commentDigestCount": "Number / Total digest comments they published",
        "commentLikeCount": "Number / Total likes on their comments",
        "commentDislikeCount": "Number / Total dislikes on their comments",
        "commentFollowCount": "Number / Total follows on their comments",
        "commentBlockCount": "Number / Total blocks on their comments",
        "extcredits1": "Number / Custom score",
        "extcredits1Status": "Number / Status 1. Not enabled 2. Private 3. Public",
        "extcredits1Name": "String / Name",
        "extcredits1Unit": "String / Unit",
        "extcredits2": "Number / Custom score",
        "extcredits2Status": "Number / Status 1. Not enabled 2. Private 3. Public",
        "extcredits2Name": "String / Name",
        "extcredits2Unit": "String / Unit",
        "extcredits3": "Number / Custom score",
        "extcredits3Status": "Number / Status 1. Not enabled 2. Private 3. Public",
        "extcredits3Name": "String / Name",
        "extcredits3Unit": "String / Unit",
        "extcredits4": "Number / Custom score",
        "extcredits4Status": "Number / Status 1. Not enabled 2. Private 3. Public",
        "extcredits4Name": "String / Name",
        "extcredits4Unit": "String / Unit",
        "extcredits5": "Number / Custom score",
        "extcredits5Status": "Number / Status 1. Not enabled 2. Private 3. Public",
        "extcredits5Name": "String / Name",
        "extcredits5Unit": "String / Unit",
    },
    "archives": [
        // Common Data Structure -> Extend Archive Info
    ],
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
    "extends": {
        // Common Data Structure -> Extend Content Info
    },
    "roles": [
        {
            "rid": "Number / Role ID",
            "isMain": "Boolean / Whether it is the main role",
            "nicknameColor": "String / Nickname color",
            "name": "String / Role name",
            "nameDisplay": "Boolean / Whether to display the role name",
            "icon": "String / Role icon URL",
            "iconDisplay": "Boolean / Whether to display the role icon",
            "status": "Boolean / Whether the role is valid"
        }
    ],
    "interaction": {
        "userName": "String / Custom user identity name",
        "userUidName": "String / Custom user ID name",
        "userUsernameName": "String / Custom username name",
        "userNicknameName": "String / Custom user nickname name",
        "userRoleName": "String / Custom user role name",
        "userBioName": "String / Custom user introduction name",
        "likeSetting": "Boolean / Whether to allow like",
        "likeName": "String / Custom like action name",
        "dislikeSetting": "Boolean / Whether to allow dislike",
        "dislikeName": "String / Custom dislike action name",
        "followSetting": "Boolean / Whether to allow follow",
        "followName": "String / Custom follow action name",
        "blockSetting": "Boolean / Whether to allow block",
        "blockName": "String / Custom block action name",
        "publishPostName": "String / Custom publish post name",
        "publishCommentName": "String / Custom publish comment name",
        "likeStatus": "Boolean / Like Status",
        "dislikeStatus": "Boolean / Dislike Status",
        "followStatus": "Boolean / Follow Status",
        "followMeStatus": "Boolean / Whether he is following me",
        "followNote": "String / My note on following him",
        "blockStatus": "Boolean / Block Status",
        "blockMeStatus": "Boolean / Whether he has blocked me",
        "blockNote": "String / My note on blocking him"
    },
    "conversation": {
        "status": "Boolean / Whether I can send him a private message",
        "code": "Number / Error code when not allowed",
        "message": "String / Error description when not allowed"
    }
}
```

## Group Info

```json
{
    "gid": "String / Group ID",
    "url": "String / Group detail page URL",
    "type": "Number / Group type 1.Group category 2.Group 3.Subgroup, group within group",
    "gname": "String / Group name",
    "description": "String / Group introduction",
    "cover": "String / Group cover image",
    "banner": "String / Group banner image",
    "recommend": "Boolean / Whether it is a recommended group",
    "mode": "Number / Group mode 1.Public 2.Non-public",
    "modeEndAfter": "Number / After non-public mode expires 1.No restrictions 2.All group content is invisible 3.Content before expiration is visible, new content is not visible",
    "find": "Number / Whether it can be discovered (whether it is displayed) 1.Discoverable 2.Not discoverable",
    "followType": "Number / Follow method 1.Native method 2.Plugin method 3.close",
    "followUrl": "String / Follow method 2 specific, follow plugin page URL",
    "parentGid": "String / Parent group ID",
    "category": {
        "gid": "String / Parent group ID",
        "gname": "String / Parent group name",
        "description": "String / Parent group introduction",
        "cover": "String / Parent group cover image",
        "banner": "String / Parent group banner image"
    },
    "likeCount": "Number / Total number of likes",
    "dislikeCount": "Number / Total number of dislikes",
    "followCount": "Number / Total number of follows",
    "blockCount": "Number / Total number of blocks",
    "postCount": "Number / Total number of posts",
    "postDigestCount": "Number / Total number of digest posts",
    "commentCount": "Number / Total number of comments",
    "commentDigestCount": "Number / Total number of digest comments",
    "permissions": {
        // Custom group configuration parameters
        // Data Table: groups->permissions
    },
    "createDate": "String / Group creation date",
    "archives": [
        // Common Data Structure -> Extend Archive Info
    ],
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
    "extends": {
        // Common Data Structure -> Extend Content Info
    },
    "creator": {
        // Common Data Structure -> User Info
    },
    "canViewContent": "Boolean / Whether the user has permission to view content",
    "publishRule": {
        "allowPost": "Boolean / Whether the user has permission to post",
        "subGroupPost": "Boolean / Whether posts can only be published to subgroups",
        "reviewPost": "Boolean / Whether posts need to be reviewed",
        "allowComment": "Boolean / Whether the user has permission to comment",
        "reviewComment": "Boolean / Whether comments need to be reviewed"
    },
    "contentMeta": {
        "post": [
            {
                "unikey": "String / Plugin Unikey",
                "name": "String / Name",
                "description": "String / Description",
                "code": "String / Code",
                "formElement": "String / HTML Form Element",
                "elementType": "String / Form Element Type",
                "elementOptions": "Array / Option Type Configuration Values",
                "isMultiple": "Boolean / Whether multiple selection is allowed for select, email, file, etc.",
                "isRequired": "Boolean / Whether required",
                "fileType": "Number / 1.Image 2.Video 3.Audio 4.Document", // Used when elementType is file
                "fileAccept": "String / Supported file extensions, e.g., .jpg, .png", // Used when elementType is file
                "fileExt": "String / Supported file extensions, e.g., jpg, png", // Used when elementType is file
                "inputPattern": "String / Custom Regular Expression",
                "inputMax": "Number / Maximum Value",
                "inputMin": "Number / Minimum Value",
                "inputMaxlength": "Number / Maximum Length",
                "inputMinlength": "Number / Minimum Length",
                "inputSize": "Number / Size",
                "inputStep": "Number / Step",
                "valueType": "String / Data Value Type"
            }
        ],
        "comment": [
            {
                "unikey": "String / Plugin Unikey",
                "name": "String / Name",
                "description": "String / Description",
                "code": "String / Code",
                "formElement": "String / HTML Form Element",
                "elementType": "String / Form Element Type",
                "elementOptions": "Array / Option Type Configuration Values",
                "isMultiple": "Boolean / Whether multiple selection is allowed for select, email, file, etc.",
                "isRequired": "Boolean / Whether required",
                "fileType": "Number / 1.Image 2.Video 3.Audio 4.Document", // Used when elementType is file
                "fileAccept": "String / Supported file extensions, e.g., .jpg, .png", // Used when elementType is file
                "fileExt": "String / Supported file extensions, e.g., jpg, png", // Used when elementType is file
                "inputPattern": "String / Custom Regular Expression",
                "inputMax": "Number / Maximum Value",
                "inputMin": "Number / Minimum Value",
                "inputMaxlength": "Number / Maximum Length",
                "inputMinlength": "Number / Minimum Length",
                "inputSize": "Number / Size",
                "inputStep": "Number / Step",
                "valueType": "String / Data Value Type"
            }
        ],
    },
    "admins": [
        {
            // Group admin list
            // Common Data Structure -> User Info
        }
    ],
    "interaction": {
        "groupName": "String / Custom Group Name",
        "likeSetting": "Boolean / Whether like is allowed",
        "likeName": "String / Custom Like Action Name",
        "dislikeSetting": "Boolean / Whether dislike is allowed",
        "dislikeName": "String / Custom Dislike Action Name",
        "followSetting": "Boolean / Whether follow is allowed",
        "followName": "String / Custom Follow Action Name",
        "blockSetting": "Boolean / Whether block is allowed",
        "blockName": "String / Custom Block Action Name",
        "publishPostName": "String / Custom Publish Post Name",
        "publishCommentName": "String / Custom Publish Comment Name",
        "likeStatus": "Boolean / Like Status",
        "dislikeStatus": "Boolean / Dislike Status",
        "followStatus": "Boolean / Follow Status",
        "followNote": "String / My Note for Following This Group",
        "followExpired": "Boolean / Whether expired, always false for public groups",
        "followExpiryDateTime": "String / Expiry Date Time",
        "blockStatus": "Boolean / Block Status",
        "blockNote": "String / My Note for Blocking This Group"
    }
}
```

## Hashtag Info

```json
{
    "hid": "String / Topic ID",
    "url": "String / Topic Detail Page URL",
    "hname": "String / Topic Name",
    "cover": "String / Topic Cover Image",
    "description": "String / Topic Description",
    "likeCount": "Number / Total Like Count",
    "dislikeCount": "Number / Total Dislike Count",
    "followCount": "Number / Total Follow Count",
    "blockCount": "Number / Total Block Count",
    "postCount": "Number / Total Post Count",
    "postDigestCount": "Number / Total Digest Post Count",
    "commentCount": "Number / Total Comment Count",
    "commentDigestCount": "Number / Total Digest Comment Count",
    "createDate": "String / Topic Creation Date",
    "archives": [
        // Common Data Structure -> Extend Archive Info
    ],
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
    "extends": {
        // Common Data Structure -> Extend Content Info
    },
    "interaction": {
        "hashtagName": "String / Custom Topic Name",
        "likeSetting": "Boolean / Whether like is allowed",
        "likeName": "String / Custom Like Action Name",
        "dislikeSetting": "Boolean / Whether dislike is allowed",
        "dislikeName": "String / Custom Dislike Action Name",
        "followSetting": "Boolean / Whether follow is allowed",
        "followName": "String / Custom Follow Action Name",
        "blockSetting": "Boolean / Whether block is allowed",
        "blockName": "String / Custom Block Action Name",
        "publishPostName": "String / Custom Publish Post Name",
        "publishCommentName": "String / Custom Publish Comment Name",
        "likeStatus": "Boolean / Like Status",
        "dislikeStatus": "Boolean / Dislike Status",
        "followStatus": "Boolean / Follow Status",
        "followNote": "String / My Note for Following This Topic",
        "blockStatus": "Boolean / Block Status",
        "blockNote": "String / My Note for Blocking This Topic"
    }
}
```

## Post Info

```json
{
    "pid": "String / Post ID",
    "url": "String / Post Detail Page URL",
    "title": "String / Post Title",
    "content": "String / Post Content or Summary",
    "contentLength": "Number / Total Content Length",
    "langTag": "String / Content Language Tag",
    "writingDirection": "String / Content Writing Direction",
    "isBrief": "Boolean / Whether it is a summary",
    "isMarkdown": "Boolean / Whether it is in MD format",
    "isAnonymous": "Boolean / Whether anonymous",
    "stickyState": "Number / Sticky status 1.No 2.Group sticky 3.Global sticky",
    "digestState": "Number / Digest status 1.No 2.General digest 3.Advanced digest",
    "likeCount": "Number / Total Like Count",
    "dislikeCount": "Number / Total Dislike Count",
    "followCount": "Number / Total Follow Count",
    "blockCount": "Number / Total Block Count",
    "commentCount": "Number / Total Comment Count",
    "commentDigestCount": "Number / Total Digest Comments Count",
    "commentLikeCount": "Number / Total Comment Like Count",
    "commentDislikeCount": "Number / Total Comment Dislike Count",
    "commentFollowCount": "Number / Total Comment Follow Count",
    "commentBlockCount": "Number / Total Comment Block Count",
    "postCount": "Number / Total Related Posts Count, the number of other people quoting it",
    "createdDatetime": "String / Post Publish Time",
    "createdTimeAgo": "String / Human-readable Post Publish Time",
    "editedDatetime": "String / Post Last Edit Time",
    "editedTimeAgo": "String / Human-readable Post Last Edit Time",
    "editedCount": "Number / Edit Count",
    "latestCommentDatetime": "String / Latest Comment Time",
    "latestCommentTimeAgo": "String / Human-readable Latest Comment Time",
    "rankState": "Number / Rank State",
    "status": "Boolean / Post Status",
    "allowConfig": {
        "isAllow": "Boolean / Whether Authorization is Required",
        "previewProportion": "Number / Content Display Percentage When Unauthorized",
        "buttonName": "String / Button Text When Unauthorized",
        "buttonUrl": "String / URL to Handle Authorization",
    },
    "affiliatedUserConfig": {
        "hasUserList": "Boolean / Whether there is a Related User List",
        "userListName": "String / User List Name",
        "userListUrl": "String / URL to View User List",
        "userListCount": "Number / User List Count",
    },
    "moreJson": {
        // Data Table: posts->more_json
        // The following keys are known
        "ipLocation": "String / Creator IP Location Name",
        "deviceName": "String / Creator Device Name"
    },
    "location": {
        "isLbs": "Boolean / Whether there is location information",
        "mapId": "Number / Latitude and Longitude Map ID",
        "latitude": "String / Latitude",
        "longitude": "String / Longitude",
        "scale": "String / Map Scale",
        "continent": "String / Continent Name",
        "continentCode": "String / Continent Code",
        "country": "String / Country Name",
        "countryCode": "String / Country Code",
        "region": "String / Province Name",
        "regionCode": "String / Province Code",
        "city": "String / City Name",
        "cityCode": "String / City Code",
        "district": "String / District Name",
        "address": "String / Address",
        "zip": "String / Postal Code",
        "poi": "String / POI Information",
        "poiId": "String / POI ID",
        "distance": "Number / Distance between the post location and me",
        "unit": "String / Unit of distance from me, km or mi",
        "encode": "String / Base64 and URL encoded location parameter string"
    },
    "isComment": "Boolean / Whether comments are allowed",
    "isCommentPublic": "Boolean / Whether comments are public (if not public, only the post author can see them)",
    "archives": [
        // Common Data Structure -> Extend Archive Info
    ],
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
    "group": {
        // The group to which the item belongs can be null.
        // Common Data Structure -> Group Info
    },
    "hashtags": [
        {
            // Post Related Topics
            // Common Data Structure -> Hashtag Info
        }
    ],
    "creator": {
        // Post author
        // Common Data Structure -> User Info
    },
    "isMultiLevelQuote": "Boolean / Whether there are multiple levels of reference, and whether quoted posts are also referenced at the previous level.",
    "quotedPost": {
        // Posts quoted by the current post
        // Common Data Structure -> Post Info
    },
    "previewLikeUsers": [
        {
            // Common Data Structure -> User Info
        }
    ],
    "previewComments": [
        {
            // Common Data Structure -> Comment Info
        }
    ],
    "manages": [
        // Post Management Extension
        // Common Data Structure -> Extend Function Info
    ],
    "editStatus": {
        "isMe": "Boolean / Whether I am the author",
        "canDelete": "Boolean / Whether deletion is allowed",
        "canEdit": "Boolean / Whether editing is allowed",
        "isPluginEditor": "Boolean / Whether it's a plugin editor",
        "editorUrl": "String / Plugin editor access URL"
    },
    "interaction": {
        "postName": "String / Custom name for the post",
        "likeSetting": "Boolean / Whether 'like' is allowed",
        "likeName": "String / Custom name for the 'like' action",
        "dislikeSetting": "Boolean / Whether 'dislike' is allowed",
        "dislikeName": "String / Custom name for the 'dislike' action",
        "followSetting": "Boolean / Whether 'follow' is allowed",
        "followName": "String / Custom name for the 'follow' action",
        "blockSetting": "Boolean / Whether 'block' is allowed",
        "blockName": "String / Custom name for the 'block' action",
        "publishPostName": "String / Custom name for publishing a post",
        "publishCommentName": "String / Custom name for publishing a comment",
        "likeStatus": "Boolean / Like Status",
        "dislikeStatus": "Boolean / Dislike Status",
        "followStatus": "Boolean / Follow Status",
        "followNote": "String / My follow note for this post",
        "blockStatus": "Boolean / Block Status",
        "blockNote": "String / My block note for this post"
    },
    "commentHidden": "Boolean / Whether comments are hidden",
    "followType": "String / From which type of follow"
    // followType=null: none
    // followType=user: followed user
    // followType=group: followed group
    // followType=hashtag: followed hashtag
    // followType==digest: advanced digest
}
```

## Comment Info

```json
{
    "cid": "String / Comment ID",
    "url": "String / Comment details page URL",
    "content": "String / Comment content or summary",
    "contentLength": "Number / Total content length",
    "langTag": "String / Content language tag",
    "writingDirection": "String / Content writing direction",
    "isBrief": "Boolean / Whether it's a summary",
    "isMarkdown": "Boolean / Whether it's in MD format",
    "isAnonymous": "Boolean / Whether it's anonymous",
    "isSticky": "Boolean / Whether it's sticky",
    "digestState": "Number / Digest state 1: No, 2: General Digest, 3: Advanced Digest",
    "likeCount": "Number / Total number of likes",
    "dislikeCount": "Number / Total number of dislikes",
    "followCount": "Number / Total number of follows",
    "blockCount": "Number / Total number of blocks",
    "commentCount": "Number / Total number of child comments",
    "commentDigestCount": "Number / Total number of digests in child comments",
    "commentLikeCount": "Number / Total number of likes on child comments",
    "commentDislikeCount": "Number / Total number of dislikes on child comments",
    "commentFollowCount": "Number / Total number of follows on child comments",
    "commentBlockCount": "Number / Total number of blocks on child comments",
    "createdDatetime": "String / Comment creation time",
    "createdTimeAgo": "String / Human-friendly comment creation time",
    "editedDatetime": "String / Comment last edit time",
    "editedTimeAgo": "String / Human-friendly comment last edit time",
    "editedCount": "Number / Number of edits",
    "latestCommentDatetime": "String / Latest child comment time",
    "latestCommentTimeAgo": "String / Human-friendly latest child comment time",
    "rankState": "Number / Rank State",
    "status": "Boolean / Comment Status",
    "moreJson": {
        // Data Table: comments->more_json
        // The following keys are known
        "ipLocation": "String / Creator IP Location Name",
        "deviceName": "String / Creator Device Name"
    },
    "location": {
        "isLbs": "Boolean / Whether there is location information",
        "mapId": "Number / Latitude and Longitude Map ID",
        "latitude": "String / Latitude",
        "longitude": "String / Longitude",
        "scale": "String / Map Scale",
        "continent": "String / Continent Name",
        "continentCode": "String / Continent Code",
        "country": "String / Country Name",
        "countryCode": "String / Country Code",
        "region": "String / Province Name",
        "regionCode": "String / Province Code",
        "city": "String / City Name",
        "cityCode": "String / City Code",
        "district": "String / District Name",
        "address": "String / Address",
        "zip": "String / Postal Code",
        "poi": "String / POI Information",
        "poiId": "String / POI ID",
        "distance": "Number / Distance between the post location and me",
        "unit": "String / Unit of distance from me, km or mi",
        "encode": "String / Base64 and URL encoded location parameter string"
    },
    "isCommentPublic": "Boolean / Whether to make comments public (if not, only the author of the post will be visible)",
    "archives": [
        // Common Data Structure -> Extend Archive Info
    ],
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
    "hashtags": [
        {
            // Comment Related Topics
            // Common Data Structure -> Hashtag Info
        }
    ],
    "creator": {
        // Comment author
        // Common Data Structure -> User Info
        "isPostCreator": "Boolean / Is the author of the post"
    },
    "subComments": [
        {
            // Sub-Commons Preview
            // Common Data Structure -> Comment Info
        }
    ],
    "extendButton": {
        "status": "Boolean / Whether to display the extend button",
        "type": "String / Use default or active button",
        "default": {
            "name": "String / Button name",
            "style": "String / Button style (primary, secondary, success, danger, warning, info)",
            "url": "String / Button URL"
        },
        "active": {
            "name": "String / Button name",
            "style": "String / Button style (primary, secondary, success, danger, warning, info)",
            "url": "String / Button URL"
        }
    },
    "manages": [
        // Common Management Extension
        // Common Data Structure -> Extend Function Info
    ],
    "editStatus": {
        "isMe": "Boolean / Whether I am the author",
        "canDelete": "Boolean / Whether deletion is allowed",
        "canEdit": "Boolean / Whether editing is allowed",
        "isPluginEditor": "Boolean / Whether it's a plugin editor",
        "editorUrl": "String / Plugin editor access URL"
    },
    "interaction": {
        "commentName": "String / Custom comment name",
        "likeSetting": "Boolean / Whether liking is allowed",
        "likeName": "String / Custom like action name",
        "dislikeSetting": "Boolean / Whether disliking is allowed",
        "dislikeName": "String / Custom dislike action name",
        "followSetting": "Boolean / Whether following is allowed",
        "followName": "String / Custom follow action name",
        "blockSetting": "Boolean / Whether blocking is allowed",
        "blockName": "String / Custom block action name",
        "publishPostName": "String / Custom publish post name",
        "publishCommentName": "String / Custom publish comment name",
        "likeStatus": "Boolean / Like status",
        "dislikeStatus": "Boolean / Dislike status",
        "followStatus": "Boolean / Follow status",
        "followNote": "String / My follow note on this comment",
        "blockStatus": "Boolean / Block status",
        "blockNote": "String / My block note on this comment",
        "postCreatorLikeStatus": "Boolean / Whether the post creator liked this comment"
    },
    "replyToPost": {
        // Information about the post this comment belongs to,
        // if it's a sub-comment list, only the pid parameter is available
        // Common Data Structure -> Post Info
    },
    "replyToComment": {
        // The parent comment of the current comment
        // Common Data Structure -> Comment Info
    },
    "followType": "String / From which type of follow"
    // followType=null: none
    // followType=user: followed user
    // followType=group: followed group
    // followType=hashtag: followed hashtag
    // followType==digest: advanced digest
}
```

## Post Log Info

```json
{
    "id": "Number / Log ID",
    "pid": "String / Parent post ID",
    "quotedPid": "String / Quoted post ID",
    "isPluginEditor": "Boolean / Is plugin editor",
    "editorUnikey": "String / Editor plugin Unikey",
    "editorUrl": "String / Editor access URL",
    "group": {
        // Belongs to group
        // Common Data Structure -> Group Info
    },
    "title": "String / Post title",
    "content": "String / Post content or brief",
    "contentLength": "Number / Total content length",
    "isBrief": "Boolean / Is brief",
    "isMarkdown": "Boolean / Is MD format",
    "isAnonymous": "Boolean / Is anonymous",
    "isComment": "Boolean / Is commentable",
    "isCommentPublic": "Boolean / Are comments public (if not, only post author can see)",
    "mapJson": {
        "mapId": "Number / Latitude and longitude map number",
        "latitude": "String / Latitude",
        "longitude": "String / Longitude",
        "scale": "String / Map scale",
        "continent": "String / Continent name",
        "continentCode": "String / Continent code",
        "country": "String / Country name",
        "countryCode": "String / Country code",
        "region": "String / Region name",
        "regionCode": "String / Region code",
        "city": "String / City name",
        "cityCode": "String / City code",
        "district": "String / District name",
        "address": "String / Address",
        "zip": "String / Zip code",
        "poi": "String / POI information",
        "poiId": "String / POI ID"
    },
    "allowJson": {
        "isAllow": "Boolean / Is permission configuration allowed",
        "proportion": "Number / Pre-read percentage when unauthorized",
        "pluginUrl": "String / Configuration plugin URL",
        "pluginUnikey": "String / Configuration plugin unikey",
        "defaultLangBtnName": "String / Button text when unauthorized",
        "btnName": [
            // Button text when unauthorized, multilingual configuration
        ],
        "permissions": {
            "users": [
                {
                    // Pre-authorized users
                    // Common Data Structure -> User Info
                }
            ],
            "roles": [
                // Pre-authorized roles
                {
                    "rid": "Number / Role ID",
                    "nicknameColor": "String / Nickname color",
                    "name": "String / Role name",
                    "nameDisplay": "Boolean / Is role name displayed",
                    "icon": "String / Role icon URL",
                    "iconDisplay": "Boolean / Is role icon displayed",
                    "status": "Boolean / Is role valid"
                }
            ]
        },
    },
    "userListJson": {
        "isUserList": "Boolean / Is there a related user list",
        "defaultLangUserListName": "String / User list name",
        "userListName": [
            // User list name, multilingual configuration
        ],
        "pluginUrl": "String / Configuration plugin URL",
        "pluginUnikey": "String / Configuration plugin unikey",
    },
    "commentBtnJson": {
        "isCommentBtn": "Boolean / Is there a button for comments",
        "defaultLangBtnName": "String / Button text",
        "btnName": [
            // Button text, multilingual configuration
        ],
        "btnStyle": "String / Button style",
        "pluginUrl": "String / Configuration plugin URL",
        "pluginUnikey": "String / Configuration plugin unikey",
    },
    "state": "Number / Status",
    "reason": "String / Rejection reason during review",
    "creator": {
        // Common Data Structure -> User Info
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
    "archives": [
        // Common Data Structure -> Extend Archive Info
    ],
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
    "extends": {
        // Common Data Structure -> Extend Content Info
    }
}
```

## Comment Log Info

```json
{
    "id": "Number / Log ID",
    "cid": "String / Belongs to comment ID",
    "pid": "String / Commented post ID",
    "parentCid": "String / Replied comment ID",
    "isPluginEditor": "Boolean / Is plugin editor",
    "editorUnikey": "String / Editor plugin Unikey",
    "editorUrl": "String / Editor access URL",
    "content": "String / Post content or brief",
    "contentLength": "Number / Total content length",
    "isBrief": "Boolean / Is brief",
    "isMarkdown": "Boolean / Is MD format",
    "isAnonymous": "Boolean / Is anonymous",
    "mapJson": {
        "mapId": "Number / Latitude and longitude map number",
        "latitude": "String / Latitude",
        "longitude": "String / Longitude",
        "scale": "String / Map scale",
        "continent": "String / Continent name",
        "continentCode": "String / Continent code",
        "country": "String / Country name",
        "countryCode": "String / Country code",
        "region": "String / Region name",
        "regionCode": "String / Region code",
        "city": "String / City name",
        "cityCode": "String / City code",
        "district": "String / District name",
        "address": "String / Address",
        "zip": "String / Zip code",
        "poi": "String / POI information",
        "poiId": "String / POI ID"
    },
    "state": "Number / Status",
    "reason": "String / Rejection reason during review",
    "creator": {
        // Common Data Structure -> User Info
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
    "archives": [
        // Common Data Structure -> Extend Archive Info
    ],
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
    "extends": {
        // Common Data Structure -> Extend Content Info
    }
}
```

## File Info

```json
{
    "fid": "String / File fid",
    "type": "Number / File type number 1.Image 2.Video 3.Audio 4.Document",
    "status": "Boolean / Is valid",
    "substitutionImageUrl": "String / Invalid file prompt image",
    "sensitive": "Boolean / Is sensitive file",
    "name": "String / Complete original name",
    "mime": "String / File MIME type",
    "extension": "String / File extension",
    "size": "String / Size",
    "md5": "String / File md5 encoding",
    "sha": "String / File sha encoding",
    "shaType": "String / File sha type",
    "moreJson": {
        // files->more_json
    },
    // Image Parameters
    "imageWidth": "Number / Image width",
    "imageHeight": "Number / Image height",
    "imageLong": "Boolean / Is long image",
    "imageConfigUrl": "String / Configuration purpose image URL",
    "imageRatioUrl": "String / Proportional thumbnail URL",
    "imageSquareUrl": "String / Square thumbnail URL",
    "imageBigUrl": "String / Compressed original image URL",
    // Video Parameters
    "videoTime": "Number / Video duration",
    "videoPosterUrl": "String / Video cover image URL",
    "videoUrl": "String / Video URL",
    // Audio Parameters
    "audioTime": "Number / Audio duration",
    "audioUrl": "String / Audio URL",
    // Document Parameters
    "documentPreviewUrl": "String / Document preview URL",
    // Audio and Video Parameter
    "transcodingState": "Number / Audio and video transcoding status 1.Pending 2.Transcoding 3.Transcoding complete 4.Transcoding failed"
}
```

## Extend Archive Info

```json
{
    "code": "String / Identifier code",
    "name": "String / Name",
    "description": "String / Description",
    "value": "String / Parameter value",
}
```

- Reference: [archives](../database/extends/archives.md)

## Extend Operation Info

```json
{
    "customizes": [
        {
            "code": "String / Identifier code",
            "style": "String / Style primary, secondary, success, danger, warning, info",
            "name": "String / Name",
            "description": "String / Description",
            "imageUrl": "String / Image",
            "imageActiveUrl": "String / Two-state image",
            "displayType": "Number / Display type 1.Basic 2.Function (plugin)",
            "pluginUrl": "String / Dedicated for display type 2, plugin access URL",
        }
    ],
    "buttonIcons": [
        {
            // Same as above
        }
    ],
    "diversifyImages": [
        {
            // Same as above
        }
    ],
    "tips": [
        {
            // Same as above
        }
    ]
}
```

- Reference: [operations](../database/extends/operations.md#code-用途编码)

## Extend Content Info

```json
{
    "textBox": [
        {
            "eid": "String / Extension content ID",
            "type": "Number / Type 1.Text box 2.Info box 3.Interaction box",
            "textContent": "String / Text box specific - content",
            "textIsMarkdown": "Boolean / Text box specific - Is content MD format",
            "infoType": "Number / Info box specific - Type number",
            "infoTypeString": "String / Info box specific - Type string",
            "cover": "String / Info box specific - Cover image",
            "title": "String / Info box specific - Title",
            "titleColor": "String / Info box specific - Title color",
            "descPrimary": "String / Info box specific - Primary sub-information",
            "descPrimaryColor": "String / Info box specific - Primary sub-information color",
            "descSecondary": "String / Info box specific - Secondary sub-information",
            "descSecondaryColor": "String / Info box specific - Secondary sub-information color",
            "buttonName": "String / Info box specific - Button name",
            "buttonColor": "String / Info box specific - Button name color",
            "position": "Number / Display position 1.Top 2.Bottom",
            "accessUrl": "String / Access URL",
            "moreJson": {
                // Custom information
            },
        }
    ],
    "infoBox": [
        {
            // Same as above
        }
    ],
    "interactionBox": [
        {
            // Same as above
        }
    ],
}
```

## Extend Function Info

```json
{
    "unikey": "String / Plugin Unikey",
    "name": "String / Extension name",
    "icon": "String / Extension icon URL",
    "url": "String / Extension access URL",
    "badgeType": "Number / Extension prompt type null.None 1.Red dot 2.Text 3.Number",
    "badgeValue": "String / Extension prompt value, text or number",
    "editorToolbar": "Boolean / Editor specific, whether to display in toolbar",
    "editorNumber": "Number / Editor specific, available number",
    "pluginRating": {
        "postByAll": [
            {
                "id": "Number / List interface pluginRatingId parameter purpose value",
                "title": "String / Parameter title",
                "description": "String / Parameter description"
            }
        ],
        "postByFollow": [
            {
                "id": "Number / List interface pluginRatingId parameter purpose value",
                "title": "String / Parameter title",
                "description": "String / Parameter description"
            }
        ],
        "postByNearby": [
            {
                "id": "Number / List interface pluginRatingId parameter purpose value",
                "title": "String / Parameter title",
                "description": "String / Parameter description"
            }
        ]
    }
}
```
