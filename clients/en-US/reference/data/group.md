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
    "privacy": "String / public (Anyone can see who's in the group and what they post.) or private (Only members can see who's in the group and what they post.)",
    "privateEndAfter": "Number / After private mode expires 1.No restrictions 2.All group content is invisible 3.Content before expiration is visible, new content is not visible",
    "visibility": "String / visible (Anyone can find this group.) or hidden (Only members can find this group.)",
    "parentGid": "String / Parent group ID",
    "parentInfo": {
        "gid": "String / Parent group ID",
        "url": "String / Parent group detail page URL",
        "name": "String / Parent group name",
        "description": "String / Parent group introduction",
        "cover": "String / Parent group cover image",
        "banner": "String / Parent group banner image"
    },
    "subgroupCount": "Number / Total number of subgroup",
    "viewCount": "Number / View Count",
    "likeCount": "Number / Total number of likes",
    "dislikeCount": "Number / Total number of dislikes",
    "followCount": "Number / Total number of follows",
    "blockCount": "Number / Total number of blocks",
    "postCount": "Number / Total number of posts",
    "postDigestCount": "Number / Total number of digest posts",
    "commentCount": "Number / Total number of comments",
    "commentDigestCount": "Number / Total number of digest comments",
    "createdDatetime": "String / Group creation datetime",
    "createdTimeAgo": "String / Human-readable Time",
    "lastPublishPostDateTime": "String / Last post publishing time",
    "lastPublishPostTimeAgo": "String / Human-readable Time",
    "lastPublishCommentDateTime": "String / Last comment time",
    "lastPublishCommentTimeAgo": "String / Human-readable Time",
    "moreInfo": {
        // Data Table groups->more_info
    },
    "canViewContent": "Boolean / Whether the user has permission to view content",
    "publishRule": {
        "canPublish": "Boolean / Open for publication, no means no one has the right to publish",
        "allowPost": "Boolean / Whether the user has permission to post",
        "reviewPost": "Boolean / Whether posts need to be reviewed",
        "allowComment": "Boolean / Whether the user has permission to comment",
        "reviewComment": "Boolean / Whether comments need to be reviewed"
    },
    "archives": [
        // Common Data Structure -> Extend Archive Info
    ],
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
    "interaction": {
        "likeEnabled": "Boolean / Whether like is allowed",
        "likeName": "String / Custom Like Action Name",
        "likeUserTitle": "String / User title for like interactive",
        "likePublicRecord": "Boolean / Whether the records is public",
        "likePublicCount": "Boolean / Whether the count is public",
        "dislikeEnabled": "Boolean / Whether dislike is allowed",
        "dislikeName": "String / Custom Dislike Action Name",
        "dislikeUserTitle": "String / User title for dislike interactive",
        "dislikePublicRecord": "Boolean / Whether the records is public",
        "dislikePublicCount": "Boolean / Whether the count is public",
        "followEnabled": "Boolean / Whether follow is allowed",
        "followName": "String / Custom Follow Action Name",
        "followUserTitle": "String / User title for follow interactive",
        "followPublicRecord": "Boolean / Whether the records is public",
        "followPublicCount": "Boolean / Whether the count is public",
        "blockEnabled": "Boolean / Whether block is allowed",
        "blockName": "String / Custom Block Action Name",
        "blockUserTitle": "String / User title for block interactive",
        "blockPublicRecord": "Boolean / Whether the records is public",
        "blockPublicCount": "Boolean / Whether the count is public",
        "likeStatus": "Boolean / Like Status",
        "dislikeStatus": "Boolean / Dislike Status",
        "followStatus": "Boolean / Follow Status",
        "blockStatus": "Boolean / Block Status",
        "note": "String / My interaction note (follow or block)",
        "followType": "Number / Follow method 1.Native method 2.App method 3.close",
        "followUrl": "String / Follow method 2 specific, follow app page URL",
        "followExpired": "Boolean / Whether expired, always false for public group",
        "followExpiryDateTime": "String / Expiry Date Time"
    }
}
```
