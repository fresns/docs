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
    "likeCount": "Number / Total Like Count",
    "dislikeCount": "Number / Total Dislike Count",
    "followCount": "Number / Total Follow Count",
    "blockCount": "Number / Total Block Count",
    "postCount": "Number / Total Post Count",
    "postDigestCount": "Number / Total Digest Post Count",
    "commentCount": "Number / Total Comment Count",
    "commentDigestCount": "Number / Total Digest Comment Count",
    "createdDatetime": "String / Hashtag Creation Datetime",
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
        "dislikeEnabled": "Boolean / Whether dislike is allowed",
        "dislikeName": "String / Custom Dislike Action Name",
        "followEnabled": "Boolean / Whether follow is allowed",
        "followName": "String / Custom Follow Action Name",
        "blockEnabled": "Boolean / Whether block is allowed",
        "blockName": "String / Custom Block Action Name",
        "likeStatus": "Boolean / Like Status",
        "dislikeStatus": "Boolean / Dislike Status",
        "followStatus": "Boolean / Follow Status",
        "blockStatus": "Boolean / Block Status",
        "note": "String / My interaction note (follow or block)"
    }
}
```
