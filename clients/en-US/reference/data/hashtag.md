---
aside: false
---

# Hashtag Info

```json
{
    "htid": "String / Hashtag ID",
    "url": "String / Hashtag Detail Page URL",
    "name": "String / Hashtag Name",
    "cover": "String / Hashtag Cover Image",
    "description": "String / Hashtag Description",
    "viewCount": "Number / View Count",
    "likeCount": "Number / Total Like Count",
    "dislikeCount": "Number / Total Dislike Count",
    "followCount": "Number / Total Follow Count",
    "blockCount": "Number / Total Block Count",
    "postCount": "Number / Total Post Count",
    "postDigestCount": "Number / Total Digest Post Count",
    "commentCount": "Number / Total Comment Count",
    "commentDigestCount": "Number / Total Digest Comment Count",
    "createdDatetime": "String / Hashtag Creation Datetime",
    "createdTimeAgo": "String / Human-readable Time",
    "lastPublishPostDateTime": "String / Last post publishing time",
    "lastPublishPostTimeAgo": "String / Human-readable Time",
    "lastPublishCommentDateTime": "String / Last comment time",
    "lastPublishCommentTimeAgo": "String / Human-readable Time",
    "moreInfo": {
        // Data Table hashtags->more_info
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
        "note": "String / My interaction note (follow or block)"
    }
}
```
