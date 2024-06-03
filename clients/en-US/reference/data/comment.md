---
aside: false
---

# Comment Info

```json
{
    "cid": "String / Comment ID",
    "url": "String / Comment details page URL",
    "privacy": "String / public or private (visible only to the author of the comment and the author of the post)",
    "content": "String / Comment content or summary",
    "contentLength": "Number / Total content length",
    "langTag": "String / Content language tag",
    "writingDirection": "String / Content writing direction",
    "isBrief": "Boolean / Whether it's a summary",
    "isMarkdown": "Boolean / Whether it's in MD format",
    "isAnonymous": "Boolean / Whether it's anonymous",
    "isSticky": "Boolean / Whether it's sticky",
    "digestState": "Number / Digest state 1: No, 2: General Digest, 3: Premium Digest",
    "viewCount": "Number / Total View Count",
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
    "createdTimeAgo": "String / Human-friendly time",
    "editedDatetime": "String / Comment last edit time",
    "editedTimeAgo": "String / Human-friendly time",
    "editedCount": "Number / Number of edits",
    "lastCommentDatetime": "String / Last child comment time",
    "lastCommentTimeAgo": "String / Human-friendly time",
    "rankState": "Number / Rank State",
    "status": "Boolean / Comment Status",
    "moreInfo": {
        // Data Table: comments->more_info
        // The following keys are known
        "ipLocation": "String / Author IP Location Name",
        "deviceName": "String / Author Device Name"
    },
    "activeButton": {
        // Link to post commentConfig.action, replace this configuration
        "hasActiveButton": "Boolean / Whether a button is active or not",
        "name": "String / Button name",
        "style": "String / Button style (primary, secondary, success, danger, warning, info)",
        "appUrl": "String / Configuration app URL"
    },
    "archives": [
        // Common Data Structure -> Extend Archive Info
    ],
    "operations": {
        // Common Data Structure -> Extend Operation Info
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
    "extends": {
        "texts": [
            {
                // Common Data Structure -> Extend Content Info -> texts
            }
        ],
        "infos": [
            {
                // Common Data Structure -> Extend Content Info -> infos
            }
        ],
        "actions": [
            {
                // Common Data Structure -> Extend Content Info -> actions
            }
        ]
    },
    "hashtags": [
        {
            // Comment Related Hashtags
            // Common Data Structure -> Hashtag Info
        }
    ],
    "geotag": {
        // Common Data Structure -> Geotag Info
    },
    "author": {
        // Comment author
        // Common Data Structure -> User Info
        "isPostAuthor": "Boolean / Is the author of the post"
    },
    "previewLikeUsers": [
        {
            // Common Data Structure -> User Info
        }
    ],
    "previewComments": [
        {
            // Sub-Commons Preview
            // Common Data Structure -> Comment Info
        }
    ],
    "interaction": {
        "likeEnabled": "Boolean / Whether like is allowed",
        "likeName": "String / Custom like action name",
        "likeUserTitle": "String / User title for like interactive",
        "likePublicRecord": "Boolean / Whether the records is public",
        "likePublicCount": "Boolean / Whether the count is public",
        "dislikeEnabled": "Boolean / Whether dislike is allowed",
        "dislikeName": "String / Custom dislike action name",
        "dislikeUserTitle": "String / User title for dislike interactive",
        "dislikePublicRecord": "Boolean / Whether the records is public",
        "dislikePublicCount": "Boolean / Whether the count is public",
        "followEnabled": "Boolean / Whether following is allowed",
        "followName": "String / Custom follow action name",
        "followUserTitle": "String / User title for follow interactive",
        "followPublicRecord": "Boolean / Whether the records is public",
        "followPublicCount": "Boolean / Whether the count is public",
        "blockEnabled": "Boolean / Whether block is allowed",
        "blockName": "String / Custom block action name",
        "blockUserTitle": "String / User title for block interactive",
        "blockPublicRecord": "Boolean / Whether the records is public",
        "blockPublicCount": "Boolean / Whether the count is public",
        "likeStatus": "Boolean / Like status",
        "dislikeStatus": "Boolean / Dislike status",
        "followStatus": "Boolean / Follow status",
        "blockStatus": "Boolean / Block status",
        "note": "String / My interaction note (follow or block)",
        "postAuthorLikeStatus": "Boolean / Whether the post author liked this comment"
    },
    "followType": "String / For use in timeline list only, indicating from which follow: null, user, group, hashtag, geotag, digest",
    "replyToPost": {
        // Information about the post this comment belongs to,
        // if it's a sub-comment list, only the pid parameter is available
        // Common Data Structure -> Post Info
    },
    "replyToComment": {
        // The parent comment of the current comment
        // Common Data Structure -> Comment Info
    },
    "controls": {
        "isAuthor": "Boolean / Whether I am the author",
        "canEdit": "Boolean / Whether editing is allowed",
        "canDelete": "Boolean / Whether deletion is allowed"
    },
    "manages": [
        // Common Management Extension
        // Common Data Structure -> Extend Function Info
    ]
}
```

## History Comment Info

```json
{
    "hcid": "String / History Comment ID",
    "cid": "String / Belongs to comment ID",
    "privacy": "String / public or private (visible only to the author of the comment and the author of the post)",
    "content": "String / Comment content or summary",
    "contentLength": "Number / Total content length",
    "langTag": "String / Content language tag",
    "writingDirection": "String / Content writing direction",
    "isBrief": "Boolean / Whether it's a summary",
    "isMarkdown": "Boolean / Whether it's in MD format",
    "isAnonymous": "Boolean / Whether it's anonymous",
    "createdDatetime": "String / Comment creation time",
    "createdTimeAgo": "String / Human-friendly time",
    "status": "Boolean / Comment Status",
    "locationInfo": {
        // Location Info
    },
    "moreInfo": {
        // Data Table: comments->more_info
    },
    "archives": [
        // Common Data Structure -> Extend Archive Info
    ],
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
    "extends": {
        "texts": [
            {
                // Common Data Structure -> Extend Content Info -> texts
            }
        ],
        "infos": [
            {
                // Common Data Structure -> Extend Content Info -> infos
            }
        ],
        "actions": [
            {
                // Common Data Structure -> Extend Content Info -> actions
            }
        ]
    },
    "author": {
        // Comment author
        // Common Data Structure -> User Info
    }
}
```
