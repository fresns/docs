---
aside: false
---

# Group Info

```json
{
    "gid": "String / Group ID",
    "url": "String / Group detail page URL",
    "name": "String / Group name",
    "description": "String / Group introduction",
    "cover": "String / Group cover image",
    "banner": "String / Group banner image",
    "recommend": "Boolean / Whether it is a recommended group",
    "mode": "Number / Group mode 1.Public 2.Non-public",
    "modeEndAfter": "Number / After non-public mode expires 1.No restrictions 2.All group content is invisible 3.Content before expiration is visible, new content is not visible",
    "find": "Number / Whether it can be discovered (whether it is displayed) 1.Discoverable 2.Not discoverable",
    "followType": "Number / Follow method 1.Native method 2.App method 3.close",
    "followUrl": "String / Follow method 2 specific, follow app page URL",
    "parentGid": "String / Parent group ID",
    "parentInfo": {
        "gid": "String / Parent group ID",
        "name": "String / Parent group name",
        "description": "String / Parent group introduction",
        "cover": "String / Parent group cover image",
        "banner": "String / Parent group banner image"
    },
    "subgroupCount": "Number / Total number of subgroup",
    "likeCount": "Number / Total number of likes",
    "dislikeCount": "Number / Total number of dislikes",
    "followCount": "Number / Total number of follows",
    "blockCount": "Number / Total number of blocks",
    "postCount": "Number / Total number of posts",
    "postDigestCount": "Number / Total number of digest posts",
    "commentCount": "Number / Total number of comments",
    "commentDigestCount": "Number / Total number of digest comments",
    "createdDatetime": "String / Group creation datetime",
    "canViewContent": "Boolean / Whether the user has permission to view content",
    "publishRule": {
        "canPublish": "Boolean / Open for publication, no means no one has the right to publish",
        "allowPost": "Boolean / Whether the user has permission to post",
        "reviewPost": "Boolean / Whether posts need to be reviewed",
        "allowComment": "Boolean / Whether the user has permission to comment",
        "reviewComment": "Boolean / Whether comments need to be reviewed"
    },
    "permissions": {
        // Custom group configuration parameters
        // Data Table: groups->permissions
    },
    "moreInfo": {
        // Data Table groups->more_info
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
    "creator": {
        // Common Data Structure -> User Info
    },
    "admins": [
        {
            // Group admin list
            // Common Data Structure -> User Info
        }
    ],
    "interaction": {
        "likeSetting": "Boolean / Whether like is allowed",
        "likeName": "String / Custom Like Action Name",
        "dislikeSetting": "Boolean / Whether dislike is allowed",
        "dislikeName": "String / Custom Dislike Action Name",
        "followSetting": "Boolean / Whether follow is allowed",
        "followName": "String / Custom Follow Action Name",
        "blockSetting": "Boolean / Whether block is allowed",
        "blockName": "String / Custom Block Action Name",
        "likeStatus": "Boolean / Like Status",
        "dislikeStatus": "Boolean / Dislike Status",
        "followStatus": "Boolean / Follow Status",
        "followExpired": "Boolean / Whether expired, always false for public groups",
        "followExpiryDateTime": "String / Expiry Date Time",
        "blockStatus": "Boolean / Block Status",
        "note": "String / My interaction note (follow or block)"
    }
}
```
